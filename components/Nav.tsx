'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import { CTA_KENNISMAKING_LABEL, hrefContactAlgemeen, hrefKennismaking } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_NAV, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import styles from './Nav.module.css'

const NAV_TABS = [
  { id: 'trainen', label: 'Training', href: '/trainen' },
  { id: 'coaching', label: 'Coaching', href: '/coaching' },
  { id: 'zakelijk', label: 'Zakelijk', href: '/zakelijk' },
  { id: 'team', label: 'Wie wij zijn', href: '/team' },
  { id: 'contact', label: 'Contact', href: hrefContactAlgemeen, isContact: true },
] as const

/** Paden die een dienst-tab actief maken.
 *  Subpagina's (Momentum, Impact) bewust níet: daar liegt een omhooggeklapte
 *  hoofdtab over waar je bent. Terug via ← Home of de tab zelf. */
const TAB_ACTIVE_PREFIXES: Record<string, string[]> = {
  coaching: ['/coaching'],
  trainen: ['/trainen'],
  zakelijk: ['/zakelijk'],
  team: ['/team'],
}

export default function Nav({
  variant = 'dark',
  compact = false,
  hideBurger = false,
  hideTabs = false,
  textMenu = false,
  backHref = '/',
  backLabel = 'Home',
  align = 'end',
  deep = false,
  ctaLabel = CTA_KENNISMAKING_LABEL,
  ctaHref = hrefKennismaking,
}: {
  variant?: 'dark' | 'light'
  compact?: boolean
  hideBurger?: boolean
  /** Verberg de desktop-tabrij (subpagina's: Home + CTA + burger blijven) */
  hideTabs?: boolean
  textMenu?: boolean
  backHref?: string
  backLabel?: string
  /** end = CTA/menu rechts (standaard); start = links */
  align?: 'start' | 'end'
  /** Homepage-hero: CTA lager in het videobeeld */
  deep?: boolean
  /** Override standaard "Plan kennismaking" (bijv. zakelijk: Plan een gesprek) */
  ctaLabel?: string
  ctaHref?: string
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

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

  const showBack = pathname !== backHref

  const mobileMenu =
    open && mounted
      ? createPortal(
          <nav
            className={`${styles.mobileMenu}${compact ? ` ${styles.mobileMenuCompact}` : ''}`}
            aria-label="Mobiel menu"
          >
            <div className={styles.mobileMenuLinks}>
              {showBack ? (
                <a href={backHref} className={styles.mobileNavBack} onClick={() => setOpen(false)}>
                  <span aria-hidden>←</span> {backLabel}
                </a>
              ) : null}
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
            </div>
            <div className={styles.mobileMenuFoot}>
              <a href={ctaHref} className={`${styles.mobileCta} ${STARK_CTA} ${STARK_CTA_PRIMARY}`} onClick={() => setOpen(false)}>
                {ctaLabel}
              </a>
            </div>
          </nav>,
          document.body,
        )
      : null

  return (
    <>
      <header
        className={`${styles.nav} ${align === 'start' ? styles.navAlignStart : ''} ${deep ? styles.navDeep : ''} ${open ? styles.navMenuOpen : ''} ${variant === 'light' ? styles.navLight : ''}`}
      >
        {showBack ? (
          <a href={backHref} className={styles.home} aria-label={`Terug naar ${backLabel}`}>
            <span aria-hidden>←</span>
            {backLabel}
          </a>
        ) : null}

        <div className={styles.right}>
          {!compact ? (
            <>
              <a href={ctaHref} className={`${styles.cta} ${STARK_CTA} ${STARK_CTA_NAV} ${STARK_CTA_PRIMARY}`}>{ctaLabel}</a>

              {!hideTabs ? (
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
              ) : null}
            </>
          ) : null}

          {textMenu ? (
            <button
              className={styles.menuText}
              aria-label={open ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              type="button"
            >
              {open ? 'Sluiten' : 'Menu'}
            </button>
          ) : !hideBurger ? (
            <button
              className={`${styles.burger}${compact ? ` ${styles.burgerAlways}` : ''}`}
              aria-label={open ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              type="button"
            >
              <span className={open ? styles.barTopOpen : styles.barTop} />
              <span className={open ? styles.barBotOpen : styles.barBot} />
            </button>
          ) : null}
        </div>
      </header>
      {mobileMenu}
    </>
  )
}
