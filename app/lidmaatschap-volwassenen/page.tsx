import Link from 'next/link'
import Image from 'next/image'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Lidmaatschap volwassenen — STARK! Hardenberg',
  description: 'Trainen bij STARK! Hardenberg. Start met het Startpakket en kies daarna je lidmaatschap. 2x per week of onbeperkt — jij bepaalt het tempo.',
}

export default function LidmaatschapVolwassenenPage() {
  return (
    <main className={styles.main}>

      <nav className={styles.nav}>
        <Link href="/#aanbod" className={styles.navBack}>← Terug naar STARK!</Link>
        <Link href="/#kennismaking" className={styles.navCta}>Plan een kennismaking</Link>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/foto-groep-les.jpg"
            alt="Groepsles bij STARK! Hardenberg"
            fill
            className={styles.heroBgImg}
            sizes="100vw"
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Lidmaatschap volwassenen</span>
          <span className={styles.heroSlash} />
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLead}>LIDMAATSCHAP</span>
            <span className={styles.heroPunch}>TRAINEN</span>
          </h1>
          <p className={styles.heroSub}>
            Je hoeft niet fit te zijn om te beginnen. Je begint waar jij bent —{' '}
            <strong>en wij zorgen dat je er verder mee komt.</strong>
          </p>
        </div>
        <div className={styles.heroBar} />
      </section>

      {/* Zo werkt het — split reverse */}
      <div className={`${styles.split} ${styles.reverse}`}>
        <div className={styles.splitPhoto}>
          <Image
            src="/images/foto-vrouw-slee.jpg"
            alt="Vrouw met slee bij STARK! Hardenberg"
            fill
            className={styles.splitPhotoImg}
            sizes="(min-width:900px) 45vw, 100vw"
          />
        </div>
        <div className={styles.splitContent} data-num="01">
          <div className={styles.splitInner}>
            <span className={styles.label}>Zo werkt het</span>
            <h2 className={styles.title}>EERST HET STARTPAKKET</h2>
            <p className={styles.body}>
              Iedereen begint met het <strong>Startpakket</strong>: vier 1-op-1 sessies nulmeting en basiscursus bewegen. Zo weten wij wat jij nodig hebt, en weet jij wat je kunt verwachten. Daarna kies je het lidmaatschap dat bij je ritme past.
            </p>
            <div className={styles.optionRow}>
              <div className={styles.optionItem}>
                <div>
                  <div className={styles.optionTitle}>2x per week</div>
                  <div className={styles.optionSub}>Vaste regelmaat, twee trainingen per week</div>
                </div>
              </div>
              <div className={styles.optionItem}>
                <div>
                  <div className={styles.optionTitle}>Onbeperkt</div>
                  <div className={styles.optionSub}>Jaarlijks gratis incheckgesprek inbegrepen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voor wie — split photo left */}
      <div className={styles.split}>
        <div className={styles.splitPhoto}>
          <Image
            src="/images/foto-man-glimlach.jpg"
            alt="Lid van STARK! Hardenberg"
            fill
            className={styles.splitPhotoImg}
            sizes="(min-width:900px) 45vw, 100vw"
          />
        </div>
        <div className={styles.splitContent} data-num="02">
          <div className={styles.splitInner}>
            <span className={styles.label}>Voor wie</span>
            <h2 className={styles.title}>HERKEN JIJ JEZELF?</h2>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <div className={styles.listTitle}>De stille starter</div>
                <div className={styles.listText}>Je wil beginnen maar weet niet hoe. Of je hebt te lang gewacht en merkt dat je lijf om aandacht vraagt.</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.listTitle}>De zoeker</div>
                <div className={styles.listText}>Je hebt van alles geprobeerd maar niets beklijft. Je mist structuur, begeleiding of een plek waar coaches echt weten wie je bent.</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.listTitle}>De ervaren sporter</div>
                <div className={styles.listText}>Je traint al, maar wil meer richting, variatie of een groep die je scherp houdt.</div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.listTitle}>De 55-plusser</div>
                <div className={styles.listText}>ZilverFitness is speciaal voor jou — op eigen niveau, zonder prestatiedrang. Zie de aparte pagina.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wat je krijgt */}
      <section className={styles.section}>
        <span className={styles.label}>Wat je krijgt</span>
        <h2 className={styles.title}>MEER DAN EEN SPORTABONNEMENT</h2>
        <div className={styles.resultGrid}>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Training</span>
            <div className={styles.resultTitle}>Groepsles met coaching</div>
            <p className={styles.resultText}>Elke les staat onder begeleiding van een coach die jou kent. Geen anonieme zaal, geen wachten op apparaten.</p>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Aandacht</span>
            <div className={styles.resultTitle}>Coaches die jou zien</div>
            <p className={styles.resultText}>We weten wie je bent, waar je mee bezig bent en wat je nodig hebt. Dat maakt het verschil.</p>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Start</span>
            <div className={styles.resultTitle}>Startpakket nulmeting</div>
            <p className={styles.resultText}>Vier 1-op-1 sessies om te meten waar je nu staat en te leren hoe we bij STARK! werken.</p>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Opvolging</span>
            <div className={styles.resultTitle}>Jaarlijks incheckgesprek</div>
            <p className={styles.resultText}>Eén keer per jaar zitten we samen: hoe gaat het, wat is er veranderd, wat heeft je lijf nu nodig?</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <span className={styles.ctaLabel}>Klaar om te bouwen?</span>
        <h2 className={styles.ctaTitle}>KLAAR OM TE BEGINNEN?</h2>
        <p className={styles.ctaSub}>Plan een kennismaking. We kijken samen wat bij jou past.</p>
        <Link href="/#kennismaking" className={styles.ctaBtn}>Plan een kennismaking</Link>
        <span className={styles.ctaNote}>Geen verplichtingen — gewoon een gesprek</span>
      </section>

    </main>
  )
}
