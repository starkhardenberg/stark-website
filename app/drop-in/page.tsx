import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ADDRESS } from '@/lib/contact'
import { DROPIN_PLANNER_URL } from '@/lib/drop-in'
import DropInPlanner from './DropInPlanner'
import { pageMetadata } from '@/lib/open-graph'
import { PlausiblePageEvent } from '@/components/PlausibleClickListener'
import styles from './drop-in.module.css'

export const metadata: Metadata = pageMetadata(
  'dropIn',
  'Drop-in bij STARK! Hardenberg',
  'Eén of een paar losse lessen voor als je in de buurt bent. Je hoeft geen lid te worden. Kies een les, betaal, en je staat op de lijst.',
)

export default function DropInPage() {
  return (
    <>
      <PlausiblePageEvent eventName="Drop-in" />
      <main className={styles.page}>
        <Nav backHref="/trainen" backLabel="Trainen" heroBar hideCta />

        <section className={styles.inner} aria-labelledby="drop-in-title">
          <h1 id="drop-in-title" className={styles.title}>
            Drop-in
          </h1>
          <p className={styles.lead}>Eén of een paar losse lessen voor als je in de buurt bent.</p>
          <p className={styles.body}>
            Je hoeft geen lid te worden. Kies een les, vul je naam in en betaal. Daarna sta je op de lijst.
          </p>
          <p className={styles.place}>
            <a href={ADDRESS.maps} target="_blank" rel="noopener noreferrer">
              {ADDRESS.street}, Hardenberg
            </a>
          </p>
        </section>

        <p className={styles.fallback}>
          Opent de planner niet?{' '}
          <a href={DROPIN_PLANNER_URL} target="_blank" rel="noopener">
            Open hem in een nieuw venster
          </a>.
        </p>

        <DropInPlanner />
      </main>
      <Footer variant="dark" accent={false} />
    </>
  )
}
