import Link from 'next/link'
import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import HeroTitle from '@/components/dienst/HeroTitle'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { KennismakingClose, QuoteBlock, Section, SplitAside, createPageRhythm } from './DienstParts'
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
  TRAJECT_QUOTE,
  TRAJECT_SAMEN,
  TRAJECT_START,
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
  const { tone } = createPageRhythm()
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
    <main className={`${styles.page} ${styles.zakelijk}`}>
      <FaqJsonLd items={TRAJECT_FAQ} />

      <header className={styles.hero}>
        <Nav backHref="/zakelijk" backLabel="Zakelijk" heroBar />
        <div className={styles.heroSplit}>
          <div className={styles.heroPhotoWrap}>
            <StarkImage
              className={`${styles.heroPhoto} ${styles.heroPhotoTraject}`}
              src={TRAJECT_HERO.image}
              alt={TRAJECT_HERO.alt}
              fill
              unaltered
              priority
              quality={85}
              sizes="(min-width: 800px) 56vw, 100vw"
            />
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
          <p>{TRAJECT_INTRO.prose[0]}</p>
          <p>{TRAJECT_INTRO.opening}</p>
          <p>{TRAJECT_INTRO.prose[1]}</p>
          <p>
            {TRAJECT_INTRO.proseStrong} {TRAJECT_INTRO.proseAfterStrong}
          </p>
        </div>
        <p className={styles.afsluiter}>{TRAJECT_INTRO.close.join(' ')}</p>
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
              <p className={styles.afsluiter}>{TRAJECT_VRAAGT_CLOSE.join(' ')}</p>
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
        portrait={TRAJECT_QUOTE.layout === 'testimonial'}
        tight={TRAJECT_QUOTE.layout === 'testimonial'}
        hall={TRAJECT_QUOTE.layout === 'pand'}
        matchText
        photoPosition={TRAJECT_QUOTE.layout === 'pand' ? TRAJECT_QUOTE.photoPosition : undefined}
        label={TRAJECT_QUOTE.layout === 'testimonial' ? 'Ervaring van een deelnemer' : 'Citaat'}
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
      </Section>

      <Section number={num()} title="Goede vragen" tone={faqTone}>
        <FaqList tone={faqTone} variant="dienst" items={TRAJECT_FAQ} />
      </Section>

      <Section number={num()} title="Zo begin je" tone={slotTone}>
        <KennismakingClose text={TRAJECT_START} />
      </Section>

      <Footer variant="light" />
    </main>
  )
}
