import { FOR_WHO } from '../../constants'
import styles from './ForWho.module.scss'

function ForWho() {
  return (
    <div id="for-who" className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Кому подойдет менторство</h2>
        <p className={styles.headerNote}>Если узнаешь себя хотя бы в одном пункте, точно сможем найти, как двигаться быстрее.</p>
      </div>

      <div className={styles.cardWrapper}>
        {FOR_WHO.map((item, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.icon}>{item.icon}</p>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForWho
