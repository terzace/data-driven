import styles from './App.module.scss'
import AboutMe from './components/about-me/AboutMe'
import Contents from './components/contents/Contents'
import Faq from './components/faq/Faq'
import FloatingCta from './components/floating-cta/FloatingCta'
import Footer from './components/footer/Footer'
import ForWho from './components/for-who/ForWho'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import HowItWorks from './components/how-it-works/HowItWorks'
import Reviews from './components/reviews/Reviews'
import RoadmapStrip from './components/roadmap-strip/RoadmapStrip'
import ServiceBlock from './components/service-block/ServiceBlock'

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Hero />
        <RoadmapStrip />
        <Contents />
        <AboutMe />
        <HowItWorks />
        <ForWho />
        <ServiceBlock />
        <Reviews />
        <Faq />
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}

export default App
