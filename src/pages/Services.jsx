import { AiFillProduct, AiOutlineCodepen, AiOutlineInsertRowAbove } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobeIndesign } from "react-icons/tb";
import { VscVscodeInsiders } from "react-icons/vsc";
import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'

import Container from '../components/layout/Container'
import Fade from '../components/ui/Fade'
import FadeIn from '../components/ui/FadeIn'
import CasePdf from '../components/case-study/CasePdf'
import Cta from '../components/layout/Cta'
import usePageTitle from '../hooks/usePageTitle'

import imgGithub from '../assets/images/services-github.jpg'
import { cardVariants, createContainerVariants, fadeUp } from '../utils/motion'

const containerVariants = createContainerVariants(0.08)

// Títulos e descrições ficam em src/locales/<idioma>/services.json
const services = [
  { key: 'productDesign', icon: <AiFillProduct />, color: 'bg-cosmic-blue/10 text-cosmic-blue' },
  { key: 'frontEnd', icon: <AiOutlineCodepen />, color: 'bg-cosmic-blue/10 text-orbit-cyan' },
  { key: 'designSystems', icon: <AiOutlineInsertRowAbove />, color: 'bg-cosmic-blue/10 text-solar-gold' },
]

const steps = [
  { number: '01', key: 'understand' },
  { number: '02', key: 'define' },
  { number: '03', key: 'design' },
  { number: '04', key: 'build' },
  { number: '05', key: 'validate' },
  { number: '06', key: 'evolve' },
]

const tools = [
  {
    name: 'Figma',
    icon: 'https://cdn.simpleicons.org/figma/F24E1E',
  },
  {
    name: 'Photoshop',
    icon: <TbBrandAdobePhotoshop color="#31a8ff" />,
  },
  {
    name: 'Illustrator',
    icon: <TbBrandAdobeIllustrator color="#ff9a00"/>,
  },
  {
    name: 'InDesign',
    icon: <TbBrandAdobeIndesign color="#ff3366"/>,
  },
  {
    name: 'React',
    icon: 'https://cdn.simpleicons.org/react/61DAFB',
  },
  {
    name: 'Claude',
    icon: 'https://cdn.simpleicons.org/claude/e94f0f',
  },
  {
    name: 'ChatGPT',
    icon: <IoChatbubbleEllipsesOutline color="#cccccc"/>,
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
    name: 'Bootstrap',
    icon: 'https://cdn.simpleicons.org/bootstrap/8612fb',
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
    name: 'Miro',
    icon: 'https://cdn.simpleicons.org/miro/ffdd33',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.simpleicons.org/github/ffffff',
  },
  
]

function Services() {
  const { t } = useTranslation('services')
  usePageTitle(t('meta.title'))

  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden text-left
      bg-midnight-deep pb-20 pt-40
      bg-[url('./assets/images/services-hero-bg.jpg')]
      bg-cover bg-top-center bg-no-repeat">
      
        <Container className="relative z-10">

          <motion.div {...fadeUp(0.1)} 
          className="mb-7 inline-flex
        text-span text-orbit-cyan text-neon">
            {t('hero.eyebrow')}
          </motion.div>

          <motion.h1 {...fadeUp(0.25)}
          className="mb-6 max-w-auto 
          text-h1 font-bold text-white">
            {t('hero.titleLine1')}<br />
            <span className="text-cosmic-blue"> {t('hero.titleLine2')}</span>
          </motion.h1>

          <motion.h4 {...fadeUp(0.4)} className="text-h4 font-medium mb-3 
          max-w-auto text-white">
            {t('hero.subtitle')}
          </motion.h4>

          <motion.p {...fadeUp(0.5)} 
          className="text-body font-light max-w-[400px] text-stellar-white">
            {t('hero.description')}
          </motion.p>

        </Container>

        <Fade size="md" color="midnightdeep" />
      </section>

      {/* ─── SERVIÇOS ─────────────────────────────────────────── */}
      <section className="bg-midnight-deep py-20 md:pt-10 md:pb-30">
        <Container>

          <motion.div
            className="grid grid-cols-1 gap-5 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {services.map((service) => (
              <motion.article
                key={service.key}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-card border border-cosmic-blue/12 bg-spacy-navy/50 p-8 hover:border-cosmic-blue/40 md:p-10"
              >
                <div
                  className={`mb-6 flex h-20 w-20 items-center justify-center rounded-icon text-4xl ${service.color}`}
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h4 className="mb-3 text-h4 font-bold text-white">
                  {t(`items.${service.key}.title`)}
                </h4>
                <p className="text-body font-light text-stellar-white">
                  {t(`items.${service.key}.description`)}
                </p>
              </motion.article>
            ))}
          </motion.div>

        </Container>
      </section>

      {/* ─── PROCESSO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-spacy-navy py-20 md:py-28
      bg-[url('./assets/images/services-page-bg-2.jpg')]
      bg-cover bg-center bg-no-repeat text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(52,33,109,0.45)_0%,transparent_70%)]" />

        <Container className="relative z-10">

          <FadeIn className="mb-12 md:mb-16">
            <span className="mb-6 inline-flex items-center gap-2.5 
          text-span text-orbit-cyan text-neon">
              {t('process.eyebrow')}
            </span>
            <h3 className="text-h3 font-bold text-white">
              {t('process.title')}
            </h3>
          </FadeIn>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-spacy-navy p-8 md:p-10 rounded-lg 
                border border-cosmic-blue/12 hover:border-cosmic-blue/40 text-left"
              >
                <div className="flex items-baseline gap-3 mb-5">
                  <p className="text-2xl font-semibold tracking-[0.12em] text-cosmic-blue">
                    {step.number}
                  </p>
                  <span className="text-[11px] font-medium uppercase 
                  tracking-[0.12em] text-cosmic-blue">
                    {t(`process.steps.${step.key}.subtitle`)}
                  </span>
                </div>
                <h4 className="mb-3 text-h4 font-semibold text-white">
                  {t(`process.steps.${step.key}.title`)}
                </h4>
                <p className="text-body font-light text-stellar-white">
                  {t(`process.steps.${step.key}.description`)}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </Container>

        <Fade size="md" color="midnightdeep" />
      </section>

      {/* ─── FERRAMENTAS ──────────────────────────────────────── */}
      <section className="bg-midnight-deep py-20 md:py-28">
        <Container>

          <FadeIn className="mb-12">
            <span className="mb-6 inline-flex items-center gap-2.5 
          text-span text-orbit-cyan text-neon">
              {t('tools.eyebrow')}
            </span>
            <h3 className="text-h3 font-bold text-white">
              {t('tools.title')}
            </h3>
          </FadeIn>

          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                variants={cardVariants}
                className="flex items-center gap-3 rounded-xl border border-cosmic-blue/12 bg-spacy-navy/40 px-4 py-3.5 hover:border-cosmic-blue/30"
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
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-8 text-[13px] leading-[1.6] text-white/50 text-center">
            <Trans t={t} i18nKey="tools.others" components={{ strong: <strong /> }} />
          </p>

        </Container>
      </section>



      <CasePdf
        eyebrow={t('github.eyebrow')}
        title={t('github.title')}
        btLabel={t('github.button')}
        href={"https://github.com/ademirpatricio"}
        target="_blank"
        image={imgGithub}
        imageAlt={t('github.imageAlt')}
        className="bg-cover bg-center"
        >
        <p className="text-body font-light text-stellar-white">
          <Trans t={t} i18nKey="github.text" components={{ strong: <strong /> }} />
        </p>
      </CasePdf>


      {/* ─── CTA FINAL ────────────────────────────────────────── */}
      <Cta />

    </main>
  )
}

export default Services
