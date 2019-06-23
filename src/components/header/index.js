import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './index.css';

/**
 * Arrow function para retornar los items a renderizar como links
 * en el header
 * @param {object} item
 * @param {number} key
 */
const NavItem = (item, key) => (
  <Link key={key} className="nav-link" to={item.url}>
    {item.name}
  </Link>
);

/**
 * Function para renderizar el header
 * @param {object} props
 */
const Header = props =>
  props.isLoggedIn && (
    <Navbar bg="defaut" expand="lg" className="bg-gray-soft">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {props.items.map((item, key) => NavItem(item, key))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

Header.propTypes = {
  items: PropTypes.array.isRequired
};

export default connect(state => ({ isLoggedIn: state.user.isLoggedIn }))(
  Header
);
