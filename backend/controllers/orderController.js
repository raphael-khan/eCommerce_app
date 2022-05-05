import asyncHandler from "express-async-handler"
import Order from "../models/orderModel.js"

//@desc   Create new order
//@route  POST /api/orders
//@access  Private
//@asyncHandler helps catch errors without the Try block.

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    addOrderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body
})
