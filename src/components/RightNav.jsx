import React from 'react';
import styled from 'styled-components';
import Resume from './Resume';
import NavLogo from '../img/logo-02-01.png'

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  background-color: rgba(10, 25, 47, 0.6);
  backdrop-filter: blur(5px);
  z-index: 3;
  padding-right: 40px;

  li {
    padding: 18px 10px;
    font-family: var(--font-mono);
    font-size: 0.75rem;
  }

  .logo {
    height: 75px;
    width: 75px;
    padding: 20px 0px;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: flex-end;
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {




  function scrollToSection(id) {
    console.log(id)

    const section = document.getElementById(id)

    section.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
  }


  return (
    <Ul open={open}>
      <img className='logo' src={NavLogo} alt='my-brand'/>
      <li onClick={() => scrollToSection('about')}>
        <span>01.</span> About</li>
      <li onClick={() => scrollToSection('experience')}>
        <span>02.</span> Experience</li>
      <li onClick={() => scrollToSection('work')}>
        <span>03.</span> Work</li>
      <li onClick={() => scrollToSection('contact')}>
        <span>04.</span> Contact</li>
      <Resume />
    </Ul>
  )
}

export default RightNav