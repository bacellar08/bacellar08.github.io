import { ArrowRight } from '@mui/icons-material';
import '../styles/about.css';
import ProfilePic from '../img/profilepic.jpeg';
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const threshold = windowHeight * 0.5;
    
        if (rect.top <= threshold && rect.bottom >= threshold) {
          element.classList.add('visible');
        }
      });
    }

    window.addEventListener('scroll', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div className='about-container container fade-in' id='about'>
        <div className="about-info">
        <div className="about-title title-box">
            <span style={{fontFamily: 'var(--font-mono)', fontWeight: '200', fontSize: '1.2rem'}}>01. </span>
            <h2>About me</h2>
            <hr/>
        </div>
        <p>My journey began in <span>graphic design</span>, and since then, I have
          combined my experience with enhancing my skills as a <span>programmer</span>,
          focusing especially on <span>React</span> to create scalable and efficient state
          management applications. I use libraries such as <span>Tailwind CSS</span> and <span>Material UI</span> to build responsive interfaces. I am proficient in Node.js and both relational and non-relational databases. My primary
          development stack is <span>MERN (MongoDB, Express, React, Node).</span> Currently, I am delving into the use of <span>Next.js</span> and integrating <span>TypeScript</span> to ensure safer code.
          Additionally, I have knowledge in mobile development with <span>React
          Native</span> and experience with WordPress. I am fluent in English and
          am always seeking opportunities to expand my knowledge and
          improve my skills.</p>

        <p>Here are a few technologies I’ve been working with recently:</p>
        <ul className='about-skills'>
            <div>
            <li><i><ArrowRight/></i>TypeScript</li>
            <li><i><ArrowRight/></i>Tailwind</li>
            <li><i><ArrowRight/></i>MongoDB</li>
            <li><i><ArrowRight/></i>Node</li>
            </div>
            <div>
            <li><i><ArrowRight/></i>React</li>
            <li><i><ArrowRight/></i>Next</li>
            <li><i><ArrowRight/></i>Vue</li>
            <li><i><ArrowRight/></i>SQL</li>
            </div>
        </ul>
        </div>
        <div className="about-img">
            <img className='my-img' src={ProfilePic} alt="Profile" />
            <div className='img-bg'></div>
        </div>
    </div>
  )
}

export default About
