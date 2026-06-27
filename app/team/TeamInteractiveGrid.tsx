'use client'

import { useState } from 'react'
import Image from 'next/image'
import { capitalizeQuoteStart } from '@/lib/capitalizeQuoteStart'
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
    <section className={styles.teamSection}>
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
                  onMouseEnter={() => setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className={styles.photoImg}
                    style={{ objectPosition: member.objectPosition }}
                    sizes="(min-width:900px) 18vw, 33vw"
                  />
                  <span className={styles.photoName}>{member.name}</span>
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
    </section>
  )
}
