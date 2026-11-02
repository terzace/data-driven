import { HOW_IT_WORKS, HOW_IT_WORKS_LEAD, HOW_IT_WORKS_TEXT } from '../../constants'
import Section from '../section/Section'
import styles from './HowItWorks.module.scss'

function HowItWorks() {
  return (
    <Section
      id="mentoring"
      num="02"
      title="Что такое менторство"
      note="Коротко: что ты получаешь и как это идет."
    >
      <div className={styles.lead}>
        <p className={styles.leadTitle}>{HOW_IT_WORKS_LEAD}</p>
        <p className={styles.leadText}>{HOW_IT_WORKS_TEXT}</p>
      </div>

      <ol className={styles.steps}>
        {HOW_IT_WORKS.map((step) => (
          <li key={step.num} className={styles.step}>
            <span className={styles.stepNum}>{step.num}</span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default HowItWorks
