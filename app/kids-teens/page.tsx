import Link from 'next/link'
import Image from 'next/image'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Kids & Teens — STARK! Hardenberg',
  description: 'Functionele fitness voor kinderen en tieners van 5 tot 16 jaar. Kracht, coördinatie en zelfvertrouwen — met echte coaches die echte aandacht geven.',
}

export default function KidsTeensPage() {
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
            src="/images/foto-kids-kettlebell.jpg"
            alt="Kind met kettlebell bij STARK! Hardenberg"
            fill
            className={styles.heroBgImg}
            sizes="100vw"
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>5-16 jaar</span>
          <span className={styles.heroSlash} />
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLead}>JEUGD</span>
            <span className={styles.heroPunch}>KIDS &amp; TEENS</span>
          </h1>
          <p className={styles.heroSub}>
            Wat kinderen nu leren over bewegen, nemen ze de rest van hun leven mee.{' '}
            <strong>Sterk en zeker in je lijf, van jongs af aan.</strong>
          </p>
        </div>
        <div className={styles.heroBar} />
      </section>

      {/* Drie groepen — split reverse */}
      <div className={`${styles.split} ${styles.reverse}`}>
        <div className={styles.splitPhoto}>
          <Image
            src="/images/foto-teens-touwen.jpg"
            alt="Tieners met touwen bij STARK! Hardenberg"
            fill
            className={styles.splitPhotoImg}
            sizes="(min-width:900px) 45vw, 100vw"
          />
        </div>
        <div className={styles.splitContent} data-num="01">
          <div className={styles.splitInner}>
            <span className={styles.label}>Drie groepen</span>
            <h2 className={styles.title}>AFGESTEMD OP LEEFTIJD</h2>
            <p className={styles.body}>
              Vaste groepen afgestemd op leeftijd en ontwikkeling. Geen prestatiedrang, geen wedstrijddrang. Wel echte coaches met echte aandacht.
            </p>
            <div className={styles.optionRow}>
              <div className={styles.optionItem}>
                <div>
                  <div className={styles.optionTitle}>Kids 5-9 jr</div>
                  <div className={styles.optionSub}>Kracht, coördinatie, balans en plezier in bewegen</div>
                </div>
              </div>
              <div className={styles.optionItem}>
                <div>
                  <div className={styles.optionTitle}>Pre-teens 9-12 jr</div>
                  <div className={styles.optionSub}>Krachten ontdekken, doorzetten leren, zelfvertrouwen opbouwen</div>
                </div>
              </div>
              <div className={styles.optionItem}>
                <div>
                  <div className={styles.optionTitle}>Teens 12-16 jr</div>
                  <div className={styles.optionSub}>Serieuzer trainen — veilig en verantwoord onder begeleiding</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wat je kind leert */}
      <section className={styles.section}>
        <span className={styles.label}>Wat je kind leert</span>
        <h2 className={styles.title}>MEER DAN ALLEEN STERKER WORDEN</h2>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Sterker worden</div>
            <div className={styles.listText}>Een sterker lijf geeft vrijheid. Klimmen, rennen, tillen, spelen — kinderen die trainen bewegen makkelijker en met meer plezier.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Zelfvertrouwen</div>
            <div className={styles.listText}>Als je merkt dat je iets kunt wat je een maand geleden nog niet kon, verandert er iets. Dat gevoel draag je buiten de gym ook met je mee.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Doorzettingsvermogen</div>
            <div className={styles.listText}>Niet opgeven als iets moeilijk is. Leren dat inspanning loont. Dat is een les voor het leven — en het begint hier.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Plezier in bewegen</div>
            <div className={styles.listText}>Wie als kind met plezier sport, beweegt zijn hele leven. Dat is onze echte missie: een positieve relatie met bewegen voor het leven.</div>
          </div>
        </div>
      </section>

      {/* De aanpak */}
      <section className={styles.section}>
        <span className={styles.label}>De aanpak</span>
        <h2 className={styles.title}>ECHTE COACHES, ECHTE AANDACHT</h2>
        <p className={styles.body}>
          Geen prestatiedrang. Geen wedstrijddrang. Wel coaches die weten hoe kinderen leren en wat ze op elke leeftijd aankunnen. We werken met vaste groepen — zodat je kind altijd in een bekende omgeving traint.
        </p>
        <p className={styles.body}>
          Elk kind is anders. Dat respecteren we. We duwen nooit verder dan goed is, maar we houden de lat ook niet kunstmatig laag.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <span className={styles.ctaLabel}>Klaar om te bouwen?</span>
        <h2 className={styles.ctaTitle}>INTERESSE VOOR JE KIND?</h2>
        <p className={styles.ctaSub}>Plan een kennismaking.</p>
        <Link href="/#kennismaking" className={styles.ctaBtn}>Plan een kennismaking</Link>
        <span className={styles.ctaNote}>Voor kinderen van 5 tot 16 jaar</span>
      </section>

    </main>
  )
}
