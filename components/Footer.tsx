import Image from 'next/image'
import { mailtoKennismaking } from '@/lib/contact'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.hook}>
          <span className={styles.hookLine}>Het perfecte moment bestaat niet.</span>
          <span className={styles.hookLine}>
            Mensen die durven te beslissen, die bestaan <span className={styles.hookAccent}>wél</span>.
          </span>
        </p>

        <div className={styles.editorial}>
          <div className={styles.leadCol}>
            <a href="/" aria-label="STARK! home" className={styles.logoLink}>
              <Image
                src="/images/stark_logo_wit.png"
                alt="STARK!"
                width={100}
                height={32}
                className={styles.logo}
              />
            </a>
            <p className={styles.tagline}>
              Korte lijnen. Vaste gezichten. Altijd een coach die jou kent.
            </p>
          </div>

          <div className={styles.actionCol}>
            <div className={styles.ctaRow}>
              <a href={mailtoKennismaking} className={styles.btnPrimary}>
                Plan een kennismaking
              </a>
            </div>

            <nav className={styles.navStack} aria-label="Footernavigatie">
              <a href="#trainen">Trainen</a>
              <a href="#coaching">Coaching</a>
              <a href="#bedrijven">Zakelijk</a>
              <a href="#over">Over ons</a>
            </nav>
          </div>
        </div>

        <div className={styles.meta}>
          <p className={styles.address}>Nijverheidsstraat 15c, 7772 XR Hardenberg</p>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} STARK! Hardenberg &nbsp;&middot;&nbsp; Opgericht 2013
          </p>
        </div>
      </div>
    </footer>
  )
}
