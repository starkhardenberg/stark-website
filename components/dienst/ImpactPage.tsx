import Link from 'next/link'
import Nav from '@/components/Nav'
import HeroTitle from '@/components/dienst/HeroTitle'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { BookButton, Section } from './DienstParts'
import {
  IMPACT_AFSLUITER,
  IMPACT_ANDERS,
  IMPACT_EERLIJK,
  IMPACT_EERLIJK_CLOSE,
  IMPACT_FAQ,
  IMPACT_HERO,
  IMPACT_INTRO,
  IMPACT_KRIJGT,
  IMPACT_KRIJGT_NOTE,
  IMPACT_PARTS,
  IMPACT_QUOTE,
  IMPACT_SCHEDULE,
  IMPACT_SCHEDULE_NOTE,
  IMPACT_SLOT,
  IMPACT_START,
  IMPACT_START_NOTE,
} from './impact'
import styles from './DienstPage.module.css'

export default function ImpactPage() {
  return (
    <main className={styles.page}>
      <FaqJsonLd items={IMPACT_FAQ} />

      <header className={styles.hero}>
        <Nav />
        <div className={styles.heroSplit}>
          <div className={styles.heroPhotoWrap}>
            <img className={styles.heroPhoto} src={IMPACT_HERO.image} alt={IMPACT_HERO.alt} />
          </div>
          <div className={styles.heroCopy}>
            <div className={`${styles.heroStack} ${styles.heroStackImpact}`}>
              <HeroTitle word={IMPACT_HERO.word} />
              <p className={styles.heroLine}>{IMPACT_HERO.line}</p>
            </div>
          </div>
        </div>
      </header>

      <Section number="01" title={IMPACT_INTRO.title}>
        <ul className={styles.scenes}>
          {IMPACT_INTRO.scenes.map((line) => (
            <li key={line}>
              {line}
              <span className={styles.dot}>.</span>
            </li>
          ))}
          <li className={styles.sceneOpen}>{IMPACT_INTRO.sceneOpen}</li>
        </ul>
        <div className={`${styles.prose} ${styles.introProse}`}>
          {IMPACT_INTRO.prose.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            <strong>{IMPACT_INTRO.proseStrong}</strong> {IMPACT_INTRO.proseAfterStrong}
          </p>
        </div>
        <p className={styles.close}>
          <span>{IMPACT_INTRO.close}</span>
          <span className={styles.closeAccent}>{IMPACT_INTRO.closeAccent}</span>
        </p>
      </Section>

      <Section number="02" title="Hoe het werkt" tone="dark">
        <div className={styles.parts}>
          {IMPACT_PARTS.map((part) => (
            <div className={styles.part} key={part.title}>
              <h3 className={styles.partTitle}>{part.title}</h3>
              <p>{part.text}</p>
            </div>
          ))}
        </div>
        <p className={styles.afsluiter}>{IMPACT_AFSLUITER}</p>
        <div className={styles.sub}>
          <h3 className={styles.h3}>Wat je krijgt</h3>
          <ul className={styles.list}>
            {IMPACT_KRIJGT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.note}>{IMPACT_KRIJGT_NOTE}</p>
        </div>
      </Section>

      <Section number="03" title="Eerlijk is eerlijk">
        <div className={styles.prose}>
          {IMPACT_EERLIJK.map((item) => (
            <p key={item.strong}>
              <strong>{item.strong}</strong> {item.text}
            </p>
          ))}
        </div>
        <p className={`${styles.close} ${styles.closeTight}`}>
          <span>{IMPACT_EERLIJK_CLOSE.text}</span>
          <span className={styles.closeAccent}>{IMPACT_EERLIJK_CLOSE.accent}</span>
        </p>
        <div className={styles.sub}>
          <h3 className={styles.h3}>Soms past iets anders beter</h3>
          <ul className={styles.list}>
            {IMPACT_ANDERS.map((item) => (
              <li key={item.before}>
                {item.before}
                {item.link ? (
                  <Link href={item.link[1]} className={styles.link}>
                    {item.link[0]}
                  </Link>
                ) : null}
                {item.after}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section className={styles.proof} aria-label="Ervaring van een deelnemer">
        <div className={styles.proofGrid}>
          <div className={styles.proofPhotoWrap}>
            <img className={styles.proofPhoto} src={IMPACT_QUOTE.image} alt={IMPACT_QUOTE.alt} />
          </div>
          <figure className={styles.proofText}>
            <blockquote className={styles.quote}>“{IMPACT_QUOTE.text}”</blockquote>
            <figcaption className={styles.cite}>
              {IMPACT_QUOTE.name} · {IMPACT_QUOTE.role}
            </figcaption>
          </figure>
        </div>
      </section>

      <Section number="04" title="Praktisch">
        <div className={styles.groups}>
          <div className={styles.group}>
            <h3 className={styles.h3}>Trainingstijden</h3>
            <p className={styles.note}>{IMPACT_SCHEDULE_NOTE}</p>
            <ul className={styles.list}>
              {IMPACT_SCHEDULE.map((slot) => (
                <li key={slot}>
                  <b>{slot}</b>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>Starten</h3>
            <p className={styles.note}>{IMPACT_START_NOTE}</p>
            <ul className={styles.list}>
              {IMPACT_START.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <BookButton className={styles.buttonSection} />
      </Section>

      <Section number="05" title="Goede vragen" tone="dark">
        <FaqList tone="dark" initialOpen={0} items={IMPACT_FAQ} />
      </Section>

      <Section number="06" title="Het begint met een gesprek">
        <div className={styles.prose}>
          <p>{IMPACT_SLOT}</p>
        </div>
        <BookButton className={styles.buttonSection} />
        <p className={styles.dialect}>Kom moar op!</p>
      </Section>

      <Footer photoless ctaless tone="dark" />
    </main>
  )
}
