import styles from './QuoteCard.module.css'
import { capitalizeQuoteStart } from '@/lib/capitalizeQuoteStart'

interface QuoteCardProps {
  text: string
  name: string
  context: string
  active?: boolean
  tone?: 'light' | 'dark'
}

export default function QuoteCard({
  text,
  name,
  context,
  active = false,
  tone = 'light',
}: QuoteCardProps) {
  return (
    <figure
      className={`${styles.card} ${tone === 'dark' ? styles.cardDark : ''} ${active ? styles.cardActive : ''}`}
    >
      <blockquote className={styles.quote}>
        <p>{capitalizeQuoteStart(text)}</p>
      </blockquote>
      <figcaption className={styles.cite}>
        <span className={styles.name}>{name}</span>
        <span className={styles.context}>{context}</span>
      </figcaption>
    </figure>
  )
}
