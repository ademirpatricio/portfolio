import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import Container from '../../layout/Container'
import FadeIn from '../../ui/FadeIn'

import experiencia1 from '../../../assets/about/ic1.jpg'
import experiencia2 from '../../../assets/about/ic2.jpg'
import experiencia3 from '../../../assets/about/ic3.jpg'
import experiencia4 from '../../../assets/about/ic4.jpg'
import experiencia5 from '../../../assets/about/ic5.jpg'
import experiencia6 from '../../../assets/about/ic6.jpg'
import { cardVariants, containerVariants } from '../../../utils/motion'

// Período, empresa, cargo e descrição ficam em src/locales/<idioma>/about.json (experience.items.<key>)
const experiences = [
  { key: 'goexplosion', image: experiencia1 },
  { key: 'malabares', image: experiencia2 },
  { key: 'crope', image: experiencia3 },
  { key: 'serttel', image: experiencia4 },
  { key: 'gruposer', image: experiencia5 },
  { key: 'early', image: experiencia6 },
]

function AboutExperience() {
  const { t } = useTranslation('about')

  return (
    <section className="bg-midnight-deep py-20 md:py-28">
      <Container>

        <FadeIn className="mb-12">
          <span className="mb-6 inline-flex items-center gap-2.5
          text-span text-orbit-cyan text-neon">
            {t('experience.eyebrow')}
          </span>
          <h2 className="text-h2 font-bold text-white mb-6">
            {t('experience.title')}
          </h2>
        </FadeIn>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.key}
              variants={cardVariants}
              className={`grid grid-cols-1 gap-4 py-7 md:grid-cols-[200px_1fr] md:gap-10
                ${index !== experiences.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              <div className="flex items-center gap-4">
                <img
                  src={exp.image}
                  alt=""
                  className="h-20 w-20 rounded-icon"
                />
                <div>
                  <p className="text-small font-medium text-orbit-cyan">
                    {t(`experience.items.${exp.key}.period`)}
                  </p>
                  <p className="mt-1 text-body font-semibold text-white">
                    {t(`experience.items.${exp.key}.company`)}
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-1 text-h4 font-medium text-white">
                  {t(`experience.items.${exp.key}.role`)}
                </p>
                <p className="text-body font-light text-stellar-white">
                  {t(`experience.items.${exp.key}.description`)}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </Container>
    </section>
  )
}

export default AboutExperience
