import jwt from "jsonwebtoken"
import expressAsyncHandler from "express-async-handler"
import User from "../models/userModel.js"

//Middleware func that verifies the generated token.

const protect = expressAsyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1] //splits the bearer and the token.

      const decoded = jwt.verify(token, process.env.JWT_SECRET) // decoded the token and returns user id, issue date, exp date.
      req.user = await User.findById(decoded.id).select("-password") // Takes password out of the route.
      //   console.log(decoded)

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error("Not Authorized, token failed")
    }
  }

  if (!token) {
    res.status(401)
    throw new Error("Not authorized, No token")
  }
})

export { protect }
