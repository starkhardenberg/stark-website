import Link from 'next/link'
import { mailtoKennismaking } from '@/lib/contact'
import Image from 'next/image'
import styles from '../landing.module.css'

export const metadata = {
  title: 'ZilverFitness — 55+ training bij STARK! Hardenberg',
  description: 'Training op kracht, mobiliteit en zelfredzaamheid voor 55-plussers. Aangepast op jouw niveau — ook als je lang niet bewogen hebt.',
}

export default function ZilverFitnessPage() {
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
            src="/images/foto-vrouw-55-lachen.jpg"
            alt="Vrouw 55+ bij ZilverFitness STARK! Hardenberg"
            fill
            className={styles.heroBgImg}
            sizes="100vw"
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>55+ training op jouw niveau</span>
          <span className={styles.heroSlash} />
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLead}>55+</span>
            <span className={styles.heroPunch}>ZILVER FITNESS</span>
          </h1>
          <p className={styles.heroSub}>
            Je lichaam mag en kan langer mee dan je denkt.{' '}
            <strong>We werken aan een sterk, beweeglijk lijf — zodat je zo lang mogelijk alles kunt blijven doen wat je wilt.</strong>
          </p>
        </div>
        <div className={styles.heroBar} />
      </section>

      {/* Wat is ZilverFitness — split reverse */}
      <div className={`${styles.split} ${styles.reverse}`}>
        <div className={styles.splitPhoto}>
          <Image
            src="/images/foto-vrouw-70.jpg"
            alt="Actieve vrouw van 70 bij STARK! Hardenberg"
            fill
            className={styles.splitPhotoImg}
            sizes="(min-width:900px) 45vw, 100vw"
          />
        </div>
        <div className={styles.splitContent} data-num="01">
          <div className={styles.splitInner}>
            <span className={styles.label}>Wat is ZilverFitness</span>
            <h2 className={styles.title}>TRAINING DIE PAST BIJ JOUW LIJF</h2>
            <p className={styles.body}>
              ZilverFitness is aangepaste training gericht op <strong>kracht, mobiliteit en zelfredzaamheid</strong>. Geen prestatiedrang. Coaches die weten wat jouw lijf op deze levensfase nodig heeft. Ook als je na een periode van weinig bewegen opnieuw begint, of bij beginnende klachten.
            </p>
            <div className={styles.optionRow}>
              <div className={styles.optionItem}>
                <div>
                  <div className={styles.optionTitle}>1x per week</div>
                  <div className={styles.optionSub}>Een vaste wekelijkse training op jouw niveau</div>
                </div>
              </div>
              <div className={styles.optionItem}>
                <div>
                  <div className={styles.optionTitle}>2x per week</div>
                  <div className={styles.optionSub}>Meer regelmaat, sneller resultaat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voor wie */}
      <section className={styles.section}>
        <span className={styles.label}>Voor wie</span>
        <h2 className={styles.title}>BEWEGEN OP JOUW MANIER</h2>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Je wil zelfredzaam blijven</div>
            <div className={styles.listText}>Trap oplopen, boodschappen dragen, spelen met kleinkinderen. We trainen zodat dat zo lang mogelijk vanzelfsprekend blijft.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Je vindt elders geen plek waar je je op je gemak voelt</div>
            <div className={styles.listText}>Reguliere sportscholen voelen te anoniem of te jong. Bij ZilverFitness ben je geen uitzondering. De groep is op jou afgestemd, niet andersom.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Je wil klachten voorkomen of vertragen</div>
            <div className={styles.listText}>Knie, rug, heup — je merkt dat je lijf iets nodig heeft. Onze coaches weten hoe ze daarmee omgaan. We werken aan jou, niet tegen je lijf in.</div>
          </div>
        </div>
      </section>

      {/* Wat je kunt verwachten */}
      <section className={styles.section}>
        <span className={styles.label}>Wat je kunt verwachten</span>
        <h2 className={styles.title}>NA EEN PAAR WEKEN MERK JE HET</h2>
        <div className={styles.resultGrid}>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Fysiek</span>
            <div className={styles.resultTitle}>Meer kracht</div>
            <p className={styles.resultText}>Je lijf wordt sterker in bewegingen die je dagelijks gebruikt. Niet voor de show, maar voor het echte leven.</p>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Bewegen</span>
            <div className={styles.resultTitle}>Betere mobiliteit</div>
            <p className={styles.resultText}>Soepeler bewegen, minder stijfheid, meer vrijheid in je lijf. We werken gericht aan de gewrichten en spieren die jou dat geven.</p>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Welzijn</span>
            <div className={styles.resultTitle}>Meer energie</div>
            <p className={styles.resultText}>Regelmatig bewegen geeft energie terug. Niet alleen fysiek — ook mentaal voel je je scherper en lichter.</p>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultTag}>Aanpak</span>
            <div className={styles.resultTitle}>Veilig en verantwoord</div>
            <p className={styles.resultText}>Coaches die rekening houden met jouw situatie. We gaan ver genoeg om resultaat te boeken, maar nooit verder dan verstandig is.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <span className={styles.ctaLabel}>Klaar om te bouwen?</span>
        <h2 className={styles.ctaTitle}>BENIEUWD OF DIT BIJ JE PAST?</h2>
        <p className={styles.ctaSub}>Plan een kennismaking.</p>
        <Link href={mailtoKennismaking} className={styles.ctaBtn}>Plan een kennismaking</Link>
      </section>

    </main>
  )
}
