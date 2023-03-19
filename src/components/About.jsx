import { ArrowRight } from '@mui/icons-material';
import '../styles/about.css';
import ProfilePic from '../img/profilepic.png';
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
        <p>Hello, I'm Alexandre Bacellar, a front-end developer passionate about creating amazing and interactive web interfaces. With more than <span>7 years of experience in graphic design</span>, I've <span>transitioned into a web development career</span> and have worked on various projects for companies in different sectors.</p>

        <p>I'm currently studying Systems Analysis and Development, and have skills in <span>HTML, CSS, JavaScript, React</span>, and other web development technologies. I'm always eager to improve my skills and learn new technologies.</p>

        <p>I believe that clean and intuitive design is essential to creating a memorable <span>user experience</span>. I always seek to understand users' needs and apply best web development practices to create quality products.</p>

        <p>In this portfolio, you'll find some of my previous projects and work, as well as information about my skills and professional experience. Thank you for visiting my page, and feel free to <span>contact me</span> to discuss possible projects or job opportunities.</p>

        <p>Here are a few technologies I’ve been working with recently:</p>
        <ul className='about-skills'>
            <div>
            <li><i><ArrowRight/></i>HTML5</li>
            <li><i><ArrowRight/></i>CSS3</li>
            <li><i><ArrowRight/></i>JavaScript (ES6+)</li>
            </div>
            <div>
            <li><i><ArrowRight/></i>React</li>
            <li><i><ArrowRight/></i>C#</li>
            <li><i><ArrowRight/></i>TypeScript</li>
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
