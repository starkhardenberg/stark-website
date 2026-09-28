'use client'

import { useState } from 'react'
import StarkImage from '@/components/StarkImage'
import { capitalizeQuoteStart } from '@/lib/capitalizeQuoteStart'
import PortraitFrame from './PortraitFrame'
import { TEAM, col1, col2, col3 } from './team-members'
import styles from './team.module.css'

export default function TeamInteractiveGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const itemClass = (id: number) => {
    if (hoveredId === null) return ''
    return hoveredId === id ? styles.active : styles.inactive
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
                  onMouseEnter={() => setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId(null)}
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
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <span className={styles.nameNum}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <div className={styles.memberName}>{member.name}</div>
                <div className={styles.memberRole}>{member.role}</div>
                <p className={styles.memberQuote}>&ldquo;{capitalizeQuoteStart(member.quote)}&rdquo;</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
