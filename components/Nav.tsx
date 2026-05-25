'use client'

import { useEffect, useState } from 'react'
import { CTA_KENNISMAKING_LABEL, hrefContactAlgemeen, hrefKennismaking } from '@/lib/contact'
import styles from './Nav.module.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = ''
      return
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => () => {
    document.body.style.overflow = ''
  }, [])

  return (
    <header className={`${styles.nav} ${open ? styles.navMenuOpen : ''}`}>
      <a href="/" className={styles.wordmark} aria-label="STARK! home">
        Wi&apos;j bint STARK!
      </a>

      <div className={styles.right}>
        <a href={hrefKennismaking} className={styles.cta}>{CTA_KENNISMAKING_LABEL}</a>

        <nav className={styles.menu} aria-label="Hoofdmenu">
          <a href="#coaching">Coaching</a>
          <a href="#trainen">Training</a>
          <a href="#bedrijven">Bedrijven</a>
          <a href={hrefContactAlgemeen}>Contact</a>
        </nav>

        <button
          className={styles.burger}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          type="button"
        >
          <span className={open ? styles.barTopOpen : styles.barTop} />
          <span className={open ? styles.barBotOpen : styles.barBot} />
        </button>
      </div>

      {open && (
        <nav className={styles.mobileMenu} aria-label="Mobiel menu">
          <a href="#coaching" onClick={() => setOpen(false)}>Coaching</a>
          <a href="#bedrijven" onClick={() => setOpen(false)}>Bedrijven</a>
          <a href="#trainen" onClick={() => setOpen(false)}>Trainen</a>
          <a href={hrefContactAlgemeen} onClick={() => setOpen(false)}>Contact</a>
          <a href={hrefKennismaking} className={styles.mobileCta} onClick={() => setOpen(false)}>{CTA_KENNISMAKING_LABEL}</a>
        </nav>
      )}
    </header>
  )
}
