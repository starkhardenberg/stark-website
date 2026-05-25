import styles from './QuoteCard.module.css'

interface QuoteCardProps {
  text: string
  name: string
  context: string
  active?: boolean
}

export default function QuoteCard({ text, name, context, active = false }: QuoteCardProps) {
  return (
    <figure className={`${styles.card} ${active ? styles.cardActive : ''}`}>
      <blockquote className={styles.quote}>
        <p>{text}</p>
      </blockquote>
      <figcaption className={styles.cite}>
        <span className={styles.name}>{name}</span>
        <span className={styles.context}>{context}</span>
      </figcaption>
    </figure>
  )
}
