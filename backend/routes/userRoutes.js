import express from "express"
import { route } from "express/lib/application"
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").post(registerUser)

router.post("/login", authUser)

//@desc User profile route.
//@access Private.
router.route("/profile").get(protect, getUserProfile)

export default router
