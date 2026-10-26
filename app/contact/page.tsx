import type { Metadata } from 'next'
import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import ContactForm from '@/components/contact/ContactForm'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import {
  ADDRESS,
  mailtoInfo,
  parseOnderwerp,
  PHONE_CALL,
  PHONE_WHATSAPP,
} from '@/lib/contact'
import { pageMetadata } from '@/lib/open-graph'
import { STARK_CTA, STARK_CTA_PRIMARY, STARK_CTA_WHATSAPP } from '@/lib/stark-cta'
import styles from './contact.module.css'

export const metadata: Metadata = pageMetadata(
  'contact',
  'Contact — STARK! Hardenberg',
  'Adres, route, telefoon en e-mail. Stel je vraag via het formulier. Je spreekt altijd een mens bij STARK! Hardenberg.',
)

type PageProps = {
  searchParams?: { onderwerp?: string }
}

export default function ContactPage({ searchParams }: PageProps) {
  const initialOnderwerp = parseOnderwerp(searchParams?.onderwerp)

  return (
    <main className={styles.page}>
      <Nav />

      <section className={styles.hero} aria-labelledby="contact-hero-title">
        <div className={styles.heroFrame}>
          <div className={styles.heroCopy}>
            <h1 id="contact-hero-title" className={styles.heroTitle}>
              We staan voor je klaar
            </h1>
            <p className={styles.heroSub}>Vrijblijvend en eerlijk.</p>
            <div className={styles.heroActions}>
              <a
                href={PHONE_CALL.tel}
                className={`${styles.heroAction} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
              >
                Bel Engbert-Jan
              </a>
              <a
                href={`https://wa.me/${PHONE_WHATSAPP.wa}`}
                className={`${styles.heroAction} ${STARK_CTA} ${STARK_CTA_WHATSAPP}`}
              >
                App Yvonne
              </a>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <div className={styles.heroPhoto}>
              <StarkImage
                src="/images/team/engbert-jan-yvonne-hero.jpg"
                alt="Engbert-Jan en Yvonne lachen samen"
                fill
                unaltered
                priority
                quality={85}
                sizes="100vw"
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      <div className={styles.shell}>
        <section className={styles.formSection} aria-label="Contactformulier">
          <div className={styles.formCard}>
            <header className={styles.formHead}>
              <h2 className={styles.formTitle}>Stel je vraag</h2>
              <p className={styles.formLead}>
                Vul het formulier in. We nemen binnen uiterlijk 2 werkdagen contact met je op.
              </p>
            </header>
            <ContactForm initialOnderwerp={initialOnderwerp} />
          </div>
        </section>

        <section className={styles.practical} aria-label="Contactgegevens">
          <div className={styles.infoCard}>
            <h2 className={styles.infoTitle}>Direct contact</h2>
            <ul className={styles.infoList}>
              <li>
                <span className={styles.infoLabel}>Telefoon</span>
                <a href={PHONE_CALL.tel}>{PHONE_CALL.display}</a>
              </li>
              <li>
                <span className={styles.infoLabel}>E-mail</span>
                <a href={mailtoInfo}>info@starkhardenberg.nl</a>
              </li>
              <li>
                <span className={styles.infoLabel}>WhatsApp</span>
                <WhatsAppLink className={styles.whatsAppInline}>
                  <WhatsAppIcon className={styles.whatsAppIcon} />
                  <span>{PHONE_WHATSAPP.display}</span>
                </WhatsAppLink>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.visit} aria-label="Bezoekadres">
          <h2 className={styles.infoTitle}>Bezoekadres</h2>
          <p className={styles.address}>
            {ADDRESS.street}
            <br />
            {ADDRESS.city}
          </p>
          <p className={styles.address}>
            Onze leden komen uit de hele gemeente Hardenberg, zoals Dedemsvaart, Gramsbergen,
            Bergentheim, Slagharen en Kloosterhaar, en uit Ommen en Coevorden.
          </p>
          <a
            href={ADDRESS.maps}
            className={styles.routeBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Route openen in Google Maps
            <span aria-hidden>→</span>
          </a>
          <div className={styles.mapWrap}>
            <iframe
              title="STARK! Hardenberg op Google Maps"
              src={ADDRESS.mapsEmbed}
              className={styles.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

      </div>
    </main>
  )
}
