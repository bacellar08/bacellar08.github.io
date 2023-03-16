import '../styles/nav.css'
import Logo from '../img/logo-01.png'

const Nav = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={Logo} alt="my-brand" />

        <div className="topics">
            <li><span>01. </span>About</li>
            <li><span>02. </span>Experience</li>
            <li><span>03. </span>Work</li>
            <li><span>04. </span>Contact</li>
            <button className='btn'>Resume</button>
        </div>
    </div>
  )
}

export default Nav