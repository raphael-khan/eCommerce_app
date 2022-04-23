import express from "express"
import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js"

const router = express.Router()

//@desc   Fetch all products
//@route  GET /api/products
//@access  Public.
//@asyncHandler helps catch errors without the Try block.
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({}) // Passing an empty object to get everything. Mongoose method returns a promise.
    res.json(products)
  })
)

//@desc   Fetch single product.
//@route  GET /api/product/:id
//@access  Public.
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id) // Mongoose method to find by ID. Params gives whatever ID is in the url.
    if (product) {
      res.send(product)
    } else {
      res.status(404).json({ message: "Product not found" })
    }
  })
)

export default router
