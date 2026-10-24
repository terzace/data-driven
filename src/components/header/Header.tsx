import { useState } from 'react'
import { LINKS, NAV_LINKS } from '../../constants'
import styles from './Header.module.scss'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <a href={import.meta.env.BASE_URL} className={styles.brand}>
          <span className={styles.brandName}>Богдан Иванов</span>
          <span className={styles.brandNote}>менторство по аналитике данных</span>
        </a>

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
            <a className="btn btn--ghost" href={LINKS.groupTg} target="_blank" rel="noreferrer">Бесплатные материалы</a>
            <a className="btn btn--primary" href={LINKS.privateTg} target="_blank" rel="noreferrer">Написать</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
