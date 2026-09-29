import Link from 'next/link'
import Nav from '@/components/Nav'
import StarkImage from '@/components/StarkImage'
import Footer from '@/components/Footer'
import WijBintStark from '@/components/WijBintStark'
import TeamInteractiveGrid from './TeamInteractiveGrid'
import GroupPhotoFrame from './GroupPhotoFrame'
import { PHOTO_CREDIT } from '@/lib/photo-credit'
import introStyles from '@/components/IntroSection.module.css'
import styles from './team.module.css'

export default function TeamPage() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={`${styles.hero} ${styles.heroTeam}`}>
        <div className={styles.heroBg}>
          <StarkImage
            src="/images/team/hero-kettlebells.png"
            alt="Kettlebells op de planken in de STARK! gym"
            fill
            className={styles.heroBgImg}
            sizes="100vw"
            priority
          />
        </div>
        <Nav deep />
        <div className={styles.heroContent}>
          <span className={styles.heroSlash} aria-hidden />
          <h1 className={styles.heroTitle}>
            <span className={`${styles.heroLead} ${styles.heroLeadSmaller}`}>Wi&apos;j bint</span>{' '}
            <span className={styles.heroPunch}>STARK!</span>
          </h1>
          <p className={styles.heroSub}>Een team van 11 mensen. Eén aanpak</p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <section className={introStyles.intro} aria-labelledby="team-intro-heading">
        <div className={introStyles.inner}>
          <header className={introStyles.banner}>
            <h2 id="team-intro-heading" className={introStyles.quote}>
              <span className={introStyles.quoteLine}>
                <span className={introStyles.quoteMark}>Niemand</span> hier begon
              </span>
              <span className={introStyles.quoteLine}>als trainer</span>
            </h2>
            <p className={`starkSectionMeta ${introStyles.positioning}`}>
              Intern opgeleid, binnen onze muren
            </p>
          </header>
          <div className={styles.introCopy}>
            <p className={styles.creditBody}>
              Acht trainers die zelf als lid begonnen, de weg liepen die jij nu loopt, en daarna zijn
              opgeleid via een intensief intern opleidingstraject. Engbert-Jan en Yvonne als eigenaren
              aan het roer. Tineke die alles in goede banen leidt.
            </p>
            <p className={`${styles.creditBody} ${styles.creditPayoff}`}>
              Korte lijnen, vaste gezichten, altijd iemand die jou kent.
            </p>
          </div>
        </div>
      </section>

      <TeamInteractiveGrid />

      <section className={styles.groupBand} aria-labelledby="credit-heading">
        <div className={styles.groupBandInner}>
          <div className={styles.groupBandMedia}>
            <StarkImage
              src="/images/team-home.jpg"
              alt="Het STARK! team, lachend voor het logo in zwart-wit"
              fill
              className={styles.groupBandImg}
              sizes="(min-width: 900px) 56vw, 100vw"
            />
            <GroupPhotoFrame />
          </div>
          <div className={styles.groupCredit}>
            <h2 id="credit-heading" className={styles.groupCreditTitle}>
              <span className={styles.groupCreditTitleLine}>Mooie</span>
              <span className={styles.groupCreditTitleLine}>plaatjes hè?</span>
            </h2>
            <p className={`starkSectionMeta ${styles.groupCreditMeta}`}>
              Gemaakt door iemand die hier zelf traint.
            </p>
            <p className={styles.groupCreditBody}>
              De foto&apos;s op deze pagina zijn gemaakt door Marianne Donker, die zelf een
              coachingstraject bij ons doorliep en nog steeds bij ons traint. Ze is onlangs haar
              eigen fotografiebedrijf begonnen, en wij zijn er trots op dat juist zij vastlegt hoe
              het er bij ons aan toegaat. Ze weet als geen ander waar ze op moet letten: ze vangt
              precies het moment waarop iemand iets voor elkaar krijgt wat hij eerder niet voor
              mogelijk hield.
            </p>
            <p className={styles.groupCreditBody}>
              Meer mooie plaatjes zien, check{' '}
              <a
                href={PHOTO_CREDIT.instagramUrl}
                className={styles.groupCreditLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{PHOTO_CREDIT.name}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className={styles.originSection} aria-labelledby="origin-heading">
        <div className={styles.originPanel}>
            <h2 id="origin-heading" className={styles.originTitle}>
              Van 2013 tot nu
            </h2>
            <ol className={styles.originTimeline}>
              <li className={styles.originBeat}>
                <time className={styles.originYear} dateTime="2013">2013</time>
                <p className={styles.originBody}>
                  Engbert-Jan opende de gym in april 2013, toen nog als CrossFit Hardenberg. Gewoon
                  beginnen, fouten maken, bijsturen en door. Een plek waar je serieus aan jezelf kon
                  werken.
                </p>
              </li>
              <li className={styles.originBeat}>
                <time className={styles.originYear} dateTime="2017">2017</time>
                <p className={styles.originBody}>
                  Yvonne stapte in 2017 als lid binnen. Ze ontdekte dat je niet sterk hoeft te zijn om
                  te beginnen. Het werk doen maakt je sterker. Twee keer stond ze in de finale van het NK
                  Sterkste Vrouw.
                </p>
              </li>
              <li className={styles.originBeat}>
                <time className={styles.originYear} dateTime="2020">2020</time>
                <p className={styles.originBody}>
                  Eind 2020 lieten we de CrossFit-naam los en gingen we verder als STARK! Het karakter
                  bleef, de naam paste beter bij ons.
                </p>
              </li>
              <li className={styles.originBeat}>
                <time className={styles.originYear} dateTime="2021">2021</time>
                <p className={styles.originBody}>
                  In 2021 startten we met onze eerste{' '}
                  <Link href="/coaching" className={styles.originInlineLink}>
                    coachingstrajecten
                  </Link>
                  . Sindsdien hebben we ruim 200 mensen geholpen om voor elkaar te krijgen wat ze zelf
                  belangrijk vinden. Mensen die iets te winnen hadden.
                </p>
              </li>
              <li className={styles.originBeat}>
                <time className={styles.originYear} dateTime="2024">2024</time>
                <p className={styles.originBody}>
                  Tot begin 2024 deden we dat met z&apos;n tweeën. Toen zijn we een team gaan bouwen.
                  Eerst zes mensen erbij, het jaar daarna nog drie. Iedereen in ons team heeft het
                  traject zelf doorlopen, kent de sfeer en weet wat groeien hier vraagt. We investeren
                  daar volop in: coaching, opleiding en verdieping. Zo hangt goede begeleiding niet
                  langer alleen van ons tweeën af.
                </p>
              </li>
              <li className={styles.originBeat}>
                <time className={styles.originYear} dateTime="2025">2025</time>
                <p className={styles.originBody}>
                  Begin 2025 verhuisden we naar een pand dat ongeveer drie keer zo groot is. Meer ruimte
                  voor <Link href="/trainen" className={styles.originInlineLink}>training</Link>, voor groepen en voor alles wat we de komende jaren willen
                  opbouwen.
                </p>
              </li>
              <li className={`${styles.originBeat} ${styles.originClose}`}>
                <p className={styles.originBody}>
                  Inmiddels runnen we STARK! samen, als eigenaren en als partners thuis. Wat in 2013
                  begon, zetten we elke week voort. Samen met het team en samen met jou.
                </p>
              </li>
            </ol>

        </div>
      </section>

      <WijBintStark size="hero" />

      <Footer
        photoless
        hideBrand
        statement="Koffie en verder praten?"
        statementMeta="Gratis gesprek · ~1 uur"
      />
    </main>
  )
}
