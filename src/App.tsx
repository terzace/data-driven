import styles from './App.module.scss'
import AboutMe from './components/about-me/AboutMe'
import Contents from './components/contents/Contents'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'
import ForWho from './components/for-who/ForWho'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Reviews from './components/reviews/Reviews'
import ServiceBlock from './components/service-block/ServiceBlock'

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Hero />
        <Contents />
        <AboutMe />
        <ForWho />
        <ServiceBlock />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App
