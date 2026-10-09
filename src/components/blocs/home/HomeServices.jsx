import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import Title from '../../ui/Title'
import Fade from '../../ui/Fade'
import FadeIn from '../../ui/FadeIn'

import productDesignIcon from '../../../assets/icons/ic1.svg'
import frontendIcon from '../../../assets/icons/ic2.svg'
import designSystemIcon from '../../../assets/icons/ic3.svg'
import { cardVariants, createContainerVariants } from '../../../utils/motion'

const containerVariants = createContainerVariants(0.12)

// Títulos e descrições ficam em src/locales/<idioma>/home.json (services.items.<key>)
const services = [
  { key: 'productDesign', icon: productDesignIcon },
  { key: 'frontEnd', icon: frontendIcon },
  { key: 'designSystems', icon: designSystemIcon },
]

function HomeServices() {
  const { t } = useTranslation('home')

  return (
    <section id="services" className="bg-spacy-navy py-20 md:py-28 relative
    bg-[url('./assets/images/services-bg.jpg')] bg-cover bg-center bg-no-repeat w-full" 
    aria-labelledby="services-title">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <FadeIn className="mb-10 md:mb-16 text-center">
          <Title
            span={t('services.eyebrow')}
            titleH2={t('services.title')}
          />
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 gap-5 lg:grid-cols-3 relative z-30"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service) => (
            <motion.article
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-card border border-cosmic-blue/12 bg-midnight-deep/45 p-8 hover:border-cosmic-blue/40 md:p-10 md:px-8"
              key={service.key}
            >
              <div
                className="mb-6 flex h-20 w-20 items-center justify-center 
                rounded-icon bg-cosmic-blue/10 text-xl text-cosmic-blue"
                aria-hidden="true"
              >
                <img src={service.icon} alt="" className="h-10 w-10 object-contain"/>
              </div>
              <h4 className="mb-3 text-h4 font-semibold text-white">
                {t(`services.items.${service.key}.title`)}
              </h4>
              <p className="text-body text-stellar-white">
                {t(`services.items.${service.key}.description`)}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <Fade size="lg" color="deepblue"/>
    </section>
  )
}

export default HomeServices
