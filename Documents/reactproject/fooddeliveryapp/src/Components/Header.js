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
      <Navbar className="bg-dark "  expand="md">
        <NavbarBrand href="/" className="offset-1 text-light fs-1 text">Ss-Foods</NavbarBrand>
        <NavbarToggler  onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="offset-3" navbar>
            <NavItem className="px-3" >
              <NavLink href="/" className="text-light fs-4 text"><i class="fa fa-home"></i>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="text-light fs-4 text px-3">About</NavLink>
            </NavItem>
            <NavItem>
               <NavLink className="text-light fs-4 text px-3">Contact</NavLink>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;