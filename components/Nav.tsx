'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import { CTA_KENNISMAKING_LABEL, hrefContactAlgemeen, hrefKennismaking } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_NAV, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import styles from './Nav.module.css'

const ZAKELIJK_LINKS = [
  { label: 'Ondernemers', href: '/zakelijk' },
  { label: 'Medewerkers', href: '/zakelijk/duurzame-inzetbaarheid' },
] as const

const NAV_TABS = [
  { id: 'trainen', label: 'Training', href: '/trainen' },
  { id: 'coaching', label: 'Coaching', href: '/coaching' },
  { id: 'zakelijk', label: 'Zakelijk', children: ZAKELIJK_LINKS },
  { id: 'team', label: 'Wie wij zijn', href: '/team' },
  { id: 'contact', label: 'Contact', href: hrefContactAlgemeen, isContact: true },
] as const

/** Paden die een dienst-tab actief maken.
 *  Subpagina's (Momentum, Impact) bewust níet: daar liegt een omhooggeklapte
 *  hoofdtab over waar je bent. Terug via ← Home of de tab zelf. */
const TAB_ACTIVE_PREFIXES: Record<string, string[]> = {
  coaching: ['/coaching'],
  trainen: ['/trainen'],
  zakelijk: ['/zakelijk', '/zakelijk-v2'],
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
  hideCta = false,
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
  /** Deze pagina ís de afspraak. Geen tweede oranje knop in het menu. */
  hideCta?: boolean
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [zakelijkOpen, setZakelijkOpen] = useState(false)
  const zakelijkRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setOpen(false)
    setZakelijkOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!zakelijkOpen) return
    function onPointerDown(event: PointerEvent) {
      if (!zakelijkRef.current?.contains(event.target as Node)) {
        setZakelijkOpen(false)
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setZakelijkOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [zakelijkOpen])

  useEffect(() => {
    if (!open) setZakelijkOpen(false)
  }, [open])

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
    if (!prefixes) return 'href' in tab && pathname === tab.href
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
                if ('children' in tab && tab.children) {
                  return (
                    <div key={tab.id} className={styles.mobileSub}>
                      <button
                        type="button"
                        className={`${styles.mobileParent}${active ? ` ${styles.mobileTabActive}` : ''}`}
                        aria-expanded={zakelijkOpen}
                        onClick={() => setZakelijkOpen((value) => !value)}
                      >
                        {tab.label}
                      </button>
                      {zakelijkOpen
                        ? tab.children.map((child) => (
                            <a
                              key={child.href}
                              href={child.href}
                              className={`${styles.mobileChild}${
                                pathname === child.href || pathname.startsWith(`${child.href}/`)
                                  ? ` ${styles.mobileTabActive}`
                                  : ''
                              }`}
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </a>
                          ))
                        : null}
                    </div>
                  )
                }
                if (!('href' in tab)) return null
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
            {hideCta ? null : (
              <div className={styles.mobileMenuFoot}>
                <a href={ctaHref} className={`${styles.mobileCta} ${STARK_CTA} ${STARK_CTA_PRIMARY}`} onClick={() => setOpen(false)}>
                  {ctaLabel}
                </a>
              </div>
            )}
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
              {hideCta ? null : (
                <a href={ctaHref} className={`${styles.cta} ${STARK_CTA} ${STARK_CTA_NAV} ${STARK_CTA_PRIMARY}`}>{ctaLabel}</a>
              )}

              {!hideTabs ? (
                <nav className={styles.tabBar} aria-label="Hoofdmenu">
                  <ul className={styles.tabList}>
                    {NAV_TABS.map((tab) => {
                      const active = isTabActive(tab)
                      if ('children' in tab && tab.children) {
                        return (
                          <li
                            key={tab.id}
                            ref={zakelijkRef}
                            className={`${active ? styles.tabItemActive : styles.tabItem} ${styles.tabItemHasMenu}${
                              zakelijkOpen ? ` ${styles.tabItemHasMenuOpen}` : ''
                            }`}
                          >
                            <button
                              type="button"
                              className={styles.tabLink}
                              aria-expanded={zakelijkOpen}
                              aria-haspopup="true"
                              onClick={() => setZakelijkOpen((value) => !value)}
                            >
                              {tab.label}
                            </button>
                            <ul className={styles.tabFlyout}>
                              {tab.children.map((child) => (
                                <li key={child.href}>
                                  <a
                                    href={child.href}
                                    className={
                                      pathname === child.href || pathname.startsWith(`${child.href}/`)
                                        ? styles.tabFlyoutLinkCurrent
                                        : styles.tabFlyoutLink
                                    }
                                    aria-current={pathname === child.href ? 'page' : undefined}
                                  >
                                    {child.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                        )
                      }
                      if (!('href' in tab)) return null
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
