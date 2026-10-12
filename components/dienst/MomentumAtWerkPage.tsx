import Link from 'next/link'
import Nav from '@/components/Nav'
import HeroTitle from '@/components/dienst/HeroTitle'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { BookButton, CloseStamp, QuoteBlock, Section, SplitAside, createPageRhythm } from './DienstParts'
import {
  MAW_AFSLUITER,
  MAW_ANDERS,
  MAW_DAARNA,
  MAW_FAQ,
  MAW_HERO,
  MAW_INTRO,
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
  let section = 0
  const num = () => String(++section).padStart(2, '0')
  const { tone, footerTone } = createPageRhythm()
  const introTone = tone()
  const worksTone = tone()
  const wieTone = tone()
  const quoteTone = tone()
  const terugTone = tone()
  const praktischTone = tone()
  const faqTone = tone()
  const slotTone = tone()

  return (
    <main className={styles.page}>
      <FaqJsonLd items={MAW_FAQ} />

      <header className={styles.hero}>
        <Nav backHref="/zakelijk" backLabel="Zakelijk" />
        <div className={styles.heroSplit}>
          <div className={styles.heroPhotoWrap}>
            <img className={styles.heroPhoto} src={MAW_HERO.image} alt={MAW_HERO.alt} />
          </div>
          <div className={styles.heroCopy} data-hero-copy="">
            <div className={styles.heroStack}>
              <HeroTitle word={MAW_HERO.word} breakBefore="@" centerSecondLine />
              <p className={styles.heroLine}>{MAW_HERO.line}</p>
            </div>
          </div>
        </div>
      </header>

      <Section number={num()} title={MAW_INTRO.title} tone={introTone}>
        <ul className={styles.scenes}>
          {MAW_INTRO.scenes.map((line) => (
            <li key={line}>
              {line}
              {/[.!?]["”']?$/.test(line) ? null : <span className={styles.dot}>.</span>}
            </li>
          ))}
        </ul>
        <div className={`${styles.prose} ${styles.introProse}`}>
          {MAW_INTRO.prose.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {MAW_INTRO.proseStrong} {MAW_INTRO.proseAfterStrong}
          </p>
        </div>
        <CloseStamp lines={MAW_INTRO.close} />
      </Section>

      <Section number={num()} title="Hoe het werkt" tone={worksTone}>
        <div className={styles.parts}>
          {MAW_PARTS.map((part) => (
            <div className={styles.part} key={part.title}>
              <h3 className={styles.partTitle}>{part.title}</h3>
              <p>{part.text}</p>
            </div>
          ))}
        </div>
        <p className={styles.afsluiter}>{MAW_AFSLUITER}</p>
      </Section>

      <Section number={num()} title="Wie er meedoet" tone={wieTone}>
        <SplitAside
          main={
            <>
              <div className={styles.prose}>
                {MAW_WIE.map((item) => (
                  <p key={item.strong}>
                    {item.strong} {item.text}
                  </p>
                ))}
              </div>
              <p className={styles.afsluiter}>{MAW_WIE_CLOSE}</p>
            </>
          }
          aside={
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
          }
        />
      </Section>

      <QuoteBlock
        tone={quoteTone}
        image={MAW_QUOTE.image}
        alt={MAW_QUOTE.alt}
        text={MAW_QUOTE.text}
        name={MAW_QUOTE.name}
        role={MAW_QUOTE.role}
        portrait
        matchText
        label="Citaat"
      />

      <Section number={num()} title={MAW_TERUG.title} tone={terugTone}>
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
          <p className={styles.listClose}>{MAW_TERUG.note}</p>
        </div>
        <p className={styles.afsluiter}>{MAW_TERUG.close}</p>
      </Section>

      <Section number={num()} title="Praktisch" tone={praktischTone}>
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
            <h3 className={styles.h3}>Na tien weken</h3>
            <ul className={styles.list}>
              {MAW_DAARNA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <BookButton className={styles.buttonTiles} />
      </Section>

      <Section number={num()} title="Goede vragen" tone={faqTone}>
        <FaqList tone={faqTone} items={MAW_FAQ} />
      </Section>

      <Section number={num()} title="Het begint met een gesprek" tone={slotTone}>
        <div className={styles.prose}>
          <p>{MAW_SLOT}</p>
        </div>
        <div className={`${styles.group} ${styles.stepsCard}`}>
          <h3 className={styles.h3}>Na de kennismaking</h3>
          <ol className={`${styles.list} ${styles.steps} ${styles.stepsStack}`}>
            {MAW_VERLOOP.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p className={styles.groupClose}>{MAW_VERLOOP_NOTE}</p>
        </div>
        <BookButton className={styles.buttonSlot} />
      </Section>

      <Footer photoless ctaless tone={footerTone()} />
    </main>
  )
}
