import ctaBg from '../../assets/images/cta-bg.jpg'

import Button from '../ui/Button'
import Fade from '../ui/Fade'

function HomeCta() {
    return (
        <section
          className="relative overflow-hidden bg-midnight-deep py-20 text-center md:py-40"
          id="contact"
          aria-labelledby="contact-title"
        >

          {/* Imagem de background */} 
          <img
            src={ctaBg}
            alt=""
            className="
              absolute inset-0
              h-full w-full
              object-cover
              object-center
              scale-110
              will-change-transform
            "
            style={{
              transform: `translateY(${scrollY * 0.25}px)`
            }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(100,101,247,0.1)_0%,transparent_65%),radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(34,200,229,0.05)_0%,transparent_50%)]" />
          <div className="relative z-10 mx-auto max-w-[640px] px-6 md:px-12">
            <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-neon text-orbit-cyan">
              Contato
            </span>
            <h2
              className="mb-5 text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white"
              id="contact-title"
            >
              Toda jornada começa
              <br />
              com uma direção.
            </h2>
            <p className="mb-10 text-[17px] leading-[1.75] text-white-55">
              Se você tem um projeto, uma vaga ou uma ideia no papel, esse pode
              ser o começo.
            </p>
            <Button variant="secondary" href="https://wa.me/5581998590849?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20Ademir%20Patr%C3%ADcio" size="lg" target="_blank">Fala comigo ⇢</Button>
          </div>
          <Fade site="lg" color="midnightdeep"/>
        </section>
    )
}
export default HomeCta;