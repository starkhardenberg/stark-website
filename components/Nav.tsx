'use client'

import { useState } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.nav}>
      <a href="/" className={styles.wordmark} aria-label="STARK! home">
        Wi&apos;j bint STARK!
      </a>

      <div className={styles.right}>
        <a href="#kennismaking" className={styles.cta}>Plan een kennismaking</a>

        <nav className={styles.menu} aria-label="Hoofdmenu">
          <a href="#coaching">Coaching</a>
          <a href="#trainen">Training</a>
          <a href="#bedrijven">Bedrijven</a>
          <a href="#kennismaking">Contact</a>
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
          <a href="#kennismaking" onClick={() => setOpen(false)}>Contact</a>
          <a href="#kennismaking" className={styles.mobileCta} onClick={() => setOpen(false)}>Plan een kennismaking</a>
        </nav>
      )}
    </header>
  )
}
