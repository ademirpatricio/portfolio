import { useState, useEffect } from 'react'

import Button from '../../ui/Button'
import Fade from '../../ui/Fade'

import heroBg from '../../../assets/images/hero-bg.jpg'

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
    <section className="
      relative flex min-h-screen items-center overflow-hidden px-6 
      pb-20 pt-30 md:px-12 md:pb-25" id="hero">

      {/* Imagem de background */} 
      <img
        src={heroBg}
        alt=""
        className="
          absolute inset-0
          h-full w-full
          object-cover
          object-center
          scale-110
          will-change-transform
          md:opacity-80
          opacity-35
        "
        style={{
          transform: `translateY(${scrollY * 0.25}px)`
        }}
      />
      
      {/* Sombra ao redor da imagem */}
      <div className="absolute inset-0 
      bg-[radial-gradient(ellipse_80%_60%_at_65%_40%,rgba(100,101,247,0.16)_0%,transparent_60%)
      ,radial-gradient(ellipse_55%_45%_at_10%_85%,rgba(52,33,109,0.24)_0%,transparent_55%)]" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto w-full max-w-container text-center">

        {/* Subtitulo */}
        <div className="mb-11 inline-flex items-center gap-2.5 text-md 
        font-medium tracking-[0.1em] text-orbit-cyan text-neon">
          UI / UX · Product Design · Front-end
        </div>

        {/* Titulo */}
        <h1 className="text-h1 mb-7 mx-auto max-w-[800px] text-white">
          Designer que projeta
          <br className="hidden md:block"/>
          <span className="text-cosmic-blue"> com propósito.</span>
        </h1>

        {/* Descrição */}
        <p className="mb-8 max-w-[500px] mx-auto text-stellar-white
        text-body font-light 
        ">
          Do problema real à solução que funciona e vale a pena existir. Me chamo  
          <strong> Ademir Patrício</strong>. Entendo, projeto, construo e entrego.
        </p>

        <div className="mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="/projetos" size="lg">Ver projetos</Button>
          <Button variant="secondary" size="lg" target="_blank"
          href="https://wa.me/5581998590849?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20Ademir%20Patr%C3%ADcio">Fala comigo ⇢</Button>
        </div>

      </div>

      <Fade size="md" color="midnightdeep"/>

    </section>
  )
}

export default HomeHero
