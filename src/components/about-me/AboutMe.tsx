import { DESCRIPTION_ABOUT_ME } from '../../constants'
import Section from '../section/Section'
import styles from './AboutMe.module.scss'

function AboutMe() {
  return (
    <Section id="about" num="01" title="Обо мне">
      <ul className={styles.list}>
        {DESCRIPTION_ABOUT_ME.map((item) => (
          <li key={item.text1} className={styles.item}>
            <p className={styles.bold}>{item.text1}</p>
            <p className={styles.gray}>{item.text2}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default AboutMe
