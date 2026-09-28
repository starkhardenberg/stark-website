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

      <div className={styles.shell}>
        <header className={styles.intro}>
          <h1 className={styles.title}>Zo bereik je ons</h1>
          <p className={styles.lead}>
            Een vraag? Vul het formulier hieronder in, of bel, app of mail ons. Je spreekt altijd
            met een mens.
          </p>
        </header>

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
          <div className={styles.practicalGrid}>
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

            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Bezoekadres</h2>
              <p className={styles.address}>
                {ADDRESS.street}
                <br />
                {ADDRESS.city}
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
            </div>
          </div>

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

        <section className={styles.owners} aria-label="Eigenaren">
          <div className={styles.ownersCopy}>
            <h2 className={styles.ownersTitle}>We staan voor je klaar</h2>
            <p className={styles.ownersLead}>
              Of je nu belt, appt of mailt: we helpen je graag verder. Vrijblijvend, eerlijk en
              in je eigen tempo.
            </p>
          </div>
          <figure className={styles.ownerCard}>
            <div className={styles.ownerPhoto}>
              <StarkImage
                src="/images/team/engbert-jan-yvonne-samen.png"
                alt="Engbert-Jan en Yvonne lachen samen"
                fill
                unaltered
                sizes="(min-width: 720px) 480px, 100vw"
                className={styles.ownerImg}
              />
            </div>
            <figcaption className={styles.ownerCaption}>
              <span className={styles.ownerName}>Engbert-Jan en Yvonne</span>
              <span className={styles.ownerRole}>Eigenaren, coaches en trainers</span>
            </figcaption>
          </figure>
        </section>
      </div>
    </main>
  )
}
