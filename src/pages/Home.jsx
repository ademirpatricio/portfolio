
import HomeHero from '../components/blocs/home/HomeHero'
import HomeAbout from '../components/blocs/home/HomeAbout'
import HomeServices from '../components/blocs/home/HomeServices'
import HomeProjects from '../components/blocs/home/HomeProjects'
import Cta from '../components/layout/Cta'
import usePageTitle from '../hooks/usePageTitle'

function Home() {
  usePageTitle()

  return (
    <>

      <main>
        <HomeHero />
        <HomeAbout />
        <HomeServices />
        <HomeProjects />
        <Cta />
      </main>

    </>
  )
}

export default Home
