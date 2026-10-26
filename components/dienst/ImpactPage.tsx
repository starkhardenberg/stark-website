import Link from 'next/link'
import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import HeroTitle from '@/components/dienst/HeroTitle'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { BookButton, CloseStamp, Section, SplitAside, createPageRhythm } from './DienstParts'
import DienstQuoteRoster from './DienstQuoteRoster'
import { impactPeople } from '@/components/testimonials/portrait-quotes'
import {
  IMPACT_AFSLUITER,
  IMPACT_ANDERS,
  IMPACT_EERLIJK,
  IMPACT_EERLIJK_CLOSE,
  IMPACT_FAQ,
  IMPACT_HERO,
  IMPACT_INTRO,
  IMPACT_PARTS,
  IMPACT_SCHEDULE,
  IMPACT_SCHEDULE_NOTE,
  IMPACT_SLOT,
  IMPACT_START,
  IMPACT_START_NOTE,
} from './impact'
import styles from './DienstPage.module.css'

export default function ImpactPage() {
  let section = 0
  const num = () => String(++section).padStart(2, '0')
  const { tone, footerTone } = createPageRhythm()
  const introTone = tone()
  const worksTone = tone()
  const eerlijkTone = tone()
  const quoteTone = tone()
  const praktischTone = tone()
  const faqTone = tone()
  const slotTone = tone()

  return (
    <main className={styles.page}>
      <FaqJsonLd items={IMPACT_FAQ} />

      <header className={styles.hero}>
        <Nav />
        <div className={styles.heroSplit}>
          <div className={styles.heroPhotoWrap}>
            <StarkImage
              className={styles.heroPhoto}
              src={IMPACT_HERO.image}
              alt={IMPACT_HERO.alt}
              fill
              unaltered
              priority
              quality={85}
              sizes="(min-width: 800px) 56vw, 100vw"
            />
          </div>
          <div className={styles.heroCopy} data-hero-copy="">
            <div className={styles.heroStack}>
              <HeroTitle word={IMPACT_HERO.word} />
              <p className={styles.heroLine}>{IMPACT_HERO.line}</p>
            </div>
          </div>
        </div>
      </header>

      <Section number={num()} title={IMPACT_INTRO.title} tone={introTone}>
        <ul className={styles.scenes}>
          {IMPACT_INTRO.scenes.map((line) => (
            <li key={line}>
              {line}
              <span className={styles.dot}>.</span>
            </li>
          ))}
        </ul>
        <div className={`${styles.prose} ${styles.introProse}`}>
          {IMPACT_INTRO.prose.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {IMPACT_INTRO.proseStrong} {IMPACT_INTRO.proseAfterStrong}
          </p>
        </div>
        <p className={styles.afsluiter}>{IMPACT_INTRO.close}</p>
      </Section>

      <Section number={num()} title="Hoe het werkt" tone={worksTone}>
        <div className={styles.parts}>
          {IMPACT_PARTS.map((part) => (
            <div className={styles.part} key={part.title}>
              <h3 className={styles.partTitle}>{part.title}</h3>
              <p>{part.text}</p>
            </div>
          ))}
        </div>
        <p className={styles.afsluiter}>{IMPACT_AFSLUITER}</p>
      </Section>

      <Section number={num()} title="Wat we van je vragen" tone={eerlijkTone}>
        <SplitAside
          main={
            <>
              <div className={styles.prose}>
                {IMPACT_EERLIJK.map((item) => (
                  <p key={item.strong}>
                    {item.strong} {item.text}
                  </p>
                ))}
              </div>
              <CloseStamp lines={IMPACT_EERLIJK_CLOSE} />
            </>
          }
          aside={
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
          }
        />
      </Section>

      <DienstQuoteRoster tone={quoteTone} people={impactPeople} />

      <Section number={num()} title="Praktisch" tone={praktischTone}>
        <div className={styles.groups}>
          <div className={styles.group}>
            <h3 className={styles.h3}>Trainingstijden</h3>
            <ul className={styles.list}>
              {IMPACT_SCHEDULE.map((slot) => (
                <li key={slot}>
                  <b>{slot}</b>
                </li>
              ))}
            </ul>
            <p className={styles.groupClose}>{IMPACT_SCHEDULE_NOTE}</p>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>Starten</h3>
            <ul className={styles.list}>
              {IMPACT_START.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.groupClose}>{IMPACT_START_NOTE}</p>
          </div>
        </div>
        <BookButton className={styles.buttonTiles} />
      </Section>

      <Section number={num()} title="Goede vragen" tone={faqTone}>
        <FaqList tone={faqTone} items={IMPACT_FAQ} />
      </Section>

      <Section number={num()} title="Het begint met een gesprek" tone={slotTone}>
        <div className={styles.prose}>
          <p>{IMPACT_SLOT}</p>
        </div>
        <BookButton className={styles.buttonSlot} />
      </Section>

      <Footer photoless ctaless tone={footerTone()} />
    </main>
  )
}
