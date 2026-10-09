import { useTranslation } from 'react-i18next'

import Cta from '../components/layout/Cta'
import Instagram from '../components/ui/Instagram'
import usePageTitle from '../hooks/usePageTitle'

import AboutHero from '../components/blocs/about/AboutHero'
import AboutTrajetory from '../components/blocs/about/AboutTrajetory'
import AboutManifest from '../components/blocs/about/AboutManifest'
import AboutValues from '../components/blocs/about/AboutValues'
import AboutExperience from '../components/blocs/about/AboutExperience'

function About() {
  const { t } = useTranslation('about')
  usePageTitle(t('meta.title'))

  return (
    <>
    
    <main>
      <AboutHero />
      <AboutTrajetory />
      <AboutManifest />
      <AboutValues />
      <AboutExperience />
      <Instagram />
      <Cta />
    </main>

    </>
  )
}

export default About
