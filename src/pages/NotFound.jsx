import { Link } from 'react-router-dom'

import Button from '../components/ui/Button'
import Fade from '../components/ui/Fade'

function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-midnight-deep">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,101,247,.12),transparent_65%)]" />

      <section className="relative z-10 px-6 text-center">

        <p className="mb-2 text-label font-medium uppercase tracking-widest text-orbit-cyan">
          Erro 404
        </p>

        <h1 className="mb-4 text-[clamp(90px,18vw,220px)] font-black leading-none tracking-[-0.06em] text-cosmic-blue">
          404
        </h1>

        <h2 className="mb-5 text-h2 font-bold text-white">
          Você saiu da órbita.
        </h2>

        <p className="mx-auto mb-12 max-w-xl text-body text-white-55">
          A página que você tentou acessar não existe, foi movida
          ou ainda está em construção.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">

          <Button
            href="/"
            size="lg"
          >
            ⇠ Voltar para Home
          </Button>

          <Button
            href="/projetos"
            variant="secondary"
            size="lg"
          >
            Ver Projetos
          </Button>

        </div>

      </section>

      <Fade size="lg" color="midnightdeep" />
    </main>
  )
}

export default NotFound