import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import { KENNISMAKING_TITLE, hrefContactAlgemeen, PHONE_CALL } from '@/lib/contact'
import { oswaldTrim } from '@/lib/displayTrim'
import styles from './kennismaken.module.css'

export const metadata: Metadata = {
  title: 'Kom kennismaken — STARK Hardenberg',
  description:
    'Vrijblijvend kennismakingsgesprek van ongeveer 1 uur. Gratis. We kijken samen wat bij je past.',
}

const EXPECT = [
  'Ongeveer 1 uur, vrijblijvend en gratis.',
  'We leren elkaar kennen en kijken wat bij je past: trainen, coaching of iets anders.',
  'Geen verplichtingen. Wel een eerlijk gesprek.',
] as const

export default function KennismakenPage() {
  return (
    <main className={styles.page}>
      <Nav variant="light" />

      <div className={styles.shell}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Kennismaken</p>
          <h1 className={styles.title} style={oswaldTrim(KENNISMAKING_TITLE)}>{KENNISMAKING_TITLE}</h1>
          <p className={styles.lead}>
            Een uur vrijblijvend praten. We kijken samen wat het beste bij je past — trainen,
            coaching, of eerst even oriënteren.
          </p>
        </header>

        <section className={styles.expect} aria-label="Wat je kunt verwachten">
          <h2 className={styles.expectTitle}>Wat je kunt verwachten</h2>
          <ul className={styles.expectList}>
            {EXPECT.map((line) => (
              <li key={line}>{line}</li>
            ))}
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
