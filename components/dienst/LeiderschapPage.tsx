import Link from 'next/link'
import Nav from '@/components/Nav'
import HeroTitle from '@/components/dienst/HeroTitle'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { STARK_CTA, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import { BookButton, CloseStamp, QuoteBlock, Section, SplitAside, createPageRhythm } from './DienstParts'
import WerkgeverBlok from './WerkgeverBlok'
import {
  L1O1_AFSLUITER,
  L1O1_AFSTAND,
  L1O1_ANDERS,
  L1O1_DAARNA,
  L1O1_DAARNA_NOTE,
  L1O1_DAARNA_TITLE,
  L1O1_FAQ,
  L1O1_HERO,
  L1O1_INTRO,
  L1O1_OPZET,
  L1O1_PARTS,
  L1O1_PROEF,
  L1O1_QUOTE,
  L1O1_SCHEDULE,
  L1O1_SCHEDULE_NOTE,
  L1O1_SLOT,
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
  const { tone, footerTone } = createPageRhythm()
  const introTone = tone()
  const worksTone = tone()
  const vraagtTone = tone()
  const quoteTone = tone()
  const voorbeeldTone = tone()
  const praktischTone = tone()
  const werkgeverTone = tone()
  const faqTone = tone()
  const slotTone = tone()

  return (
    <main className={styles.page}>
      <FaqJsonLd items={L1O1_FAQ} />

      <header className={styles.hero}>
        <Nav backHref="/zakelijk" backLabel="Zakelijk" />
        <div className={styles.heroSplit}>
          <div className={styles.heroPhotoWrap}>
            <img className={styles.heroPhoto} src={L1O1_HERO.image} alt={L1O1_HERO.alt} />
          </div>
          <div className={styles.heroCopy} data-hero-copy="">
            <div className={styles.heroStack}>
              <HeroTitle
                word={L1O1_HERO.word}
                breakBefore="1-op-1"
                centerSecondLine
                className={styles.heroTitleLong}
              />
              <p className={styles.heroLine}>{L1O1_HERO.line}</p>
            </div>
          </div>
        </div>
      </header>

      <Section number={num()} title={L1O1_INTRO.title} tone={introTone}>
        <ul className={styles.scenes}>
          {L1O1_INTRO.scenes.map((line) => (
            <li key={line}>
              {line.split('\n').map((part, index) => (
                <span key={part}>
                  {index > 0 ? <br /> : null}
                  {part}
                </span>
              ))}
              <span className={styles.dot}>.</span>
            </li>
          ))}
        </ul>
        <div className={`${styles.prose} ${styles.introProse}`}>
          {L1O1_INTRO.prose.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {L1O1_INTRO.proseStrong} {L1O1_INTRO.proseAfterStrong}
          </p>
        </div>
        <p className={styles.afsluiter}>{L1O1_INTRO.close}</p>
      </Section>

      <Section number={num()} title="Hoe het werkt" tone={worksTone}>
        <div className={styles.parts}>
          {L1O1_PARTS.map((part) => (
            <div className={styles.part} key={part.title}>
              <h3 className={styles.partTitle}>{part.title}</h3>
              <p>{part.text}</p>
            </div>
          ))}
        </div>
        <p className={styles.afsluiter}>{L1O1_AFSLUITER}</p>
      </Section>

      <Section number={num()} title={L1O1_VRAAGT_TITLE} tone={vraagtTone}>
        <SplitAside
          main={
            <>
              <div className={styles.prose}>
                {L1O1_VRAAGT.map((item) => (
                  <p key={item.strong}>
                    {item.strong} {item.text}
                  </p>
                ))}
              </div>
              <CloseStamp lines={L1O1_VRAAGT_CLOSE} />
            </>
          }
          aside={
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
          }
        />
      </Section>

      <QuoteBlock
        id="quote"
        tone={quoteTone}
        image={L1O1_QUOTE.image}
        alt={L1O1_QUOTE.alt}
        text={L1O1_QUOTE.text}
        name={L1O1_QUOTE.name}
        role={L1O1_QUOTE.role}
        portrait
        matchText
      />

      {L1O1_VOORBEELD.show ? (
        <Section number={num()} title={L1O1_VOORBEELD.title} tone={voorbeeldTone}>
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

      <Section number={num()} title="Praktisch" tone={praktischTone}>
        <div className={styles.groups}>
          <div className={styles.group}>
            <h3 className={styles.h3}>Zo ziet het eruit</h3>
            <ul className={styles.list}>
              {L1O1_OPZET.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.groupClose}>{L1O1_AFSTAND}</p>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>Trainingstijden</h3>
            <ul className={styles.list}>
              {L1O1_SCHEDULE.map((slot) => (
                <li key={slot}>
                  <b>{slot}</b>
                </li>
              ))}
            </ul>
            <p className={styles.groupClose}>{L1O1_SCHEDULE_NOTE}</p>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>{L1O1_DAARNA_TITLE}</h3>
            <ul className={styles.list}>
              {L1O1_DAARNA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.groupClose}>{L1O1_DAARNA_NOTE}</p>
          </div>
        </div>
        <BookButton className={styles.buttonTiles} />
      </Section>

      <Section number={num()} title={L1O1_WERKGEVER.title} tone={werkgeverTone}>
        <div className={styles.prose}>
          <p>{L1O1_WERKGEVER.intro}</p>
        </div>
        <WerkgeverBlok />
      </Section>

      <Section number={num()} title="Goede vragen" tone={faqTone}>
        <FaqList tone={faqTone} items={L1O1_FAQ} />
      </Section>

      <Section number={num()} title="Zo begin je" tone={slotTone}>
        <div className={styles.prose}>
          <p>{L1O1_PROEF.lead}</p>
          <ul className={`${styles.list} ${styles.proefPoints}`}>
            {L1O1_PROEF.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
            <li>{L1O1_PROEF.practical}</li>
          </ul>
          <p>
            {L1O1_SLOT.before}
            <a className={`${styles.textLink} ${styles.textLinkBold}`} href={L1O1_SLOT.href} target="_blank" rel="noopener noreferrer">
              {L1O1_SLOT.link}
            </a>
            {L1O1_SLOT.rest}
          </p>
          <p className={styles.proefDate}>{L1O1_PROEF.date}</p>
        </div>
        <div className={styles.proefAction}>
          <a
            href={L1O1_PROEF.href}
            className={`${styles.button} ${styles.proefButton} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {L1O1_PROEF.linkLabel}
          </a>
        </div>
      </Section>

      <Footer photoless ctaless tone={footerTone()} />
    </main>
  )
}
