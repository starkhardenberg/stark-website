import Link from 'next/link'
import { CTA_KENNISMAKING_LABEL, hrefKennismaking } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_ROW } from '@/lib/stark-cta'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import Nav from '@/components/Nav'
import Image from 'next/image'
import navStyles from '../landing.module.css'
import TeamInteractiveGrid from './TeamInteractiveGrid'
import styles from './team.module.css'

export default function TeamPage() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/team.jpg"
            alt="Het team van STARK! Hardenberg"
            fill
            className={styles.heroBgImg}
            sizes="100vw"
            priority
          />
        </div>
        <Nav />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Een team van 11 mensen. Eén aanpak.</span>
          <span className={styles.heroSlash} />
          <h1 className={styles.heroTitle}>
            <span className={`${styles.heroLead} ${styles.heroLeadSmaller}`}>OVER</span>
            <span className={styles.heroPunch}>ONS</span>
          </h1>
        </div>
        <div className={styles.heroBar} />
      </section>

      {/* Intro strip */}
      <div className={styles.introSection}>
        <p className={styles.introText}>
          Negen trainers die zelf als lid begonnen, de weg liepen die jij nu loopt, en daarna zijn opgeleid via een intensief intern opleidingstraject.
          Engbert-Jan en Yvonne aan het roer, Tineke die alles in goede banen leidt.{' '}
          <strong>Korte lijnen, vaste gezichten, altijd iemand die jou kent.</strong>
        </p>
      </div>

      <TeamInteractiveGrid />

      {/* Over ons — eigenaren & ontstaan */}
      <section className={styles.originSection} aria-labelledby="origin-heading">
        <div className={styles.originInner}>
          <div className={styles.originGrid}>
            <div className={styles.originPhoto} aria-label="Engbert-Jan en Yvonne">
              <Image
                src="/images/team/engbert-jan-yvonne-samen.png"
                alt="Engbert-Jan en Yvonne samen"
                fill
                className={styles.originPhotoImg}
                style={{ objectPosition: 'center 8%' }}
                sizes="(min-width: 900px) 38vw, 92vw"
              />
            </div>
            <div className={styles.originCopy}>
              <span className={styles.originLabel}>Over ons</span>
              <h2 id="origin-heading" className={styles.originTitle}>
                Van de eerste dag tot nu
              </h2>
              <p className={styles.originBody}>
                Engbert-Jan opende in april 2013 de gym, toen nog als CrossFit Hardenberg. Gewoon beginnen, fouten maken, bijsturen en door. Geen slick verhaal, wel een plek waar je serieus aan jezelf mocht werken.
              </p>
              <p className={styles.originBody}>
                Yvonne stapte in 2017 als deelnemer binnen. Het mooiste was ontdekken dat je niet sterk hoeft zijn om te beginnen, maar dat het werk doen je juist laat groeien. Onderweg stond ze twee keer in de finale van het NK Sterkste Vrouw van Nederland. Inmiddels staan we samen aan het roer, als eigenaren en als partners thuis.
              </p>
              <p className={styles.originBody}>
                Eind 2020 lieten we de CrossFit-naam los en gingen we verder als STARK! Zelfde karakter, wel een naam die paste bij wie we geworden waren. In 2024 hebben we ons team geïnstalleerd. Mensen die de route al gelopen hebben, die de sfeer kennen en weten wat groeien hier vraagt. We investeren daar volop in: coaching, opleiding en verdieping, zodat goede begeleiding niet alleen bij ons tweeën blijft hangen.
              </p>
              <p className={styles.originBody}>
                Begin 2025 verhuisden we naar een pand dat ongeveer drie keer zo groot is. Meer ruimte voor training, voor groepen en voor wat we de komende jaren verder willen uitbouwen. Wat toen begon, zetten we elke week voort, samen met het team en met jou.
              </p>
              <p className={styles.originCaption}>
                Engbert-Jan en Yvonne · eigenaren, coaches en trainers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={navStyles.cta}>
        <span className={`${navStyles.ctaLabel} ${styles.teamBuildLabel}`}>Klaar om te bouwen?</span>
        <h2 className={navStyles.ctaTitle}>WEES WELKOM.</h2>
        <p className={navStyles.ctaSub}>
          Plan een vrijblijvend kennismakingsgesprek. We kijken samen wat het beste bij je past.
        </p>
        <div className={`${styles.ctaActions} ${STARK_CTA_ROW}`}>
          <Link href={hrefKennismaking} className={`${navStyles.ctaBtn} ${STARK_CTA}`}>
            {CTA_KENNISMAKING_LABEL}
          </Link>
          <WhatsAppLink className={`${styles.ctaWhatsapp} ${STARK_CTA}`}>
            <WhatsAppIcon className={styles.ctaWhatsappIcon} />
            <span>Stuur een WhatsApp</span>
          </WhatsAppLink>
        </div>
      </section>

    </main>
  )
}
