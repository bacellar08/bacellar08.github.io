import { useEffect, useState } from 'react';
import '../styles/nav.css';
import NavLogo from '../img/logo-02-01.png'

const Nav = () => {
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
  }, [prevScrollPos]);

  return (
    <div className={`navbar${showNav ? ' show' : ' hide'}`}>
      <img className='logo' src={NavLogo} alt='my-brand'/>

      <div className='topics'>
        <li>
          <span>01. </span>About
        </li>
        <li>
          <span>02. </span>Experience
        </li>
        <li>
          <span>03. </span>Work
        </li>
        <li>
          <span>04. </span>Contact
        </li>
        <button className='btn'>Resume</button>
      </div>
    </div>
  );
};

export default Nav;
