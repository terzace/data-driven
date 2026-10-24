import type { ReactNode } from 'react'
import styles from './Section.module.scss'

type SectionProps = {
  id: string
  num: string
  title: string
  note?: ReactNode
  children: ReactNode
}

function Section({ id, num, title, note, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.head}>
        <div className={styles.title}>
          <span className={styles.num}>{num}</span>
          <h2>{title}</h2>
        </div>
        {note && <p className={styles.note}>{note}</p>}
      </div>
      {children}
    </section>
  )
}

export default Section
