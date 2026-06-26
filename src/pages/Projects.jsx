import { Link } from 'react-router-dom'
import Container from '../components/layout/Container'
import Fade from '../components/ui/Fade'

const projects = [
  {
    accent: 'from-spacy-navy to-orbit-cyan/18',
    tag: 'Produto Digital',
    title: 'Proposta Rápida',
    description:
      'Gerador de propostas comerciais para freelancers e agências. Do zero ao deploy.',
    href: '#',
  },
  {
    accent: 'from-spacy-navy to-nebula-violet/55',
    tag: 'Web',
    title: 'Malabares Wedding',
    description:
      'Site para agência de casamentos com foco em experiência emocional e storytelling visual.',
    href: '#',
  },
  {
    accent: 'from-spacy-navy to-solar-gold/18',
    tag: 'Web',
    title: 'Thayná Aguiar',
    description:
      'Portfólio pessoal construído em React, do wireframe ao ar em uma semana.',
    href: '/projetos/thayna-aguiar',
  },
]

function Projects() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-midnight-deep pb-20 pt-40 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(100,101,247,0.12)_0%,transparent_70%)]" />

        <Container className="relative z-10">

          <div className="mb-6 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-orbit-cyan text-neon">
            <span className="h-1.5 w-1.5 rounded-full bg-orbit-cyan shadow-neon" />
            Projetos
          </div>

          <h1 className="mb-6 max-w-[700px] text-[clamp(40px,6vw,72px)] font-bold leading-[1.03] tracking-[-0.03em] text-white">
            Do problema<br />
            <span className="text-cosmic-blue">ao deploy.</span>
          </h1>

          <p className="text-body max-w-[480px] text-white-55">
            Projetos reais. Cada um começou com um problema que valia a pena resolver.
          </p>

        </Container>

        <Fade size="md" color="midnightdeep" />
      </section>

      {/* ─── GRID DE PROJETOS ─────────────────────────────────── */}
      <section className="bg-midnight-deep pb-24 pt-4 md:pb-40">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                to={project.href}
                className="block overflow-hidden rounded-card border border-white/5 bg-spacy-navy/40 text-white transition hover:-translate-y-1.5 hover:border-cosmic-blue/30"
                key={project.title}
              >
                <div
                  className={`flex aspect-video w-full items-center justify-center bg-gradient-to-br ${project.accent}`}
                >
                  <span className="text-[10px] uppercase tracking-[0.12em] text-white/18">
                    thumbnail
                  </span>
                </div>
                <div className="p-7 pt-6">
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.08em] text-orbit-cyan">
                    {project.tag}
                  </p>
                  <h3 className="mb-2 text-xl font-bold tracking-[-0.01em]">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-[1.65] text-white-55">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

    </main>
  )
}

export default Projects
