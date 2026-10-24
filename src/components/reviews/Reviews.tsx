import { useState } from 'react'
import { REVIEWS } from '../../constants'
import Section from '../section/Section'
import styles from './Reviews.module.scss'

function Reviews() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((current) => (current === 0 ? REVIEWS.length - 1 : current - 1))
  const next = () => setIndex((current) => (current === REVIEWS.length - 1 ? 0 : current + 1))

  const review = REVIEWS[index]

  return (
    <Section id="reviews" num="04" title="Отзывы">
      <div className={styles.card}>
        <p className={styles.text}>{review.text}</p>

        <div className={styles.author}>
          <span className={styles.name}>{review.name}</span>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <span className={styles.metaLabel}>Услуга:</span> {review.service}
            </span>
            {review.experience && (
              <span className={styles.metaItem}>
                <span className={styles.metaLabel}>Опыт:</span> {review.experience}
              </span>
            )}
            {review.offer && (
              <span className={styles.metaItem}>
                <span className={styles.metaLabel}>Оффер:</span> {review.offer}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.arrow} onClick={prev} aria-label="Предыдущий отзыв">←</button>

        <div className={styles.dots}>
          {REVIEWS.map((_, dotIndex) => (
            <span
              key={dotIndex}
              className={dotIndex === index ? `${styles.dot} ${styles.dotActive}` : styles.dot}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>

        <button className={styles.arrow} onClick={next} aria-label="Следующий отзыв">→</button>
      </div>
    </Section>
  )
}

export default Reviews
