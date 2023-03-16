import { GitHub } from '@mui/icons-material'
import '../styles/project.css'

const Project = (p) => {
  return (
    <div className='project-container' style={{flexDirection: p.direction}}>
        <div className="img-space" style={{height: "300px", width: "400px"}}>
        </div>
        <img className='project-img' src={p.src} alt="Example" />
        <div className="project-info" style={{alignItems: p.alignItems}}>
            <span className='project-type'>{p.type}</span>
            <h3 className='project-title'>{p.title}</h3>
            <p className='project-description'>{p.info}</p>
            <div className="project-techs">
                {p.techs}
            </div>
            <i style={{color: 'var(--title-Color)', paddingTop: '20px'}}><GitHub/></i>
        </div>
    </div>
  )
}

export default Project