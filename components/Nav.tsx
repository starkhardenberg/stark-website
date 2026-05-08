'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Nav.module.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.nav}>
      <a href="/" aria-label="STARK! home" className={styles.logoLink}>
        <Image
          src="/images/stark_logo_wit.png"
          alt="STARK!"
          width={120}
          height={38}
          className={styles.logo}
          priority
        />
      </a>

      <div className={styles.right}>
        <span className={styles.signature}>Wi&apos;j bint STARK!</span>

        <nav className={styles.menu} aria-label="Hoofdmenu">
          <a href="#coaching">Coaching</a>
          <a href="#bedrijven">Bedrijven</a>
          <a href="#trainen">Trainen</a>
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
        </nav>
      )}
    </header>
  )
}
