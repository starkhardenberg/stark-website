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
            <span className={`${styles.line} ${styles.lead}`}>Wij</span>
            <span className={`${styles.line} ${styles.lead}`}>bouwen</span>
            <span className={`${styles.line} ${styles.punch}`}>starke</span>
            <span className={`${styles.line} ${styles.punch}`}>mensen.</span>
          </h1>
        </div>
      </section>

    </main>
  )
}
