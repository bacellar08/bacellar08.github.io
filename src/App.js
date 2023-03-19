import About from './components/About'
import Experience from './components/Experience'
import Introduction from './components/Introduction'
import Nav from './components/Nav'
import ScrollButton from './components/ScrollButton'
import Social from './components/Social'
import Work from './components/Work'
import './styles/FadeInOnScroll.css'

const App = () => {

  return (

    <div style={{background: '#0A192F', height: '100vh'}}>
      <Social/>
      <Nav  item1='about' item2='experience' item3='work' item4='contact'/>
      <Introduction/>
      <About/>
      <Experience/>
      <Work/>
      <ScrollButton/>
    </div>
  )
}

export default App