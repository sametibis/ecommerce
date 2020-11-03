import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>ibiShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart'>
                {' '}
                <i className='fas fa-shopping-cart'></i> CART
              </Nav.Link>

              <Nav.Link href='/login'>
                <i className='fas fa-user'></i> LOGIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
