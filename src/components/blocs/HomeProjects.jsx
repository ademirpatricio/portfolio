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
    link: '#',
    description:
      'Gerador de propostas comerciais para freelancers e agências. Do zero ao deploy.',
  },
  {
    accent: 'from-spacy-navy to-nebula-violet/55',
    image: malabaresweddingImg,
    tag: 'Web',
    title: 'Malabares Wedding',
    link: '#',
    description:
      'Site para agência de casamentos com foco em experiência emocional e storytelling visual.',
  },
  {
    accent: 'from-spacy-navy to-solar-gold/18',
    image: thaynaguiarImg,
    tag: 'Web / Branding',
    title: 'Thayná Aguiar',
    link: '/projetos/thayna-aguiar',
    description:
      'Portfólio pessoal construído em React, do wireframe ao ar em uma semana.',
  },
]

function HomeProjects() {
  return (
    <section
      className="bg-deep-blue py-20 md:pt-30 pb-40 relative"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="mb-10 md:mb-16 text-center ">
          <Title 
          span="Projetos em destaque"
          title="Do problema ao deploy."
          content="Projetos reais. Coisas que estão em órbita."
          />
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 relative z-20">
          {projects.map((project) => (
              <Link to={project.link}
              className="block overflow-hidden rounded-card 
              bg-spacy-navy text-white transition
              hover:border-cosmic-blue/30 hover:-translate-y-1.5"
              key={project.title}
            >
              <div className={`flex aspect-video w-full items-center justify-center bg-gradient-to-br ${project.accent}`}>
                <img src={project.image} alt="" className="inset-0 w-full object-cover object-center" />
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
            </Link>
          ))}
        </div>
      </div>
       
    </section>
  )
}

export default HomeProjects
