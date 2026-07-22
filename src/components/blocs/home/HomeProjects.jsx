import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Title from '../../ui/Title'
import Fade from '../../ui/Fade'
import ProjectCard from '../../ui/ProjectCard'
import FadeIn from '../../ui/FadeIn'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}

import propostarapidaImg from '../../../assets/projects/proposta-rapida/thumbnail.jpg'
import malabaresweddingImg from '../../../assets/projects/malabares-wedding/thumbnail.jpg'
import thaynaguiarImg from '../../../assets/projects/thayna-aguiar/thumbnail.jpg'
import malabaresImg from '../../../assets/projects/malabares/thumbnail.jpg'
import institutovalentimImg from '../../../assets/projects/instituto-valentim/thumbnail.jpg'
import barbaraacciolyImg from '../../../assets/projects/barbara-accioly/thumbnail.jpg'
import mowcarImg from '../../../assets/projects/mowcar/thumbnail.jpg'


const projects = [
  {
    image: thaynaguiarImg,
    tag: 'Web / Branding',
    title: 'Thayná Aguiar',
    link: '/projetos/thayna-aguiar',
    external: false,
    description:
      'Portfólio pessoal construído em React, do wireframe ao ar em uma semana.',
  },
  {
    image: propostarapidaImg,
    tag: 'Produto / SaaS',
    title: 'Proposta Rápida',
    link: '/projetos/proposta-rapida',
    external: false,
    description:
      'Gerador de propostas comerciais para freelancers e agências. Do zero ao deploy.',
  },
  {
    image: mowcarImg,
    tag: 'Aplicativo',
    title: 'Mowcar',
    link: '/projetos/mowcar',
    external: false,
    description:
      'Aplicativo para gerenciamento de aluguel de veículos de frotas corporativas.',
  },
  {
    image: malabaresImg,
    tag: 'Web / Branding',
    title: 'Malabares MKT & TEC',
    link: 'https://malabares.com.br',
    external: true,
    description:
      'Agência de marketing digital completa. Tudo que você precisa para o seu negócio.',
  },
  {
    image: malabaresweddingImg,
    tag: 'Web',
    title: 'Malabares Wedding',
    link: 'https://wedding.malabares.com.br',
    external: true,
    description:
      'Serviço focado em identidade visual, sites de casamento e experiência emocional.',
  },
  {
    image: institutovalentimImg,
    tag: 'Web / Branding',
    title: 'Instituto Valentim',
    link: 'https://www.behance.net/gallery/233370685/Instituto-Valentim-Pagina-e-Anuncios',
    external: true,
    description:
      'Instituto focado em metodologias próprias e desenvolvimento humano.',
  },
  /*
  {,
    image: barbaraacciolyImg,
    tag: 'Web',
    title: 'Bárbara Accioly',
    link: 'https://barbaraaccioly.com.br',
    external: true,
    description:
      'Curso completo de engajamento para instrutores de Pilates.',
  },
  */
]

function HomeProjects() {
  return (
    <section
      className="relative bg-deep-blue py-20 md:py-28"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-container px-6 md:px-12">
        <FadeIn className="mb-10 text-center md:mb-16">
          <Title
            span="Projetos em destaque"
            title="Do problema ao deploy."
            content="Projetos reais. Coisas que estão em órbita."
          />
        </FadeIn>

        <motion.div
          className="relative z-20 grid grid-cols-2 gap-5 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((project) => {
            const className =
              'block overflow-hidden rounded-card bg-spacy-navy text-white'

            return project.external ? (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard {...project} />
              </motion.a>
            ) : (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <Link to={project.link} className={className}>
                  <ProjectCard {...project} />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <Fade />
    </section>
  )
}

export default HomeProjects