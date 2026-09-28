import { capitalizeQuoteStart } from '@/lib/capitalizeQuoteStart'
import type { Testimonial } from './types'
import styles from './TestimonialsGrid.module.css'

type Props = {
  items: Testimonial[]
  tone?: 'light' | 'dark'
}

export default function TestimonialsGrid({ items, tone = 'light' }: Props) {
  if (items.length === 0) return null

  const gridClass = tone === 'dark' ? `${styles.grid} ${styles.gridDark}` : styles.grid

  return (
    <div className={gridClass} role="list">
      {items.map((item) => (
        <figure key={item.id} className={styles.item} role="listitem">
          <blockquote className={styles.text}>
            <p>{capitalizeQuoteStart(item.text)}</p>
          </blockquote>
          <figcaption className={styles.cite}>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.context}>{item.context}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
