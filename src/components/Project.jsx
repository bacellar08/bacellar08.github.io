import { GitHub, Launch } from '@mui/icons-material'
import { useEffect } from 'react';
import '../styles/project.css'

const Project = (p) => {

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const threshold = windowHeight * 0.5; // Trigger animation when element is halfway in view

        if (rect.top <= threshold && rect.bottom >= threshold) {
          element.classList.add('visible');
        }
      }
    }

    window.addEventListener('scroll', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);


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