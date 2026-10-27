import Link from 'next/link'
import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import HeroTitle from '@/components/dienst/HeroTitle'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import landingStyles from '@/app/landing.module.css'
import { KennismakingClose, QuoteBlock, Section, SplitAside, createPageRhythm } from './DienstParts'
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
  MAW_WIE,
  MAW_WIE_CLOSE,
} from './momentum-at-werk'
import styles from './DienstPage.module.css'

export default function MomentumAtWerkPage() {
  let section = 0
  const num = () => String(++section).padStart(2, '0')
  const { tone } = createPageRhythm()
  const introTone = tone()
  const worksTone = tone()
  const wieTone = tone()
  const quoteTone = tone()
  const terugTone = tone()
  const praktischTone = tone()
  const faqTone = tone()
  const slotTone = tone()

  return (
    <main className={`${styles.page} ${styles.zakelijk}`}>
      <FaqJsonLd items={MAW_FAQ} />

      <header className={styles.hero}>
        <Nav backHref="/zakelijk" backLabel="Zakelijk" heroBar />
        <div className={styles.heroSplit}>
          <div className={styles.heroPhotoWrap}>
            <StarkImage
              className={`${styles.heroPhoto} ${styles.heroPhotoMaw}`}
              src={MAW_HERO.image}
              alt={MAW_HERO.alt}
              fill
              unaltered
              priority
              quality={85}
              sizes="(min-width: 800px) 56vw, 100vw"
            />
          </div>
          <div className={styles.heroCopy} data-hero-copy="">
            <div className={styles.heroStack}>
              <p className={landingStyles.heroLabel}>{MAW_HERO.label}</p>
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
        <p className={styles.afsluiter}>{MAW_INTRO.close.join(' ')}</p>
      </Section>

      <Section number={num()} title="Hoe het werkt" tone={worksTone}>
        <div className={styles.parts}>
          {MAW_PARTS.map((part) => (
            <div className={styles.part} key={part.title}>
              <h3 className={styles.partTitle}>{part.title}</h3>
              {(Array.isArray(part.text) ? part.text : [part.text]).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
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
        portrait={MAW_QUOTE.layout === 'testimonial'}
        tight={MAW_QUOTE.layout === 'testimonial'}
        hall={MAW_QUOTE.layout === 'line'}
        matchText
        photoPosition={MAW_QUOTE.layout === 'line' ? MAW_QUOTE.photoPosition : undefined}
        label={MAW_QUOTE.layout === 'testimonial' ? 'Ervaring van een deelnemer' : 'Citaat'}
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
      </Section>

      <Section number={num()} title="Goede vragen" tone={faqTone}>
        <FaqList tone={faqTone} variant="dienst" items={MAW_FAQ} />
      </Section>

      <Section number={num()} title="Zo begin je" tone={slotTone}>
        <KennismakingClose text={MAW_SLOT} />
      </Section>

      <Footer variant="light" />
    </main>
  )
}
