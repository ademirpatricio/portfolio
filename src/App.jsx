import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'

import Nav from '../src/components/layout/Nav'
import Footer from '../src/components/layout/Footer'

import Home from './pages/Home'
import About from './pages/About'
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
      <Route path="/trabalhos/thayna-aguiar" element={<ThaynaAguiar />} />
    </Routes>
    
    <Footer />
    </>
  )
}

export default App