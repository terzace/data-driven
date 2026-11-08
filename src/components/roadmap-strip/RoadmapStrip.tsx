import { ROADMAP_MINI } from '../../constants'
import styles from './RoadmapStrip.module.scss'

function RoadmapStrip() {
  return (
    <a className={styles.strip} href="/roadmap/" aria-label="Открыть роадмап">
      <div className={styles.head}>
        <div>
          <p className={styles.label}>Роадмап</p>
          <h2>Путь до оффера</h2>
          <p className={styles.note}>10 блоков от первого SQL-запроса до собеседований</p>
        </div>
        <span className={styles.link}>Смотреть роадмап →</span>
      </div>

      <ol className={styles.steps}>
        {ROADMAP_MINI.map((step) => (
          <li key={step.num} className={step.offer ? `${styles.step} ${styles.stepOffer}` : styles.step}>
            <span className={styles.node}>{step.num}</span>
            <span className={styles.title}>{step.title}</span>
          </li>
        ))}
      </ol>
    </a>
  )
}

export default RoadmapStrip
