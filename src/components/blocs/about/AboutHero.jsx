import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Container from '../../layout/Container'
import Fade from '../../../components/ui/Fade'
import { fadeUp } from '../../../utils/motion'

function AboutHero() {
    const { t } = useTranslation('about')

    return(

  
      <section className="relative overflow-hidden bg-spacy-navy 
      pb-0 md:pb-12 pt-40 bg-[url('./assets/images/services-bg.jpg')] 
      bg-cover bg-center bg-no-repeat">
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(100,101,247,0.12)_0%,transparent_70%)]" />

        <Container className="relative z-90">

          <motion.div {...fadeUp(0.1)} 
          className="mb-6 inline-flex items-center gap-2.5 
          text-span text-orbit-cyan text-neon">
            {t('hero.eyebrow')}
          </motion.div>

          <motion.h1 {...fadeUp(0.25)} 
          className="mb-6 max-w-[700px] text-[clamp(40px,6vw,72px)] font-bold leading-[1.03] tracking-[-0.03em] text-white">
            {t('hero.titleLine1')}<br /> <span className="text-stellar-white">{t('hero.titleLine2')}</span>
          </motion.h1>

          <motion.p {...fadeUp(0.4)} className="text-lead mb-6 max-w-[520px] text-white-85">
            {t('hero.lead')}
          </motion.p>

          <motion.p {...fadeUp(0.5)} 
          className="max-w-[520px] text-body font-light text-stellar-white mb-8">
            {t('hero.description')}
          </motion.p>

        </Container>

        <Fade size="lg" color="deepblue" />
      </section>


    )
}
export default AboutHero;