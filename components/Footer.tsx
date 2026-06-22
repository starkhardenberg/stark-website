import { CTA_KENNISMAKING_LABEL, ADDRESS, mailtoInfo, hrefKennismaking } from '@/lib/contact'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import styles from './Footer.module.css'

const year = new Date().getFullYear()

type FooterProps = {
  /** Foto boven, tekst onder. */
  photoFirst?: boolean
  /** home = homepage-foto, landing = groepsles, coaching = coachingsessie. Standaard: landing bij photoFirst, anders home. */
  photoSet?: 'home' | 'landing' | 'coaching'
  /** dark = navy (standaard), light = off-white, gradient = navy → off-white van boven naar beneden. */
  tone?: 'dark' | 'light' | 'gradient'
}

const HOME_PHOTO = {
  src: '/images/footer-kids-plank.png',
  width: 1024,
  height: 682,
} as const

const LANDING_PHOTO = {
  src: '/images/foto-groep-les.jpg',
  width: 1920,
  height: 1280,
} as const

const COACHING_PHOTO = {
  src: '/images/footer-coaching-sessie.png',
  width: 1024,
  height: 682,
} as const

export default function Footer({ photoFirst = false, photoSet, tone = 'dark' }: FooterProps) {
  const resolvedPhotoSet = photoSet ?? (photoFirst ? 'landing' : 'home')
  const photoAsset =
    resolvedPhotoSet === 'home'
      ? HOME_PHOTO
      : resolvedPhotoSet === 'coaching'
        ? COACHING_PHOTO
        : LANDING_PHOTO
  const isHomePhoto = resolvedPhotoSet === 'home'
  const isCoachingPhoto = resolvedPhotoSet === 'coaching'

  const photo = (
    <div className={styles.photoWrap}>
      <img
        src={photoAsset.src}
        alt=""
        className={`${styles.photo} ${isHomePhoto ? styles.photoHome : ''}${isCoachingPhoto ? ` ${styles.photoCoaching}` : ''}`}
        width={photoAsset.width}
        height={photoAsset.height}
        decoding="async"
      />
      <div className={styles.photoFade} aria-hidden />
    </div>
  )

  const content = (
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.colStart}>
            <p className={styles.welcome}>Wees welkom.</p>
            <p className={styles.brand}>STARK!</p>
            <p className={styles.meta}>
              &copy; {year} STARK! Hardenberg
              <span className={styles.metaSep} aria-hidden>
                ·
              </span>
              Opgericht 2013
            </p>
          </div>

          <div className={styles.colEnd}>
            <p className={styles.lead}>
              Klaar om sterker te worden in lijf en hoofd?
              <br />
              Plan een vrijblijvend kennismakingsgesprek.
            </p>

            <div className={styles.actions}>
              <a href={hrefKennismaking} className={styles.cta}>
                {CTA_KENNISMAKING_LABEL}
                <span aria-hidden>→</span>
              </a>
              <WhatsAppLink className={styles.ctaWhatsapp}>
                <WhatsAppIcon className={styles.ctaWhatsappIcon} />
                <span>Stuur een WhatsApp</span>
              </WhatsAppLink>
            </div>

            <div className={styles.contact}>
              <p className={styles.contactRow}>
                <a href="tel:+31621248107" className={styles.contactLink}>
                  06 21248107
                </a>
                <span className={styles.sep} aria-hidden>
                  ·
                </span>
                <a href={mailtoInfo} className={styles.contactLink}>
                  info@starkhardenberg.nl
                </a>
              </p>
              <a
                href={ADDRESS.maps}
                className={`${styles.contactLink} ${styles.contactAddress}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ADDRESS.display}
              </a>
            </div>
          </div>
        </div>
      </div>
  )

  const toneClass =
    tone === 'light' ? styles.footerLight : tone === 'gradient' ? styles.footerGradient : ''

  return (
    <footer
      className={`${styles.footer} ${photoFirst ? styles.footerPhotoFirst : ''} ${toneClass}`}
    >
      {photoFirst ? (
        <>
          {photo}
          {content}
        </>
      ) : (
        <>
          {content}
          {photo}
        </>
      )}
    </footer>
  )
}
