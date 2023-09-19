import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HomeAbout from './components/HomeAbout'
import HomeBanner from './components/HomeBanner'
import HomeSpecials from './components/HomeSpecials'
import HomeTestimonials from './components/HomeTestimonials'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HomeBanner />
        <HomeAbout />
        <HomeTestimonials />
        <HomeSpecials />

      </main>
      <Footer />
    </>
  )
}

export default Home
