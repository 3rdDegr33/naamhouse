import React  , {useState}from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen , setIsOpen}) => {
  
  
  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon>
        <CloseIcon onClick={()=>setIsOpen(!isOpen)} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/apply" >Apply</SidebarLink>
          <SidebarLink to="/services">Services</SidebarLink>
          <SidebarLink to="/events">Events</SidebarLink>
          <SidebarLink to="/about us">About Us</SidebarLink>
          <SidebarLink to="/get involved">Get Involved</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;