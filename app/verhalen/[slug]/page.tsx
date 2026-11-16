import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import StarkImage from '@/components/StarkImage'
import StructuredData from '@/components/StructuredData'
import { buildArticleJsonLd } from '@/lib/json-ld'
import type { Inline } from '@/lib/legal-markdown'
import { storyMetadata } from '@/lib/open-graph'
import { STARK_CTA, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import { afsluiterKnop, getZichtbaarVerhaal, getZichtbareVerhalen } from '@/lib/verhalen'
import styles from '../verhalen.module.css'

type Props = { params: { slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return getZichtbareVerhalen().map((verhaal) => ({ slug: verhaal.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const verhaal = getZichtbaarVerhaal(params.slug)
  if (!verhaal) notFound()

  return storyMetadata({
    slug: verhaal.slug,
    title: `${verhaal.titel} — STARK! Hardenberg`,
    description: verhaal.beschrijving,
    imagePath: verhaal.foto,
    imageAlt: `Foto bij het verhaal van ${verhaal.verteller}`,
  })
}

function InlineText({ parts }: { parts: Inline[] }) {
  return parts.map((part, index) => {
    if (part.type === 'strong') return <strong key={index}>{part.text}</strong>
    if (part.type === 'link') {
      const external = /^https?:/.test(part.href)
      return (
        <a
          key={index}
          href={part.href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {part.text}
        </a>
      )
    }
    return <span key={index}>{part.text}</span>
  })
}

export default function VerhaalPage({ params }: Props) {
  const verhaal = getZichtbaarVerhaal(params.slug)
  if (!verhaal) notFound()

  const knop = afsluiterKnop(verhaal.soort)

  return (
    <>
      <StructuredData
        data={buildArticleJsonLd({
          headline: verhaal.titel,
          description: verhaal.beschrijving,
          datePublished: verhaal.datum,
          authorName: verhaal.verteller,
          imagePath: verhaal.foto,
          path: `/verhalen/${verhaal.slug}`,
        })}
      />
      <main className={styles.page}>
        <article className={styles.article}>
          <header className={styles.intro}>
            <h1 className="stark-h1">{verhaal.titel}</h1>
            <p className="starkSectionMeta">
              {verhaal.verteller} · {verhaal.programma} · {verhaal.plaats}
            </p>
          </header>

          <figure className={styles.photo}>
            <StarkImage
              src={verhaal.foto}
              alt={`Foto bij het verhaal van ${verhaal.verteller}`}
              fill
              sizes="(min-width: 760px) 680px, 100vw"
              className={styles.photoImg}
            />
          </figure>

          <div className={styles.prose}>
            {verhaal.blocks.map((block, index) => {
              if (block.type === 'h1' || block.type === 'h2') {
                return (
                  <h2 key={index} className="stark-h2">
                    <InlineText parts={block.inlines} />
                  </h2>
                )
              }
              if (block.type === 'h3') {
                return (
                  <h3 key={index} className="stark-h2">
                    <InlineText parts={block.inlines} />
                  </h3>
                )
              }
              if (block.type === 'ul' || block.type === 'ol') {
                const List = block.type
                return (
                  <List key={index}>
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <InlineText parts={item} />
                      </li>
                    ))}
                  </List>
                )
              }
              return (
                <p key={index}>
                  <InlineText parts={block.inlines} />
                </p>
              )
            })}
          </div>

          <figure className={styles.quote}>
            <blockquote>
              <p>{verhaal.uitspraak}</p>
            </blockquote>
            <figcaption>{verhaal.verteller}</figcaption>
          </figure>

          <div className={styles.close}>
            <a className={styles.more} href={verhaal.pagina}>
              Meer over {verhaal.programma}
            </a>
            <a
              className={`${styles.cta} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
              href={knop.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {knop.label}
            </a>
          </div>
        </article>
      </main>
      <Footer variant="dark" />
    </>
  )
}
