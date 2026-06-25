import Nav from '../layout/Nav'
import HomeHero from '../blocs/HomeHero'
import HomeAbout from '../blocs/HomeAbout'
import HomeServices from '../blocs/HomeServices'
import HomeProjects from '../blocs/HomeProjects'
import HomeCta from '../blocs/HomeCta'
import Footer from '../layout/Footer'

function Home() {
  return (
    <>
      <Nav />
      
      <main>
        <HomeHero />
        <HomeAbout />
        <HomeServices />
        <HomeProjects />
        <HomeCta />
      </main>

      <Footer />

    </>
  )
}

export default Home
