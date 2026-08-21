import styles from './App.module.scss'
import AboutMe from './components/about-me/AboutMe'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'
import ServiceBlock from './components/service-block/ServiceBlock'

function App() {
  return (
    <div className={styles.container}>
      <AboutMe />
      <ServiceBlock />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
