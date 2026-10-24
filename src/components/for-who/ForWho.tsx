import { FOR_WHO } from '../../constants'
import Section from '../section/Section'
import ForWhoIconSvg from './icons'
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
            <div className={styles.icon}>
              <ForWhoIconSvg name={item.icon} />
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default ForWho
