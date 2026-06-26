import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'

import Nav from '../src/components/layout/Nav'
import Footer from '../src/components/layout/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'

import ThaynaAguiar from './pages/projects/ThaynaAguiar'

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5 })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
    <Nav />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/o-que-faco" element={<Services />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/projetos/thayna-aguiar" element={<ThaynaAguiar />} />
    </Routes>
    
    <Footer />
    </>
  )
}

export default App