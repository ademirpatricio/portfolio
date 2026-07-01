import { Link } from 'react-router-dom'

import Title from '../ui/Title'
import Fade from '../ui/Fade'

import propostarapidaImg from '../../assets/projects/proposta-rapida/thumbnail.jpg'
import malabaresweddingImg from '../../assets/projects/malabares-wedding/thumbnail.jpg'
import thaynaguiarImg from '../../assets/projects/thayna-aguiar/thumbnail.jpg'

const projects = [
  {
    accent: 'from-spacy-navy to-orbit-cyan/18',
    image: propostarapidaImg,
    tag: 'Produto Digital',
    title: 'Proposta Rápida',
    link: 'https://propostarapida.malabares.com.br',
    external: true,
    description:
      'Gerador de propostas comerciais para freelancers e agências. Do zero ao deploy.',
  },
  {
    accent: 'from-spacy-navy to-nebula-violet/55',
    image: malabaresweddingImg,
    tag: 'Web',
    title: 'Malabares Wedding',
    link: 'https://wedding.malabares.com.br',
    external: true,
    description:
      'Site para agência de casamentos com foco em experiência emocional e storytelling visual.',
  },
  {
    accent: 'from-spacy-navy to-solar-gold/18',
    image: thaynaguiarImg,
    tag: 'Web / Branding',
    title: 'Thayná Aguiar',
    link: '/projetos/thayna-aguiar',
    external: false,
    description:
      'Portfólio pessoal construído em React, do wireframe ao ar em uma semana.',
  },
]

function HomeProjects() {
  return (
    <section
      className="relative bg-deep-blue py-20 pb-40 md:pt-30"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="mb-10 text-center md:mb-16">
          <Title
            span="Projetos em destaque"
            title="Do problema ao deploy."
            content="Projetos reais. Coisas que estão em órbita."
          />
        </div>

        <div className="relative z-20 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {projects.map((project) => {
            const card = (
              <>
                <div
                  className={`flex aspect-video w-full items-center justify-center bg-gradient-to-br ${project.accent}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover object-center"
                  />
                </div>

                <div className="p-7 pt-6">
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.08em] text-orbit-cyan">
                    {project.tag}
                  </p>

                  <h3 className="mb-2 text-xl font-bold tracking-[-0.01em]">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-[1.65] text-white-55">
                    {project.description}
                  </p>
                </div>
              </>
            )

            const className =
              'block overflow-hidden rounded-card bg-spacy-navy text-white transition hover:border-cosmic-blue/30 hover:-translate-y-1.5'

            return project.external ? (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {card}
              </a>
            ) : (
              <Link
                key={project.title}
                to={project.link}
                className={className}
              >
                {card}
              </Link>
            )
          })}
        </div>
      </div>

      <Fade />
    </section>
  )
}

export default HomeProjects