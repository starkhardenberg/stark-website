import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/contact/ContactForm'
import { CTA_KENNISMAKING_LABEL, mailtoInfo, parseOnderwerp } from '@/lib/contact'
import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Contact — STARK! Hardenberg',
  description:
    'Kom kennismaken of stel je vraag. Vul het formulier in en we nemen binnen uiterlijk 2 werkdagen contact met je op.',
}

type PageProps = {
  searchParams?: { onderwerp?: string }
}

export default function ContactPage({ searchParams }: PageProps) {
  const initialOnderwerp = parseOnderwerp(searchParams?.onderwerp)

  return (
    <main className={styles.page}>
      <header className={styles.top}>
        <Link href="/" className={styles.logoLink} aria-label="STARK! home">
          <Image
            src="/images/stark_logo_wit.png"
            alt="STARK!"
            width={120}
            height={38}
            className={styles.logo}
            priority
          />
        </Link>
        <Link href="/" className={styles.back}>
          ← Home
        </Link>
      </header>

      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Contact</p>
          <h1 className={styles.title}>{CTA_KENNISMAKING_LABEL}</h1>
          <p className={styles.lead}>
            Vrijblijvend. Geen verplichtingen. We kijken samen wat bij je past.
          </p>
        </div>

        <div className={styles.card}>
          <ContactForm initialOnderwerp={initialOnderwerp} />
        </div>

        <p className={styles.direct}>
          Liever direct?
          <a href="tel:+31621248107">06 21248107</a>
          <span aria-hidden>·</span>
          <a href={mailtoInfo}>info@starkhardenberg.nl</a>
          <span aria-hidden>·</span>
          <span>Nijverheidsstraat 15c, Hardenberg</span>
        </p>
      </div>
    </main>
  )
}
