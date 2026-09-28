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
  /** Standaard donker (landingspagina's). Light = off-achtergrond. */
  tone?: 'dark' | 'light'
  /** Index die bij laden open staat. Standaard alles dicht. */
  initialOpen?: number | null
}

export default function FaqList({ items, tone = 'dark', initialOpen = null }: FaqListProps) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpen)

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <div className={`${styles.list}${tone === 'light' ? ` ${styles.listLight}` : ''}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
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
