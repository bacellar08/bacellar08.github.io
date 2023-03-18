import About from './components/About'
import Experience from './components/Experience'
import Introduction from './components/Introduction'
import Nav from './components/Nav'
import Social from './components/Social'
import Work from './components/Work'
import './styles/FadeInOnScroll.css'

const App = () => {

  return (

    <div style={{background: '#0A192F', height: '100vh'}}>
      <Social/>
      <Nav/>
      <Introduction/>
      <About/>
      <Experience/>
      <Work/>
    </div>
  )
}

export default App