import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import { setLenis } from './utils/lenisInstance'

import Nav from '../src/components/layout/Nav'
import Footer from '../src/components/layout/Footer'
import ScrollToTop from './components/utils/ScrollToTop'
import CookieConsent from './components/ui/CookieConsent'
import LanguageSync from './components/utils/LanguageSync'
import { routes } from './i18n/routes'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

import ThaynaAguiar from './pages/projects/ThaynaAguiar'
import PropostaRapida from './pages/projects/PropostaRapida'
import Mowcar from './pages/projects/Mowcar'
import DesignSystem from './pages/projects/DesignSystem'

// Cada página é registrada uma vez, pelo caminho em português.
// As rotas em inglês vêm de src/i18n/routes.js.
const pages = {
  '/': Home,
  '/quem-sou': About,
  '/o-que-faco': Services,
  '/projetos': Projects,
  '/projetos/thayna-aguiar': ThaynaAguiar,
  '/projetos/proposta-rapida': PropostaRapida,
  '/projetos/mowcar': Mowcar,
  '/projetos/design-system': DesignSystem,
}

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
    <LanguageSync />
    <ScrollToTop />
    <CookieConsent />
    <Nav />

    <Routes>
      {routes.flatMap(({ pt, en }) => {
        const Page = pages[pt]
        return [
          <Route key={pt} path={pt} element={<Page />} />,
          <Route key={en} path={en} element={<Page />} />,
        ]
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    <Footer />
    </>
  )
}

export default App