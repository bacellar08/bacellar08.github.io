import '../styles/introduction.css'

const Introduction = () => {
  return (
    <div>
        <div className="intro-container container">
        <p className='span font-mono'>Hi, my name is</p>
        <h1 className='title'>Alexandre Bacellar. <span className='sub-title'>I build things for the web.</span></h1>
        <p className='short-resume'>I'm a former graphic designer with a passion for front-end development. While I don't have professional experience in this field yet, I'm eager to apply my design skills and technical knowledge to a role in front-end development. I'm specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on learning ReactJS at <span>Alura</span>.</p>
        <a href='https://www.linkedin.com/in/alexandre-bacellarr/'><button  className='calltoaction-btn btn'> Get in touch!</button></a>
      </div>
    </div>
  )
}

export default Introduction