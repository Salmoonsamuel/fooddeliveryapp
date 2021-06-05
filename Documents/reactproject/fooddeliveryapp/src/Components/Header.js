import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="bg-dark fixed-top"  expand="sm">
        <NavbarBrand href="/" className=" text-light fs-3 text pt-2 offset-1 "><i class="fa fa-leaf "></i> Ss-Foods</NavbarBrand>
        <NavbarToggler  onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="offset-3 pt-3 " navbar>
            <NavItem className="px-2">
              <NavLink href="/" className="text-light fs-6 text "><i class="fa fa-home">-</i>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="text-light fs-6 text" ><i class="fa fa-info">-</i>About</NavLink>
            </NavItem>
            <NavItem className="px-2">
               <NavLink className="text-light fs-6 text ">Contact</NavLink>
            </NavItem>
              <Button role="button" class="text-light  btn btn-md b fs-6 text d-flex" >
               Sign-In / <span class="text-info">Register</span>
                </Button>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;