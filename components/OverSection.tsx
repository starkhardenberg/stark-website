import Image from 'next/image'
import styles from './OverSection.module.css'

export default function OverSection() {
  return (
    <section className={styles.over} id="over">
      <div className={styles.grid}>

        <div className={styles.imgWrap}>
          <Image
            src="/images/team.jpg"
            alt="Het team van STARK! Hardenberg"
            fill
            sizes="(min-width: 900px) 58vw, 100vw"
            className={styles.img}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>Wie wij zijn</p>

          <h2 className={styles.heading}>
            Weg van huus,<br />en toch thuus.
          </h2>

          <p className={styles.body}>
            Wij zijn het team van STARK! Hardenberg. Acht trainers die stuk voor stuk begonnen als lid&nbsp;&mdash; zelf de weg gelopen die jij nu maakt. We hebben ze intern opgeleid: theorie, stage, opdrachten en feedback. Want we wilden mensen om ons heen die de aanpak kennen, niet omdat ze het gelezen hebben, maar omdat ze het gevoeld hebben.
          </p>
          <p className={styles.body}>
            We werken klein en persoonlijk. Korte lijntjes, vaste gezichten, altijd een coach die jou kent. Geen zaaltje vol apparaten waar je het zelf maar uitzoekt. Een schop onder je kont, terwijl we je hand vasthouden.
          </p>

          <a className={styles.link} href="#kennismaking">
            Maak kennis met ons team &rarr;
          </a>

          <div className={styles.people}>
            <div className={styles.person}>
              <p className={styles.personName}>Engbert-Jan</p>
              <p className={styles.personRole}>Eigenaar &amp; hoofdcoach</p>
              <p className={styles.personQuote}>
                Het allermooiste is als mensen durven vertrouwen op mijn coaching en het lukt.
              </p>
            </div>
            <div className={styles.person}>
              <p className={styles.personName}>Yvonne</p>
              <p className={styles.personRole}>Mede-eigenaar &amp; coach</p>
              <p className={styles.personQuote}>
                Het allermooiste is dat moment dat iemand voelt: verrek, ik kan dit wel.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
