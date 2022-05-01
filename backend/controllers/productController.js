import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js"

//@desc   Fetch all products
//@route  GET /api/products
//@access  Public.
//@asyncHandler helps catch errors without the Try block.

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}) // Passing an empty object to get everything. Mongoose method returns a promise.
  res.json(products)
})

//@desc   Fetch single product.
//@route  GET /api/product/:id
//@access  Public.

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id) // Mongoose method to find by ID. Params gives whatever ID is in the url.
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error("Product not found")
  }
})

export { getProducts, getProductById }
