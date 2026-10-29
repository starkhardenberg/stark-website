'use client'

import { useState } from 'react'
import StarkImage from '@/components/StarkImage'
import { capitalizeQuoteStart } from '@/lib/capitalizeQuoteStart'
import PortraitFrame from './PortraitFrame'
import { TEAM, col1, col2, col3 } from './team-members'
import styles from './team.module.css'

function finePointerHover() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

export default function TeamInteractiveGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const itemClass = (id: number) => {
    if (hoveredId === null) return ''
    return hoveredId === id ? styles.active : styles.inactive
  }

  const enter = (id: number) => {
    if (finePointerHover()) setHoveredId(id)
  }

  const leave = () => {
    if (finePointerHover()) setHoveredId(null)
  }

  const pick = (id: number) => {
    setHoveredId(id)
  }

  const columns = [col1, col2, col3]

  return (
    <section className={styles.teamSection} aria-labelledby="team-grid-heading">
      <div className={styles.teamSectionInner}>
        <h2 id="team-grid-heading" className={styles.teamGridTitle}>
          <span className={styles.teamGridTitleLine}>Je loopt ze hier</span>
          <span className={styles.teamGridTitleLine}>tegen het lijf</span>
        </h2>
        <div className={styles.teamLayout}>
          <div className={styles.photoGrid}>
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`${styles.col} ${colIdx === 0 ? styles.col1 : ''} ${colIdx === 1 ? styles.col2 : ''} ${colIdx === 2 ? styles.col3 : ''}`}
            >
              {col.map((member) => (
                <div
                  key={member.id}
                  className={`${styles.photoItem} ${itemClass(member.id)}`}
                  data-stark-hover=""
                  onMouseEnter={() => enter(member.id)}
                  onMouseLeave={leave}
                  onClick={() => pick(member.id)}
                >
                  <div className={`${styles.photoMedia}${member.photoUnfiltered ? ` ${styles.photoMediaRaw}` : ''}`}>
                    <StarkImage
                      src={member.photo}
                      alt={member.name}
                      fill
                      hoverColor
                      unaltered={member.photoUnfiltered}
                      unoptimized={member.photoUnfiltered}
                      className={`${styles.photoImg}${member.photoUnfiltered ? ` ${styles.photoImgRaw}` : ''}`}
                      style={{ objectPosition: member.objectPosition }}
                      sizes="(min-width:900px) 360px, 33vw"
                    />
                    <PortraitFrame memberId={member.id} />
                    <span className={styles.photoName}>{member.name}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
          </div>

          <div className={styles.nameList}>
          {TEAM.map((member, i) => (
            <div
              key={member.id}
              className={`${styles.nameItem} ${itemClass(member.id)}`}
              onMouseEnter={() => enter(member.id)}
              onMouseLeave={leave}
              onClick={() => pick(member.id)}
            >
              <span className={styles.nameNum}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <div className={styles.memberName}>{member.name}</div>
                <div className={styles.memberRole}>{member.role}</div>
                <p className={styles.memberQuote}>&ldquo;{capitalizeQuoteStart(member.quote)}&rdquo;</p>
                {member.id === 2 ? (
                  <p className={styles.originBody}>
                    <a
                      href="https://www.destentor.nl/hardenberg/yvonne-46-wil-voorbeeld-zijn-voor-dochter-en-knokt-zich-van-sofa-naar-de-top-ik-ben-weer-happy~a32b1891/"
                      className={styles.originInlineLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      De Stentor
                    </a>
                    ,{' '}
                    <a
                      href="https://www.oost.nl/nieuws/2258664/is-yvonne-uit-hardenberg-de-sterkste-van-nederland-eigenlijk-had-ik-er-helemaal-geen-zin-in"
                      className={styles.originInlineLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RTV Oost
                    </a>{' '}
                    en{' '}
                    <a
                      href="https://www.detoren.net/nieuws/hardenberg/82092/yvonne-alards-sterkste-vrouw-van-nederland"
                      className={styles.originInlineLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      De Toren
                    </a>{' '}
                    schreven over haar deelname aan het NK Sterkste Vrouw van Nederland.
                  </p>
                ) : null}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
