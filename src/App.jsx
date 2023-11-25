
import { useEffect, useState } from 'react'
import './App.css'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Skill from './components/skill/Skill'

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setShowScrollBTN] = useState(false);

  return (
    <div id='up' className='container'>
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


      <a style={{ opacity: showScrollBTN? 1 : 0, transition: "1s" }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </div>
  )
}

export default App
