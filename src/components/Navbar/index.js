import React , {useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({isOpen , setIsOpen}) => {
  
  return (
    <>
      <Nav>
        <NavbarContainer >
          <NavLogo to="/">NaamHouse</NavLogo>
          <MobileIcon>
            <FaBars  onClick={()=>setIsOpen(!isOpen)}/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/apply">Apply</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/events">Events</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about us">About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/get involved">Get Involved</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;