import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


const Header = () => {
  return (
    <header>
      <Navbar className='navbar-dark bg-primary' expand='lg' sticky='top'>
        <Container>
          <Navbar.Brand href="/">Wired !</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/cart">< i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              <Nav.Link href="/login">< i className='fas fa-user'></i> Sign In</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

    
  )
}

export default Header