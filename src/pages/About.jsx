import { FaFilePdf } from 'react-icons/fa6'
import { FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa6'
import { LuUserSearch, LuCodeXml, LuComponent } from 'react-icons/lu'

import Cta from '../components/layout/Cta'
import Container from '../components/layout/Container'
import Instagram from '../components/ui/Instagram'
import Fade from '../components/ui/Fade'
import IconeText from '../components/ui/IconeText'
import usePageTitle from '../hooks/usePageTitle'

import aboutImg from '../assets/images/about-img-1.jpg'

import experiencia1 from '../assets/about/ic1.jpg'
import experiencia2 from '../assets/about/ic2.jpg'
import experiencia3 from '../assets/about/ic3.jpg'
import experiencia4 from '../assets/about/ic4.jpg'
import experiencia5 from '../assets/about/ic5.jpg'
import experiencia6 from '../assets/about/ic6.jpg'

const experiences = [
  {
    period: '2021 – hoje',
    company: 'GoExplosion',
    role: 'Product Designer & Front-End Developer',
    image: experiencia1,
    description:
      'Design de produto, sistemas internos e páginas de conversão para plataforma de infoprodutos. Ponte entre design e engenharia.',
  },
  {
    period: '2019 – 2026',
    company: 'Malabares MKT',
    role: 'Co-fundador & UX/UI Designer',
    image: experiencia2,
    description:
      'Do briefing ao código. Design, desenvolvimento e estratégia digital para pequenas e médias empresas.',
  },
  {
    period: '2020 – 2021',
    company: 'CRO-PE',
    role: 'Designer Gráfico',
    image: experiencia3,
    description:
      'Comunicação visual institucional em diferentes canais digitais e eventos.',
  },
  {
    period: '2018 – 2019',
    company: 'Serttel',
    role: 'Designer de Produtos Digitais',
    image: experiencia4,
    description:
      'Mobilidade urbana. Participei da concepção do aplicativo Zona Azul Digital de Recife. Da prototipação à validação com usuários reais.',
  },
  {
    period: '2013 – 2015',
    company: 'Grupo Ser',
    role: 'Web Designer',
    image: experiencia5,
    description:
      'Produtos digitais para educação. Sites institucionais e padronização visual.',
  },
  {
    period: '2009 – 2012',
    company: 'Início de carreira',
    role: 'Web & Graphic Designer',
    image: experiencia6,
    description:
      'Naips Technology, Icorp, Trupe, Faculdade Nassau. Design web, gráfico e interfaces.',
  },
]

const values = [
  {
    icon: <LuUserSearch className="text-cosmic-blue h-10 w-10" />,
    title: 'O problema vem primeiro',
    description:
      'Não projeto soluções antes de entender o que precisa ser resolvido. Esse processo não é lento. É o que evita retrabalho.',
  },
  {
    icon: <LuCodeXml className="text-orbit-cyan h-10 w-10"/>,
    title: 'Tecnologia com intenção',
    description:
      'A inovação é ferramenta, não fim. Saber construir o que projeto muda como projeto. Cada decisão de design carrega peso técnico real.',
  },
  {
    icon: <LuComponent className="text-solar-gold h-10 w-10"/>,
    title: 'Construir para durar',
    description:
      'Prefiro projetos que evoluem a projetos que terminam. Processos claros, entregas consistentes, impacto que se mantém.',
  },
]

function About() {
  usePageTitle('Quem Sou')

  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-spacy-navy pb-24 pt-40 bg-[url('./assets/images/services-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(100,101,247,0.12)_0%,transparent_70%)]" />

        <Container className="relative z-10">

          <div className="mb-6 inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-orbit-cyan text-neon">
            Sobre o Designer
          </div>

          <h1 className="mb-6 max-w-[700px] text-[clamp(40px,6vw,72px)] font-bold leading-[1.03] tracking-[-0.03em] text-white">
            Não começo<br />
            <span className="text-cosmic-blue">pela solução.</span>
          </h1>

          <p className="text-lead mb-6 max-w-[520px] text-white-85">
            Mais de 15 anos projetando produtos digitais. Sempre começando pela pergunta certa.
          </p>

          <p className="text-body max-w-[520px] text-white-75">
            Sou Ademir Patrício. Designer com background em desenvolvimento front-end.
            Recife, Brasil. Disponível remotamente.
          </p>

        </Container>

        <Fade size="lg" color="deepblue" />
      </section>

      {/* ─── TRAJETÓRIA ───────────────────────────────────────── */}
      <section className="bg-deep-blue py-20 md:py-32">
        <Container>

          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:gap-20">

            <div>

              <div
              className="relative h-[280px] md:h-[520px] items-center justify-center 
              overflow-hidden rounded-lg bg-spacy-navy lg:flex"
              aria-hidden="true"
              >
                <img
                src={aboutImg}
                alt=""
                className="
                absolute inset-0
                h-full w-full
                object-cover
                object-center
                "/>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <IconeText
                  className="bg-midnight-deep/20 
                  hover:bg-midnight-deep/40 rounded-lg p-6"
                  icon={FaFilePdf}
                  iconClassName="text-red-500"
                  title={'Mais informações:'}
                  label={'Download do Currículo'}
                  link={'/ademir-patricio-curriculo.pdf'}
                  target={'_blank'}
                />
                <IconeText 
                  className="bg-midnight-deep/20 
                  hover:bg-midnight-deep/40 rounded-lg p-6"
                  icon={FaBehance}
                  iconClassName="text-solar-gold"
                  title={'Meus projetos:'}
                  label={'Projetos no Behance'}
                  link={'https://www.behance.net/ademirpatricio'}
                  target={'_blank'}
                />
                <IconeText 
                  className="bg-midnight-deep/20 
                  hover:bg-midnight-deep/40 rounded-lg p-6"
                  icon={FaGithub}
                  iconClassName="text-orbit-cyan"
                  title={'Meus códigos:'}
                  label={'Github em Construção'}
                  link={'https://github.com/ademirpatricio'}
                  target={'_blank'}
                />
                <IconeText 
                  className="bg-midnight-deep/20 
                  hover:bg-midnight-deep/40 rounded-lg p-6"
                  icon={FaLinkedinIn}
                  iconClassName="text-white"
                  title={'Me segue lá:'}
                  label={'Perfil no Linkedin'}
                  link={'https://linkedin.com/in/ademirpatricio'}
                  target={'_blank'}
                />
              </div>

            </div>

            <div className="space-y-5 text-[17px] leading-[1.75] text-white-55">
              <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-orbit-cyan text-neon">
                A trajetória
              </span>
              <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
                Do gráfico ao produto.
              </h2>
              <p>
                Comecei com design gráfico em 2009. Sites, peças institucionais, campanhas
                para educação e comunicação. Aprendi que visual tem impacto direto em como
                as pessoas percebem valor.
              </p>
              <p>
                Com o tempo, o trabalho ficou mais complexo. Em 2018, na Serttel, trabalhei
                no aplicativo Zona Azul Digital de Recife. Mobilidade urbana. Problema real,
                pessoas reais, impacto mensurável. Foi lá que entendi o tipo de trabalho
                que quero fazer.
              </p>
              <p>
                Em 2019 co-fundei a Malabares MKT. Aprendi a operar os dois lados: do
                conceito ao código. Isso mudou como projeto. Não projeto no vácuo porque
                sei o que vai acontecer na implementação.
              </p>
              <p>
                Hoje atuo como product designer na GoExplosion e sigo construindo projetos
                próprios. O próximo passo: colaborar com times europeus em produtos que
                valham a pena existir.
              </p>
            </div>

          </div>

        </Container>
      </section>

      {/* ─── MANIFESTO ────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:pt-32 md:pb-48
      bg-[url('./assets/images/about-page-manifesto-bg.jpg')]
      bg-cover bg-center bg-no-repeat">
        
        <div className="absolute inset-0
          bg-spacy-navy/50 z-20
          md:bg-[linear-gradient(to_right,
          rgba(2,1,17,1)_0%,
          rgba(2,1,17,0.50)_45%,
          rgba(2,1,17,0.10)_100%)]" />

        <Container className="relative z-30 text-left">

          <span className="mb-8 inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-orbit-cyan text-neon">
          Manifesto</span>

          <blockquote className="mx-auto space-y-2">
            <p className="text-[clamp(22px,3vw,36px)] font-medium leading-[1.3] tracking-[-0.02em] text-white">
            Antes de projetar, entendo.</p>
            <p className="text-[clamp(22px,3vw,36px)] font-medium leading-[1.3] tracking-[-0.02em] text-white">
            Antes de entregar, questiono.</p>
            <p className="text-[clamp(22px,3vw,36px)] font-medium leading-[1.3] tracking-[-0.02em] text-white">
            O problema vem primeiro.</p>
            <p className="text-[clamp(22px,3vw,36px)] font-medium leading-[1.3] tracking-[-0.02em] text-white">
            A solução, depois.</p>
            <p className="text-[clamp(22px,3vw,36px)] font-bold leading-[1.3] tracking-[-0.02em] text-solar-gold">
            Só existe o que vale a pena existir.</p>
          </blockquote>

        </Container>
        <Fade size="lg" color="midnightdeep" />

      </section>

      {/* ─── VALORES ──────────────────────────────────────────── */}
      <section className="bg-midnight-deep py-20 md:pt-32 pb-10">
        <Container>

          <div className="mb-12 text-center md:mb-16">
            <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-orbit-cyan text-neon">
              O que orienta cada decisão
            </span>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
              Três princípios que não negocio.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-card border border-cosmic-blue/12 bg-spacy-navy/50 p-8 transition hover:-translate-y-1 hover:border-cosmic-blue/40 md:p-10"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-icon bg-cosmic-blue/10 text-xl text-cosmic-blue">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-[-0.01em] text-white">
                  {value.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-white-55">
                  {value.description}
                </p>
              </article>
            ))}
          </div>

        </Container>
      </section>

      {/* ─── EXPERIÊNCIA ──────────────────────────────────────── */}
      <section className="bg-midnight-deep pt-20 md:pt-32 pb-24">
        <Container>

          <div className="mb-12">
            <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-orbit-cyan text-neon">
              Experiência
            </span>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
              O caminho até aqui.
            </h2>
          </div>

          <div>
            {experiences.map((exp, index) => (
              <article
                key={exp.company}
                className={`grid grid-cols-1 gap-4 py-7 md:grid-cols-[200px_1fr] md:gap-10
                  ${index !== experiences.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                <div className="flex gap-4 items-center">

                  <div>
                    <img
                    src={exp.image}
                    alt=""
                    className="
                    h-20 w-20 rounded-icon
                    "/>
                  </div>
                  <div>
                    <p className="text-[13px] font-medium tracking-[0.05em] text-orbit-cyan">
                    {exp.period}
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-white">
                    {exp.company}
                  </p>
                  </div>


                </div>
                <div>
                  <p className="mb-1.5 text-[14px] font-medium text-white-75">
                    {exp.role}
                  </p>
                  <p className="text-[15px] leading-[1.7] text-white-55">
                    {exp.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </Container>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────── */}
      <Instagram />
      <Cta />

    </main>
  )
}

export default About
