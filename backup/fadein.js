import { useEffect, useRef } from 'react';
import About from './components/About';
import Introduction from './components/Introduction';
import Nav from './components/Nav';
import Social from './components/Social';
import Work from './components/Work';
import './styles/FadeInOnScroll.css';

const isVisible = (element) => {
  const { top, bottom } = element.getBoundingClientRect();
  const vHeight = window.innerHeight || document.documentElement.clientHeight;
  return (top > 0 || bottom > 0) && top < vHeight;
};

const App = () => {
  const aboutRef = useRef(null);
  const workRef = useRef(null);

  useEffect(() => {
    const aboutRefCurrent = aboutRef.current;
    const workRefCurrent = workRef.current;

    const handleScroll = () => {
      if (aboutRefCurrent && isVisible(aboutRefCurrent)) {
        aboutRefCurrent.classList.add('visible');
      }

      if (workRefCurrent && isVisible(workRefCurrent)) {
        workRefCurrent.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ background: '#0A192F', height: '100vh' }}>
      <Social />
      <Nav />
      <Introduction />
      <About ref={aboutRef} className="fade-in" />
      <Work ref={workRef} className="fade-in" />
    </div>
  );
};

export default App;
