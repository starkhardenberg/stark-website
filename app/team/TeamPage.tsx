import Nav from '@/components/Nav'
import Image from 'next/image'
import Footer from '@/components/Footer'
import TeamInteractiveGrid from './TeamInteractiveGrid'
import GroupPhotoFrame from './GroupPhotoFrame'
import { PHOTO_CREDIT } from '@/lib/photo-credit'
import styles from './team.module.css'

export default function TeamPage() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={`${styles.hero} ${styles.heroTeam}`}>
        <div className={styles.heroBg}>
          <Image
            src="/images/team/hero-kettlebells.png"
            alt="Kettlebells op de planken in de STARK gym"
            fill
            className={styles.heroBgImg}
            sizes="100vw"
            priority
          />
        </div>
        <Nav />
        <div className={styles.heroContent}>
          <span className={styles.heroSlash} aria-hidden />
          <h1 className={styles.heroTitle}>
            <span className={`${styles.heroLead} ${styles.heroLeadSmaller}`}>Wi&apos;j bint</span>
            <span className={styles.heroPunch}>STARK</span>
          </h1>
          <p className={styles.heroSub}>Een team van 11 mensen. Eén aanpak.</p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      {/* Intro strip */}
      <section className={styles.creditSection} aria-labelledby="team-intro-heading">
        <div className={styles.creditInner}>
          <div className={styles.creditGrid}>
            <div className={styles.creditHead}>
              <h2
                id="team-intro-heading"
                className={`${styles.creditTitle} ${styles.creditTitlePlayful}`}
              >
                Van lid naar trainer
              </h2>
              <p className={styles.creditSubtitle}>Intern opgeleid, binnen onze muren.</p>
            </div>
            <div className={styles.creditCopy}>
              <p className={styles.creditBody}>
                Negen trainers die zelf als lid begonnen, de weg liepen die jij nu loopt, en daarna zijn
                opgeleid via een intensief intern opleidingstraject. Engbert-Jan en Yvonne aan het roer,
                Tineke die alles in goede banen leidt.
              </p>
              <p className={`${styles.creditBody} ${styles.creditPayoff}`}>
                Korte lijnen, vaste gezichten, altijd iemand die jou kent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.groupBand} aria-label="Het STARK team">
        <div className={styles.groupBandInner}>
          <div className={styles.groupBandMedia}>
            <Image
              src="/images/team-home.jpg"
              alt="Het STARK team, lachend voor het logo in zwart-wit"
              fill
              className={styles.groupBandImg}
              sizes="100vw"
            />
            <GroupPhotoFrame />
          </div>
        </div>
      </section>

      <TeamInteractiveGrid />

      <section className={styles.creditSection} aria-labelledby="credit-heading">
        <div className={styles.creditInner}>
          <div className={styles.creditGrid}>
            <div className={styles.creditHead}>
              <h2 id="credit-heading" className={`${styles.creditTitle} ${styles.creditTitlePlayful}`}>
                Mooie plaatjes hè?
              </h2>
              <p className={styles.creditSubtitle}>Gemaakt door iemand die hier zelf traint.</p>
            </div>
            <div className={styles.creditCopy}>
              <p className={styles.creditBody}>
                De portretten op deze pagina zijn van de hand van {PHOTO_CREDIT.fullName}, die zelf een
                coachingstraject bij ons heeft doorlopen en nog steeds bij ons traint. Ze is onlangs
                haar eigen fotografiebedrijf gestart en wij zijn enorm blij dat zij vastlegt hoe het er
                bij ons aan toegaat.
              </p>
              <p className={styles.creditBody}>
                Wil je haar werk zien? Kijk dan op{' '}
                <a
                  href={PHOTO_CREDIT.instagramUrl}
                  className={styles.creditLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{PHOTO_CREDIT.name}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Over ons — eigenaren & ontstaan */}
      <section className={styles.originSection} aria-labelledby="origin-heading">
        <div className={styles.originLayout}>
          <div className={styles.originMedia} aria-label="Engbert-Jan en Yvonne">
            <Image
              src="/images/team/engbert-jan-yvonne-samen.png"
              alt="Engbert-Jan en Yvonne lachen samen voor een zwarte achtergrond"
              fill
              className={styles.originPhotoImg}
              sizes="(min-width: 900px) 62vw, 100vw"
            />
            <div className={styles.originMediaEdge} aria-hidden />
          </div>

          <div className={styles.originPanel}>
            <span className={styles.originLabel}>Over ons</span>
            <h2 id="origin-heading" className={styles.originTitle}>
              Zelf begonnen, samen door.
            </h2>
            <p className={styles.originBody}>
              Engbert-Jan opende de gym in april 2013, toen nog als CrossFit Hardenberg. Gewoon
              beginnen, fouten maken, bijsturen en door. Een plek waar je serieus aan jezelf kon
              werken.
            </p>
            <p className={styles.originBody}>
              Yvonne stapte in 2017 als lid binnen. Ze ontdekte dat je niet sterk hoeft te zijn om
              te beginnen. Het werk doen maakt je sterker. Twee keer stond ze in de finale van het NK
              Sterkste Vrouw.
            </p>
            <p className={styles.originBody}>
              Inmiddels runnen we STARK samen, als eigenaren en als partners thuis.
            </p>
            <p className={styles.originBody}>
              Eind 2020 lieten we de CrossFit-naam los en gingen we verder als STARK. Het karakter
              bleef, de naam paste beter bij ons.
            </p>
            <p className={styles.originBody}>
              In 2021 startten we met onze eerste coachingstrajecten. Sindsdien hebben we ruim 200
              mensen geholpen om voor elkaar te krijgen wat ze zelf belangrijk vinden. Mensen die
              iets te winnen hadden.
            </p>
            <p className={styles.originBody}>
              Tot begin 2024 deden we dat met z&apos;n tweeën. Toen zijn we een team gaan bouwen.
              Eerst zes mensen erbij, het jaar daarna nog drie. Iedereen in ons team heeft het
              traject zelf doorlopen, kent de sfeer en weet wat groeien hier vraagt. We investeren
              daar volop in: coaching, opleiding en verdieping. Zo hangt goede begeleiding niet
              langer alleen van ons tweeën af.
            </p>
            <p className={styles.originBody}>
              Begin 2025 verhuisden we naar een pand dat ongeveer drie keer zo groot is. Meer
              ruimte voor training, voor groepen en voor alles wat we de komende jaren willen
              opbouwen.
            </p>
            <p className={styles.originBody}>
              Wat in 2013 begon, zetten we elke week voort. Inmiddels staan we met z&apos;n elven.
              Samen met het team, en met jou.
            </p>

            <div className={styles.originQuotes}>
              <figure className={styles.originQuote}>
                <blockquote className={styles.originQuoteText}>
                  Het allermooiste is als mensen durven vertrouwen op mijn coaching en het lukt.
                </blockquote>
                <figcaption className={styles.originQuoteName}>Engbert-Jan</figcaption>
              </figure>
              <figure className={styles.originQuote}>
                <blockquote className={styles.originQuoteText}>
                  Niets is onmogelijk. Dat mensen te laten ervaren, zowel in hoofd als in hun lijf
                  is goud!
                </blockquote>
                <figcaption className={styles.originQuoteName}>Yvonne</figcaption>
              </figure>
            </div>

            <p className={styles.originCaption}>
              Engbert-Jan en Yvonne · eigenaren, coaches en trainers
            </p>
          </div>
        </div>
      </section>

      <Footer photoless brandPrefix="BIJ" />
    </main>
  )
}
