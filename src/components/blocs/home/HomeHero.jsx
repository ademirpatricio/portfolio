import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

{/* Efeito de estrelas -------
const STARS = Array.from({ length: 120 }, () => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 3 + 2,
}))
------- */}

import Button from '../../ui/Button'
import Fade from '../../ui/Fade'
import Container from '../../layout/Container'

import heroBg from '../../../assets/images/hero-bg.jpg'
import heroBgMobile from '../../../assets/images/hero-bg-mobile.jpg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
})

function HomeHero() {

  {/* Efeito de scroll */}
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
      
      {/* Estrelas 
      <style>{`@keyframes twinkle{0%,100%{opacity:0.1}50%{opacity:0.9}}`}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {STARS.map((s, i) => (
          <span key={i} className="absolute rounded-full bg-white" style={{
            top: `${s.top}%`, left: `${s.left}%`,
            width: `${s.size}px`, height: `${s.size}px`,
            boxShadow: `0 0 ${s.size * 2}px rgba(255,255,255,0.8)`,
            animation: `twinkle ${s.duration}s ${s.delay}s infinite`,
            opacity: 0.1,
          }} />
        ))}
      </div>*/}

      {/* Conteúdo */} 
      <Container className="relative z-10 w-full">

        {/* Subtitulo */}
        <motion.div {...fadeUp(0.1)} 
        className="mb-7 inline-flex
        text-span text-orbit-cyan text-neon">
          UI / UX · Product Design · Front-end
        </motion.div>

        {/* Titulo */}
        <motion.h1 {...fadeUp(0.25)} 
        className="text-h1 mb-7 max-w-[800px] text-white">
          Antes de criar, 
          <br className="hidden md:block"/>
          <span className="text-stellar-white"> compreender.</span>
        </motion.h1>

        {/* Descrição */}
        <motion.p {...fadeUp(0.4)}
        className="mb-8 max-w-[400px] text-white text-body font-light">
          Sou <strong className="font-black">Ademir Patrício</strong>, designer e front-end com mais de 10 
          anos no digital. Meu trabalho é encontrar as perguntas certas e 
          transformar as respostas em um produto com direção.
        </motion.p>

        <motion.div {...fadeUp(0.55)} 
        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button variant="primary" href="/projetos" size="lg">Ver projetos</Button>
          <Button variant="secondary" size="lg" target="_blank"
          href="https://wa.me/5581998590849?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20Ademir%20Patr%C3%ADcio">Falar comigo ⇢</Button>
        </motion.div>

      </Container>

      <Fade size="md" color="midnightdeep"/>

    </section>
  )
}

export default HomeHero
