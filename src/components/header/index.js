import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

const NavItem = (item, key) => <Link key={key} to={item.url}>{item.name}</Link>

const Header = (props) => (
  <Navbar bg="default" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {props.items.map((item,key) => NavItem(item,key))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>                                                                                                                                                                                                                                                                                                                                             
)

export default Header