import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './Navbar.css'
import logo from './../../assets/logo/ingeina-logo.png'

const Navigation = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar
      expand="lg"
      className="navigation"
      data-bs-theme="dark"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container className="navigation__container">
        <Navbar.Brand className="navigation__brand">
          <NavLink
            to="/"
            className="navigation__logo-link"
            onClick={() => setExpanded(false)}
          >
            <img
              src={logo}
              alt="Ingeina Logo"
              className="navigation__logo-img"
            />
          </NavLink>
          <h4 className="navigation__title">Ingeina</h4>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="navigation__links">
            <Nav.Link
              as={NavLink}
              to="/"
              className="navigation__link"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/projects"
              className="navigation__link"
              onClick={() => setExpanded(false)}
            >
              Projects
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/alumni"
              className="navigation__link"
              onClick={() => setExpanded(false)}
            >
              Discover Alumni
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              className="navigation__link"
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation