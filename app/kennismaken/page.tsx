import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Sinds2013Badge from '@/components/Sinds2013Badge'
import StarkImage from '@/components/StarkImage'
import { hrefContactAlgemeen } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import { pageMetadata } from '@/lib/open-graph'
import styles from './kennismaken.module.css'

const BOOKING_URL =
  'https://bookings.cloud.microsoft/book/STARKKennismaken1@starkhardenberg.nl/'

export const metadata: Metadata = pageMetadata(
  'kennismaken',
  'Kom kennismaken — STARK! Hardenberg',
  'Plan een kennismaking in de agenda. Ongeveer een uur, bij ons in Hardenberg. Gratis en vrijblijvend. Andere vragen via contact.',
)

export default function KennismakenPage() {
  return (
    <main className={styles.page}>
      <Nav hideCta />

      <div className={styles.photo}>
        <StarkImage
          src="/images/foto-kennismaken-sessie.png"
          alt="In de zaal bij STARK!, tijdens een kennismaking"
          fill
          priority
          sizes="(min-width: 900px) 44vw, 100vw"
          className={styles.photoImg}
        />
      </div>

      <div className={styles.stage}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>Plan een</span>
            <span className={styles.titleLine}>kennismaking</span>
          </h1>
          <p className={styles.fact}>
            Ongeveer een uur, bij ons in Hardenberg. Gratis en vrijblijvend.
          </p>
          <a
            href={BOOKING_URL}
            className={`${styles.agenda} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open de agenda
          </a>
          <p className={styles.note}>De agenda opent op een nieuwe pagina.</p>
          <p className={styles.exit}>
            <Link href={hrefContactAlgemeen} className={styles.exitLink}>
              Geen afspraak, maar een vraag? Naar contact.
            </Link>
          </p>
          <Sinds2013Badge variant="block" />
        </div>
      </div>
    </main>
  )
}
