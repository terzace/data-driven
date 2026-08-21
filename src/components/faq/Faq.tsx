import { useState } from 'react'
import { FAQ_LIST, LINKS } from '../../constants'
import styles from './Faq.module.scss'

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div id="faq" className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Часто задаваемые вопросы</h2>
        <p className={styles.headerNote}>
          Если ответа на вопрос нет — <a href={LINKS.privateTg} target="_blank" rel="noreferrer">пиши в Telegram</a>, отвечу лично.
        </p>
      </div>

      <div className={styles.list}>
        {FAQ_LIST.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div key={index} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span className={isOpen ? `${styles.icon} ${styles.iconOpen}` : styles.icon}>+</span>
              </button>

              {isOpen && <p className={styles.answer}>{item.answer}</p>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Faq
