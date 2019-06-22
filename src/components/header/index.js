import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import './index.css'

const NavItem = (item, key) => <Link key={key} className="nav-link" to={item.url}>{item.name}</Link>

const Header = (props) => props.isLoggedIn && (
  <Navbar bg="defaut" expand="lg" className="bg-gray-soft">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {props.items.map((item,key) => NavItem(item,key))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>                                                                                                                                                                                                                                                                                                                                             
)

export default connect(
  state => ({ isLoggedIn: state.user.isLoggedIn })
)(Header)