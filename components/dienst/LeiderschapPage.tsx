import Link from 'next/link'
import Nav from '@/components/Nav'
import HeroTitle from '@/components/dienst/HeroTitle'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { BookButton, Section } from './DienstParts'
import WerkgeverBlok from './WerkgeverBlok'
import {
  L1O1_AFSLUITER,
  L1O1_ANDERS,
  L1O1_DAARNA,
  L1O1_DAARNA_NOTE,
  L1O1_DAARNA_TITLE,
  L1O1_FAQ,
  L1O1_HERO,
  L1O1_INTRO,
  L1O1_KRIJGT,
  L1O1_KRIJGT_NOTE,
  L1O1_OPZET,
  L1O1_PARTS,
  L1O1_PROEF,
  L1O1_QUOTE,
  L1O1_SCHEDULE,
  L1O1_SCHEDULE_NOTE,
  L1O1_SLOT,
  L1O1_VERLOOP,
  L1O1_VERLOOP_NOTE,
  L1O1_VOORBEELD,
  L1O1_VRAAGT,
  L1O1_VRAAGT_CLOSE,
  L1O1_VRAAGT_TITLE,
  L1O1_WERKGEVER,
} from './leiderschap-1-op-1'
import styles from './DienstPage.module.css'

export default function LeiderschapPage() {
  let section = 0
  const num = () => String(++section).padStart(2, '0')

  return (
    <main className={styles.page}>
      <FaqJsonLd items={L1O1_FAQ} />

      <header className={styles.hero}>
        <Nav />
        <div className={styles.heroSplit}>
          <div className={styles.heroPhotoWrap}>
            <img className={styles.heroPhoto} src={L1O1_HERO.image} alt={L1O1_HERO.alt} />
          </div>
          <div className={`${styles.heroCopy} ${styles.heroCopyRoom}`}>
            <div className={styles.heroStack}>
              <HeroTitle
                word={L1O1_HERO.word}
                breakBefore="1 op 1"
                className={styles.heroTitleLong}
              />
              <p className={styles.heroLine}>{L1O1_HERO.line}</p>
            </div>
          </div>
        </div>
      </header>

      <Section number={num()} title={L1O1_INTRO.title}>
        <ul className={styles.scenes}>
          {L1O1_INTRO.scenes.map((line) => (
            <li key={line}>
              {line}
              <span className={styles.dot}>.</span>
            </li>
          ))}
          <li className={styles.sceneOpen}>{L1O1_INTRO.sceneOpen}</li>
        </ul>
        <div className={`${styles.prose} ${styles.introProse}`}>
          {L1O1_INTRO.prose.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            <strong>{L1O1_INTRO.proseStrong}</strong> {L1O1_INTRO.proseAfterStrong}
          </p>
        </div>
        <p className={styles.close}>
          <span>{L1O1_INTRO.close}</span>
          <span className={styles.closeAccent}>{L1O1_INTRO.closeAccent}</span>
        </p>
      </Section>

      <Section number={num()} title="Hoe het werkt" tone="dark">
        <div className={styles.parts}>
          {L1O1_PARTS.map((part) => (
            <div className={styles.part} key={part.title}>
              <h3 className={styles.partTitle}>{part.title}</h3>
              <p>{part.text}</p>
            </div>
          ))}
        </div>
        <p className={styles.afsluiter}>{L1O1_AFSLUITER}</p>
        <div className={styles.sub}>
          <h3 className={styles.h3}>Wat je krijgt</h3>
          <ul className={styles.list}>
            {L1O1_KRIJGT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.note}>{L1O1_KRIJGT_NOTE}</p>
        </div>
      </Section>

      <Section number={num()} title={L1O1_VRAAGT_TITLE}>
        <div className={styles.prose}>
          {L1O1_VRAAGT.map((item) => (
            <p key={item.strong}>
              <strong>{item.strong}</strong> {item.text}
            </p>
          ))}
        </div>
        <p className={`${styles.close} ${styles.closeTight}`}>
          <span>{L1O1_VRAAGT_CLOSE.text}</span>
          <span className={styles.closeAccent}>{L1O1_VRAAGT_CLOSE.accent}</span>
        </p>
        <div className={styles.sub}>
          <h3 className={styles.h3}>Soms past iets anders beter</h3>
          <ul className={styles.list}>
            {L1O1_ANDERS.map((item) => (
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
          <div className={`${styles.proofPhotoWrap} ${styles.proofPhotoPortrait}`}>
            <img className={styles.proofPhoto} src={L1O1_QUOTE.image} alt={L1O1_QUOTE.alt} />
          </div>
          <figure className={styles.proofText}>
            <blockquote className={styles.quote}>“{L1O1_QUOTE.text}”</blockquote>
            <figcaption className={styles.cite}>
              {L1O1_QUOTE.name} · {L1O1_QUOTE.role}
            </figcaption>
          </figure>
        </div>
      </section>

      {L1O1_VOORBEELD.show ? (
        <Section number={num()} title={L1O1_VOORBEELD.title}>
          <div className={styles.prose}>
            <p>
              <strong>{L1O1_VOORBEELD.wie}</strong>
            </p>
            <p>{L1O1_VOORBEELD.start}</p>
            <p>{L1O1_VOORBEELD.gedaan}</p>
            <p>{L1O1_VOORBEELD.veranderd}</p>
          </div>
        </Section>
      ) : null}

      <Section number={num()} title="Praktisch">
        <div className={styles.groups}>
          <div className={styles.group}>
            <h3 className={styles.h3}>Zo ziet het eruit</h3>
            <ul className={styles.list}>
              {L1O1_OPZET.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>Trainingstijden</h3>
            <p className={styles.note}>{L1O1_SCHEDULE_NOTE}</p>
            <ul className={styles.list}>
              {L1O1_SCHEDULE.map((slot) => (
                <li key={slot}>
                  <b>{slot}</b>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>Zo verloopt het</h3>
            <p className={styles.note}>{L1O1_VERLOOP_NOTE}</p>
            <ul className={styles.list}>
              {L1O1_VERLOOP.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>{L1O1_DAARNA_TITLE}</h3>
            <p className={styles.note}>{L1O1_DAARNA_NOTE}</p>
            <ul className={styles.list}>
              {L1O1_DAARNA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <BookButton className={styles.buttonSection} />
      </Section>

      <Section number={num()} title={L1O1_WERKGEVER.title}>
        <div className={styles.prose}>
          <p>{L1O1_WERKGEVER.intro}</p>
        </div>
        <WerkgeverBlok />
      </Section>

      <Section number={num()} title="Goede vragen" tone="dark">
        <FaqList tone="dark" initialOpen={0} items={L1O1_FAQ} />
      </Section>

      <Section number={num()} title="Het begint met een gesprek">
        <div className={styles.prose}>
          <p>{L1O1_SLOT}</p>
        </div>
        <BookButton className={styles.buttonSection} />
        <div className={styles.prose}>
          <p>
            {L1O1_PROEF.text}{' '}
            <a
              href={L1O1_PROEF.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {L1O1_PROEF.linkLabel}
            </a>
          </p>
        </div>
        <p className={styles.dialect}>Kom moar op!</p>
      </Section>

      <Footer photoless ctaless tone="dark" />
    </main>
  )
}
