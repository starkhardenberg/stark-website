import Link from 'next/link'
import { CTA_KENNISMAKING_LABEL, hrefKennismaking } from '@/lib/contact'
import { STARK_CTA } from '@/lib/stark-cta'
import Image from 'next/image'
import Nav from '@/components/Nav'
import { oswaldTrim } from '@/lib/displayTrim'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Fundament preventief programma — STARK! Hardenberg',
  description: 'Tien weken groepsprogramma voor medewerkers. Fysiek sterker, mentaal weerbaarder. Betere prestaties, minder verzuim.',
}

export default function FundamentPreventiefPage() {
  return (
    <main className={styles.main}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/foto-coaching-samen.jpg"
            alt="Coaching samen bij STARK! Hardenberg"
            fill
            className={styles.heroBgImg}
            sizes="100vw"
            priority
          />
        </div>
        <Nav />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>10 weken — groepsprogramma voor medewerkers</span>
          <span className={styles.heroSlash} />
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLead}>BEDRIJVEN</span>
            <span className={styles.heroPunch}>FUNDAMENT</span>
          </h1>
          <p className={styles.heroSub}>
            Fittere, sterkere medewerkers die ook mentaal scherper zijn.{' '}
            <strong>Dat is wat Fundament oplevert — voor hén én voor jouw organisatie.</strong>
          </p>
        </div>
        <div className={styles.heroBar} />
      </section>

      {/* Stats row */}
      <div className={styles.statsRow}>
        <div className={styles.statCell}>
          <span className={styles.statNum}>10</span>
          <span className={styles.statLabel}>Weken</span>
        </div>
        <div className={styles.statCell}>
          <span className={styles.statNum}>20</span>
          <span className={styles.statLabel}>Trainingen</span>
        </div>
        <div className={styles.statCell}>
          <span className={styles.statNum}>10</span>
          <span className={styles.statLabel}>Uur coaching</span>
        </div>
        <div className={styles.statCell}>
          <span className={styles.statNum}>Max.10</span>
          <span className={styles.statLabel}>Deelnemers</span>
        </div>
      </div>

      {/* Wat is Fundament — split reverse */}
      <div className={`${styles.split} ${styles.reverse}`}>
        <div className={styles.splitPhoto}>
          <Image
            src="/images/foto-groep-vloer.jpg"
            alt="Groep op de vloer bij STARK! Hardenberg"
            fill
            className={styles.splitPhotoImg}
            sizes="(min-width:900px) 45vw, 100vw"
          />
        </div>
        <div className={styles.splitContent} data-num="01">
          <div className={styles.splitInner}>
            <span className={styles.label}>Wat is Fundament</span>
            <h2 className={styles.title} style={oswaldTrim('INVESTEER')}>INVESTEER IN JE MENSEN</h2>
            <p className={styles.body}>
              Fundament is een intensief 10-wekenprogramma waarbij medewerkers niet alleen fysiek sterker worden, maar ook leren begrijpen wat hen tegenhoudt om hun beste werk te leveren. 2x per week kleine groep max 10, vijf groepscoachingsessies inclusief fysieke challenge. 20 uur fysieke training én coaching die beklijft.
            </p>
          </div>
        </div>
      </div>

      {/* Het programma */}
      <section className={styles.section}>
        <span className={styles.label}>Het programma</span>
        <h2 className={styles.title} style={oswaldTrim('VIJF')}>VIJF SESSIES. ÉÉN LIJN.</h2>
        <p className={styles.body}>
          Elke coachsessie bouwt voort op de vorige. Van bewustwording naar plan, van plan naar uitvoering, van uitvoering naar vrijheid. Elke sessie sluit af met een fysieke challenge — zodat je de theorie meteen in je lijf ervaart.
        </p>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <span className={styles.timelineNum}>01</span>
            <div className={styles.timelineBody}>
              <h3 className={styles.timelineTitle}>Je interne dialoog</h3>
              <p className={styles.timelineDesc}>Hoe de stemmetjes in je hoofd onbewust bepalen wat je doet — en hoe je ze leert herkennen en ombuigen.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.timelineNum}>02</span>
            <div className={styles.timelineBody}>
              <h3 className={styles.timelineTitle}>Van A naar B — je plan</h3>
              <p className={styles.timelineDesc}>Waar sta je nu? Waar wil je heen? Je maakt een concreet, eerlijk plan met acties die echt noodzakelijk zijn.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.timelineNum}>03</span>
            <div className={styles.timelineBody}>
              <h3 className={styles.timelineTitle}>Zijn — Doen — Hebben</h3>
              <p className={styles.timelineDesc}>Wie je bent bepaalt wat je doet, en dat bepaalt je resultaat. Je leert bewust schakelen naar wie je moet zijn — ook als je geen zin hebt, moe bent of het tegenzit.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.timelineNum}>04</span>
            <div className={styles.timelineBody}>
              <h3 className={styles.timelineTitle}>Commitment &amp; patronen</h3>
              <p className={styles.timelineDesc}>Wat doe jij als het moeilijk wordt? Je leert je eigen patronen herkennen — en verandert ze van obstakels naar inzichten.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.timelineNum}>05</span>
            <div className={styles.timelineBody}>
              <h3 className={styles.timelineTitle}>Moeten versus willen</h3>
              <p className={styles.timelineDesc}>De taal die je gebruikt bepaalt hoe je je leven ervaart. Je leert de dwang van moeten omzetten in de kracht van willen en kiezen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className={styles.section}>
        <span className={styles.label}>Voor wie</span>
        <h2 className={styles.title} style={oswaldTrim('VOOR')}>VOOR WERKGEVERS ÉN MEDEWERKERS</h2>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Als werkgever: je wil investeren in duurzame inzetbaarheid</div>
            <div className={styles.listText}>Niet een teamuitje, maar een programma dat écht iets verandert. Medewerkers die fysiek en mentaal sterker zijn, verzuimen minder en presteren beter.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Als werkgever: je zoekt meer dan een sportabonnement</div>
            <div className={styles.listText}>Fundament combineert fysieke training met persoonlijke coaching. Medewerkers leren patronen herkennen die ook op de werkvloer spelen — en doorbreken ze.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Als medewerker: je weet wat je moet doen — maar doet het niet</div>
            <div className={styles.listText}>Je hebt de kennis, je mist de uitvoering. Fundament helpt je begrijpen waarom, en doorbreekt dat patroon — in de gym én op je werk.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Als medewerker: je wil fitter worden én meer grip op jezelf</div>
            <div className={styles.listText}>Meer energie, betere conditie en een sterker hoofd. Je leert werken vanuit commitment — niet afhankelijk van motivatie die komt en gaat.</div>
          </div>
        </div>
      </section>

      {/* Wat levert het op */}
      <section className={styles.section}>
        <span className={styles.label}>Wat levert het op</span>
        <h2 className={styles.title} style={oswaldTrim('NA')}>NA 10 WEKEN FUNDAMENT</h2>
        <div className={styles.resultGrid}>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Voor de medewerker — fysiek</span>
            <div className={styles.resultTitle}>Sterker &amp; fitter</div>
            <p className={styles.resultText}>Een solide allround basis opgebouwd. Meer kracht, betere conditie en meer energie — ook op de werkvloer merkbaar.</p>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Voor de medewerker — mentaal</span>
            <div className={styles.resultTitle}>Meer grip &amp; zelfvertrouwen</div>
            <p className={styles.resultText}>Medewerkers begrijpen hoe hun hoofd werkt als het moeilijk wordt — en handelen daar bewust op. Minder stress, meer focus.</p>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Voor de organisatie</span>
            <div className={styles.resultTitle}>Betere prestaties &amp; minder verzuim</div>
            <p className={styles.resultText}>Medewerkers die fysiek en mentaal sterker zijn, zijn veerkrachtiger, verzuimen minder en nemen meer eigenaarschap over hun werk.</p>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Voor de organisatie</span>
            <div className={styles.resultTitle}>Investering die beklijft</div>
            <p className={styles.resultText}>Geen eenmalige boost, maar blijvende gedragsverandering. De inzichten en gewoonten die medewerkers opdoen werken door — lang na het programma.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <span className={styles.ctaLabel}>Klaar om te bouwen?</span>
        <h2 className={styles.ctaTitle}>FUNDAMENT AANBIEDEN?</h2>
        <p className={styles.ctaSub}>Plan een kennismaking voor de mogelijkheden. Maximaal 10 deelnemers per groep.</p>
        <Link href={hrefKennismaking} className={`${styles.ctaBtn} ${STARK_CTA}`}>{CTA_KENNISMAKING_LABEL}</Link>
        <span className={styles.ctaNote}>Beperkt aantal plaatsen beschikbaar</span>
      </section>

    </main>
  )
}
