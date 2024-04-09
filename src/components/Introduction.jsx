import '../styles/introduction.css'

const Introduction = () => {
  return (
    <div>
        <div className="intro-container container">
        <p className='span font-mono'>Hi, my name is</p>
        <h1 className='title'>Alexandre Bacellar. <span className='sub-title'>I'm a Front-end Developer</span></h1>
        <p className='short-resume'> Formerly a graphic designer, I've spent the last <span>three years</span> immersing myself in front-end development, evolving into a proficient <span>full-stack developer</span>. Equipped with a diverse skill set, I specialize in crafting user interfaces and architecting backend solutions. Proficient in <span>Next.js, React,</span> and various backend technologies like <span>Node.</span></p>
        <p className='short-resume'>
        Please be aware that <span>this portfolio may contain outdated information as it has not been recently updated</span>. Due to current time constraints, I haven't had the opportunity to refresh its content. However, it still serves as a representation of my past work and skills. I appreciate your understanding and patience. If you have any questions or would like to discuss my recent projects and experiences further, please don't hesitate to reach out directly.</p>
        <a href='https://www.linkedin.com/in/alexandre-bacellarr/'><button  className='calltoaction-btn btn'> Get in touch!</button></a>
      </div>
    </div>
  )
}

export default Introduction