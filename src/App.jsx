import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import { setLenis } from './utils/lenisInstance'

import Nav from '../src/components/layout/Nav'
import Footer from '../src/components/layout/Footer'
import ScrollToTop from './components/utils/ScrollToTop'
import CookieConsent from './components/ui/CookieConsent'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

import ThaynaAguiar from './pages/projects/ThaynaAguiar'
import PropostaRapida from './pages/projects/PropostaRapida'
import Mowcar from './pages/projects/Mowcar'

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5 })
    setLenis(lenis)

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return (
    <>
    <ScrollToTop />
    <CookieConsent />
    <Nav />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/o-que-faco" element={<Services />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/projetos/thayna-aguiar" element={<ThaynaAguiar />} />
      <Route path="/projetos/proposta-rapida" element={<PropostaRapida />} />
      <Route path="/projetos/mowcar" element={<Mowcar />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    <Footer />
    </>
  )
}

export default App