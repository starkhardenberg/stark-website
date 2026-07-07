'use client'

import { useState } from 'react'
import { TRAINEN_ROOSTER_GROUPS } from '@/lib/trainen-rooster'
import TrainenRoosterGroupCard from './TrainenRoosterGroupCard'
import styles from './TrainenRoosterSection.module.css'

const DEFAULT_GROUP_ID = TRAINEN_ROOSTER_GROUPS[0]?.id ?? 'volwassenen'

const SIDE_GROUP_IDS = ['zilverfitness', 'teens', 'kids'] as const

function getGroupById(id: string) {
  return TRAINEN_ROOSTER_GROUPS.find((group) => group.id === id)
}

export default function TrainenRoosterSection() {
  const [activeGroupId, setActiveGroupId] = useState(DEFAULT_GROUP_ID)
  const activeGroup = getGroupById(activeGroupId) ?? TRAINEN_ROOSTER_GROUPS[0]
  const volwassenenGroup = getGroupById('volwassenen')
  const sideGroups = SIDE_GROUP_IDS.map((id) => getGroupById(id)).filter(
    (group): group is NonNullable<typeof group> => group != null,
  )

  return (
    <section className={styles.section} id="rooster" aria-labelledby="trainen-rooster-heading">
      <div className={styles.inner}>
        <h2 id="trainen-rooster-heading" className={styles.title}>
          Wanneer train je?
        </h2>
        <p className={styles.intro}>
          Vaste momenten, kleine groepen. Je meldt je aan via de app voor de les die bij je past.
        </p>

        <div className={styles.mobilePicker}>
          <label htmlFor="rooster-group-select" className={styles.pickerLabel}>
            Welke groep?
          </label>
          <select
            id="rooster-group-select"
            className={styles.pickerSelect}
            value={activeGroupId}
            onChange={(e) => setActiveGroupId(e.target.value)}
          >
            {TRAINEN_ROOSTER_GROUPS.map((group) => (
              <option key={group.id} value={group.id}>
                {group.title}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.mobileCard} aria-live="polite" aria-atomic="true">
          {activeGroup ? <TrainenRoosterGroupCard group={activeGroup} /> : null}
        </div>

        <div className={styles.columns}>
          {volwassenenGroup ? (
            <div className={styles.colMain}>
              <TrainenRoosterGroupCard group={volwassenenGroup} />
            </div>
          ) : null}
          <div className={styles.colSide}>
            {sideGroups.map((group) => (
              <TrainenRoosterGroupCard key={group.id} group={group} />
            ))}
          </div>
        </div>

        <p className={styles.foot}>
          Rooster kan incidenteel wijzigen. In de SportBit app zie je altijd de actuele planning.
        </p>
      </div>
    </section>
  )
}
