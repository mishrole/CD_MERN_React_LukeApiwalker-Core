import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/CD_MERN_React_LukeApiwalker-Core/home">
        Luke APIwalker
        </Link>
        <Nav className="me-auto">
          <Link className="nav-link" to="/CD_MERN_React_LukeApiwalker-Core/home">Home</Link>
          {/* <Link className="nav-link" to="/hello">Hello</Link>
          <Link className="nav-link" to="/hello/blue/red">Hello Blue Red</Link>
          <Link className="nav-link" to="/4">4</Link> */}
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Header