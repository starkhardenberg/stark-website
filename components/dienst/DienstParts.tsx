import type { ReactNode } from 'react'
import { STARK_CTA, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import { BOOKINGS_URL } from './momentum'
import styles from './DienstPage.module.css'

/** Uitleg, kennismaken als zin, datumblok, dan de aanmeldknop. */
export function ProefClose({
  lead,
  points,
  date,
  practical,
  signupLabel,
  signupHref,
  gesprekBefore = '',
  gesprekLink,
  gesprekRest,
  gesprekHref,
}: {
  lead: string
  points: readonly string[]
  date: string
  practical: string
  signupLabel: string
  signupHref: string
  gesprekBefore?: string
  gesprekLink: string
  gesprekRest: string
  gesprekHref: string
}) {
  return (
    <>
      <div className={styles.prose}>
        <p>{lead}</p>
        <ul className={`${styles.list} ${styles.proefPoints}`}>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
          <li>{practical}</li>
        </ul>
        <p>
          {gesprekBefore}
          <a className={`${styles.textLink} ${styles.textLinkBold}`} href={gesprekHref} target="_blank" rel="noopener noreferrer">
            {gesprekLink}
          </a>
          {gesprekRest}
        </p>
        <p className={styles.proefDate}>{date}</p>
      </div>
      <div className={styles.proefAction}>
        <a
          href={signupHref}
          className={`${styles.button} ${styles.proefButton} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {signupLabel}
        </a>
      </div>
    </>
  )
}

export function BookButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={BOOKINGS_URL}
      className={`${styles.button} ${STARK_CTA} ${STARK_CTA_PRIMARY} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Plan je kennismaking
    </a>
  )
}

/**
 * Hero is donker, dus de eerste tel is licht. Daarna om en om.
 * Quote en een verborgen voorbeeldblok tellen mee. De footer is de andere kleur dan de laatste tel.
 */
export function createPageRhythm() {
  let beat = 0
  let last: 'light' | 'dark' = 'dark'

  const tone = (): 'light' | 'dark' => {
    beat += 1
    last = beat % 2 === 1 ? 'light' : 'dark'
    return last
  }

  const footerTone = (): 'light' | 'dark' => (last === 'light' ? 'dark' : 'light')

  return { tone, footerTone }
}

/**
 * Vast koppatroon: cijfer in de marge, titel en inhoud op één linkerrand.
 * Op mobiel staat het cijfer boven de titel.
 */
export function Section({
  number,
  title,
  tone = 'light',
  children,
}: {
  number: string
  title: string
  tone?: 'light' | 'dark'
  children: ReactNode
}) {
  return (
    <section className={tone === 'dark' ? styles.dark : styles.light}>
      <div className={styles.wrap}>
        <div className={styles.sec} data-num={number}>
          <div className={styles.secLead}>
            <span className={styles.num} data-num={number} aria-hidden="true">
              <span className={styles.numInk}>{number}</span>
            </span>
            <h2 className={styles.h2}>{title}</h2>
          </div>
          <div className={styles.secBody}>{children}</div>
        </div>
      </div>
    </section>
  )
}

/** Korte klap onder een sectie. Woorden in de sectiekleur, oranje alleen in de boog. */
export function CloseStamp({ lines }: { lines: readonly string[] }) {
  return (
    <p className={styles.close}>
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </p>
  )
}

export function QuoteBlock({
  tone,
  image,
  alt,
  text,
  name,
  role,
  portrait = false,
  matchText = false,
  photoPosition,
  label = 'Ervaring van een deelnemer',
  id,
}: {
  tone: 'light' | 'dark'
  image: string
  alt: string
  text: string
  name: string
  role?: string
  portrait?: boolean
  /** Op breed scherm de foto op de hoogte van de tekst ernaast croppen. */
  matchText?: boolean
  /** Waar de crop op blijft hangen, bijvoorbeeld het bord in een zaalfoto. */
  photoPosition?: string
  label?: string
  id?: string
}) {
  const cite = role ? `${name} · ${role}` : name

  return (
    <section
      className={tone === 'light' ? `${styles.proof} ${styles.proofLight}` : styles.proof}
      aria-label={label}
      id={id}
    >
      <div className={styles.proofGrid}>
        <div
          className={`${styles.proofPhotoWrap}${portrait ? ` ${styles.proofPhotoPortrait}` : ''}${matchText ? ` ${styles.proofPhotoMatch}` : ''}`}
        >
          <img
            className={styles.proofPhoto}
            src={image}
            alt={alt}
            style={photoPosition ? { objectPosition: photoPosition } : undefined}
          />
        </div>
        <figure className={styles.proofText}>
          <blockquote className={styles.quote}>{text}</blockquote>
          <figcaption className={styles.cite}>{cite}</figcaption>
        </figure>
      </div>
    </section>
  )
}

/**
 * Verhaal links, de uitzondering rechts in een rustig blok.
 * Op een smal scherm staat het blok eronder.
 */
export function SplitAside({
  main,
  aside,
}: {
  main: ReactNode
  aside: ReactNode
}) {
  return (
    <div className={styles.split}>
      <div className={styles.splitMain}>{main}</div>
      <div className={styles.splitAside}>{aside}</div>
    </div>
  )
}

/** Stappen na de kennismaking, in het slot. */
export function KennismakingSteps({
  steps,
  note,
}: {
  steps: readonly string[]
  note: string
}) {
  return (
    <div className={styles.sub}>
      <h3 className={styles.h3}>Na de kennismaking</h3>
      <ol className={`${styles.list} ${styles.steps}`}>
        {steps.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      <p className={styles.note}>{note}</p>
    </div>
  )
}
