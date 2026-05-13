import Link from 'next/link'
import { mailtoKennismaking } from '@/lib/contact'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Van A naar B — Online mini-cursus — STARK! Hardenberg',
  description: 'Vijf online modules op eigen tempo. Een eerste serieuze stap richting verandering — voor wie nieuwsgierig is maar nog niet klaar voor een groot programma.',
}

export default function VanPuntANaarPuntBPage() {
  return (
    <main className={styles.main}>

      <nav className={styles.nav}>
        <Link href="/#aanbod" className={styles.navBack}>← Terug naar STARK!</Link>
        <Link href={mailtoKennismaking} className={styles.navCta}>Plan een kennismaking</Link>
      </nav>

      {/* Hero — text only, no photo */}
      <section className={styles.hero} style={{ minHeight: '70vh', background: 'var(--navy)' }}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Online mini-cursus</span>
          <span className={styles.heroSlash} />
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLead}>ONLINE</span>
            <span className={styles.heroPunch}>VAN A NAAR B</span>
          </h1>
          <p className={styles.heroSub}>
            Niet meteen vol erin, maar wel een eerste serieuze stap.{' '}
            <strong>Vijf modules op eigen tempo.</strong>
          </p>
        </div>
        <div className={styles.heroBar} />
      </section>

      {/* Stats row */}
      <div className={styles.statsRow}>
        <div className={styles.statCell}>
          <span className={styles.statNum}>5</span>
          <span className={styles.statLabel}>Modules</span>
        </div>
        <div className={styles.statCell}>
          <span className={styles.statNum}>1 jr</span>
          <span className={styles.statLabel}>Toegang</span>
        </div>
        <div className={styles.statCell}>
          <span className={styles.statNum}>Sept</span>
          <span className={styles.statLabel}>2026 Launch</span>
        </div>
      </div>

      {/* Wat is het */}
      <section className={styles.section}>
        <span className={styles.label}>Wat is het</span>
        <h2 className={styles.title}>EEN EERLIJKE EERSTE STAP</h2>
        <p className={styles.body}>
          Van A naar B is een online mini-cursus van vijf modules. Je volgt ze op eigen tempo, wanneer het jou uitkomt. <strong>Eén jaar toegang</strong>, zodat je op kunt pakken wanneer je er klaar voor bent.
        </p>
        <p className={styles.body}>
          Het is een kennismaking met de coachingsfilosofie van STARK!. Geen grote beloften, geen snelle fixes. Wel eerlijke vragen, herkenbare patronen en concrete handvatten om iets te veranderen.
        </p>
      </section>

      {/* Het programma */}
      <section className={styles.section}>
        <span className={styles.label}>Het programma</span>
        <h2 className={styles.title}>VIJF MODULES. ÉÉN LIJN.</h2>
        <p className={styles.body}>
          Elke module bouwt voort op de vorige. Van bewustwording naar plan, van plan naar keuze.
        </p>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <span className={styles.timelineNum}>01</span>
            <div className={styles.timelineBody}>
              <h3 className={styles.timelineTitle}>Je interne dialoog</h3>
              <p className={styles.timelineDesc}>Hoe de stemmetjes in je hoofd onbewust bepalen wat je doet — en hoe je ze leert herkennen.</p>
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
            <div className={styles.listTitle}>Je bent nieuwsgierig naar coaching maar de drempel voor een groot programma is te hoog</div>
            <div className={styles.listText}>Van A naar B geeft je een eerlijke smaak van de STARK!-aanpak — zonder grote stap.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Je wil begrijpen waarom je steeds vastloopt</div>
            <div className={styles.listText}>Niet meer symptomen aanpakken maar patronen begrijpen. De cursus helpt je zien wat er echt speelt.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Je zoekt een eerste eerlijke stap</div>
            <div className={styles.listText}>Geen hype, geen quick fix. Vijf modules die je uitdagen om eerlijk naar jezelf te kijken en iets te veranderen.</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <span className={styles.ctaLabel}>Klaar om te bouwen?</span>
        <h2 className={styles.ctaTitle}>KLAAR VOOR DE EERSTE STAP?</h2>
        <p className={styles.ctaSub}>Plan een kennismaking. Lancering september 2026.</p>
        <Link href={mailtoKennismaking} className={styles.ctaBtn}>Plan een kennismaking</Link>
        <span className={styles.ctaNote}>Lancering september 2026</span>
      </section>

    </main>
  )
}
