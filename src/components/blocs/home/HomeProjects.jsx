import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import Title from '../../ui/Title'
import Fade from '../../ui/Fade'
import ProjectCard from '../../ui/ProjectCard'
import FadeIn from '../../ui/FadeIn'
import Button from '../../ui/Button'

import { useFeaturedProjects } from '../../../hooks/useProjects'
import { useLocalizedPath } from '../../../hooks/useLang'
import { cardVariants, containerVariants } from '../../../utils/motion'

function HomeProjects() {
  const { t } = useTranslation('home')
  const projects = useFeaturedProjects()
  const lp = useLocalizedPath()

  return (
    <section
      className="relative bg-deep-blue pt-4 py-10 md:py-28"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-container px-6 md:px-12">
        <FadeIn className="mb-10 text-center md:mb-16">
          <Title
            span={t('projects.eyebrow')}
            titleH2={t('projects.title')}
          />
        </FadeIn>

        <motion.div
          className="relative z-20 grid grid-cols-1 gap-5 lg:grid-cols-3"
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
                <Link to={lp(project.link)} className={className}>
                  <ProjectCard {...project} />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <FadeIn className="mt-10 text-center md:mt-16">
          <Button variant="secondary" href="/projetos" size="md">
            {t('projects.more')}
          </Button>
        </FadeIn>
      </div>

      <Fade />
    </section>
  )
}

export default HomeProjects
