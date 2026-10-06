import { motion } from 'framer-motion'
import Container from '../../layout/Container'
import Fade from '../../../components/ui/Fade'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
})

function AboutTrajetory() {
    return(
        <section className="bg-deep-blue py-20 md:py-28">
        <Container>

          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:gap-20">

            <FadeIn direction="up">
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
            </FadeIn>

            <FadeIn direction="up">
            <div className="space-y-5 text-[17px] leading-[1.75] text-white-55">
              <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-orbit-cyan text-neon">
                A trajetória
              </span>
              <h2 className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
                Do gráfico ao produto.
              </h2>
              <p className="text-body font-light text-stellar-white mb-8">
                Comecei com design gráfico em 2009. Sites, peças institucionais, campanhas para educação e comunicação. Fui entendendo que a forma como as coisas aparecem muda o que as pessoas pensam delas.
              </p>
              <p className="text-body font-light text-stellar-white mb-8">
                Com o tempo, o trabalho ficou mais complexo. Em 2018, na Serttel, trabalhei no aplicativo Zona Azul Digital de Recife. Mobilidade urbana com problema real, escala real e resultado para medir. Foi lá que ficou claro o tipo de trabalho que quero fazer.
              </p>
              <p className="text-body font-light text-stellar-white mb-8">
                Em 2019 co-fundei a Malabares MKT. Aprendi a operar os dois lados: do conceito ao código. Isso mudou como projeto. Não projeto no vácuo porque sei o que vai acontecer na implementação.
              </p>
              <p className="text-body font-light text-stellar-white mb-8">
                Hoje atuo como product designer na GoExplosion e sigo construindo projetos próprios. O próximo passo: colaborar com times globais em produtos que valham a pena existir.
              </p>
            </div>
            </FadeIn>

          </div>

        </Container>
      </section>
    )
}
  export default AboutTrajetory;


  