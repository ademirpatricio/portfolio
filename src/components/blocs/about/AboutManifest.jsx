import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import Container from '../../layout/Container'
import Fade from '../../ui/Fade'
import { cardVariants, containerVariants } from '../../../utils/motion'

function AboutManifest() {
  const { t } = useTranslation('about')
  const lines = t('manifesto.lines', { returnObjects: true })

  return (
    

      <section className="relative overflow-hidden py-20 md:pt-32 md:pb-48
      bg-[url('./assets/images/about-page-manifesto-bg.jpg')]
      bg-cover bg-center bg-no-repeat">

        <Container className="relative z-90 text-left">

          <span className="
          mb-7 inline-flex
        text-span text-orbit-cyan text-neon">
          {t('manifesto.eyebrow')}</span>

          <motion.blockquote
            className="mx-auto space-y-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {lines.map((line, index) => (
              <motion.p
                key={line}
                variants={cardVariants}
                className={`text-[clamp(22px,3vw,36px)] leading-[1.3] 
                  tracking-[-0.02em]
                  ${index === lines.length - 1
                    ? 'font-bold text-solar-gold'
                    : 'font-medium text-white'}`}
              >
                {line}
              </motion.p>
            ))}
          </motion.blockquote>

        </Container>
        <Fade size="lg" color="midnightdeep" />

      </section>

        )
    }
        export default AboutManifest;