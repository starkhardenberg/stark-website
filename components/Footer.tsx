'use client'

import WhatsAppLink from '@/components/contact/WhatsAppLink'
import { ADDRESS, mailtoInfo } from '@/lib/contact'
import { BEELDEN_CREDIT } from '@/lib/photo-credit'
import styles from './Footer.module.css'

const MENU = [
  { label: 'Training', href: '/trainen' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'Zakelijk', href: '/zakelijk' },
  { label: 'Wie wij zijn', href: '/team' },
  { label: 'Contact', href: '/contact' },
] as const

const BEELDEN = `${BEELDEN_CREDIT.label}: ${BEELDEN_CREDIT.text}`

function ActLink({
  href,
  long,
  short,
  external,
  whatsapp,
  accent = true,
}: {
  href: string
  long: string
  short: string
  external?: boolean
  whatsapp?: boolean
  accent?: boolean
}) {
  const body = (
    <>
      <span className={styles.long}>{long}</span>
      <span className={styles.short}>{short}</span>
      <span aria-hidden="true" style={accent ? { color: 'var(--orange)' } : undefined}> →</span>
    </>
  )

  if (whatsapp) {
    return <WhatsAppLink className={styles.link}>{body}</WhatsAppLink>
  }

  return (
    <a
      href={href}
      className={styles.link}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {body}
    </a>
  )
}

export default function Footer({
  variant,
  accent = true,
}: {
  variant: 'light' | 'dark'
  /** Drop-in: geen oranje pijl of stip. */
  accent?: boolean
}) {
  return (
    <footer className={`${styles.footer} ${variant === 'dark' ? styles.dark : styles.light}${accent ? '' : ` ${styles.noAccent}`}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <p className={styles.mark}>
              <img
                src={variant === 'dark' ? '/images/stark-logo-wit.svg' : '/images/stark-logo-zwart.svg'}
                alt="STARK! Hardenberg"
                className={styles.logo}
              />
            </p>
            <p className={styles.tagline}>
              Krachttraining en coaching in Hardenberg. Kleine groepen, een coach naast je.
            </p>
            <p className={styles.since}>
              <span style={{ color: 'var(--ink)' }}>Wi&apos;j bint STARK!</span>
              <span> · Sinds 2013</span>
            </p>
          </div>

          <nav className={styles.nav} aria-label="Footer">
            <div className={styles.pair}>
              <div className={styles.menu}>
                <h2 className={styles.kicker}>Menu</h2>
                <ul className={styles.list}>
                  {MENU.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className={styles.link}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className={styles.legalLinks}>
                  <a href="/privacy" className={styles.credit}>
                    Privacy
                  </a>
                  <a href="/voorwaarden" className={styles.credit}>
                    Voorwaarden
                  </a>
                </p>
              </div>

              <div className={styles.act}>
                <h2 className={styles.kicker}>Direct regelen</h2>
                <ul className={styles.list}>
                  <li>
                    <ActLink
                      href="https://kennismaken.starkhardenberg.nl"
                      long="Kennismaking plannen"
                      short="Kennismaken"
                      external
                      accent={accent}
                    />
                  </li>
                  <li>
                    <ActLink
                      href="https://proefopdesom.starkhardenberg.nl"
                      long="Aanmelden Proef op de Som"
                      short="Proef op de Som"
                      external
                      accent={accent}
                    />
                  </li>
                  <li>
                    <ActLink href="" long="Stuur een WhatsApp" short="WhatsApp" whatsapp accent={accent} />
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.contact}>
              <h2 className={styles.kicker}>Contact</h2>
              <ul className={styles.list}>
                <li>
                  <a href="tel:+31621248107" className={styles.link}>
                    06 21 24 81 07
                  </a>
                </li>
                <li>
                  <a href={mailtoInfo} className={styles.link}>
                    info@starkhardenberg.nl
                  </a>
                </li>
                <li>
                  <a
                    href={ADDRESS.maps}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nijverheidsstraat 15c
                    <br />
                    7772 TP Hardenberg
                  </a>
                </li>
                <li className={styles.social}>
                  <a
                    href="https://www.instagram.com/starkhardenberg/"
                    className={styles.socialLink}
                    aria-label="STARK! op Instagram"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect
                        x="3.5"
                        y="3.5"
                        width="17"
                        height="17"
                        rx="5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/starkhardenberg/"
                    className={styles.socialLink}
                    aria-label="STARK! op Facebook"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M14.2 21v-7.2h2.4l.4-2.8h-2.8V9.3c0-.8.2-1.4 1.4-1.4H17V5.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H8.4v2.8h2.5V21h3.3z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.bar}>
          <p className={styles.legal} style={{ gap: 24, flexWrap: 'wrap' }}>
            <span>© 2026 STARK! Hardenberg · Opgericht 2013</span>
            <span>{BEELDEN}</span>
            <span>
              <a
                href="https://www.instagram.com/donkerfotografie"
                className={styles.credit}
                target="_blank"
                rel="noopener noreferrer"
              >
                Foto&apos;s Marianne Donker
              </a>
            </span>
            <span>
              <a
                href="https://ivymedia.nl"
                className={styles.credit}
                target="_blank"
                rel="noopener noreferrer"
              >
                Video Ivy Media
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
