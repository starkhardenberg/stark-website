import Link from 'next/link'
import { hrefCoaching } from '@/lib/contact'
import Image from 'next/image'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Momentum — 10 weken groepsprogramma — STARK! Hardenberg',
  description: 'Tien weken samen verder dan alleen. Fysieke training plus groepscoaching in een vaste kleine groep van maximaal tien mensen.',
}

export default function MomentumPage() {
  return (
    <main className={styles.main}>

      <nav className={styles.nav}>
        <Link href="/#aanbod" className={styles.navBack}>← Terug naar STARK!</Link>
        <Link href={hrefCoaching} className={styles.navCta}>Kom kennismaken</Link>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/foto-groep-vloer.jpg"
            alt="Groep op de vloer bij Momentum STARK! Hardenberg"
            fill
            className={styles.heroBgImg}
            sizes="100vw"
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>10-weken groepsprogramma</span>
          <span className={styles.heroSlash} />
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLead}>PROGRAMMA</span>
            <span className={styles.heroPunch}>MOMENTUM</span>
          </h1>
          <p className={styles.heroSub}>
            Samen verder dan alleen. In een vaste kleine groep werk je tien weken lang aan kracht, gewoontes en richting —{' '}
            <strong>fysiek en mentaal.</strong>
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
          <span className={styles.statLabel}>Personen</span>
        </div>
      </div>

      {/* Wat is Momentum — split reverse */}
      <div className={`${styles.split} ${styles.reverse}`}>
        <div className={styles.splitPhoto}>
          <Image
            src="/images/foto-coaching-moment.jpg"
            alt="Coaching moment bij Momentum STARK! Hardenberg"
            fill
            className={styles.splitPhotoImg}
            sizes="(min-width:900px) 45vw, 100vw"
          />
        </div>
        <div className={styles.splitContent} data-num="01">
          <div className={styles.splitInner}>
            <span className={styles.label}>Wat is Momentum</span>
            <h2 className={styles.title}>TIEN WEKEN. ECHTE VERANDERING.</h2>
            <p className={styles.body}>
              Momentum is een intensief 10-weken groepsprogramma voor wie blijvend resultaat wil — samen met anderen. Je traint <strong>20 keer fysiek</strong> in een vaste kleine groep en volgt <strong>10 uur groepscoaching</strong>, verspreid over vijf sessies van twee uur. Aangevuld met 5 challenges die je de theorie in je lijf laten voelen.
            </p>
            <p className={styles.body}>
              Maximaal 10 mensen per groep. Kleine groep, echte verbinding, coaches die weten wie je bent.
            </p>
          </div>
        </div>
      </div>

      {/* Het programma */}
      <section className={styles.section}>
        <span className={styles.label}>Het programma</span>
        <h2 className={styles.title}>VIJF SESSIES. ÉÉN LIJN.</h2>
        <p className={styles.body}>
          Elke coachsessie bouwt voort op de vorige. Van bewustwording naar plan, van plan naar uitvoering, van uitvoering naar vrijheid.
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
              <h3 className={styles.timelineTitle}>Van A naar B</h3>
              <p className={styles.timelineDesc}>Waar sta je nu? Waar wil je heen? Je maakt een concreet, eerlijk plan met acties die echt noodzakelijk zijn.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.timelineNum}>03</span>
            <div className={styles.timelineBody}>
              <h3 className={styles.timelineTitle}>Zijn — Doen — Hebben</h3>
              <p className={styles.timelineDesc}>Wie je bent bepaalt wat je doet, en dat bepaalt je resultaat. Je leert bewust schakelen naar wie je moet zijn — ook als je geen zin hebt of het tegenzit.</p>
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
        <h2 className={styles.title}>HERKEN JIJ DIT?</h2>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Je loopt vast, ook al weet je wat nodig is</div>
            <div className={styles.listText}>Je hebt de kennis maar mist de uitvoering. Momentum helpt je begrijpen waarom — en doorbreekt het patroon.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Je bereikt samen meer dan alleen</div>
            <div className={styles.listText}>Een vaste groep die door hetzelfde gaat, houdt je scherp. Dat werkt anders dan alleen trainen.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Je wil blijvend resultaat, geen tijdelijke boost</div>
            <div className={styles.listText}>Geen snelle fix. Tien weken werken aan het fundament — zodat het beklijft lang nadat het programma klaar is.</div>
          </div>
        </div>
        <p className={styles.body} style={{ marginTop: '24px' }}>
          Momentum wordt specifiek aangeboden voor <strong>vrouwen</strong> en <strong>werkende vaders</strong> — als aparte groepen met eigen dynamiek.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <span className={styles.ctaLabel}>Klaar om te bouwen?</span>
        <h2 className={styles.ctaTitle}>KLAAR VOOR MOMENTUM?</h2>
        <p className={styles.ctaSub}>Plan een kennismaking. We kijken samen of Momentum past.</p>
        <Link href={hrefCoaching} className={styles.ctaBtn}>Kom kennismaken</Link>
        <span className={styles.ctaNote}>Maximaal 10 personen per groep</span>
      </section>

    </main>
  )
}
