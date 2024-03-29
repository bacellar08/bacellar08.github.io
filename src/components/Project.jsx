import { GitHub, Launch } from '@mui/icons-material'
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import '../styles/project.css'

const Project = (p) => {

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

  const isMobile = useMediaQuery('(max-width: 480px)')

  console.log(isMobile)


  return (
    <div className='project-container fade-in' style={{flexDirection: p.direction}}>
        <div className="img-space" style={{height: "300px", width: "450px"}}></div>
        <img className='project-img' src={p.src} alt="Example" />    
        <div className="project-info" style={{alignItems: p.alignItems}}>
            <span className='project-type'>{p.type}</span>
            <h3 className='project-title'>{p.title}</h3>
            <div className='project-description' style={{textAlign: p.textAlign}}>{p.info}</div>
            <div className="project-techs">
                {p.techs}
            </div>
            <div className='project-icons'>
            <a href={p.gitLink}><i style={{paddingTop: '20px'}}><GitHub/></i></a>
            <a href={p.link}><i><Launch/></i></a>
            </div>
        </div>
    </div>
  )
}

export default Project