import { LINKS, ROADMAP_MINI } from '../../constants'
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
          <a className="btn btn--primary btn--lg" href={LINKS.privateTg} target="_blank" rel="noreferrer">Написать</a>
          <a className="btn btn--ghost btn--lg" href={LINKS.groupTg} target="_blank" rel="noreferrer">Бесплатные материалы</a>
        </div>

        <ul className={styles.facts}>
          <li>Банки, FMCG, ритейл, стартапы</li>
          <li>200+ собеседований</li>
          <li>Договор и оплата частями</li>
        </ul>
      </div>

      <a className={styles.path} href="/roadmap/" aria-label="Открыть роадмап">
        <p className={styles.pathLabel}>Роадмап</p>
        <h2>Путь до оффера</h2>
        <p className={styles.pathNote}>10 блоков от первого SQL-запроса до собеседований</p>

        <ol className={styles.steps}>
          {ROADMAP_MINI.map((step) => (
            <li key={step.num} className={step.offer ? `${styles.step} ${styles.stepOffer}` : styles.step}>
              <span className={styles.node}>{step.num}</span>
              <span>{step.title}</span>
            </li>
          ))}
        </ol>

        <span className={styles.pathLink}>Смотреть роадмап →</span>
      </a>
    </section>
  )
}

export default Hero
