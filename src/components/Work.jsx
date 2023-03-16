import '../styles/work.css'
import Project from './Project'
import SimpleCalculator from '../img/simple-calculator.png'
import SimonGame from '../img/simon-game.png'

const Work = () => {
  return (
    <div className='work-container' style={{width: '50%', margin: '0 auto'}}>
        <div className="work-title" style={{}}>
            <span style={{fontFamily: 'var(--font-mono)', fontWeight: '200', fontSize: '1.2rem'}}>01. </span>
            <h2>Some Things I've built</h2>
            <hr/>
        </div>

        <Project
        src={SimpleCalculator}
        title='Calculator'
        type='Personal Project'
        info='A simple calculator using only HTML, CSS and JAVASCRIPT'
        techs={
                <>
                <li>VS Code</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                </>
            }
        />
        <Project
        src={SimonGame}
        title='Simon Game'
        type='Academic Project'
        info='A "Simon Says" game with HTML, CSS and JS'
        techs={
            <>
            <li>VS Code</li>
            <li>HTML</li>
            <li>Bootstrap</li>
            <li>JQuery</li>
            <li>JavaScript</li>
            </>
        }
        />
    </div>
  )
}

export default Work