import styles from './QuoteCard.module.css'

interface QuoteCardProps {
  text: string
  name: string
  context: string
}

export default function QuoteCard({ text, name, context }: QuoteCardProps) {
  return (
    <figure className={styles.card}>
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
