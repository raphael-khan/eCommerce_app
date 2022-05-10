import React, { useState, useEffect } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { getUserDetails } from "../actions/userActions"
import { useNavigate } from "react-router-dom"

const ProfileScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState(null)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      navigate("/login")
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [navigate, userInfo, dispatch, user.name, user.email])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage("Passwords do not match")
    } else {
      // DISPATCH UPDATE PROFILE
    }
  }

  return (
    <Row>
      <Col md={3}>
        <h4> User Profile</h4>
        {message && <Message variant='warning'>{message}</Message>}
        {error && <Message variant='warning'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name.'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email Address:</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email.'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label> Password:</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter your password.'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label> Confirm Password:</Form.Label>
            <Form.Control
              type='Password'
              placeholder='Please enter your password again.'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <br></br>
          <Button type='submit' variant='success'>
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h4>My Orders</h4>
      </Col>
    </Row>
  )
}

export default ProfileScreen
