import { AiFillProduct, AiOutlineCodepen, AiOutlineInsertRowAbove } from "react-icons/ai";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { VscVscodeInsiders } from "react-icons/vsc";

import Container from '../components/layout/Container'
import Fade from '../components/ui/Fade'
import CasePdf from '../components/case-study/CasePdf'
import Cta from '../components/layout/Cta'
import usePageTitle from '../hooks/usePageTitle'

import imgGithub from '../assets/images/services-github.jpg'

const services = [
  {
    icon: <AiFillProduct />,
    title: 'Product Design',
    color: 'bg-cosmic-blue/10 text-cosmic-blue',
    description:
      'Projeto com foco no problema real. Fluxos, protótipos e decisões que fazem sentido para quem usa e para quem paga. Do discovery à interface final.',
  },
  {
    icon: <AiOutlineCodepen />,
    title: 'Front-End',
    color: 'bg-cosmic-blue/10 text-orbit-cyan',
    description:
      'O que projeto, sei construir. React, Vite e Tailwind CSS. Do componente ao deploy. Sem ruído entre design e engenharia.',
  },
  {
    icon: <AiOutlineInsertRowAbove />,
    title: 'Design Systems',
    color: 'bg-cosmic-blue/10 text-solar-gold',
    description:
      'Consistência não acontece por acidente. Tokens, componentes e padrões documentados. Uma base que escala sem perder coerência.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Entender',
    description:
      'Antes de abrir o Figma, entender o contexto. Para quem, por quê e como vai ser feito.',
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
      'Protótipo ou código. Dependendo do que o problema pede, consigo entregar os dois.',
  },
  {
    number: '04',
    title: 'Validar',
    description:
      'Entrega não é mandar o arquivo. É garantir que o que foi projetado vai ao ar realmente funciona.',
  },
]

const tools = [
  {
    name: 'Figma',
    icon: 'https://cdn.simpleicons.org/figma/F24E1E',
  },
  {
    name: 'Photoshop',
    icon: <DiPhotoshop color="#31a8ff" />,
  },
  {
    name: 'Illustrator',
    icon: <DiIllustrator color="#ff9a00"/>,
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
    name: 'WordPress',
    icon: 'https://cdn.simpleicons.org/wordpress/21759B',
  },
  {
    name: 'VS Code',
    icon: <VscVscodeInsiders />,
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
  usePageTitle('O que faço')

  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden text-center bg-midnight-deep pb-24 pt-40 bg-[url('./assets/images/services-page-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(100,101,247,0.12)_0%,transparent_70%)]" />

        <Container className="relative z-10">

          <div className="mb-6 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-orbit-cyan text-neon">
            O que faço
          </div>

          <h1 className="mb-6 max-w-auto text-[clamp(40px,6vw,72px)] font-bold leading-[1.03] tracking-[-0.03em] text-white">
            Antes de criar,<br />
            <span className="text-cosmic-blue">compreender.</span>
          </h1>

          <p className="text-lead mb-3 max-w-auto text-white-75">
            Cada entrega começa com a pergunta certa.
          </p>

          <p className="text-body max-w-[500px] mx-auto text-white-55">
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
                  className={`mb-6 flex h-20 w-20 items-center justify-center rounded-icon text-4xl ${service.color}`}
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
      <section className="relative overflow-hidden bg-spacy-navy py-20 md:py-32 
      bg-[url('./assets/images/services-page-bg-2.jpg')]
      bg-cover bg-center bg-no-repeat text-center">
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

          <div className="grid grid-cols-1 gap-4 bg-white/07 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-spacy-navy p-8 md:p-10 rounded-lg border border-cosmic-blue/12 transition hover:-translate-y-1 hover:border-cosmic-blue/40"
              >
                <p className="mb-5 text-2xl font-semibold tracking-[0.12em] text-orbit-cyan/60">
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
      <section className="bg-midnight-deep py-20 md:pt-14 pb-24">
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
                {typeof tool.icon === 'string' ? (
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="h-5 w-5 flex-shrink-0"
                  />
                ) : (
                  <span
                    className="flex h-5 w-5 flex-shrink-0 items-center justify-center text-lg text-white"
                    aria-hidden="true"
                  >
                    {tool.icon}
                  </span>
                )}
                <span className="text-[14px] font-medium text-white-75">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[13px] leading-[1.6] text-white/50 text-center">
            <strong>Outras ferramentas:</strong> Sketch, Zeplin, InDesign, Bootstrap, PHP, Elementor, Miro
          </p>

        </Container>
      </section>



      <CasePdf
        eyebrow="Códigos"
        title="Os projetos não terminam no Figma. Eles ganham vida."
        btLabel="Ver projetos no GitHub →"
        href={"https://github.com/ademirpatricio"}
        target="_blank"
        image={imgGithub}
        imageAlt="Preview do PDF gerado pelo Proposta Rápida"
        className="bg-cover bg-center"
        >
        <p>
          No meu <strong>GitHub</strong> você encontra aplicações reais, experimentos, componentes e produtos que desenvolvi do design ao deploy.
        </p>
      </CasePdf>



      {/* ─── CTA FINAL ────────────────────────────────────────── */}
      <Cta />

    </main>
  )
}

export default Services
