import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Title from '../../ui/Title'
import Fade from '../../ui/Fade'
import ProjectCard from '../../ui/ProjectCard'
import FadeIn from '../../ui/FadeIn'
import Button from '../../ui/Button'

import { featuredProjects as projects } from '../../../data/projects'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}

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
            titleH2="Do problema ao deploy."
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

        <FadeIn className="mt-10 text-center md:mt-16">
          <Button variant="secondary" href="/projetos" size="md">
            Ver mais projetos ⇢
          </Button>
        </FadeIn>
      </div>

      <Fade />
    </section>
  )
}

export default HomeProjects
