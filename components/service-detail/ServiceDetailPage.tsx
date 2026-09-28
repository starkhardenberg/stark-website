import type { ReactNode } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import StarkImage from '@/components/StarkImage'
import HoeHetBegintSection from '@/components/zakelijk/HoeHetBegintSection'
import cardStyles from '@/components/aanbod/AanbodFeatureCard.module.css'
import pageStyles from '@/components/zakelijk/ZakelijkOndernemersPage.module.css'
import landing from '@/app/landing.module.css'
import { hrefKennismaking } from '@/lib/contact'
import type { ServiceDetailBlock, ServiceDetailContent, ServiceDetailImage } from './types'
import styles from './ServiceDetailPage.module.css'

function BandImage({
  image,
  className,
  sizes,
  priority,
}: {
  image: ServiceDetailImage
  className: string
  sizes: string
  priority?: boolean
}) {
  return (
    <StarkImage
      src={image.src}
      alt={image.alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
    />
  )
}

function blockParagraphs(text: ServiceDetailBlock['text']) {
  return Array.isArray(text) ? text : [text]
}

function DepthBody({ page }: { page: ServiceDetailContent }) {
  const nodes: ReactNode[] = []
  let items: Extract<ServiceDetailContent['depth'][number], { type: 'item' }>[] = []

  const flushItems = () => {
    if (!items.length) return
    const batch = items
    items = []
    nodes.push(
      <dl
        key={`items-${batch[0].label}`}
        className={`${cardStyles.card} ${cardStyles.cardLight} ${cardStyles.cardStatic} ${styles.blockList} ${styles.depthList}`}
      >
        {batch.map((item) => (
          <div key={item.label} className={`${cardStyles.menuRow} ${styles.block}`}>
            <dt>{item.label}</dt>
            <dd>
              <p>{item.text}</p>
            </dd>
          </div>
        ))}
      </dl>,
    )
  }

  page.depth.forEach((piece, i) => {
    if (piece.type === 'item') {
      items.push(piece)
      return
    }
    flushItems()
    if (piece.type === 'heading') {
      nodes.push(
        <h3 key={`h-${i}`} className={styles.depthHeading}>
          {piece.text}
        </h3>,
      )
    } else {
      nodes.push(
        <p key={`p-${i}`} className={styles.graf}>
          {piece.text}
        </p>,
      )
    }
  })
  flushItems()
  return <>{nodes}</>
}

export default function ServiceDetailPage({ page }: { page: ServiceDetailContent }) {
  return (
    <main className={landing.main}>
      <header className={page.chapterHero ? styles.headerChapter : styles.header}>
        {page.headerImage ? (
          page.chapterHero ? (
            <img
              src={page.headerImage.src}
              alt={page.headerImage.alt}
              className={styles.chapterPhoto}
              style={page.headerImage.objectPosition ? { objectPosition: page.headerImage.objectPosition } : undefined}
            />
          ) : (
            <div className={styles.headerBg}>
              <BandImage image={page.headerImage} className={styles.headerImage} sizes="100vw" priority />
            </div>
          )
        ) : null}
        {page.chapterHero ? <div className={styles.scrim} aria-hidden /> : null}
        <Nav ctaLabel={page.navCtaLabel} ctaHref={page.navCtaHref ?? hrefKennismaking} />
        {page.chapterHero ? (
          <div className={styles.chapterCopy}>
            <p className={styles.kicker}>{page.heroKicker ?? page.eyebrow}</p>
            <h1 className={styles.chapterTitle}>{page.title}</h1>
            {page.heroLine ? <p className={styles.chapterLine}>{page.heroLine}</p> : null}
          </div>
        ) : (
          <div className={styles.headerOverlay}>
            <div className={styles.headerCopy}>
              <h1 className={cardStyles.mediaLabel}>{page.title}</h1>
              <span className={`${cardStyles.eyebrow} ${styles.eyebrow}`}>{page.eyebrow}</span>
            </div>
            <span className={`${cardStyles.index} ${styles.index}`} aria-hidden>
              {page.num}
            </span>
          </div>
        )}
      </header>

      <section className={styles.scan} aria-label={page.title}>
        <div className={styles.column}>
          <p className={styles.lead}>{page.opening}</p>
          <dl className={`${cardStyles.card} ${cardStyles.cardStatic} ${styles.blockList}`}>
            {page.blocks.map((block) => (
              <div key={block.label} className={`${cardStyles.menuRow} ${styles.block}`}>
                <dt>{block.label}</dt>
                <dd>
                  {blockParagraphs(block.text).map((graf) => (
                    <p key={graf}>{graf}</p>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {page.transitionImage ? (
        <div className={styles.band}>
          <BandImage image={page.transitionImage} className={styles.bandImage} sizes="100vw" />
        </div>
      ) : null}

      <section className={styles.depth} aria-label={page.depthTitle ?? 'Achtergrond'}>
        <div className={styles.column}>
          {page.depthNote ? <p className={styles.depthNote}>{page.depthNote}</p> : null}

          <div className={page.depthBrief ? styles.brief : undefined}>
            {page.depthTitle ? <h2 className={styles.depthTitle}>{page.depthTitle}</h2> : null}

            <DepthBody page={page} />

            {page.depthHighlight ? (
              <p className={styles.graf}>
                <span className={pageStyles.workMark}>{page.depthHighlight}</span>
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {page.closeImage ? (
        <div className={styles.close}>
          <div className={styles.closeFrame}>
            <div className={styles.closeSlot}>
              <BandImage
                image={page.closeImage}
                className={styles.closeImage}
                sizes="(min-width: 720px) 620px, 100vw"
              />
            </div>
          </div>
        </div>
      ) : null}

      <HoeHetBegintSection proefGraf={page.proefGraf} />

      <div className={styles.backWrap}>
        <div className={styles.column}>
          <Link href={page.backHref} className={styles.back}>
            ← {page.backLabel}
          </Link>
        </div>
      </div>

      <Footer
        photoFirst
        photoSet={page.footerPhotoSet ?? 'zakelijk'}
        hideBrand
        statement="Koffie en verder praten?"
        statementMeta="Gratis gesprek · ~1 uur"
      />
    </main>
  )
}
