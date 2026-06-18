import Link from 'next/link'
import { CTA_KENNISMAKING_LABEL, hrefContactAlgemeen, hrefKennismaking, mailtoInfo } from '@/lib/contact'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import styles from './LandingFooter.module.css'

type LandingFooterProps = {
  whatsapp?: boolean
}

export default function LandingFooter({ whatsapp = false }: LandingFooterProps) {
  return (
    <footer className={styles.footer}>
      <p className={styles.headline}>Meer weten of gelijk starten?</p>

      <p className={styles.contact}>
        <a href="tel:+31621248107" className={styles.contactLink}>
          06 21248107
        </a>
        <span className={styles.sep} aria-hidden>
          ·
        </span>
        <a href={mailtoInfo} className={styles.contactLink}>
          info@starkhardenberg.nl
        </a>
        <span className={styles.sep} aria-hidden>
          ·
        </span>
        <span className={styles.contactText}>Nijverheidsstraat 15c, Hardenberg</span>
      </p>

      <div className={styles.actions}>
        <a href={hrefKennismaking} className={styles.cta}>
          {CTA_KENNISMAKING_LABEL}
          <span aria-hidden>→</span>
        </a>
        {whatsapp ? (
          <WhatsAppLink className={styles.ctaWhatsapp}>
            <WhatsAppIcon className={styles.ctaWhatsappIcon} />
            <span>Stuur een WhatsApp</span>
          </WhatsAppLink>
        ) : null}
      </div>

      <div className={styles.meta}>
        <p>&copy; {new Date().getFullYear()} STARK! Hardenberg</p>
        <Link href="/" className={styles.homeLink}>
          Terug naar home
        </Link>
      </div>
    </footer>
  )
}
