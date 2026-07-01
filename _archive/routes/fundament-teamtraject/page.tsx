import Link from 'next/link'
import { CTA_KENNISMAKING_LABEL, hrefKennismaking } from '@/lib/contact'
import { STARK_CTA } from '@/lib/stark-cta'
import Image from 'next/image'
import Nav from '@/components/Nav'
import { oswaldTrim } from '@/lib/displayTrim'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Teamtraject — Fundament op maat — STARK! Hardenberg',
  description: 'Geen standaardpakket. Een traject dat precies past bij wat jullie team nodig heeft. Fysiek sterker, mentaal meer verbonden.',
}

export default function FundamentTeamtrajectPage() {
  return (
    <main className={styles.main}>

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
        <Nav />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Fundament op maat</span>
          <span className={styles.heroSlash} />
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLead}>BEDRIJVEN</span>
            <span className={styles.heroPunch}>TEAMTRAJECT</span>
          </h1>
          <p className={styles.heroSub}>
            Geen standaardpakket. Wel een traject dat precies past bij wat jullie team nodig heeft —{' '}
            <strong>fysiek sterker, mentaal meer verbonden.</strong>
          </p>
        </div>
        <div className={styles.heroBar} />
      </section>

      {/* Wat is het — split reverse */}
      <div className={`${styles.split} ${styles.reverse}`}>
        <div className={styles.splitPhoto}>
          <Image
            src="/images/foto-coaching-samen.jpg"
            alt="Team coaching bij STARK! Hardenberg"
            fill
            className={styles.splitPhotoImg}
            sizes="(min-width:900px) 45vw, 100vw"
          />
        </div>
        <div className={styles.splitContent} data-num="01">
          <div className={styles.splitInner}>
            <span className={styles.label}>Wat is het</span>
            <h2 className={styles.title} style={oswaldTrim('GEEN')}>GEEN STANDAARDPAKKET</h2>
            <p className={styles.body}>
              Volledig op maat samengesteld. Bouwstenen naar behoefte. Voor bedrijven en teams waarbij het standaardaanbod niet past.
            </p>
          </div>
        </div>
      </div>

      {/* Mogelijke bouwstenen */}
      <section className={styles.section}>
        <span className={styles.label}>Mogelijke bouwstenen</span>
        <h2 className={styles.title} style={oswaldTrim('BOUW')}>BOUW JE EIGEN TRAJECT</h2>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Gezamenlijke nulmeting en kick-off</div>
            <div className={styles.listText}>We meten waar het team nu staat en starten het traject met een gezamenlijke sessie die verbinding en richting geeft.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Wekelijkse groepstrainingen</div>
            <div className={styles.listText}>Samen trainen creëert verbinding op een manier die een vergadering nooit doet. We werken aan kracht en conditie — met jullie als groep.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Groepscoachingsessies</div>
            <div className={styles.listText}>Thema's die spelen op de werkvloer: samenwerking, patronen, eigenaarschap. We bespreken ze eerlijk — in de veiligheid van de groep.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Individuele coachingsgesprekken</div>
            <div className={styles.listText}>Wat in een groep niet gezegd wordt, kan 1-op-1 wel. Individuele gesprekken als aanvulling op het groepsprogramma.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Fysieke challenges als team</div>
            <div className={styles.listText}>Samen iets volbrengen dat zwaar is, maakt iets los. We ontwerpen challenges die aansluiten bij jullie context en het team samen verder brengen.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Terugkommomenten en evaluatie</div>
            <div className={styles.listText}>Geen programma dat eindigt en vergeten wordt. We plannen momenten in om terug te kijken, te borgen en bij te sturen.</div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className={styles.section}>
        <span className={styles.label}>Voor wie</span>
        <h2 className={styles.title} style={oswaldTrim('VOOR')}>VOOR TEAMS DIE MEER WILLEN</h2>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Teams die meer willen dan een teamuitje</div>
            <div className={styles.listText}>Een dag paintball of karten bouwt geen echte verbinding. Een traject waarbij je samen zweet, leert en groeit wel.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Bedrijven waar onderlinge verbinding ontbreekt</div>
            <div className={styles.listText}>Silo's, onuitgesproken spanning, weinig energie. Dat lost zich niet vanzelf op. Een gericht traject kan het kantelpunt zijn.</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.listTitle}>Organisaties met een specifieke context</div>
            <div className={styles.listText}>Ploegendiensten, fysiek zwaar werk, hoge werkdruk. We kennen die wereld en ontwerpen een traject dat daarbijpast — geen kantoorprogramma in een andere jas.</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <span className={styles.ctaLabel}>Klaar om te bouwen?</span>
        <h2 className={styles.ctaTitle}>VRAAG EEN OFFERTE AAN</h2>
        <p className={styles.ctaSub}>We denken graag met je mee.</p>
        <Link href={hrefKennismaking} className={`${styles.ctaBtn} ${STARK_CTA}`}>{CTA_KENNISMAKING_LABEL}</Link>
        <span className={styles.ctaNote}>We denken graag met je mee</span>
      </section>

    </main>
  )
}
