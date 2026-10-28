'use client'

import WhatsAppLink from '@/components/contact/WhatsAppLink'
import { ADDRESS, mailtoInfo } from '@/lib/contact'
import { BEELDEN_CREDIT } from '@/lib/photo-credit'
import styles from './Footer.module.css'

/** Knip van het uitroepteken. stem = onderkant van de streep, dot = bovenkant van het bolletje. */
const BANG_CLIP = { stem: 25, dot: 75 } as const

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
}: {
  href: string
  long: string
  short: string
  external?: boolean
  whatsapp?: boolean
}) {
  const body = (
    <>
      <span className={styles.long}>{long}</span>
      <span className={styles.short}>{short}</span>
      <span aria-hidden="true" style={{ color: 'var(--orange)' }}> →</span>
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

export default function Footer({ variant }: { variant: 'light' | 'dark' }) {
  return (
    <footer className={`${styles.footer} ${variant === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <p className={styles.mark}>
              STARK<span
                aria-label="!"
                style={{ position: 'relative', display: 'inline-block' }}
              >
                <span aria-hidden="true" style={{ clipPath: `inset(0 0 ${BANG_CLIP.stem}% 0)` }}>
                  !
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    color: 'var(--orange)',
                    clipPath: `inset(${BANG_CLIP.dot}% 0 0 0)`,
                  }}
                >
                  !
                </span>
              </span>
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
              </div>

              <div className={styles.act}>
                <h2 className={styles.kicker}>Direct regelen</h2>
                <ul className={styles.list}>
                  <li>
                    <ActLink
                      href="https://kennismaken.starkhardenberg.nl"
                      long="Kennismakingsgesprek plannen"
                      short="Kennismaken"
                      external
                    />
                  </li>
                  <li>
                    <ActLink
                      href="https://proefopdesom.starkhardenberg.nl"
                      long="Aanmelden Proef op de Som"
                      short="Proef op de Som"
                      external
                    />
                  </li>
                  <li>
                    <ActLink href="" long="Stuur een WhatsApp" short="WhatsApp" whatsapp />
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
