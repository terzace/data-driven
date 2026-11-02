import { useEffect, useState } from 'react'
import { bookTg } from '../../constants'
import styles from './FloatingCta.module.scss'

// Плавающая кнопка записи: появляется после первого экрана и прячется, когда внизу видна финальная кнопка
function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const footer = document.querySelector('footer')
      const footerTop = footer ? footer.getBoundingClientRect().top : Infinity
      setVisible(window.scrollY > 500 && footerTop > window.innerHeight * 0.85)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <a
      className={visible ? `${styles.cta} ${styles.ctaVisible}` : styles.cta}
      href={bookTg('float')}
      target="_blank"
      rel="noreferrer"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      Записаться на консультацию
    </a>
  )
}

export default FloatingCta
