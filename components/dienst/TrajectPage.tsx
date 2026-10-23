import Link from 'next/link'
import Nav from '@/components/Nav'
import HeroTitle from '@/components/dienst/HeroTitle'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { BookButton, CloseStamp, ProefClose, QuoteBlock, Section, SplitAside, createPageRhythm } from './DienstParts'
import {
  TRAJECT_AFSLUITER,
  TRAJECT_ANDERS,
  TRAJECT_DAARNA,
  TRAJECT_DAARNA_NOTE,
  TRAJECT_DAARNA_TITLE,
  TRAJECT_FAQ,
  TRAJECT_HERO,
  TRAJECT_INTRO,
  TRAJECT_OPZET,
  TRAJECT_OPZET_NOTE,
  TRAJECT_PARTS,
  TRAJECT_PROEF,
  TRAJECT_QUOTE,
  TRAJECT_SAMEN,
  TRAJECT_SLOT,
  TRAJECT_VOORBEELD,
  TRAJECT_VRAAGT,
  TRAJECT_VRAAGT_CLOSE,
  TRAJECT_VRAAGT_TITLE,
  TRAJECT_WELK_TEAM,
} from './zakelijk-traject'
import landingStyles from '@/app/landing.module.css'
import styles from './DienstPage.module.css'

export default function TrajectPage() {
  let section = 0
  const num = () => String(++section).padStart(2, '0')
  const { tone, footerTone } = createPageRhythm()
  const introTone = tone()
  const worksTone = tone()
  const samenTone = tone()
  const vraagtTone = tone()
  const quoteTone = tone()
  const voorbeeldTone = TRAJECT_VOORBEELD.show ? tone() : 'light'
  const praktischTone = tone()
  const faqTone = tone()
  const slotTone = tone()

  return (
    <main className={styles.page}>
      <FaqJsonLd items={TRAJECT_FAQ} />

      <header className={styles.hero}>
        <Nav backHref="/zakelijk" backLabel="Zakelijk" />
        <div className={styles.heroSplit}>
          <div className={styles.heroPhotoWrap}>
            <img className={styles.heroPhoto} src={TRAJECT_HERO.image} alt={TRAJECT_HERO.alt} />
          </div>
          <div className={styles.heroCopy} data-hero-copy="">
            <div className={styles.heroStack}>
              <p className={landingStyles.heroLabel}>{TRAJECT_HERO.label}</p>
              <HeroTitle word={TRAJECT_HERO.word} className={styles.heroTitleLong} />
              <p className={styles.heroLine}>{TRAJECT_HERO.line}</p>
            </div>
          </div>
        </div>
      </header>

      <Section number={num()} title={TRAJECT_INTRO.title} tone={introTone}>
        <ul className={styles.scenes}>
          {TRAJECT_INTRO.scenes.map((line) => (
            <li key={line}>
              {line}
              <span className={styles.dot}>.</span>
            </li>
          ))}
        </ul>
        <div className={`${styles.prose} ${styles.introProse}`}>
          {TRAJECT_INTRO.prose.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {TRAJECT_INTRO.proseStrong} {TRAJECT_INTRO.proseAfterStrong}
          </p>
        </div>
        <CloseStamp lines={TRAJECT_INTRO.close} />
      </Section>

      <Section number={num()} title="Hoe het werkt" tone={worksTone}>
        <div className={styles.parts}>
          {TRAJECT_PARTS.map((part) => (
            <div className={styles.part} key={part.title}>
              <h3 className={styles.partTitle}>{part.title}</h3>
              <p>{part.text}</p>
            </div>
          ))}
        </div>
        <p className={styles.afsluiter}>{TRAJECT_AFSLUITER}</p>
      </Section>

      <Section number={num()} title={TRAJECT_SAMEN.title} tone={samenTone}>
        <div className={styles.prose}>
          {TRAJECT_SAMEN.items.map((item) => (
            <p key={item.strong}>
              {item.strong} {item.text}
            </p>
          ))}
        </div>
        <p className={styles.afsluiter}>{TRAJECT_SAMEN.close}</p>
      </Section>

      <Section number={num()} title={TRAJECT_VRAAGT_TITLE} tone={vraagtTone}>
        <SplitAside
          main={
            <>
              <div className={styles.prose}>
                {TRAJECT_VRAAGT.map((item) => (
                  <p key={item.strong}>
                    {item.strong} {item.text}
                  </p>
                ))}
              </div>
              <div className={styles.sub}>
                <h3 className={styles.h3}>{TRAJECT_WELK_TEAM.title}</h3>
                <div className={styles.prose}>
                  <p>{TRAJECT_WELK_TEAM.text}</p>
                </div>
              </div>
              <CloseStamp lines={TRAJECT_VRAAGT_CLOSE} />
            </>
          }
          aside={
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
          }
        />
      </Section>

      <QuoteBlock
        tone={quoteTone}
        image={TRAJECT_QUOTE.image}
        alt={TRAJECT_QUOTE.alt}
        text={TRAJECT_QUOTE.text}
        name={TRAJECT_QUOTE.name}
        role={TRAJECT_QUOTE.role}
        portrait
        matchText
        photoPosition="center 12%"
        label="Citaat"
      />

      {TRAJECT_VOORBEELD.show ? (
        <Section number={num()} title={TRAJECT_VOORBEELD.title} tone={voorbeeldTone}>
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

      <Section number={num()} title="Praktisch" tone={praktischTone}>
        <div className={`${styles.groups} ${styles.groupsAlign}`}>
          <div className={styles.group}>
            <h3 className={styles.h3}>Zo ziet het eruit</h3>
            <ul className={styles.list}>
              {TRAJECT_OPZET.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.groupClose}>{TRAJECT_OPZET_NOTE}</p>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>{TRAJECT_DAARNA_TITLE}</h3>
            <div className={styles.prose}>
              <p>{TRAJECT_DAARNA}</p>
            </div>
            <p className={styles.groupClose}>{TRAJECT_DAARNA_NOTE}</p>
          </div>
        </div>
        <BookButton className={styles.buttonTiles} />
      </Section>

      <Section number={num()} title="Goede vragen" tone={faqTone}>
        <FaqList tone={faqTone} items={TRAJECT_FAQ} />
      </Section>

      <Section number={num()} title="Proef op de Som" tone={slotTone}>
        <ProefClose
          lead={TRAJECT_PROEF.lead}
          points={TRAJECT_PROEF.points}
          date={TRAJECT_PROEF.date}
          practical={TRAJECT_PROEF.practical}
          signupLabel={TRAJECT_PROEF.linkLabel}
          signupHref={TRAJECT_PROEF.href}
          gesprekBefore={TRAJECT_SLOT.before}
          gesprekLink={TRAJECT_SLOT.link}
          gesprekRest={TRAJECT_SLOT.rest}
          gesprekHref={TRAJECT_SLOT.href}
        />
      </Section>

      <Footer photoless ctaless tone={footerTone()} />
    </main>
  )
}
