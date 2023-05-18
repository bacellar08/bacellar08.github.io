import { useEffect, useState } from 'react';
import '../styles/nav.css';
import NavLogo from '../img/logo-02-01.png'
import Resume from './Resume';


const Nav = (props) => {
  const [showNav, setShowNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNav(currentScrollPos < prevScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos])


  function scrollToSection(id) {
    console.log(id)

    const section = document.getElementById(id)

    section.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
  }
  

  return (
    <div className={`navbar${showNav ? ' show' : ' hide'}`}>
      <img className='logo' src={NavLogo} alt='my-brand'/>

      <div className='topics'>
        <li  onClick={() => scrollToSection(props.item1)}>
          <span>01. </span>About
        </li>
        <li  onClick={() => scrollToSection(props.item2)}>
          <span>02. </span>Experience
        </li>
        <li  onClick={() => scrollToSection(props.item3)}>
          <span>03. </span>Work
        </li>
        <li  onClick={() => scrollToSection(props.item4)}>
          <span>04. </span>Contact
        </li>
        <Resume/>
      </div>

    </div>
  );
};

export default Nav;
