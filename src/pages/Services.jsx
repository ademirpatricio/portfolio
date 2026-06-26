import Button from '../components/ui/Button'
import Container from '../components/layout/Container'
import Fade from '../components/ui/Fade'

const services = [
  {
    icon: '◎',
    title: 'Product Design',
    description:
      'Projeto com foco no problema real. Fluxos, protótipos e decisões que fazem sentido para quem usa e para quem paga. Do discovery à interface final.',
  },
  {
    icon: '</>',
    title: 'Front-End',
    description:
      'O que projeto, sei construir. React, Vite e Tailwind CSS. Do componente ao deploy. Sem ruído entre design e engenharia.',
  },
  {
    icon: '⬡',
    title: 'Design Systems',
    description:
      'Consistência não acontece por acidente. Tokens, componentes e padrões documentados. Uma base que escala sem perder coerência.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Entender',
    description:
      'Antes de abrir o Figma, entendo o contexto. Quem usa, por quê, o que já foi tentado. Sem isso, qualquer solução é chute.',
  },
  {
    number: '02',
    title: 'Projetar',
    description:
      'Fluxos antes de pixels. Decisões de UX antes de decisões visuais. A tela bonita é consequência.',
  },
  {
    number: '03',
    title: 'Construir',
    description:
      'Protótipo ou código. Depende do que o problema pede. Sei fazer os dois.',
  },
  {
    number: '04',
    title: 'Entregar',
    description:
      'Entrega não é mandar o arquivo. É garantir que o que foi projetado vai ao ar com fidelidade.',
  },
]

const tools = [
  {
    name: 'Figma',
    icon: 'https://cdn.simpleicons.org/figma/F24E1E',
  },
  {
    name: 'Photoshop',
    icon: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF',
  },
  {
    name: 'Illustrator',
    icon: 'https://cdn.simpleicons.org/adobeillustrator/FF9A00',
  },
  {
    name: 'React',
    icon: 'https://cdn.simpleicons.org/react/61DAFB',
  },
  {
    name: 'Vite',
    icon: 'https://cdn.simpleicons.org/vite/646CFF',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  },
  {
    name: 'VS Code',
    icon: 'https://cdn.simpleicons.org/visualstudiocode/007ACC',
  },
  {
    name: 'Notion',
    icon: 'https://cdn.simpleicons.org/notion/ffffff',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.simpleicons.org/github/ffffff',
  },
]

function Services() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-midnight-deep pb-24 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(100,101,247,0.12)_0%,transparent_70%)]" />

        <Container className="relative z-10">

          <div className="mb-6 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-orbit-cyan text-neon">
            <span className="h-1.5 w-1.5 rounded-full bg-orbit-cyan shadow-neon" />
            O que faço
          </div>

          <h1 className="mb-6 max-w-[700px] text-[clamp(40px,6vw,72px)] font-bold leading-[1.03] tracking-[-0.03em] text-white">
            Antes de criar,<br />
            <span className="text-cosmic-blue">compreender.</span>
          </h1>

          <p className="text-lead mb-3 max-w-[480px] text-white-75">
            Cada entrega começa com a pergunta certa.
          </p>

          <p className="text-body max-w-[480px] text-white-55">
            Não trabalho com escopo fechado antes de entender o problema.
            O briefing é o início da conversa, não a resposta.
          </p>

        </Container>

        <Fade size="md" color="midnightdeep" />
      </section>

      {/* ─── SERVIÇOS ─────────────────────────────────────────── */}
      <section className="bg-midnight-deep py-20 md:py-32">
        <Container>

          <div className="mb-12 md:mb-16">
            <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-orbit-cyan text-neon">
              Serviços
            </span>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
              Onde posso ajudar.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-card border border-cosmic-blue/12 bg-spacy-navy/50 p-8 transition hover:-translate-y-1 hover:border-cosmic-blue/40 md:p-10"
              >
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-icon bg-cosmic-blue/10 text-xl text-cosmic-blue"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-[-0.01em] text-white">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-white-55">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

        </Container>
      </section>

      {/* ─── PROCESSO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-spacy-navy py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(52,33,109,0.45)_0%,transparent_70%)]" />

        <Container className="relative z-10">

          <div className="mb-12 md:mb-16">
            <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-orbit-cyan text-neon">
              Processo
            </span>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
              Quatro etapas. Sem atalhos.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/07 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-spacy-navy p-8 md:p-10"
              >
                <p className="mb-5 text-[13px] font-semibold tracking-[0.12em] text-orbit-cyan/60">
                  {step.number}
                </p>
                <h3 className="mb-3 text-lg font-semibold tracking-[-0.01em] text-white">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-white-55">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </Container>

        <Fade size="md" color="midnightdeep" />
      </section>

      {/* ─── FERRAMENTAS ──────────────────────────────────────── */}
      <section className="bg-midnight-deep py-20 md:py-32">
        <Container>

          <div className="mb-12 md:mb-16">
            <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-orbit-cyan text-neon">
              Stack
            </span>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
              Com o que trabalho.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-3 rounded-xl border border-cosmic-blue/12 bg-spacy-navy/40 px-4 py-3.5 transition hover:border-cosmic-blue/30"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="h-5 w-5 flex-shrink-0"
                />
                <span className="text-[14px] font-medium text-white-75">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[13px] leading-[1.6] text-white-30">
            Também tenho conhecimento em: WordPress, PHP, Elementor, Sketch, Zeplin, InDesign.
          </p>

        </Container>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-midnight-deep py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(100,101,247,0.10)_0%,transparent_70%)]" />

        <Container className="relative z-10 text-center">

          <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-orbit-cyan text-neon">
            Contato
          </span>
          <h2 className="mb-5 text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
            Tem um projeto em mente?
          </h2>
          <p className="mx-auto mb-10 max-w-[480px] text-[17px] leading-[1.75] text-white-55">
            Se o problema vale a pena resolver, faz sentido conversar.
          </p>
          <Button
            variant="primary"
            href="mailto:falecom@ademirpatricio.com.br"
            size="lg"
          >
            Fala comigo ⇢
          </Button>

        </Container>

      </section>

    </main>
  )
}

export default Services
