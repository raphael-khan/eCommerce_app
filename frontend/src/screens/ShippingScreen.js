import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import FormContainer from "../components/FormContainer"

const ShippingScreen = () => {
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [country, setCountry] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("submit")
  }

  return (
    <FormContainer>
      <h4>Shipping</h4>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Address:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>City:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter City'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='zipCode'>
          <Form.Label>Zip Code:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Zip Code'
            value={zipCode}
            required
            onChange={(e) => setZipCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='country'>
          <Form.Label>Country:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br></br>
        <Button type='submit' variant='warning' className='btn-block mr-1'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
