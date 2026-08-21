import styles from './App.module.scss'
import AboutMe from './components/about-me/AboutMe'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Reviews from './components/reviews/Reviews'
import ServiceBlock from './components/service-block/ServiceBlock'

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <AboutMe />
        <ServiceBlock />
        <Reviews />
        <Faq />
        <Footer />
      </div>
    </>
  )
}

export default App
