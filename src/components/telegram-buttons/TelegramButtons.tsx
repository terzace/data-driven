import { LINKS } from '../../constants'
import styles from './TelegramButtons.module.scss'

function TelegramButtons() {
  return (
    <div className={styles.wrapper}>
      <button className={styles.customButton} onClick={() => window.open(LINKS.groupTg, '_blank')}>Telegram канал</button>
    </div>
  )
}

export default TelegramButtons
