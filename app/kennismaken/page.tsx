import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Sinds2013Badge from '@/components/Sinds2013Badge'
import StarkImage from '@/components/StarkImage'
import { STARK_CTA, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import { pageMetadata } from '@/lib/open-graph'
import styles from './kennismaken.module.css'

const BOOKING_URL =
  'https://bookings.cloud.microsoft/book/STARKKennismaken1@starkhardenberg.nl/'

export const metadata: Metadata = pageMetadata(
  'kennismaken',
  'Kom kennismaken — STARK! Hardenberg',
  'Plan een kennismaking in de agenda. Een uur, bij STARK. Gratis en vrijblijvend.',
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
            {' '}
            <span className={styles.titleLine}>kennismaking</span>
          </h1>
          <p className={styles.fact}>
            <span>Een uur, bij STARK.</span>
            <span>Gratis en vrijblijvend.</span>
          </p>
          <a
            href={BOOKING_URL}
            className={`${styles.agenda} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open de agenda
          </a>
          <Sinds2013Badge variant="block" className={styles.seamBadge} />
        </div>
      </div>
    </main>
  )
}
