import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getLenis } from '../../utils/lenisInstance'

import Container from './Container'
import NavLink from '../ui/NavLink'
import logo from '../../assets/images/logo.svg'

function Nav() {
  // Navbar ao scroll
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Menu Mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const { pathname } = useLocation()

  const handleLogoClick = (e) => {
    if (pathname === '/') {
      e.preventDefault()
      getLenis()?.scrollTo(0, { immediate: false })
    }
  }

  return (
    <>
      <nav
        className={`
          fixed inset-x-0 top-0 z-800
          py-5 md:py-6
          transition-all duration-300

          ${
            isScrolled
              ? 'bg-midnight-deep/75 backdrop-blur-nav'
              : 'bg-transparent'
          }
        `}
      >
        <Container>
          <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="text-reading font-semibold tracking-[-0.01em]"
          >
            <img
              src={logo}
              alt="Ademir Patrício"
              className="h-10 w-auto md:h-12"
            />
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden items-center gap-10 md:flex">
            <NavLink href="/quem-sou">
              QUEM SOU
            </NavLink>

            <NavLink href="/o-que-faco">
              O QUE FAÇO
            </NavLink>

            <NavLink href="/projetos">
              PROJETOS
            </NavLink>

            <NavLink href="https://wa.me/5581998590849?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20Ademir%20Patr%C3%ADcio" variant="cta">
              FALA COMIGO ⇢
            </NavLink>
          </ul>

          {/* Botão Mobile */}
          <button
            className="
              text-3xl
              text-white
              transition
              md:hidden
            "
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
          >
            ☰
          </button>

          </div>
        </Container>
      </nav>

      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`
          fixed inset-0 z-850
          bg-black/60
          backdrop-blur-sm

          transition-all duration-300

          md:hidden

          ${
            isMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }
        `}
      />

      {/* Menu Mobile */}
      <aside
        className={`
          fixed
          top-0
          right-0
          z-900

          h-screen
          w-[320px]

          border-l border-white/10
          bg-midnight-deep

          transition-transform duration-300 ease-out

          md:hidden

          ${
            isMenuOpen
              ? 'translate-x-0'
              : 'translate-x-full'
          }
        `}
      >
        <div className="flex h-full flex-col">

          {/* Header */}
          <div className="flex justify-end p-6">
            <button
              onClick={closeMenu}
              className="
                text-3xl
                text-white
                transition
                hover:opacity-70
              "
              aria-label="Fechar menu"
            >
              ✕
            </button>
          </div>

          {/* Navegação */}
          <ul
            className="
              flex
              flex-col
              items-end
              gap-8

              px-8
              pt-10

              text-right
            "
          >
            <NavLink
              href="/"
              onClick={closeMenu}
            >
              INÍCIO
            </NavLink>
            <NavLink
              href="/quem-sou"
              onClick={closeMenu}
            >
              SOBRE
            </NavLink>

            <NavLink
              href="/o-que-faco"
              onClick={closeMenu}
            >
              O QUE FAÇO
            </NavLink>

            <NavLink
              href="/projetos"
              onClick={closeMenu}
            >
              PROJETOS
            </NavLink>

            <NavLink
              href="https://wa.me/5581998590849?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20Ademir%20Patr%C3%ADcio"
              variant="cta"
              onClick={closeMenu}
            >
              FALA COMIGO ⇢
            </NavLink>
          </ul>

        </div>
      </aside>
    </>
  )
}

export default Nav
