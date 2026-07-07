import type { RoosterGroup } from '@/lib/trainen-rooster'
import styles from './TrainenRoosterSection.module.css'

type Props = {
  group: RoosterGroup
}

export default function TrainenRoosterGroupCard({ group }: Props) {
  return (
    <article className={styles.card} aria-labelledby={`rooster-${group.id}-title`}>
      <h3 id={`rooster-${group.id}-title`} className={styles.cardTitle}>
        {group.title}
      </h3>
      {group.lead ? <p className={styles.cardLead}>{group.lead}</p> : null}
      {group.days.map((day) => (
        <div key={`${group.id}-${day.day}`} className={styles.dayBlock}>
          <p className={styles.dayName}>{day.day}</p>
          <ul className={styles.slotList}>
            {day.slots.map((slot) => (
              <li key={`${day.day}-${slot.time}-${slot.label}`} className={styles.slot}>
                <span className={styles.slotTime}>{slot.time}</span>
                <span className={styles.slotLabel}>{slot.label}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  )
}
