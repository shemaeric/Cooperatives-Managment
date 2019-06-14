import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

export default function NavBar({text1, text2}) {
  return (
    <Navbar light expand="md" className="navbar">
          <NavbarBrand color= "black">Cooperative</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <button className="signup-btn">{text1}</button>
              <NavItem>
                <button className="login-btn">{text2}</button>
              </NavItem>
            </Nav>
        </Navbar>
  );
}