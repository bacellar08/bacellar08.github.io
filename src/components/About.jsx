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
        <p>Passionate <span>front-end developer</span> dedicated to creating incredible and interactive web interfaces. With <span>over 7 years of experience in graphic design</span>, I transitioned to a career in web development. Currently, I am studying <span>Analysis and Systems Development</span> to enhance my skills in web development technologies. I am actively <span>seeking opportunities</span> to establish my presence in the job market as a developer, always ready to learn and grow professionally.</p>

        <p>In this portfolio, you'll find some of my previous projects and work, as well as information about my skills and professional experience. Thank you for visiting my page, and feel free to <span>contact me</span> to discuss possible projects or job opportunities.</p>

        <p>Here are a few technologies I’ve been working with recently:</p>
        <ul className='about-skills'>
            <div>
            <li><i><ArrowRight/></i>HTML5</li>
            <li><i><ArrowRight/></i>CSS</li>
            <li><i><ArrowRight/></i>JavaScript</li>
            <li><i><ArrowRight/></i>Node.js</li>
            </div>
            <div>
            <li><i><ArrowRight/></i>React</li>
            <li><i><ArrowRight/></i>Next.js</li>
            <li><i><ArrowRight/></i>TypeScript</li>
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
