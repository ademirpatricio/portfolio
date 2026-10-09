import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'
import { LuUserSearch, LuCodeXml, LuComponent } from 'react-icons/lu'

import Container from '../../layout/Container'
import FadeIn from '../../ui/FadeIn'
import { cardVariants, containerVariants } from '../../../utils/motion'

// Títulos e descrições ficam em src/locales/<idioma>/about.json (values.items.<key>)
const values = [
  { key: 'understand', icon: <LuUserSearch className="text-cosmic-blue h-10 w-10" /> },
  { key: 'code', icon: <LuCodeXml className="text-orbit-cyan h-10 w-10" /> },
  { key: 'lasting', icon: <LuComponent className="text-solar-gold h-10 w-10" /> },
]

function AboutValues() {
  const { t } = useTranslation('about')

  return (
    <section className="bg-midnight-deep py-20 md:py-28">
      <Container>

        <FadeIn className="mb-12 text-center">
          <span className="mb-6 inline-flex
          items-center gap-2.5
          text-span text-orbit-cyan text-neon">
            {t('values.eyebrow')}
          </span>
          <h2 className="text-h2 font-bold text-white mb-6">
            <Trans
              t={t}
              i18nKey="values.title"
              components={{ highlight: <span className="text-stellar-white" /> }}
            />
          </h2>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 gap-5 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {values.map((value) => (
            <motion.article
              key={value.key}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-card border border-cosmic-blue/12
              bg-spacy-navy/50 p-8 hover:border-cosmic-blue/40 md:p-10"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-icon bg-cosmic-blue/10 text-xl text-cosmic-blue">
                {value.icon}
              </div>
              <h4 className="mb-3 text-h4 font-semibold text-white">
                {t(`values.items.${value.key}.title`)}
              </h4>
              <p className="font-light text-stellar-white">
                {t(`values.items.${value.key}.description`)}
              </p>
            </motion.article>
          ))}
        </motion.div>

      </Container>
    </section>
  )
}

export default AboutValues
