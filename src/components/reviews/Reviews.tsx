import { useRef, useState } from 'react'
import { REVIEWS } from '../../constants'
import Section from '../section/Section'
import styles from './Reviews.module.scss'

function Reviews() {
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const touchX = useRef<number | null>(null)

  const go = (target: number) => {
    setIndex(target)
    setExpanded(false)
  }
  const prev = () => go(index === 0 ? REVIEWS.length - 1 : index - 1)
  const next = () => go(index === REVIEWS.length - 1 ? 0 : index + 1)

  const onTouchEnd = (endX: number) => {
    if (touchX.current === null) return
    const delta = endX - touchX.current
    touchX.current = null
    if (Math.abs(delta) > 60) (delta < 0 ? next : prev)()
  }

  const review = REVIEWS[index]
  const isLong = review.text.length > 420

  return (
    <Section id="reviews" num="05" title="Отзывы">
      <div
        className={styles.card}
        onTouchStart={(event) => { touchX.current = event.touches[0].clientX }}
        onTouchEnd={(event) => onTouchEnd(event.changedTouches[0].clientX)}
      >
        <span className={styles.quote} aria-hidden="true">“</span>

        <p className={isLong && !expanded ? `${styles.text} ${styles.textClamped}` : styles.text}>{review.text}</p>

        {isLong && (
          <button className={styles.more} onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
            {expanded ? 'Свернуть' : 'Читать полностью'}
          </button>
        )}

        <div className={styles.author}>
          <span className={styles.avatar} aria-hidden="true">{review.name.charAt(0)}</span>

          <div className={styles.authorInfo}>
            <span className={styles.name}>{review.name}</span>

            <div className={styles.meta}>
              {review.offer && (
                <span className={`${styles.metaItem} ${styles.metaOffer}`}>
                  <span className={styles.metaLabel}>Оффер:</span> {review.offer}
                </span>
              )}
              <span className={styles.metaItem}>
                <span className={styles.metaLabel}>Услуга:</span> {review.service}
              </span>
              {review.experience && (
                <span className={styles.metaItem}>
                  <span className={styles.metaLabel}>Опыт:</span> {review.experience}
                </span>
              )}
              {review.duration && (
                <span className={styles.metaItem}>
                  <span className={styles.metaLabel}>Срок:</span> {review.duration}
                </span>
              )}
              {review.offers && (
                <span className={styles.metaItem}>
                  <span className={styles.metaLabel}>Офферов:</span> {review.offers}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.arrow} onClick={prev} aria-label="Предыдущий отзыв">←</button>

        <div className={styles.dots}>
          {REVIEWS.map((item, dotIndex) => (
            <button
              key={dotIndex}
              className={styles.dotButton}
              onClick={() => go(dotIndex)}
              aria-label={`Отзыв ${dotIndex + 1}: ${item.name}`}
              aria-current={dotIndex === index}
            >
              <span className={dotIndex === index ? `${styles.dot} ${styles.dotActive}` : styles.dot} />
            </button>
          ))}
        </div>

        <button className={styles.arrow} onClick={next} aria-label="Следующий отзыв">→</button>
      </div>
    </Section>
  )
}

export default Reviews
