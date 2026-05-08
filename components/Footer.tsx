import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <a href="/" aria-label="STARK! home" className={styles.logoLink}>
            <Image
              src="/images/stark_logo_wit.png"
              alt="STARK!"
              width={100}
              height={32}
              className={styles.logo}
            />
          </a>

          <nav className={styles.nav} aria-label="Footernavigatie">
            <a href="#trainen">Trainen</a>
            <a href="#coaching">Coaching</a>
            <a href="#bedrijven">Bedrijven</a>
            <a href="#over">Over ons</a>
            <a href="#kennismaking">Contact</a>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.address}>
            Nijverheidsstraat 15c, 7772 XR Hardenberg
          </p>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} STARK! Hardenberg &nbsp;&middot;&nbsp; Opgericht 2013
          </p>
        </div>
      </div>
    </footer>
  )
}
