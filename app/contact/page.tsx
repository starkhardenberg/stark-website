import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/contact/ContactForm'
import WhatsAppCTA from '@/components/contact/WhatsAppCTA'
import {
  CTA_KENNISMAKING_LABEL,
  mailtoInfo,
  parseOnderwerp,
  PHONE_CALL,
} from '@/lib/contact'
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
        <a href="/#aanbod" className={styles.back}>
          ← Home
        </a>
      </header>

      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Contact</p>
          <h1 className={styles.title}>{CTA_KENNISMAKING_LABEL}</h1>
          <p className={styles.lead}>Vrijblijvend. Geen verplichtingen.</p>
          <p className={styles.lead}>We kijken samen wat bij je past.</p>
        </div>

        <WhatsAppCTA variant="strip" />

        <p className={styles.orDivider}>of schriftelijk</p>

        <div className={styles.formCard}>
          <header className={styles.formHead}>
            <h2 className={styles.formTitle}>Graag contact opnemen</h2>
            <p className={styles.formLead}>
              Vul het formulier in. We nemen binnen uiterlijk 2 werkdagen contact met je op.
            </p>
          </header>
          <ContactForm initialOnderwerp={initialOnderwerp} />
        </div>

        <p className={styles.direct}>
          Liever direct bellen of mailen?
          <a href={PHONE_CALL.tel}>Bel {PHONE_CALL.display}</a>
          <span aria-hidden>·</span>
          <a href={mailtoInfo}>info@starkhardenberg.nl</a>
          <span aria-hidden>·</span>
          <span>Nijverheidsstraat 15c, Hardenberg</span>
        </p>
      </div>
    </main>
  )
}
