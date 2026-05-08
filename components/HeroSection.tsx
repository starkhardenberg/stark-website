import Nav from './Nav'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <main className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/onze-starke-mensen.jpg"
          className={styles.video}
        >
          <source
            src="https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <Nav />

      <section className={styles.stage}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            <span className={styles.lead}>Wij bouwen</span>
            <span className={styles.punch}>sterke mensen.</span>
          </h1>

          <p className={styles.sub}>Fysiek én mentaal.</p>

          <div className={styles.ctaRow}>
            <a className={styles.btn} href="#kennismaking">
              Plan je kennismaking
            </a>
            <a className={styles.link} href="#proefles">
              Liever eerst proefles? Boek hier.
            </a>
          </div>
        </div>
      </section>

      <div className={styles.anchorShell}>
        <span>Hardenberg</span>
        <div className={styles.anchor} />
        <span>Sinds 2013</span>
      </div>
    </main>
  )
}
