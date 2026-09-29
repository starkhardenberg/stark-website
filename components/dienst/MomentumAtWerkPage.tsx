import Link from 'next/link'
import Nav from '@/components/Nav'
import HeroTitle from '@/components/dienst/HeroTitle'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { BookButton, Section } from './DienstParts'
import {
  MAW_AFSLUITER,
  MAW_ANDERS,
  MAW_DAARNA,
  MAW_FAQ,
  MAW_HERO,
  MAW_INTRO,
  MAW_KRIJGT,
  MAW_KRIJGT_NOTE,
  MAW_OPZET,
  MAW_PARTS,
  MAW_QUOTE,
  MAW_SLOT,
  MAW_TERUG,
  MAW_VERLOOP,
  MAW_VERLOOP_NOTE,
  MAW_WIE,
  MAW_WIE_CLOSE,
} from './momentum-at-werk'
import styles from './DienstPage.module.css'

export default function MomentumAtWerkPage() {
  return (
    <main className={styles.page}>
      <FaqJsonLd items={MAW_FAQ} />

      <header className={styles.hero}>
        <Nav />
        <div className={styles.heroSplit}>
          <div className={styles.heroPhotoWrap}>
            <img className={styles.heroPhoto} src={MAW_HERO.image} alt={MAW_HERO.alt} />
          </div>
          <div className={`${styles.heroCopy} ${styles.heroCopyRoom}`}>
            <div className={styles.heroStack}>
              <HeroTitle word={MAW_HERO.word} breakBefore="@" />
              <p className={styles.heroLine}>{MAW_HERO.line}</p>
            </div>
          </div>
        </div>
      </header>

      <Section number="01" title={MAW_INTRO.title}>
        <ul className={styles.scenes}>
          {MAW_INTRO.scenes.map((line) => (
            <li key={line}>
              {line}
              <span className={styles.dot}>.</span>
            </li>
          ))}
          <li className={styles.sceneOpen}>{MAW_INTRO.sceneOpen}</li>
        </ul>
        <div className={`${styles.prose} ${styles.introProse}`}>
          {MAW_INTRO.prose.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            <strong>{MAW_INTRO.proseStrong}</strong> {MAW_INTRO.proseAfterStrong}
          </p>
        </div>
        <p className={styles.close}>
          <span>{MAW_INTRO.close}</span>
          <span className={styles.closeAccent}>{MAW_INTRO.closeAccent}</span>
        </p>
      </Section>

      <Section number="02" title="Hoe het werkt" tone="dark">
        <div className={styles.parts}>
          {MAW_PARTS.map((part) => (
            <div className={styles.part} key={part.title}>
              <h3 className={styles.partTitle}>{part.title}</h3>
              <p>{part.text}</p>
            </div>
          ))}
        </div>
        <p className={styles.afsluiter}>{MAW_AFSLUITER}</p>
        <div className={styles.sub}>
          <h3 className={styles.h3}>Wat je krijgt</h3>
          <ul className={styles.list}>
            {MAW_KRIJGT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.note}>{MAW_KRIJGT_NOTE}</p>
        </div>
      </Section>

      <Section number="03" title="Wie er meedoet">
        <div className={styles.prose}>
          {MAW_WIE.map((item) => (
            <p key={item.strong}>
              <strong>{item.strong}</strong> {item.text}
            </p>
          ))}
        </div>
        <p className={`${styles.close} ${styles.closeTight}`}>
          <span>{MAW_WIE_CLOSE.text}</span>
          <span className={styles.closeAccent}>{MAW_WIE_CLOSE.accent}</span>
        </p>
        <div className={styles.sub}>
          <h3 className={styles.h3}>Soms past iets anders beter</h3>
          <ul className={styles.list}>
            {MAW_ANDERS.map((item) => (
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
            <img className={styles.proofPhoto} src={MAW_QUOTE.image} alt={MAW_QUOTE.alt} />
          </div>
          <figure className={styles.proofText}>
            <blockquote className={styles.quote}>“{MAW_QUOTE.text}”</blockquote>
            <figcaption className={styles.cite}>
              {MAW_QUOTE.name}
              {MAW_QUOTE.role ? ` · ${MAW_QUOTE.role}` : null}
            </figcaption>
          </figure>
        </div>
      </section>

      <Section number="04" title={MAW_TERUG.title}>
        <div className={styles.prose}>
          <p>{MAW_TERUG.intro}</p>
        </div>
        <div className={styles.sub}>
          <h3 className={styles.h3}>{MAW_TERUG.listTitle}</h3>
          <ul className={styles.list}>
            {MAW_TERUG.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.note}>{MAW_TERUG.note}</p>
        </div>
        <p className={styles.close}>
          <span>{MAW_TERUG.close}</span>
          <span className={styles.closeAccent}>{MAW_TERUG.closeAccent}</span>
        </p>
      </Section>

      <Section number="05" title="Praktisch">
        <div className={styles.groups}>
          <div className={styles.group}>
            <h3 className={styles.h3}>Zo ziet het eruit</h3>
            <ul className={styles.list}>
              {MAW_OPZET.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>Zo verloopt het</h3>
            <p className={styles.note}>{MAW_VERLOOP_NOTE}</p>
            <ul className={styles.list}>
              {MAW_VERLOOP.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>Na tien weken</h3>
            <ul className={styles.list}>
              {MAW_DAARNA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <BookButton className={styles.buttonSection} />
      </Section>

      <Section number="06" title="Goede vragen" tone="dark">
        <FaqList tone="dark" initialOpen={0} items={MAW_FAQ} />
      </Section>

      <Section number="07" title="Het begint met een gesprek">
        <div className={styles.prose}>
          <p>{MAW_SLOT}</p>
        </div>
        <BookButton className={styles.buttonSection} />
        <p className={styles.dialect}>Kom moar op!</p>
      </Section>

      <Footer photoless ctaless tone="dark" />
    </main>
  )
}
