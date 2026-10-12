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
  /** Light = tekst op een lichte band. Dark = tekst op een donkere band. */
  tone?: 'dark' | 'light'
  /** Landing = Bronz. Dienst = de grotere Barlow-vragen. */
  variant?: 'landing' | 'dienst'
  /** Index die bij laden open staat. Standaard alles dicht. */
  initialOpen?: number | null
}

export default function FaqList({
  items,
  tone = 'dark',
  variant = 'dienst',
  initialOpen = null,
}: FaqListProps) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpen)

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <div
      className={`${styles.list}${tone === 'light' ? ` ${styles.listLight}` : ''}${
        variant === 'landing' ? ` ${styles.listLanding}` : ''
      }`}
    >
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
