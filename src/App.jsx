
import './App.css'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Skill from './components/skill/Skill'

function App() {

  
  return (
    <div className='container'>
      <Header/>
      <Hero/>
      <div className="divider" />
      <Skill/>
      <div className="divider" />
      <Main/>
      <div className="divider" />
      <Contact/>
      <div className="divider" />
      <Footer/>
    </div>
  )
}

export default App
