import React , {useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavBtn,  NavBtnLink } from './NavbarElements';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Navbar = ({isOpen , setIsOpen}) => {
const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #323233;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fafafa;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
` 

 const NavItem = styled(Link)`
   color: #000000;
   display: flex;
   align-items: center;
   text-decoration: none;
   font-size: 1rem;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   text-decoration: none;
   
   &.active {
     border-bottom: 3px solid #01bf71;
   }
   height: 80px;
 `;
 const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px; // Possibly remove.

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
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
              <Link to="/apply">Apply</Link>
            </NavItem>
            <NavItem>
              <Link to="/services">Services</Link>
            </NavItem>
            <NavItem>
              <Link to="/events">Events</Link>
            </NavItem>
            <NavItem>
              <Link to="/about_us">About Us</Link>
            </NavItem>
            <NavItem>
              <Link to="/get_involved">Get Involved</Link>
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