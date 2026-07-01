import Title from '../ui/Title'
import Fade from '../ui/Fade'

import productDesignIcon from '../../assets/icons/ic1.svg'
import frontendIcon from '../../assets/icons/ic2.svg'
import designSystemIcon from '../../assets/icons/ic3.svg'

const services = [
  {
    icon: productDesignIcon,
    title: 'Product Design',
    description:
      'Começo pelo problema, não pela tela. Fluxos, protótipos e decisões que fazem sentido para quem usa e para quem paga.',
  },
  {
    icon: frontendIcon,
    title: 'Front-End',
    description:
      'O que projeto, sei construir. React, Next.js e Tailwind CSS. Do componente ao deploy.',
  },
  {
    icon: designSystemIcon,
    title: 'Design Systems',
    description:
      'Consistência não acontece por acidente. Tokens, componentes e padrões com propósito.',
  },
]

function HomeServices() {
  return (
    <section id="services" className="bg-spacy-navy md:py-50 relative
    bg-[url('./assets/images/services-bg.jpg')] bg-cover bg-center bg-no-repeat w-full" 
    aria-labelledby="services-title">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="mb-10 md:mb-16 text-center">
          <Title
            span="O que faço"
            title="Antes de criar, compreender."
            content="Cada entrega começa com a pergunta certa."
          />
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 relative z-30">
          {services.map((service) => (
            <article
              className="rounded-card border border-cosmic-blue/12 bg-midnight-deep/45 p-8 transition hover:-translate-y-1 hover:border-cosmic-blue/40 md:p-10 md:px-8"
              key={service.title}
            >
              <div
                className="mb-6 flex h-20 w-20 items-center justify-center rounded-icon bg-cosmic-blue/10 text-xl text-cosmic-blue"
                aria-hidden="true"
              >
                <img src={service.icon} alt="" className="h-10 w-10 object-contain"/>
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
      </div>
      <Fade size="lg" color="deepblue"/>
    </section>
  )
}

export default HomeServices
