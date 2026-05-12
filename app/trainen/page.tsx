import Link from 'next/link'
import Image from 'next/image'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Trainen — STARK! Hardenberg',
  description:
    'Groepslessen met coaching voor volwassenen, ZilverFitness en Kids & Teens. Start waar jij staat, met techniek en veiligheid voorop.',
}

export default function TrainenPage() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Link href="/#aanbod" className={styles.navBack}>
          ← Terug naar STARK!
        </Link>
        <Link href="/#kennismaking" className={styles.navCta}>
          Plan een kennismaking
        </Link>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/foto-trainen-squat.png"
            alt="Deelnemer tijdens een squat in de groepsles bij STARK! Hardenberg"
            fill
            className={styles.heroBgImg}
            sizes="100vw"
            priority
            style={{ objectPosition: 'center 32%' }}
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Groepslessen met coaching</span>
          <span className={styles.heroSlash} />
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLead}>BIJ STARK!</span>
            <span className={styles.heroPunch}>TRAINEN</span>
          </h1>
          <p className={styles.heroSub}>
            Je traint met mensen die het werk doen: coaches die je zien en techniek die klopt.{' '}
            <strong>Volwassenen, jeugd of 55-plus: het ritme past bij jouw lijf, niet omgekeerd.</strong>
          </p>
        </div>
        <div className={styles.heroBar} />
      </section>

      <div className={styles.split}>
        <div className={styles.splitPhoto}>
          <Image
            src="/images/foto-vrouw-slee.jpg"
            alt="Training bij STARK! Hardenberg"
            fill
            className={styles.splitPhotoImg}
            sizes="(min-width:900px) 45vw, 100vw"
          />
        </div>
        <div className={styles.splitContent} data-num="01">
          <div className={styles.splitInner}>
            <span className={styles.label}>Zo werkt het</span>
            <h2 className={styles.title}>EERST ZIEN, DAN SAMEN BOUWEN</h2>
            <p className={styles.body}>
              Niemand hoeft al fit te zijn om te beginnen. Je start met het Startpakket: vier 1-op-1 sessies zodat we weten waar je staat en jij weet hoe we werken. Daarna train je in groepslessen die kloppen bij jouw groep.
            </p>
            <p className={styles.body}>
              Geen rondjes hijsen zonder uitleg. Wel beweging die je in het echte leven iets oplevert, onder begeleiding van vaste gezichten.
            </p>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <span className={styles.label}>Kies jouw route</span>
        <h2 className={styles.title}>DRIE MANIEREN OM TE TRAINEN</h2>
        <p className={styles.body}>
          Hieronder vind je per doelgroep wat we aanbieden en hoe je start. Klik door voor prijzen, opbouw en verwachtingen.
        </p>
        <div className={styles.resultGrid}>
          <Link href="/lidmaatschap-volwassenen" className={styles.resultItem}>
            <span className={styles.resultTag}>Volwassenen</span>
            <div className={styles.resultTitle}>Lidmaatschap volwassenen</div>
            <p className={styles.resultText}>
              Startpakket, daarna lidmaatschap op het ritme dat bij je past. Groepslessen met coaching op jouw niveau.
            </p>
          </Link>
          <Link href="/zilverfitness" className={styles.resultItem}>
            <span className={styles.resultTag}>55+</span>
            <div className={styles.resultTitle}>ZilverFitness</div>
            <p className={styles.resultText}>
              Kracht en mobiliteit op tempo dat bij jouw lijf past. Bewust bezig blijven zonder prestatiejacht.
            </p>
          </Link>
          <Link href="/kids-teens" className={styles.resultItem}>
            <span className={styles.resultTag}>5–16 jaar</span>
            <div className={styles.resultTitle}>Kids & Teens</div>
            <p className={styles.resultText}>
              Functionele fitness voor kinderen en tieners: plezier, techniek en zelfvertrouwen in het lijf.
            </p>
          </Link>
        </div>
      </section>

      <section className={styles.cta}>
        <span className={styles.ctaLabel}>Klaar om te bouwen?</span>
        <h2 className={styles.ctaTitle}>MEER WETEN OF GELIJK STARTEN?</h2>
        <p className={styles.ctaSub}>Plan een kennismaking. We denken met je mee.</p>
        <Link href="/#kennismaking" className={styles.ctaBtn}>
          Plan een kennismaking
        </Link>
        <span className={styles.ctaNote}>Geen verplichtingen — gewoon een gesprek</span>
      </section>
    </main>
  )
}
