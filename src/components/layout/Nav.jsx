import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getLenis } from '../../utils/lenisInstance'

import Container from './Container'
import NavLink from './NavLink'
import LanguageSwitcher from './LanguageSwitcher'
import { useLocalizedPath } from '../../hooks/useLang'
import useWhatsappLink from '../../hooks/useWhatsappLink'
import { toPtPath } from '../../i18n/routes'
import logo from '../../assets/images/logo.svg'

function Nav() {
  const { t } = useTranslation('common')
  const lp = useLocalizedPath()
  const whatsappLink = useWhatsappLink()

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
    if (toPtPath(pathname) === '/') {
      e.preventDefault()
      getLenis()?.scrollTo(0, { immediate: false })
    }
  }

  return (
    <>
      <nav
        className={`
          fixed inset-x-0 top-0 z-800
          py-5 md:pt-8 pb-8
        `}
      >
        {/* Fundo ao scroll: degradê escuro (topo) para transparente (base) */}
        <div
          aria-hidden="true"
          className={`
            pointer-events-none absolute inset-0 -z-10
            bg-linear-to-b from-midnight-deep via-midnight-deep/40 to-transparent
            transition-opacity duration-300
            ${isScrolled ? 'opacity-100' : 'opacity-0'}
          `}
        />

        <Container>
          <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to={lp('/')}
            onClick={handleLogoClick}
            className="text-body font-semibold"
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
              {t('nav.about')}
            </NavLink>

            <NavLink href="/o-que-faco">
              {t('nav.services')}
            </NavLink>

            <NavLink href="/projetos">
              {t('nav.projects')}
            </NavLink>

            <NavLink href={whatsappLink} variant="cta">
              {t('nav.talk')}
            </NavLink>

            <li>
              <LanguageSwitcher />
            </li>
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
            aria-label={t('nav.openMenu')}
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
              aria-label={t('nav.closeMenu')}
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
              {t('nav.home')}
            </NavLink>
            <NavLink
              href="/quem-sou"
              onClick={closeMenu}
            >
              {t('nav.aboutMobile')}
            </NavLink>

            <NavLink
              href="/o-que-faco"
              onClick={closeMenu}
            >
              {t('nav.services')}
            </NavLink>

            <NavLink
              href="/projetos"
              onClick={closeMenu}
            >
              {t('nav.projects')}
            </NavLink>

            <NavLink
              href={whatsappLink}
              variant="cta"
              onClick={closeMenu}
            >
              {t('nav.talk')}
            </NavLink>

            <li>
              <LanguageSwitcher onClick={closeMenu} />
            </li>
          </ul>

        </div>
      </aside>
    </>
  )
}

export default Nav
