import { useState } from 'react'
import { LINKS } from '../../constants'
import styles from './Header.module.scss'

const NAV_LINKS = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Менторство', href: '#mentorship' },
  { label: 'Роадмап', href: '/roadmap/' },
  { label: 'Доп. услуги', href: '#services' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <button
          className={isOpen ? `${styles.burger} ${styles.burgerOpen}` : styles.burger}
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Открыть меню"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={isOpen ? `${styles.menu} ${styles.menuOpen}` : styles.menu}>
          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
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
      </div>
    </header>
  )
}

export default Header
