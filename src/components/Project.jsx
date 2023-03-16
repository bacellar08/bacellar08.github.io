import { GitHub, Launch } from '@mui/icons-material'
import '../styles/project.css'

const Project = (p) => {
  return (
    <div className='project-container' style={{flexDirection: p.direction}}>
        <div className="img-space" style={{height: "300px", width: "450px"}}>
        </div>
        <img className='project-img' src={p.src} alt="Example" />
        <div className="project-info" style={{alignItems: p.alignItems}}>
            <span className='project-type'>{p.type}</span>
            <h3 className='project-title'>{p.title}</h3>
            <div className='project-description' style={{textAlign: p.textAlign}}>{p.info}</div>
            <div className="project-techs">
                {p.techs}
            </div>
            <div className='project-icons'>
            <i style={{color: 'var(--title-Color)', paddingTop: '20px'}}><GitHub/></i>
            <i style={{color: 'var(--title-Color)', paddingTop: '20px'}}><Launch/></i>
            </div>
        </div>
    </div>
  )
}

export default Project