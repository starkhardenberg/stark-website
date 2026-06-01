'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { CTA_KENNISMAKING_LABEL, hrefContactAlgemeen, hrefKennismaking } from '@/lib/contact'
import styles from './Nav.module.css'

const NAV_TABS = [
  { id: 'coaching', label: 'Coaching', href: '/coaching' },
  { id: 'trainen', label: 'Training', href: '/trainen' },
  { id: 'bedrijven', label: 'Bedrijven', href: '/zakelijk' },
  { id: 'contact', label: 'Contact', href: hrefContactAlgemeen, isContact: true },
] as const

/** Paden die bij een dienst-tab horen (landingspagina + subpagina's). */
const TAB_ACTIVE_PREFIXES: Record<string, string[]> = {
  coaching: ['/coaching', '/momentum', '/impact', '/de-eerste-stap'],
  trainen: ['/trainen', '/lidmaatschap-volwassenen', '/zilverfitness', '/kids-teens'],
  bedrijven: [
    '/zakelijk',
    '/fundament-preventief',
    '/fundament-reintegratie',
    '/fundament-teamtraject',
  ],
}

export default function Nav() {
  const pathname = usePathname()
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

  function isTabActive(tab: (typeof NAV_TABS)[number]) {
    if ('isContact' in tab && tab.isContact) {
      return pathname.startsWith('/contact')
    }
    const prefixes = TAB_ACTIVE_PREFIXES[tab.id]
    if (!prefixes) return pathname === tab.href
    return prefixes.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
    )
  }

  return (
    <header className={`${styles.nav} ${open ? styles.navMenuOpen : ''}`}>
      <a href="/" className={styles.wordmark} aria-label="STARK! home">
        Wi&apos;j bint STARK!
      </a>

      <div className={styles.right}>
        <a href={hrefKennismaking} className={styles.cta}>{CTA_KENNISMAKING_LABEL}</a>

        <nav className={styles.tabBar} aria-label="Hoofdmenu">
          <ul className={styles.tabList}>
            {NAV_TABS.map((tab) => {
              const active = isTabActive(tab)
              return (
                <li key={tab.id} className={active ? styles.tabItemActive : styles.tabItem}>
                  <a
                    href={tab.href}
                    className={styles.tabLink}
                    aria-current={active ? 'page' : undefined}
                  >
                    {tab.label}
                  </a>
                </li>
              )
            })}
          </ul>
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
          {NAV_TABS.map((tab) => {
            const active = isTabActive(tab)
            return (
              <a
                key={tab.id}
                href={tab.href}
                className={active ? styles.mobileTabActive : undefined}
                aria-current={active ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {tab.label}
              </a>
            )
          })}
          <a href={hrefKennismaking} className={styles.mobileCta} onClick={() => setOpen(false)}>
            {CTA_KENNISMAKING_LABEL}
          </a>
        </nav>
      )}
    </header>
  )
}
