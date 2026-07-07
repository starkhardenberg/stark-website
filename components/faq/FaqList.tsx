'use client'

import { useId, useState, type ReactNode } from 'react'
import styles from './FaqList.module.css'

export type FaqItem = {
  question: string
  answer: ReactNode
  /** Platte tekst voor JSON-LD als answer JSX is (links e.d.). */
  schemaAnswer?: string
}

type FaqListProps = {
  items: readonly FaqItem[]
}

export default function FaqList({ items }: FaqListProps) {
  const baseId = useId()
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  function toggle(index: number) {
    setOpenItems((current) => {
      const next = new Set(current)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const isOpen = openItems.has(index)
        const answerId = `${baseId}-answer-${index}`

        return (
          <div key={item.question} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
            <button
              type="button"
              className={styles.question}
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => toggle(index)}
            >
              <span className={styles.questionText}>{item.question}</span>
              <span className={styles.indicator} aria-hidden>
                →
              </span>
            </button>
            <div id={answerId} className={styles.answerWrap} role="region" aria-hidden={!isOpen}>
              <div className={styles.answerInner}>
                <div className={styles.answer}>{item.answer}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
