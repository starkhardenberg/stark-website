import Link from 'next/link'
import { hrefZakelijk } from '@/lib/contact'
import Image from 'next/image'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Re-integratie — Fundament voor bedrijven — STARK! Hardenberg',
  description: 'Iemand op een blijvende manier weer op de rit krijgen. Twaalf weken individueel traject voor re-integratie — fysiek én mentaal, ook inzetbaar via arbobudget.',
}

export default function FundamentReIntegratiePage() {
  return (
    <main className={styles.main}>

      <nav className={styles.nav}>
        <Link href="/#aanbod" className={styles.navBack}>← Terug naar STARK!</Link>
        <Link href={hrefZakelijk} className={styles.navCta}>Kom kennismaken</Link>
      </nav>

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
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Fundament voor bedrijven</span>
          <span className={styles.heroSlash} />
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLead}>BEDRIJVEN</span>
            <span className={styles.heroPunch}>RE-INTEGRATIE</span>
          </h1>
          <p className={styles.heroSub}>
            Iemand op een blijvende manier weer op de rit krijgen —{' '}
            <strong>niet alleen snel terug, maar zo dat hij of zij kan blijven staan.</strong>
          </p>
        </div>
        <div className={styles.heroBar} />
      </section>

      {/* Stats row */}
      <div className={styles.statsRow}>
        <div className={styles.statCell}>
          <span className={styles.statNum}>12</span>
          <span className={styles.statLabel}>Weken</span>
        </div>
        <div className={styles.statCell}>
          <span className={styles.statNum}>1</span>
          <span className={styles.statLabel}>Vaste coach</span>
        </div>
        <div className={styles.statCell}>
          <span className={styles.statNum}>1-op-1</span>
          <span className={styles.statLabel}>Begeleiding</span>
        </div>
        <div className={styles.statCell}>
          <span className={styles.statNum}>Arbo</span>
          <span className={styles.statLabel}>Budget mogelijk</span>
        </div>
      </div>

      {/* Wat is het — split reverse */}
      <div className={`${styles.split} ${styles.reverse}`}>
        <div className={styles.splitPhoto}>
          <Image
            src="/images/foto-vrouw-kettlebell.jpg"
            alt="Vrouw met kettlebell bij STARK! Hardenberg"
            fill
            className={styles.splitPhotoImg}
            sizes="(min-width:900px) 45vw, 100vw"
          />
        </div>
        <div className={styles.splitContent} data-num="01">
          <div className={styles.splitInner}>
            <span className={styles.label}>Wat is het</span>
            <h2 className={styles.title}>HETZELFDE TRAJECT, VOOR RE-INTEGRATIE</h2>
            <p className={styles.body}>
              Het re-integratietraject is hetzelfde 12-weeks traject als Impact — maar dan specifiek ingezet voor medewerkers die uitgevallen zijn. Het start met het <strong>Startpakket</strong>: vier 1-op-1 sessies voor een nulmeting en een persoonlijk plan.
            </p>
            <p className={styles.body}>
              Daarna twee keer per week trainen in een kleine groep, plus een wekelijks 1-op-1 coachingsgesprek. <strong>Fysiek en mentaal</strong> — want het een werkt niet zonder het ander. Het traject is in te zetten via arbobudget.
            </p>
          </div>
        </div>
      </div>

      {/* Hoe werkt het */}
      <section className={styles.section}>
        <span className={styles.label}>Hoe werkt het</span>
        <h2 className={styles.title}>STAP VOOR STAP OPBOUWEN</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <span className={styles.timelineNum}>01</span>
            <div className={styles.timelineBody}>
              <h3 className={styles.timelineTitle}>Nulmeting</h3>
              <p className={styles.timelineDesc}>Vier 1-op-1 sessies. We meten waar de medewerker nu staat — fysiek en mentaal — en maken een plan dat daarbij past.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.timelineNum}>02</span>
            <div className={styles.timelineBody}>
              <h3 className={styles.timelineTitle}>Opbouw fysiek</h3>
              <p className={styles.timelineDesc}>Rustig opbouwen. We werken vanuit wat er kan, niet vanuit wat er ooit was. Geen haast, wel richting.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.timelineNum}>03</span>
            <div className={styles.timelineBody}>
              <h3 className={styles.timelineTitle}>Groepstraining</h3>
              <p className={styles.timelineDesc}>Twee keer per week trainen in een vaste kleine groep. Structuur, regelmaat en verbinding — dat helpt herstel.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.timelineNum}>04</span>
            <div className={styles.timelineBody}>
              <h3 className={styles.timelineTitle}>1-op-1 coaching</h3>
              <p className={styles.timelineDesc}>Wekelijkse gesprekken met de vaste coach. Over wat er speelt, hoe het gaat en wat de volgende stap is.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.timelineNum}>05</span>
            <div className={styles.timelineBody}>
              <h3 className={styles.timelineTitle}>Evaluatie en plan</h3>
              <p className={styles.timelineDesc}>Aan het einde kijken we samen terug en vooruit. Wat heeft de medewerker nodig om te blijven staan? We maken een concreet vervolgplan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className={styles.section}>
        <span className={styles.label}>Voor wie</span>
        <h2 className={styles.title}>VOOR BEDRIJVEN DIE ECHT HERSTEL WILLEN</h2>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Bedrijven met een uitgevallen medewerker</div>
            <div className={styles.listText}>Mentaal of fysiek — het traject is geschikt voor beide. We beginnen altijd met een eerlijke nulmeting om te bepalen wat de medewerker nodig heeft.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>HR of leidinggevenden die goed willen begeleiden</div>
            <div className={styles.listText}>Je wil niet dat iemand snel terugkeert en dan opnieuw uitvalt. Dit traject richt zich op duurzaam herstel — niet op het snelst mogelijke terugkeermoment.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Wie meer wil dan een standaard re-integratietraject</div>
            <div className={styles.listText}>Standaard trajecten missen de fysieke component. En de combinatie van bewegen en coaching maakt het verschil — dat weten we uit ervaring.</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <span className={styles.ctaLabel}>Klaar om te bouwen?</span>
        <h2 className={styles.ctaTitle}>MEER WETEN?</h2>
        <p className={styles.ctaSub}>We denken graag mee over wat jouw medewerker nodig heeft.</p>
        <Link href={hrefZakelijk} className={styles.ctaBtn}>Kom kennismaken</Link>
        <span className={styles.ctaNote}>Ook inzetbaar via arbobudget</span>
      </section>

    </main>
  )
}
