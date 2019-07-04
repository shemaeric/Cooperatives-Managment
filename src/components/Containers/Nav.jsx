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
          <NavbarBrand className="btn btn-outline-primary font-weight-bolder pl-4 text-uppercase">Cooperative</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <button className="btn btn-success signup-btn">{text1}</button>
              <NavItem>
                <button className="btn btn-outline-primary login-btn">{text2}</button>
              </NavItem>
            </Nav>
        </Navbar>
  );
}