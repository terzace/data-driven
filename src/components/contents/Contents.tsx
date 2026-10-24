import { SECTIONS } from '../../constants'
import styles from './Contents.module.scss'

function Contents() {
  return (
    <nav className={styles.wrapper} aria-label="Содержание">
      <p className={styles.label}>Содержание</p>
      <ul className={styles.list}>
        {SECTIONS.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>
              <span className={styles.num}>{item.num}</span>
              {item.title}
            </a>
          </li>
        ))}
        <li>
          <a href="/roadmap/">
            <span className={styles.num}>→</span>
            Роадмап курса
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Contents
