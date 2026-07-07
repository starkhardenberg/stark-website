import type { ReactNode } from 'react'
import { CTA_KENNISMAKING_LABEL, ADDRESS, mailtoInfo, hrefKennismaking } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_ROW } from '@/lib/stark-cta'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import PhotoCredit from '@/components/PhotoCredit'
import styles from './Footer.module.css'

const year = new Date().getFullYear()

const DEFAULT_BRAND_PREFIX = "Wi'j bint"

type FooterProps = {
  /** Foto boven, tekst onder. */
  photoFirst?: boolean
  /** Geen footerfoto — alleen copy (bijv. teampagina na een fotosectie). */
  photoless?: boolean
  /** home = homepage-foto, landing = groepsles, coaching = coachingsessie, trainen = sled/straps. Standaard: landing bij photoFirst, anders home. */
  photoSet?: 'home' | 'landing' | 'coaching' | 'trainen' | 'zakelijk'
  /** solid = harde snede navy + oranje lijn (standaard), light = off-white, gradient = navy → off-white, gradient-warm = off-white → oranje (test), dark = navy zonder solid-snede. */
  tone?: 'dark' | 'light' | 'gradient' | 'gradient-warm' | 'solid'
  /** Verberg de grote kennismaken-CTA (lead + knoppen). Voor pagina's met een eigen capstone-CTA erboven. */
  ctaless?: boolean
  /** Prominente afsluit-CTA in de footer: grote kop boven, woordmerk + contact in een onderbalk.
   *  Vervangt de standaard footer-opbouw. Gebruik voor pagina's die met één sterke CTA willen afsluiten. */
  ctaTitle?: ReactNode
  ctaLead?: ReactNode
  ctaLabel?: string
  /** Eigen achtergrondfoto voor de prominente afsluit-CTA (anders de photoSet-foto). */
  ctaImage?: string
  /** Woord vóór het outline-woordmerk in de standaard-footer, standaard dialect: "Wi'j bint STARK!" */
  brandPrefix?: string
  /** Standaard uit. Zet op true voor "Wees welkom" boven het woordmerk. */
  showWelcome?: boolean
  /** Vervangt de standaard lead rechts in de footer (bijv. dialect per pagina). */
  lead?: ReactNode
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

const TRAINEN_PHOTO = {
  src: '/images/footer-trainen.png',
  width: 1024,
  height: 682,
} as const

const ZAKELIJK_PHOTO = {
  src: '/images/footer-kettlebells.png',
  width: 1024,
  height: 682,
} as const

export default function Footer({
  photoFirst = false,
  photoless = false,
  photoSet,
  tone = 'solid',
  ctaless = false,
  ctaTitle,
  ctaLead,
  ctaLabel,
  ctaImage,
  brandPrefix = DEFAULT_BRAND_PREFIX,
  showWelcome = false,
  lead,
}: FooterProps) {
  const hasProminentCta = Boolean(ctaTitle)
  const resolvedPhotoSet = photoSet ?? (photoFirst ? 'landing' : 'home')
  const photoAsset =
    resolvedPhotoSet === 'home'
      ? HOME_PHOTO
      : resolvedPhotoSet === 'coaching'
        ? COACHING_PHOTO
        : resolvedPhotoSet === 'trainen'
          ? TRAINEN_PHOTO
          : resolvedPhotoSet === 'zakelijk'
            ? ZAKELIJK_PHOTO
            : LANDING_PHOTO
  const isHomePhoto = resolvedPhotoSet === 'home'
  const isCoachingPhoto = resolvedPhotoSet === 'coaching'
  const isTrainenPhoto = resolvedPhotoSet === 'trainen'
  const isZakelijkPhoto = resolvedPhotoSet === 'zakelijk'

  const photo = (
    <div className={`${styles.photoWrap}${isZakelijkPhoto ? ` ${styles.photoWrapZakelijk}` : ''}`}>
      <img
        src={photoAsset.src}
        alt=""
        className={`${styles.photo} ${isHomePhoto ? styles.photoHome : ''}${isCoachingPhoto ? ` ${styles.photoCoaching}` : ''}${isTrainenPhoto ? ` ${styles.photoTrainen}` : ''}${isZakelijkPhoto ? ` ${styles.photoZakelijk}` : ''}`}
        width={photoAsset.width}
        height={photoAsset.height}
        decoding="async"
      />
      <div className={styles.photoFade} aria-hidden />
    </div>
  )

  const actionsBlock = (
    <div className={`${styles.actions} ${STARK_CTA_ROW}`}>
      <a href={hrefKennismaking} className={`${styles.cta} ${STARK_CTA}`}>
        {CTA_KENNISMAKING_LABEL}
        <span aria-hidden>→</span>
      </a>
      <WhatsAppLink className={`${styles.ctaWhatsapp} ${STARK_CTA}`}>
        <WhatsAppIcon className={styles.ctaWhatsappIcon} />
        <span>Stuur een WhatsApp</span>
      </WhatsAppLink>
    </div>
  )

  const contactBlock = (
    <div className={styles.contact}>
      <p className={styles.contactRow}>
        <a href="tel:+31621248107" className={styles.contactLink}>
          06 21248107
        </a>
        <span className={styles.sep} aria-hidden>
          –
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
        {ADDRESS.street}
        <span className={styles.sep} aria-hidden>
          –
        </span>
        {ADDRESS.city}
      </a>
    </div>
  )

  const prominentBody = (
    <>
      <div className={styles.ctaHero}>
        <div className={styles.ctaHeroBg} aria-hidden>
          <img
            src={ctaImage ?? photoAsset.src}
            alt=""
            className={styles.ctaHeroImg}
            width={photoAsset.width}
            height={photoAsset.height}
            decoding="async"
          />
          <div className={styles.ctaHeroScrim} />
        </div>
        <div className={styles.ctaHeroContent}>
          {ctaLabel ? <span className={styles.ctaBandLabel}>{ctaLabel}</span> : null}
          <h2 className={styles.ctaBandTitle}>{ctaTitle}</h2>
          {ctaLead ? <p className={styles.ctaBandLead}>{ctaLead}</p> : null}
          {actionsBlock}
        </div>
      </div>

      <div className={styles.ctaBottom}>
        <div className={`${styles.bottomBar} ${styles.bottomBarFlush}`}>
          <div className={styles.bottomBrandStack}>
            <div className={styles.bottomBrand}>
              <p className={styles.brandSmall}>
                <span className={styles.brandSmallPrefix}>{DEFAULT_BRAND_PREFIX}</span> STARK!
              </p>
              <span className={styles.meta}>
                &copy; {year} Hardenberg
                <span className={styles.metaSep} aria-hidden>
                  ·
                </span>
                Opgericht 2013
              </span>
            </div>
            <PhotoCredit className={styles.photoCredit} />
          </div>
          {contactBlock}
        </div>
      </div>
    </>
  )

  const content = (
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.colStart}>
            <div className={styles.colHead}>
              {showWelcome ? <p className={styles.welcome}>Wees welkom</p> : null}
              <p className={styles.brand}>
                {brandPrefix ? (
                  <>
                    <span className={styles.brandPrefix}>{brandPrefix}</span>{' '}
                  </>
                ) : null}
                STARK!
              </p>
            </div>
            <div className={styles.colFoot}>
              <p className={styles.meta}>
                &copy; {year} STARK! Hardenberg
                <span className={styles.metaSep} aria-hidden>
                  ·
                </span>
                Opgericht 2013
              </p>
              <PhotoCredit className={styles.photoCredit} />
            </div>
          </div>

          <div className={styles.colEnd}>
            {!ctaless ? (
              <>
                <div className={styles.colHead}>
                  {lead ? (
                    <p className={styles.lead}>{lead}</p>
                  ) : (
                    <p className={styles.lead}>
                      Klaar om <span className={styles.leadEmphasis}>sterker</span> te worden in{' '}
                      <span className={styles.leadEmphasis}>lijf en hoofd</span>?
                    </p>
                  )}
                </div>
                <div className={styles.colMid}>{actionsBlock}</div>
              </>
            ) : null}

            <div className={styles.colFoot}>{contactBlock}</div>
          </div>
        </div>
      </div>
  )

  const toneClass =
    tone === 'light'
      ? styles.footerLight
      : tone === 'solid'
        ? styles.footerSolid
        : tone === 'gradient-warm'
          ? styles.footerGradientWarm
          : tone === 'gradient'
            ? styles.footerGradient
            : ''

  if (hasProminentCta) {
    return (
      <footer className={`${styles.footer} ${styles.footerCta} ${toneClass}`}>
        {prominentBody}
      </footer>
    )
  }

  if (photoless) {
    return (
      <footer className={`${styles.footer} ${styles.footerPhotoless} ${toneClass}`}>
        {content}
      </footer>
    )
  }

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
