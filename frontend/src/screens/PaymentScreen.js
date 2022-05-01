import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import FormContainer from "../components/FormContainer"
import { savePaymentMethod } from "../actions/cartActions"
import CheckoutSteps from "../components/CheckoutSteps"

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const navigate = useNavigate()

  if (!shippingAddress) {
    navigate("/shipping")
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal")

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate("/placeorder")
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h4>Payment Method</h4>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method:</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <i class='fa-brands fa-cc-paypal'></i>
            <i class='fa-brands fa-cc-visa'></i>
            <i class='fa-brands fa-cc-mastercard'></i>
            <Form.Check
              type='radio'
              label='Stripe'
              id='stripe'
              name='paymentMethod'
              value='stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <i class='fa-brands fa-cc-stripe'></i>
          </Col>
        </Form.Group>
        <br></br>
        <Button type='submit' variant='warning'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
