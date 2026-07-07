import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import { hrefContactAlgemeen, PHONE_CALL } from '@/lib/contact'
import { pageMetadata } from '@/lib/open-graph'
import { oswaldTrim } from '@/lib/displayTrim'
import styles from './kennismaken.module.css'

export const metadata: Metadata = pageMetadata(
  'kennismaken',
  'Kom kennismaken — STARK! Hardenberg',
  'Vrijblijvend kennismakingsgesprek van ongeveer 1 uur. Gratis. Loop binnen of plan een moment. We kijken samen wat voor jou het beste past.',
)

const PAGE_TITLE = 'Eerst een kop koffie en praten en dan pas verder.'

const EXPECT = [
  'Ongeveer 1 uur, vrijblijvend en gratis.',
  'We leren elkaar kennen en kijken wat bij je past.',
  'Geen verplichtingen. Wel een eerlijk gesprek.',
] as const

export default function KennismakenPage() {
  return (
    <main className={styles.page}>
      <Nav variant="light" />

      <div className={styles.shell}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Kennismaken</p>
          <h1 className={`${styles.title} ${styles.titleSentence}`} style={oswaldTrim(PAGE_TITLE)}>
            {PAGE_TITLE}
          </h1>
          <p className={styles.lead}>
            Loop gerust binnen. Is er tijd, dan gaan we meteen zitten. Zo niet, plannen we een moment
            dat past. Een uur, vrijblijvend en gratis. We kijken samen wat voor jou het beste past.
          </p>
        </header>

        <section className={styles.expect} aria-label="Wat je kunt verwachten">
          <h2 className={styles.expectTitle}>Wat je kunt verwachten</h2>
          <ul className={styles.expectList}>
            <li>{EXPECT[0]}</li>
            <li>
              {EXPECT[1]}:{' '}
              <Link href="/trainen" className={styles.expectLink}>
                trainen
              </Link>
              ,{' '}
              <Link href="/coaching" className={styles.expectLink}>
                coaching
              </Link>{' '}
              of{' '}
              <Link href="/zakelijk" className={styles.expectLink}>
                bedrijven
              </Link>
              .
            </li>
            <li>{EXPECT[2]}</li>
          </ul>
        </section>

        <section className={styles.actions} aria-label="Plan je kennismaking">
          <p className={styles.bookingNote}>
            Online plannen via ons boekingssysteem volgt&nbsp;binnenkort. Tot die tijd kun je ons
            direct bereiken.
          </p>

          <div className={styles.actionRow}>
            <WhatsAppLink className={styles.primaryBtn}>
              <WhatsAppIcon className={styles.btnIcon} />
              <span>Plan via WhatsApp</span>
            </WhatsAppLink>
            <a href={PHONE_CALL.tel} className={styles.secondaryBtn}>
              Bel {PHONE_CALL.display}
            </a>
          </div>

          <p className={styles.alt}>
            Eerst een vraag stellen?{' '}
            <Link href={hrefContactAlgemeen} className={styles.altLink}>
              Ga naar contact
            </Link>
          </p>
        </section>
      </div>
    </main>
  )
}
