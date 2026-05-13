import Link from 'next/link'
import { mailtoKennismaking } from '@/lib/contact'
import Image from 'next/image'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Impact — 12 weken individueel traject — STARK! Hardenberg',
  description: 'Twaalf weken volledige aandacht. Fysiek, mentaal, of allebei — met één vaste coach aan je zijde en maximaal vijf deelnemers in je groep.',
}

export default function ImpactPage() {
  return (
    <main className={styles.main}>

      <nav className={styles.nav}>
        <Link href="/#aanbod" className={styles.navBack}>← Terug naar STARK!</Link>
        <Link href={mailtoKennismaking} className={styles.navCta}>Plan een kennismaking</Link>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/foto-coaching-moment.jpg"
            alt="Coaching moment bij STARK! Hardenberg"
            fill
            className={styles.heroBgImg}
            sizes="100vw"
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>12-weken individueel traject</span>
          <span className={styles.heroSlash} />
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLead}>TRAJECT</span>
            <span className={styles.heroPunch}>IMPACT</span>
          </h1>
          <p className={styles.heroSub}>
            Drie maanden. Volledige aandacht.{' '}
            <strong>Fysiek, mentaal, of allebei — met één vaste coach aan je zijde.</strong>
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
          <span className={styles.statNum}>3</span>
          <span className={styles.statLabel}>Maanden</span>
        </div>
        <div className={styles.statCell}>
          <span className={styles.statNum}>1</span>
          <span className={styles.statLabel}>Vaste coach</span>
        </div>
        <div className={styles.statCell}>
          <span className={styles.statNum}>Max.5</span>
          <span className={styles.statLabel}>In groep</span>
        </div>
      </div>

      {/* Wat is Impact — split reverse */}
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
            <span className={styles.label}>Wat is Impact</span>
            <h2 className={styles.title}>TWAALF WEKEN. ALLES ERIN.</h2>
            <p className={styles.body}>
              Impact begint altijd met het <strong>Startpakket</strong>: vier 1-op-1 sessies voor een nulmeting en een persoonlijk plan. Dan train je twaalf weken lang twee keer per week in een groep van maximaal vijf Impact-deelnemers — kleine groep, maximale aandacht.
            </p>
            <p className={styles.body}>
              Daarnaast een wekelijks 1-op-1 coachingsgesprek. Niet naast het traject, maar onderdeel ervan. Jouw coach begeleidt je op wat er speelt — in je lijf, in je hoofd, in je leven.
            </p>
          </div>
        </div>
      </div>

      {/* Vier pijlers */}
      <section className={styles.section}>
        <span className={styles.label}>Wat je kunt verwachten</span>
        <h2 className={styles.title}>VIER PIJLERS</h2>
        <div className={styles.resultGrid}>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Start</span>
            <div className={styles.resultTitle}>Nulmeting en persoonlijk plan</div>
            <p className={styles.resultText}>Vier 1-op-1 sessies om te meten waar je nu staat. Van daaruit bouwen we een plan dat past bij jou — niet bij een standaard template.</p>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Training</span>
            <div className={styles.resultTitle}>Trainen in kleine groep</div>
            <p className={styles.resultText}>Twee keer per week in een vaste groep van maximaal vijf mensen. Geen anonieme zaal, maar een plek waar iedereen weet wie je bent.</p>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Coaching</span>
            <div className={styles.resultTitle}>Wekelijkse 1-op-1 coaching</div>
            <p className={styles.resultText}>Elke week een gesprek met jouw vaste coach. Over wat er speelt, wat werkt en wat niet, en hoe je de volgende week ingaat.</p>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Aanpak</span>
            <div className={styles.resultTitle}>Begeleiding op lijf en hoofd</div>
            <p className={styles.resultText}>Fysiek en mentaal hangen samen. We begeleiden je op beide — want het een werkt niet zonder het ander.</p>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className={styles.section}>
        <span className={styles.label}>Voor wie</span>
        <h2 className={styles.title}>IMPACT IS VOOR JOU ALS...</h2>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Je maximale persoonlijke aandacht wil</div>
            <div className={styles.listText}>Niet een groepsprogramma waarbij je erbij hoort, maar een traject waarbij alles om jou draait.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Je er drie maanden volledig voor wil gaan</div>
            <div className={styles.listText}>Impact vraagt inzet. Twee keer per week trainen, wekelijkse gesprekken, eerlijk zijn met jezelf. Voor wie dat commitment aangaat, is de verandering groot.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Er iets speelt — fysiek, mentaal of emotioneel</div>
            <div className={styles.listText}>Je hoeft niet precies te weten wat. Je weet alleen dat je meer nodig hebt dan een sportabonnement. Dat is genoeg om te beginnen.</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <span className={styles.ctaLabel}>Klaar om te bouwen?</span>
        <h2 className={styles.ctaTitle}>KLAAR VOOR IMPACT?</h2>
        <p className={styles.ctaSub}>Plan een kennismaking.</p>
        <Link href={mailtoKennismaking} className={styles.ctaBtn}>Plan een kennismaking</Link>
        <span className={styles.ctaNote}>Maximaal 5 deelnemers per groep</span>
      </section>

    </main>
  )
}
