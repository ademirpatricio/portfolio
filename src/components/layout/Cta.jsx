import { useEffect, useRef, useState } from 'react'
import { GiCoffeeCup } from 'react-icons/gi'
import FadeIn from '../ui/FadeIn'

import ctaBg from '../../assets/images/cta-bg.jpg'

import IconeText from '../ui/IconeText'
import Button from '../ui/Button'
import Fade from '../ui/Fade'

function Cta() {

  // Número de Whastapp para contato
  const whatsappLink =
  'https://wa.me/5581998590849?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20Ademir%20Patr%C3%ADcio'

  // Efeito de parallax — offset relativo ao centro da seção
  const sectionRef = useRef(null)
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      setParallaxY((elementCenter - viewportCenter) * 0.15)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-midnight-deep py-20 text-center md:py-40"
      id="contact"
      aria-labelledby="contact-title"
    >
      {/* Imagem de fundo */}
      <img
        src={ctaBg}
        alt=""
        className="
          absolute inset-0
          h-full w-full
          object-cover
          object-center
          will-change-transform
        "
        style={{
          transform: `translateY(${parallaxY}px) scale(1.3)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(100,101,247,0.10)_0%,transparent_65%),radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(34,200,229,0.05)_0%,transparent_50%)]" />

      {/* Conteúdo */}
      <FadeIn className="relative z-10 mx-auto max-w-[640px] px-6 md:px-12">
        <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-orbit-cyan">
          Contato
        </span>

        <h2
          id="contact-title"
          className="mb-5 text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white"
        >
          Toda jornada começa
          <br />
          com uma direção.
        </h2>

        <p className="mb-10 text-[17px] leading-[1.75] text-white-55">
          Se você tem um projeto, uma vaga ou uma ideia no papel, esse pode
          ser o começo.
        </p>

        <Button
          variant="secondary"
          size="lg"
          mobileFullWidth
          href={whatsappLink}
          target="_blank"
        >
          Fala comigo ⇢
        </Button>

        <div className="mt-8 flex justify-center">
          <IconeText
            icon={GiCoffeeCup}
            iconClassName="text-orbit-cyan"
            title="Freelance / Disponibilidade:"
            label="Aberto à oportunidades"
            link={whatsappLink}
            target="_blank"
          />
        </div>
      </FadeIn>

      <Fade size="lg" color="midnightdeep" />
    </section>
  )
}

export default Cta