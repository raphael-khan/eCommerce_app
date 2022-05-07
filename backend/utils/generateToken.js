import jwt from "jsonwebtoken"

// Generates a JWT token and assigns a payload to it along with the signature / secret

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  })
}

export default generateToken
