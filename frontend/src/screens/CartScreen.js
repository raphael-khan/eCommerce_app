import React, { useEffect } from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap"
import Message from "../components/Message"
import { addToCart } from "../actions/cartActions"

const CartScreen = () => {
  const params = useParams()
  const productId = params.id
  const location = useLocation()

  const qty = new URLSearchParams(location.search).get("qty")

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return <div>Cart</div>
}

export default CartScreen
