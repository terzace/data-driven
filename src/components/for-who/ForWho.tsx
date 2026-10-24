import { FOR_WHO } from '../../constants'
import Section from '../section/Section'
import styles from './ForWho.module.scss'

function ForWho() {
  return (
    <Section
      id="for-who"
      num="02"
      title="Кому подойдёт"
      note="Если узнаешь себя хотя бы в одном пункте, точно сможем найти, как двигаться быстрее."
    >
      <div className={styles.cardWrapper}>
        {FOR_WHO.map((item, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.icon}>{item.icon}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default ForWho
