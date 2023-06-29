import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const NavStyle = styled.nav`
  display: none;

  @media (max-width: 768px) {
    
    display: flex;
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    justify-content: space-between;

    .logo {
      padding: 15px 0;
    }
  }
`

const Navbar = () => {
  return (
    <NavStyle>
      <Burger />
    </NavStyle>
  )
}

export default Navbar