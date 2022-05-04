import React from 'react'
import { Button. Row, Col, ListGroup, Image, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from '../components/Message'
import CheckoutSteps from "../components/CheckoutSteps"

const PlaceOrderScreen = () => {
  const cart = useSelector(state => state.cart)

    return (
    <>
        <CheckoutSteps step1 step2 step3 step4 />
        <Row>
            <Col md={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h4>Shipping</h4>
                        <p>
                            <strong>Address:</strong>
                            {cart.shippingAddress.address}
                        </p>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </>
  )
}

export default PlaceOrderScreen