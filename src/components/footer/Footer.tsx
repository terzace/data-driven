import { LINKS } from '../../constants'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.cta}>
          <h2>Обсудим, с чего начать?</h2>
          <p>Напиши в Telegram: разберём твой бэкграунд и цель, а дальше решим, нужен ли формат менторства.</p>
        </div>

        <div className={styles.actions}>
          <a className="btn btn--primary btn--lg" href={LINKS.privateTg} target="_blank" rel="noreferrer">Написать</a>
          <a className="btn btn--ghost btn--lg" href={LINKS.groupTg} target="_blank" rel="noreferrer">Telegram-канал</a>
        </div>
      </div>

      <p className={styles.copy}>Data Driven · Богдан Иванов</p>
    </footer>
  )
}

export default Footer
