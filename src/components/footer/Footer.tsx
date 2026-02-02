import styles from './Footer.module.scss'
import { LINKS } from '../../constants'

function Footer() {
  return (
    <div className={styles.wrapper}>
      <a href={LINKS.groupTg} target='_blank' className={styles.link}>© Мой канал в Telegram</a>
    </div>
  )
}

export default Footer
