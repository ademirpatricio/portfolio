
import HomeHero from '../components/blocs/HomeHero'
import HomeAbout from '../components/blocs/HomeAbout'
import HomeServices from '../components/blocs/HomeServices'
import HomeProjects from '../components/blocs/HomeProjects'
import HomeCta from '../components/blocs/HomeCta'

function Home() {
  return (
    <>

      <main>
        <HomeHero />
        <HomeAbout />
        <HomeServices />
        <HomeProjects />
        <HomeCta />
      </main>

    </>
  )
}

export default Home
