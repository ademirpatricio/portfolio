import { motion } from 'framer-motion'
import Container from '../../layout/Container'
import Fade from '../../../components/ui/Fade'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
})

function AboutHero() {
    return(

  
      <section className="relative overflow-hidden bg-spacy-navy 
      pb-0 md:pb-12 pt-40 bg-[url('./assets/images/services-bg.jpg')] 
      bg-cover bg-center bg-no-repeat">
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(100,101,247,0.12)_0%,transparent_70%)]" />

        <Container className="relative z-90">

          <motion.div {...fadeUp(0.1)} 
          className="mb-6 inline-flex items-center gap-2.5 
          text-span text-orbit-cyan text-neon">
            Quem sou
          </motion.div>

          <motion.h1 {...fadeUp(0.25)} 
          className="mb-6 max-w-[700px] text-[clamp(40px,6vw,72px)] font-bold leading-[1.03] tracking-[-0.03em] text-white">
            Do gráfico<br /> <span className="text-stellar-white">ao produto.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.4)} className="text-lead mb-6 max-w-[520px] text-white-85">
            Mais de 10 anos projetando produtos digitais. Sempre começando pela pergunta certa.
          </motion.p>

          <motion.p {...fadeUp(0.5)} 
          className="max-w-[520px] text-body font-light text-stellar-white mb-8">
            Me chamo Ademir Patrício. Sou designer de produto com base em desenvolvimento front-end.
            Atualmente em Recife, Brasil. Disponível para trabalhos, freelance e oportunidades remotas.
          </motion.p>

        </Container>

        <Fade size="lg" color="deepblue" />
      </section>


    )
}
export default AboutHero;