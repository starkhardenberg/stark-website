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
            src="/images/team/hero-dumbbells.jpg"
            alt="Halters op het rek in de zaal van STARK!"
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
          <p className={styles.heroSub}>Wat ons bindt: mensen sterker maken</p>
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
              STARK! Hardenberg werkt sinds 2013 aan kracht, bij mensen en bij bedrijven. Particulieren
              trainen in kleine groepen met een coach erbij, of volgen een coachingstraject
              rond wat hen tegenhoudt. Werkgevers schakelen STARK! in voor leiderschap, duurzame
              inzetbaarheid en de energie in hun team. Bedrijven uit Hardenberg komen daarvoor naar de
              Nijverheidsstraat 15c; bij bedrijven verder weg komt STARK! naar de eigen locatie. Leden
              komen uit Hardenberg, Dedemsvaart, Ommen en Coevorden.
            </p>
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
              <span className={styles.groupCreditTitleLine}>Mooie</span>{' '}
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
              Meer mooie plaatjes zien? Check{' '}
              <a
                href={PHOTO_CREDIT.instagramUrl}
                className={styles.groupCreditLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{PHOTO_CREDIT.name}
              </a>
              {' '}op Instagram.
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
                  Sterkste Vrouw.{' '}
                  <a
                    href="https://www.destentor.nl/hardenberg/yvonne-46-wil-voorbeeld-zijn-voor-dochter-en-knokt-zich-van-sofa-naar-de-top-ik-ben-weer-happy~a32b1891/"
                    className={styles.originInlineLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    De Stentor
                  </a>
                  ,{' '}
                  <a
                    href="https://www.oost.nl/nieuws/2258664/is-yvonne-uit-hardenberg-de-sterkste-van-nederland-eigenlijk-had-ik-er-helemaal-geen-zin-in"
                    className={styles.originInlineLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RTV Oost
                  </a>{' '}
                  en{' '}
                  <a
                    href="https://www.detoren.net/nieuws/hardenberg/82092/yvonne-alards-sterkste-vrouw-van-nederland"
                    className={styles.originInlineLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    De Toren
                  </a>{' '}
                  schreven over haar deelname aan het NK Sterkste Vrouw van Nederland.
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
            <p className={`${styles.originBody} ${styles.originClose}`}>
              STARK! Hardenberg is gevestigd aan de Nijverheidsstraat 15c in Hardenberg en is opgericht
              in 2013. Het aanbod bestaat uit krachttraining in kleine groepen met een coach, persoonlijke
              coaching en coachingstrajecten voor bedrijven. De training draait om samengestelde bewegingen
              met zandzakken, sleetjes en kettlebells. De coaching gebruikt een eigen methodiek met vier
              stappen: zichtbaar maken, afspreken, leiden en toetsen. Zakelijke trajecten met bedrijven uit
              Hardenberg vinden plaats op de locatie van STARK!. Voor bedrijven buiten Hardenberg komt
              STARK! desgewenst naar de eigen locatie van het bedrijf. Een kennismakingsgesprek is
              vrijblijvend en kan via de website worden gepland.
            </p>

        </div>
      </section>

      <WijBintStark size="hero" />

      <Footer variant="dark" />
    </main>
  )
}
