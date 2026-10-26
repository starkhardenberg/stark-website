'use client'

import StarkImage from '@/components/StarkImage'
import { capitalizeQuoteStart } from '@/lib/capitalizeQuoteStart'
import type { PortraitPerson } from '@/components/testimonials/portrait-quotes'
import PortraitTile from '@/components/testimonials/PortraitTile'
import { useQuoteRotation } from '@/components/testimonials/useQuoteRotation'
import tileStyles from '@/components/testimonials/PortraitQuoteStage.module.css'
import styles from './DienstPage.module.css'

export default function DienstQuoteRoster({
  tone,
  people,
}: {
  tone: 'light' | 'dark'
  people: readonly PortraitPerson[]
}) {
  const { active, select, stageProps } = useQuoteRotation(people)
  const onLight = tone === 'light'
  const quoted = people.filter((person) => person.text)

  return (
    <section
      className={onLight ? `${styles.proof} ${styles.proofLight}` : styles.proof}
      aria-label="Ervaring van een deelnemer"
      {...stageProps}
    >
      <div className={styles.proofGrid}>
        <div className={styles.proofPhotoWrap}>
          <StarkImage
            className={styles.proofPhoto}
            src={active.image}
            alt=""
            fill
            unaltered
            quality={85}
            sizes="(min-width: 800px) 40vw, 100vw"
            style={{ objectPosition: active.imagePosition ?? 'center 18%' }}
          />
        </div>
        <div>
          <figure className={tileStyles.dienstCopy}>
            <blockquote className={tileStyles.dienstQuote}>
              {quoted.map((person) => {
                const isActive = person.id === active.id
                return (
                  <p key={person.id} className={isActive ? undefined : tileStyles.hold} aria-hidden={isActive ? undefined : true}>
                    {capitalizeQuoteStart(person.text)}
                  </p>
                )
              })}
            </blockquote>
            <figcaption className={tileStyles.dienstCite}>
              {quoted.map((person) => {
                const isActive = person.id === active.id
                const line = person.context ? `${person.name} · ${person.context}` : person.name
                return (
                  <span key={person.id} className={isActive ? undefined : tileStyles.hold} aria-hidden={isActive ? undefined : true}>
                    {line}
                  </span>
                )
              })}
            </figcaption>
          </figure>
          <ul
            className={`${tileStyles.strip} ${tileStyles.stripInCopy}`}
            style={{ '--portrait-count': people.length } as React.CSSProperties}
          >
            {people.map((person, index) => (
              <li key={person.id}>
                <PortraitTile
                  person={person}
                  index={index}
                  active={person.id === active.id}
                  onLight={onLight}
                  onSelect={() => select(person.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
