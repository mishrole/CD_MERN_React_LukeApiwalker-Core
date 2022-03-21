import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/home">
        Luke APIwalker
        </Link>
        <Nav className="me-auto">
          <Link className="nav-link" to="/home">Home</Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Header