import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="bg-dark "  expand="sm">
        <NavbarBrand href="/" className="offset-1 text-light fs-1 text  "><i class="fa fa-leaf"></i>Ss-Foods</NavbarBrand>
        <NavbarToggler  onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="offset-3" navbar>
            <NavItem className="px-3" >
              <NavLink href="/" className="text-light fs-6 text"><i class="fa fa-home">-</i>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="text-light fs-6 text px-3"><i class="fa fa-info">-</i>About</NavLink>
            </NavItem>
            <NavItem>
               <NavLink className="text-light fs-6 text px-3"><i class="fa fa-address-card">-</i>Contact</NavLink>
            </NavItem>
            <a role="button" class="text-info spadding btn btn-md b fs-5 text fw-bold" >
                <i class="fa fa-sign-in">-</i>Sign-In 
                </a>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;