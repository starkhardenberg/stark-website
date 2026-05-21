import Image from 'next/image'
import { mailtoInfo, mailtoKennismaking } from '@/lib/contact'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.panel}>
          <div className={styles.topRow}>
            <a href="/" aria-label="STARK! home" className={styles.logoLink}>
              <Image
                src="/images/stark_logo_wit.png"
                alt="STARK!"
                width={100}
                height={32}
                className={styles.logo}
              />
            </a>
            <p className={styles.label}>Contactgegevens</p>
          </div>

          <div className={styles.contactList} aria-label="Contactgegevens">
            <a href="tel:+31621248107" className={styles.contactItem}>
              <span className={styles.icon} aria-hidden>
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.89.66 2.78a2 2 0 0 1-.45 2.11L8.05 9.88a16 16 0 0 0 6.07 6.07l1.27-1.27a2 2 0 0 1 2.11-.45c.89.31 1.82.53 2.78.66A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>06 21248107</span>
            </a>
            <a href={mailtoInfo} className={styles.contactItem}>
              <span className={styles.icon} aria-hidden>
                <svg viewBox="0 0 24 24">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <span>info@starkhardenberg.nl</span>
            </a>
            <p className={styles.contactItem}>
              <span className={styles.icon} aria-hidden>
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <span>
                Nijverheidsstraat 15c
                <br />
                7772 XR Hardenberg
              </span>
            </p>
          </div>

          <p className={styles.body}>
            STARK! is geen gewone sportschool. We combineren functioneel trainen met coaching die blijft hangen.
            Korte lijnen. Vaste gezichten. Een schop onder je kont terwijl we je hand vasthouden.
          </p>

          <a href={mailtoKennismaking} className={styles.btnPrimary}>
            Kom kennismaken
            <span aria-hidden>→</span>
          </a>

          <nav className={styles.linkStack} aria-label="Footernavigatie">
            <a href="#trainen">
              Trainen <span aria-hidden>↗</span>
            </a>
            <a href="#coaching">
              Coaching <span aria-hidden>↗</span>
            </a>
            <a href="#bedrijven">
              Zakelijk <span aria-hidden>↗</span>
            </a>
            <a href="#over">
              Over ons <span aria-hidden>↗</span>
            </a>
          </nav>
        </div>

        <div className={styles.meta}>
          <p>&copy; {new Date().getFullYear()} STARK! Hardenberg</p>
          <p>Opgericht 2013</p>
        </div>
      </div>
    </footer>
  )
}
