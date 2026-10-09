import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import Cta from '../components/layout/Cta'
import FadeIn from '../components/ui/FadeIn'
import Title from '../components/ui/Title'
import ProjectCard from '../components/ui/ProjectCard'
import usePageTitle from '../hooks/usePageTitle'

import { useProjects } from '../hooks/useProjects'
import { useLocalizedPath } from '../hooks/useLang'
import { cardVariants, containerVariants } from '../utils/motion'

function Projects() {
  const { t } = useTranslation('projects')
  usePageTitle(t('page.title'))
  const projects = useProjects()
  const lp = useLocalizedPath()

  return (
    <>
    <section
      className="relative bg-deep-blue py-20 md:pt-50 md:pb-28
      bg-[url('./assets/images/projects-hero-bg.jpg')] 
      bg-top bg-no-repeat bg-contain"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-container px-6 md:px-12">
        <FadeIn className="mb-10 text-center md:mb-16">
          <Title
            span={t('page.eyebrow')}
            titleH2={t('page.heading')}
            content={t('page.content')}
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
      </div>
    </section>
    <Cta/>
    </>
  )
}

export default Projects