import Nav from '../components/layout/Nav'
import HomeHero from '../components/blocs/HomeHero'
import HomeAbout from '../components/blocs/HomeAbout'
import HomeServices from '../components/blocs/HomeServices'
import HomeProjects from '../components/blocs/HomeProjects'
import HomeCta from '../components/blocs/HomeCta'
import Footer from '../components/layout/Footer'
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
