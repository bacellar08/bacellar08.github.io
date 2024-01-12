import { GitHub, Instagram, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material"
import '../styles/social.css'



const Social = () => {
  return (
    <div>
      <div className="social-container">
          <a className="social-icon" href="https://github.com/bacellar08"><i className="social-icon"><GitHub/></i></a>
          <a className="social-icon" href="https://www.linkedin.com/in/alexandre-bacellarr/"><i><LinkedIn/></i></a>
          <a className="social-icon" href="https://www.instagram.com/bacellar08/"><i className="social-icon"><Instagram/></i></a>
          <i className="social-icon"><Twitter/></i>
          <a className="social-icon" href="https://wa.me/+5571992715588"><i className="social-icon"><WhatsApp/></i></a>
          <hr className="social-line"/>
      </div>
      <div className="social-container sc2">
          <a style={{textDecoration: "none"}} href="mailto:alexandre.bacellar@gmail.com"><p className="social-email" >alexandre.bacellar@gmail.com</p></a>
          <hr className="social-line"/>
      </div>
    </div>
  )
}

export default Social