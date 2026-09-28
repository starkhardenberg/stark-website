import Uitroepteken from '@/components/Uitroepteken'
import { capitalizeQuoteStart } from '@/lib/capitalizeQuoteStart'
import type { Testimonial } from './types'
import styles from './TestimonialPoster.module.css'

type Props = {
  item: Testimonial
}

export default function TestimonialPoster({ item }: Props) {
  return (
    <section className={styles.poster} aria-label={`Quote van ${item.name}`}>
      <blockquote className={styles.quote}>
        <p>
          <Uitroepteken variant="bullet" className={styles.mark} />
          <span>{capitalizeQuoteStart(item.text)}</span>
        </p>
      </blockquote>
      <footer className={styles.cite}>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.context}>{item.context}</span>
      </footer>
    </section>
  )
}
