import '../styles/work.css'
import Project from './Project'
import SimpleCalculator from '../img/simple-calculator.png'
import SimonGame from '../img/simon-game.png'
import TinDog from '../img/tindog.png'

const Work = () => {
  return (
    <div className='work-container' style={{width: '50%', margin: '0 auto'}}>
        <div className="work-title" style={{}}>
            <span style={{fontFamily: 'var(--font-mono)', fontWeight: '200', fontSize: '1.2rem'}}>01. </span>
            <h2>Some Things I've built</h2>
            <hr/>
        </div>
        
        <Project
        textAlign='end'
        alignItems='flex-end'
        src={TinDog}
        title='TinDog'
        type='Academic Project'
        info={<><p>TinDog, a fictional app that serves as a "tinder for dogs," was an exciting and creative project.</p> <p>The website's design incorporated playful and colorful elements that appeal to both dogs and their owners. I used HTML, CSS, and JavaScript to create an interactive and user-friendly interface, making it easy for users to learn about the app's features and download it aswell as Bootstrap to ensure that the website was responsive and mobile-friendly.</p></>}
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
        
        <Project
        direction='row-reverse'
        alignItems='flex-start'
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

        <Project
        textAlign='end'
        alignItems='flex-end'
        src={SimpleCalculator}
        title='Calculator'
        type='Personal Project'
        info={<><p>A simple calculator using only HTML, CSS and JAVASCRIPT.</p> <p>I started by creating the basic HTML structure and using CSS to style the calculator's layout. I then implemented JavaScript to add functionality to the calculator, allowing users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.</p> <p>Overall, creating this calculator was a great opportunity for me to practice.</p></>}
        techs={
                <>
                <li>VS Code</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                </>
              }
        />
        

    </div>
  )
}

export default Work