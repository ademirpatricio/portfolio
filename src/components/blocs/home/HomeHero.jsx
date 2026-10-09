import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'

{/* Componentens */}
import Button from '../../ui/Button'
import Fade from '../../ui/Fade'
import Container from '../../layout/Container'

{/* Imagens */}
import heroBg from '../../../assets/images/hero-bg.jpg'
import heroBgMobile from '../../../assets/images/hero-bg-mobile.jpg'
import { fadeUp } from '../../../utils/motion'
import useWhatsappLink from '../../../hooks/useWhatsappLink'

function HomeHero() {
  const { t } = useTranslation('home')
  const whatsappLink = useWhatsappLink()

  {/* Efeito de scroll na imagem do Hero*/}
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }

}, [])


  return (
    <section id="hero" className="
      relative flex min-h-screen items-center overflow-hidden
      pb-20 pt-30 md:pb-25">

      {/* Imagem de background */} 
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 will-change-transform
        h-full w-full object-cover object-center hidden md:block"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`
        }}
      />

      <img
        src={heroBgMobile}
        alt=""
        className="absolute inset-0 will-change-transform
        h-full w-full object-cover object-center md:hidden block"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`
        }}
      />
      
      {/* Conteúdo */} 
      <Container className="relative z-10 w-full">

        {/* Subtitulo */}
        <motion.h5 {...fadeUp(0.1)} 
        className="text-h5 mb-7 text-orbit-cyan text-neon">
          {t('hero.eyebrow')}
        </motion.h5>

        {/* Titulo */}
        <motion.h1 {...fadeUp(0.25)} 
        className="text-h1 mb-7 max-w-[800px] text-white">
          {t('hero.titleLine1')}
          <br className="hidden md:block"/>
          <span className="text-stellar-white"> {t('hero.titleLine2')}</span>
        </motion.h1>

        {/* Descrição */}
        <motion.p {...fadeUp(0.4)}
        className="text-body mb-8 max-w-[400px] text-white font-light">
          <Trans
            t={t}
            i18nKey="hero.description"
            components={{ strong: <strong className="font-black" /> }}
          />
        </motion.p>

        <motion.div {...fadeUp(0.55)} 
        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button variant="primary" href="/projetos" size="lg">
            {t('hero.viewProjects')}
          </Button>
          <Button variant="secondary" size="lg" target="_blank"
          href={whatsappLink}>
            {t('hero.talk')}
          </Button>
        </motion.div>

      </Container>

      <Fade size="md" color="midnightdeep"/>

    </section>
  )
}

export default HomeHero
