'use client'

import StarkImage from '@/components/StarkImage'
import { capitalizeQuoteStart } from '@/lib/capitalizeQuoteStart'
import type { PortraitPerson } from './portrait-quotes'
import PortraitTile from './PortraitTile'
import { useQuoteRotation } from './useQuoteRotation'
import sectionStyles from './TestimonialsSection.module.css'
import styles from './PortraitQuoteStage.module.css'

export default function PortraitQuoteStage({
  people,
  showRoute = false,
}: {
  people: readonly PortraitPerson[]
  showRoute?: boolean
}) {
  const { active, select, stageProps } = useQuoteRotation(people)
  const contain = active.fit === 'contain'
  const studio = !contain && active.studio !== false

  return (
    <div className={styles.stage} {...stageProps}>
      <figure className={`${sectionStyles.heroQuote}${studio ? ` ${sectionStyles.heroQuoteDark}` : ''}`}>
        <div className={sectionStyles.heroImgWrap} aria-hidden="true">
          <StarkImage
            key={active.id}
            src={active.image}
            alt=""
            fill
            unaltered
            unoptimized
            priority={active.id === people[0].id}
            sizes="(min-width: 900px) 48vw, 100vw"
            className={sectionStyles.heroImg}
            style={
              contain
                ? { objectFit: 'contain', objectPosition: 'center center', transform: 'none' }
                : studio || !active.imagePosition
                  ? undefined
                  : { objectPosition: active.imagePosition }
            }
          />
        </div>
        <div className={sectionStyles.heroContent}>
          <blockquote className={sectionStyles.heroText}>
            {people.map((person) => {
              const isActive = person.id === active.id
              return (
                <p key={person.id} aria-hidden={isActive ? undefined : true} className={isActive ? undefined : styles.quoteIdle}>
                  {capitalizeQuoteStart(person.text)}
                </p>
              )
            })}
          </blockquote>
          <figcaption className={sectionStyles.heroCite}>
            <span className={sectionStyles.heroName}>{active.name}</span>
            {active.context ? <span className={sectionStyles.heroContext}>{active.context}</span> : null}
          </figcaption>
        </div>
      </figure>

      <ul className={styles.strip} style={{ '--portrait-count': people.length } as React.CSSProperties}>
        {people.map((person, index) => (
          <li key={person.id}>
            <PortraitTile
              person={person}
              index={index}
              active={person.id === active.id}
              onSelect={() => select(person.id)}
              showRoute={showRoute}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
