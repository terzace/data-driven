import { LINKS } from '../../constants'
import styles from './Header.module.scss'

const NAV_LINKS = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Менторство', href: '#mentorship' },
  { label: 'Доп. услуги', href: '#services' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.materialsButton} onClick={() => window.open(LINKS.groupTg, '_blank')}>
            Бесплатные материалы
          </button>
          <button className={styles.ctaButton} onClick={() => window.open(LINKS.privateTg, '_blank')}>
            Бесплатная консультация
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
