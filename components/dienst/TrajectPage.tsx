import Link from 'next/link'
import Nav from '@/components/Nav'
import HeroTitle from '@/components/dienst/HeroTitle'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { BookButton, Section } from './DienstParts'
import {
  TRAJECT_AFSLUITER,
  TRAJECT_ANDERS,
  TRAJECT_DAARNA,
  TRAJECT_DAARNA_NOTE,
  TRAJECT_DAARNA_TITLE,
  TRAJECT_FAQ,
  TRAJECT_HERO,
  TRAJECT_INTRO,
  TRAJECT_KRIJGT,
  TRAJECT_KRIJGT_NOTE,
  TRAJECT_OPZET,
  TRAJECT_OPZET_NOTE,
  TRAJECT_PARTS,
  TRAJECT_PROEF,
  TRAJECT_QUOTE,
  TRAJECT_SAMEN,
  TRAJECT_SLOT,
  TRAJECT_VERLOOP,
  TRAJECT_VERLOOP_NOTE,
  TRAJECT_VOORBEELD,
  TRAJECT_VRAAGT,
  TRAJECT_VRAAGT_CLOSE,
  TRAJECT_VRAAGT_TITLE,
  TRAJECT_WELK_TEAM,
} from './zakelijk-traject'
import styles from './DienstPage.module.css'
import pageStyles from './TrajectPage.module.css'

export default function TrajectPage() {
  let section = 0
  const num = () => String(++section).padStart(2, '0')

  return (
    <main className={styles.page}>
      <FaqJsonLd items={TRAJECT_FAQ} />

      <header className={styles.hero}>
        <Nav />
        <div className={styles.heroSplit}>
          <div className={styles.heroPhotoWrap}>
            <img className={styles.heroPhoto} src={TRAJECT_HERO.image} alt={TRAJECT_HERO.alt} />
          </div>
          <div className={`${styles.heroCopy} ${styles.heroCopyRoom}`}>
            <div className={styles.heroStack}>
              <HeroTitle
                word={TRAJECT_HERO.word}
                breakBefore="traject"
                className={styles.heroTitleLong}
              />
              <p className={styles.heroLine}>{TRAJECT_HERO.line}</p>
            </div>
          </div>
        </div>
      </header>

      <Section number={num()} title={TRAJECT_INTRO.title}>
        <ul className={styles.scenes}>
          {TRAJECT_INTRO.scenes.map((line) => (
            <li key={line}>
              {line}
              <span className={styles.dot}>.</span>
            </li>
          ))}
          <li className={styles.sceneOpen}>{TRAJECT_INTRO.sceneOpen}</li>
        </ul>
        <div className={`${styles.prose} ${styles.introProse}`}>
          {TRAJECT_INTRO.prose.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            <strong>{TRAJECT_INTRO.proseStrong}</strong> {TRAJECT_INTRO.proseAfterStrong}
          </p>
        </div>
        <p className={styles.close}>
          <span>{TRAJECT_INTRO.close}</span>
          <span className={styles.closeAccent}>{TRAJECT_INTRO.closeAccent}</span>
        </p>
      </Section>

      <Section number={num()} title="Hoe het werkt" tone="dark">
        <div className={styles.parts}>
          {TRAJECT_PARTS.map((part) => (
            <div className={styles.part} key={part.title}>
              <h3 className={styles.partTitle}>{part.title}</h3>
              <p>{part.text}</p>
            </div>
          ))}
        </div>
        <p className={styles.afsluiter}>{TRAJECT_AFSLUITER}</p>
        <div className={styles.sub}>
          <h3 className={styles.h3}>Wat je krijgt</h3>
          <ul className={styles.list}>
            {TRAJECT_KRIJGT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.note}>{TRAJECT_KRIJGT_NOTE}</p>
        </div>
      </Section>

      <Section number={num()} title={TRAJECT_SAMEN.title}>
        <div className={styles.prose}>
          {TRAJECT_SAMEN.items.map((item) => (
            <p key={item.strong}>
              <strong>{item.strong}</strong> {item.text}
            </p>
          ))}
        </div>
        <p className={`${styles.close} ${styles.closeTight}`}>
          <span>{TRAJECT_SAMEN.close}</span>
          <span className={styles.closeAccent}>{TRAJECT_SAMEN.closeAccent}</span>
        </p>
      </Section>

      <Section number={num()} title={TRAJECT_VRAAGT_TITLE}>
        <div className={styles.prose}>
          {TRAJECT_VRAAGT.map((item) => (
            <p key={item.strong}>
              <strong>{item.strong}</strong> {item.text}
            </p>
          ))}
        </div>
        <div className={styles.sub}>
          <h3 className={styles.h3}>{TRAJECT_WELK_TEAM.title}</h3>
          <div className={styles.prose}>
            <p>{TRAJECT_WELK_TEAM.text}</p>
          </div>
        </div>
        <p className={`${styles.close} ${styles.closeTight}`}>
          <span>{TRAJECT_VRAAGT_CLOSE.text}</span>
          <span className={styles.closeAccent}>{TRAJECT_VRAAGT_CLOSE.accent}</span>
        </p>
        <div className={styles.sub}>
          <h3 className={styles.h3}>Soms past iets anders beter</h3>
          <ul className={styles.list}>
            {TRAJECT_ANDERS.map((item) => (
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

      <section className={styles.proof} aria-label="Citaat">
        <div className={styles.proofGrid}>
          <div className={`${styles.proofPhotoWrap} ${styles.proofPhotoPortrait}`}>
            <img className={styles.proofPhoto} src={TRAJECT_QUOTE.image} alt={TRAJECT_QUOTE.alt} />
          </div>
          <figure className={styles.proofText}>
            <blockquote className={styles.quote}>“{TRAJECT_QUOTE.text}”</blockquote>
            <figcaption className={styles.cite}>
              {TRAJECT_QUOTE.role ? `${TRAJECT_QUOTE.name} · ${TRAJECT_QUOTE.role}` : TRAJECT_QUOTE.name}
            </figcaption>
          </figure>
        </div>
      </section>

      {TRAJECT_VOORBEELD.show ? (
        <Section number={num()} title={TRAJECT_VOORBEELD.title}>
          <div className={styles.prose}>
            <p>
              <strong>{TRAJECT_VOORBEELD.wie}</strong>
            </p>
            <p>{TRAJECT_VOORBEELD.start}</p>
            <p>{TRAJECT_VOORBEELD.gedaan}</p>
            <p>{TRAJECT_VOORBEELD.veranderd}</p>
          </div>
        </Section>
      ) : null}

      <Section number={num()} title="Praktisch">
        <div className={styles.groups}>
          <div className={styles.group}>
            <h3 className={styles.h3}>Zo ziet het eruit</h3>
            <ul className={styles.list}>
              {TRAJECT_OPZET.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.note}>{TRAJECT_OPZET_NOTE}</p>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>Zo verloopt het</h3>
            <ol className={`${styles.list} ${pageStyles.steps}`}>
              {TRAJECT_VERLOOP.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p className={styles.note}>{TRAJECT_VERLOOP_NOTE}</p>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>{TRAJECT_DAARNA_TITLE}</h3>
            <ul className={styles.list}>
              {TRAJECT_DAARNA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.note}>{TRAJECT_DAARNA_NOTE}</p>
          </div>
        </div>
        <BookButton className={styles.buttonSection} />
      </Section>

      <Section number={num()} title="Goede vragen" tone="dark">
        <FaqList tone="dark" initialOpen={0} items={TRAJECT_FAQ} />
      </Section>

      <Section number={num()} title="Het begint met een gesprek">
        <div className={styles.prose}>
          <p>{TRAJECT_SLOT}</p>
        </div>
        <BookButton className={styles.buttonSection} />
        <div className={styles.prose}>
          <p>
            {TRAJECT_PROEF.text}{' '}
            <a
              href={TRAJECT_PROEF.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {TRAJECT_PROEF.linkLabel}
            </a>
          </p>
        </div>
        <p className={styles.dialect}>Kom moar op!</p>
      </Section>

      <Footer photoless ctaless tone="dark" />
    </main>
  )
}
