import { DESCRIPTION_ABOUT_ME } from '../../constants'
import Avatar from '../avatar/Avatar'
import TelegramButtons from '../telegram-buttons/TelegramButtons'
import styles from './AboutMe.module.scss'

function AboutMe() {
  return (
    <div id="about" className={styles.wrapper}>
      <Avatar />

      <div className={styles.titleWrapper}>
        <h1>Data Driven / Bogdan Ivanov</h1>
        <p className={styles.titleDesription}>Менторство и выход на оффер Data Analyst / Data Engineer</p>
      </div>

      <div className={styles.descWrapper}>
        {DESCRIPTION_ABOUT_ME.map((description, index) => (
          <div key={index} className={styles.textWrapper}> 
            <p className={styles.descriptionIcon}>{description.icon}</p> 
            <div>
            <p className={styles.textBold}>{description.text1}</p>
            <p className={styles.textColorGray}>{description.text2}</p>
            </div>
          </div>
        ))}
      </div>

      <TelegramButtons />
    </div>
  )
}

export default AboutMe
