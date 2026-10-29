import { LINKS, bookTg } from '../../constants'
import heroImage from '../../assets/hero.jpg'
import styles from './Hero.module.scss'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>Менторство · DA / PA / DE</p>

        <h1>
          Менторство по аналитике данных: <span>от нуля до оффера</span>
        </h1>

        <p className={styles.lead}>
          Помогаю войти в аналитику с нуля, вырасти до следующего грейда и выйти на оффер. Работаю с новичками,
          джунами и мидлами: план обучения, резюме, мок-собеседования и сопровождение до выхода на работу.
        </p>

        <div className={styles.actions}>
          <a className="btn btn--primary btn--lg" href={bookTg('hero')} target="_blank" rel="noreferrer">Записаться на консультацию</a>
          <a className="btn btn--ghost btn--lg" href={LINKS.groupTg} target="_blank" rel="noreferrer">Бесплатные материалы</a>
        </div>

        <ul className={styles.facts}>
          <li>С нуля до senior за 1,5 года</li>
          <li>200+ собеседований</li>
          <li>600 000 ₽+ за 2 года пути</li>
          <li>Оффер ученика 250 000 ₽ за 2 месяца</li>
          <li>Опыт работы в фин/бигтехах</li>
          <li>Резюме и мок-собеседования</li>
          <li>Договор и оплата частями</li>
        </ul>
      </div>

      <a className={styles.visual} href={LINKS.groupTg} target="_blank" rel="noreferrer" aria-label="Telegram-канал Data Driven">
        <img src={heroImage} alt="Data Driven · Bogdan Ivanov" />
      </a>
    </section>
  )
}

export default Hero
