import '../styles/work.css'
import Project from './Project'
import SimpleCalculator from '../img/simple-calculator.png'
import SimonGame from '../img/simon-game.png'
import TinDog from '../img/tindog.png'
import DrumKit from '../img/drum-kit.png'
import DiceGame from '../img/dice-game.png'

const Work = () => {
  return (
    <div className='work-container container fade-in' id='work' style={{width: '50%', margin: '0 auto'}}>
        <div className="work-title title-box" style={{}}>
            <span style={{fontFamily: 'var(--font-mono)', fontWeight: '200', fontSize: '1.2rem'}}>03. </span>
            <h2>Some Things I've built</h2>
            <hr/>
        </div>
        
        <Project
        textAlign='end'
        alignItems='flex-end'
        src={TinDog}
        title='TinDog'
        type='Academic Project'
        gitLink='https://github.com/bacellar08/TinDog'
        link='https://bacellar08.github.io/TinDog/'
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
        gitLink='https://github.com/bacellar08/Simon-Game'
        link='https://bacellar08.github.io/Simon-Game/'
        info='A "Simon Says" game application using HTML, CSS, JavaScript, jQuery, and Bootstrap was a challenging yet rewarding project that allowed me to showcase my skills in web development.'
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
        gitLink='https://github.com/bacellar08/Simple-Calculator'
        link='https://bacellar08.github.io/Simple-Calculator/'
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

      
          <Project
          gitLink='https://github.com/bacellar08/Drum-Kit'
          link='https://bacellar08.github.io/Drum-Kit/'
          direction='row-reverse'
          alignItems='flex-start'
          src={DrumKit}
          title='Drum Kit'
          type='Academic Project'
          info="An interactive Drum Kit application created using HTML, CSS, and JavaScript. The application allows users to simulate playing a virtual drum set by clicking on the drum kit elements or using their computer keyboard. The project's main focus was on the use of JavaScript event listeners to handle user input."
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
        gitLink='https://github.com/bacellar08/Dice-Game'
        link='https://bacellar08.github.io/Dice-Game/'
        textAlign='end'
        alignItems='flex-end'
        src={DiceGame}
        title='Dice Game'
        type='Academic Project'
        info={<><p>This project is a Dice game application website that utilizes HTML, CSS, JavaScript, and jQuery technologies.</p> <p>The website has a clean and simple design with a Roll button and two dices that generate random scores when clicked. The user can play the game by rolling the dices, and the player with the highest score wins.</p></>}
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