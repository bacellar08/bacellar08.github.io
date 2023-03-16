import '../styles/introduction.css'

const Introduction = () => {
  return (
    <div>
        <div className="intro-container">
        <p className='span font-mono'>Hi, my name is</p>
        <h1 className='title'>Alexandre Bacellar. <span style={{color: '#8892B0', display: 'block'}}>I build things for the web.</span></h1>
        <p className='short-resume'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <span>Upstatement</span>.</p>
        <button className='calltoaction-btn btn'>Get in touch!</button>
      </div>
    </div>
  )
}

export default Introduction