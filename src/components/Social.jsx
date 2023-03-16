import { GitHub, Instagram, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material"
import '../styles/social.css'



const Social = () => {
  return (
    <div>
      <div className="social-container">
          <i className="social-icon"><GitHub/></i>
          <i className="social-icon"><Instagram/></i>
          <i className="social-icon"><Twitter/></i>
          <i className="social-icon"><LinkedIn/></i>
          <i className="social-icon"><WhatsApp/></i>
          <hr className="social-line"/>
      </div>
      <div className="social-container sc2">
          <p className="social-email">alexandre.bacellar@gmail.com</p>
          <hr className="social-line"/>
      </div>
    </div>
  )
}

export default Social