import express from "express"
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").post(registerUser)

//@desc User login route.
//@access Public.
router.post("/login", authUser)

//@desc User profile route.
//@access Private.
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
