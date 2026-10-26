import { useState } from 'react'
import { FAQ_LIST, LINKS } from '../../constants'
import Section from '../section/Section'
import styles from './Faq.module.scss'

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section
      id="faq"
      num="05"
      title="Вопросы и ответы"
      note={
        <>
          Если ответа на вопрос нет, <a href={LINKS.privateTg} target="_blank" rel="noreferrer">пиши в Telegram</a>, отвечу лично.
        </>
      }
    >
      <div className={styles.list}>
        {FAQ_LIST.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div key={index} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className={isOpen ? `${styles.icon} ${styles.iconOpen}` : styles.icon}>+</span>
              </button>

              {isOpen && (
                <p className={styles.answer}>
                  {item.answer}
                  {item.link && (
                    <>
                      {' '}
                      <a href={item.link.href} download={item.link.download ? '' : undefined}>{item.link.label} ↓</a>
                    </>
                  )}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default Faq
