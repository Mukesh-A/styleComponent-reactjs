import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from "styled-components"

function Header() {
  return (
    <MainHeader>
      {/* // this is a component from react-router-dom when we click on this it doesnot refresh */}


      <NavLink to="/">
        <img src="./images/logo.png" alt="" className='logo' />
      </NavLink>
      <Navbar/>
    </MainHeader>

  )
}
const MainHeader = styled.header`
   padding: 0 4.8rem;
   height: 10rem;
   
   background-color: ${({theme}) => theme.colors.bg};
   display: flex;
   justify-content: space-between;
   align-items: center;

   .logo{
    height: auto;
    min-height: 10px;
    max-width: 30%;
    min-width: 10rem;
   }

`;

export default Header
