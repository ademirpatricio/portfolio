import Title from '../ui/Title'
import Fade from '../ui/Fade'

const services = [
  {
    icon: '◎',
    title: 'Product Design',
    description:
      'Começo pelo problema, não pela tela. Fluxos, protótipos e decisões que fazem sentido para quem usa e para quem paga.',
  },
  {
    icon: '</>',
    title: 'Front-End',
    description:
      'O que projeto, sei construir. React, Next.js e Tailwind CSS. Do componente ao deploy.',
  },
  {
    icon: '⬡',
    title: 'Design Systems',
    description:
      'Consistência não acontece por acidente. Tokens, componentes e padrões com propósito.',
  },
]

function HomeServices() {
  return (
    <section id="services" className="bg-spacy-navy md:py-50 relative
    bg-[url('./images/services-bg.jpg')] bg-cover bg-center bg-no-repeat w-full" 
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
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-icon bg-cosmic-blue/10 text-xl text-cosmic-blue"
                aria-hidden="true"
              >
                {service.icon}
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
      <Fade size="sm" color="deepblue"/>
    </section>
  )
}

export default HomeServices
