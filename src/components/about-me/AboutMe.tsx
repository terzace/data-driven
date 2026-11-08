import { DESCRIPTION_ABOUT_ME, RESULTS } from '../../constants'
import photo from '../../assets/bogdan.jpg'
import Section from '../section/Section'
import styles from './AboutMe.module.scss'

function AboutMe() {
  return (
    <Section id="about" num="01" title="Обо мне">
      <div className={styles.top}>
        <figure className={styles.photo}>
          <img src={photo} alt="Богдан Иванов" width={560} height={700} loading="lazy" />
          <figcaption className={styles.caption}>
            <span className={styles.captionName}>Богдан Иванов</span>
            <span className={styles.captionNote}>Data Driven</span>
          </figcaption>
        </figure>

        <div className={styles.results}>
          {RESULTS.map((item) => (
            <div key={item.label} className={styles.result} data-tilt>
              <p className={styles.value}>{item.value}</p>
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <ul className={styles.list}>
        {DESCRIPTION_ABOUT_ME.map((item) => (
          <li key={item.text1} className={styles.item} data-tilt>
            <p className={styles.bold}>{item.text1}</p>
            <p className={styles.gray}>{item.text2}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default AboutMe
