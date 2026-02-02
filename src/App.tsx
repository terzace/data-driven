import styles from './App.module.scss'
import AboutMe from './components/about-me/AboutMe'
import ServiceBlock from './components/service-block/ServiceBlock'

function App() {
  return (
    <div className={styles.container}>
      <AboutMe />
      <ServiceBlock />
    </div>
  )
}

export default App
