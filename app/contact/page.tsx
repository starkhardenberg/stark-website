import type { Metadata } from 'next'
import StarkImage from '@/components/StarkImage'
import ContactForm from '@/components/contact/ContactForm'
import { ADDRESS, PHONE_CALL, PHONE_WHATSAPP } from '@/lib/contact'
import { pageMetadata } from '@/lib/open-graph'
import { STARK_CTA, STARK_CTA_MD, STARK_CTA_ROW, STARK_CTA_WHATSAPP } from '@/lib/stark-cta'
import Footer from '@/components/Footer'
import landing from '../landing.module.css'
import styles from './contact.module.css'

export const metadata: Metadata = pageMetadata(
  'contact',
  'Contact — STARK! Hardenberg',
  'Adres, route, telefoon en e-mail. Stel je vraag via het formulier. Je spreekt altijd een mens bij STARK! Hardenberg.',
)

export default function ContactPage() {
  return (
    <>
      <main className={landing.main}>
        <section className={`${landing.hero} ${styles.heroSplit}`} aria-labelledby="contact-hero-title">
          <div className={`${landing.heroContent} ${styles.heroCopy}`}>
            <h1 id="contact-hero-title" className={`${landing.heroTitle} ${landing.heroTitleSplit}`}>
              <span className={landing.heroLead}>We staan</span>
              <span className={landing.heroPunch}>Voor je</span>
              <span className={landing.heroPunch}>Klaar</span>
            </h1>
            <p className={landing.heroSub}>Vrijblijvend en eerlijk.</p>
            <div className={`${STARK_CTA_ROW} ${styles.heroActions}`}>
              <a href={PHONE_CALL.tel} className={`${STARK_CTA} ${STARK_CTA_MD} ${STARK_CTA_WHATSAPP}`}>
                Bel Engbert-Jan
              </a>
              <a
                href={`https://wa.me/${PHONE_WHATSAPP.wa}`}
                className={`${STARK_CTA} ${STARK_CTA_MD} ${STARK_CTA_WHATSAPP}`}
              >
                App Yvonne
              </a>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <StarkImage
              src="/images/team/engbert-jan-yvonne-hero.jpg"
              alt="Engbert-Jan en Yvonne lachen samen"
              fill
              unaltered
              priority
              quality={85}
              sizes="(min-width: 900px) 50vw, 100vw"
              className={`${landing.heroBgImg} ${styles.heroImg}`}
            />
          </div>
        </section>

        <section
          className={`${landing.section} ${landing.sectionLight} ${landing.splitStatement}`}
          aria-label="Vraag en bezoek"
        >
          <div className={`${landing.split} ${landing.reverse} ${styles.band}`}>
            <div className={styles.formCol}>
              <h2 className={landing.title}>Vraag maar raak</h2>
              <p className={`${landing.processStepDesc} ${styles.lead}`}>
                Stel je vraag. Je hoort binnen één werkdag van ons.
              </p>
              <ContactForm />
            </div>
            <div className={`${landing.introCol} ${styles.visit}`}>
              <h2 className={landing.title}>Kom langs</h2>
              <p className={landing.processStepDesc}>
                {ADDRESS.street}
                <br />
                {ADDRESS.city}
              </p>
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
              <div className={`${STARK_CTA_ROW} ${styles.route}`}>
                <a
                  href={ADDRESS.maps}
                  className={`${STARK_CTA} ${STARK_CTA_MD} ${STARK_CTA_WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Route openen
                </a>
              </div>
              <p className={`${landing.processStepDesc} ${styles.towns}`}>
                Onze leden komen uit de hele gemeente Hardenberg, zoals Dedemsvaart, Gramsbergen,
                Bergentheim, Slagharen en Kloosterhaar, en uit Ommen en Coevorden.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="dark" />
    </>
  )
}
