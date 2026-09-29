'use client'

import { useEffect, useState } from 'react'
import { STARK_CTA, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import { getSiteUrl } from '@/lib/site-seo'
import { L1O1_WERKGEVER } from './leiderschap-1-op-1'
import dienst from './DienstPage.module.css'
import styles from './LeiderschapPage.module.css'

const PAGE_PATH = '/zakelijk/leiderschap-1-op-1'

export function werkgeverPlainText(pageUrl: string) {
  const items = L1O1_WERKGEVER.items.map((item) => `${item.label}\n${item.text}`).join('\n\n')
  return `${L1O1_WERKGEVER.heading}\n\n${items}\n\n${L1O1_WERKGEVER.footer} ${pageUrl}`
}

export default function WerkgeverBlok() {
  const pageUrl = `${getSiteUrl()}${PAGE_PATH}`
  const plain = werkgeverPlainText(pageUrl)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(plain)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const mailto = `mailto:?subject=${encodeURIComponent(L1O1_WERKGEVER.mailSubject)}&body=${encodeURIComponent(plain)}`

  return (
    <>
      <div className={styles.sheet}>
        <h3 className={styles.sheetHeading}>{L1O1_WERKGEVER.heading}</h3>
        {L1O1_WERKGEVER.items.map((item) => (
          <div key={item.label}>
            <h4 className={styles.itemLabel}>{item.label}</h4>
            <p className={styles.itemText}>{item.text}</p>
          </div>
        ))}
        <p className={styles.sheetFooter}>
          {L1O1_WERKGEVER.footer} {pageUrl}
        </p>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={`${dienst.button} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
          onClick={copy}
        >
          {copied ? L1O1_WERKGEVER.copiedLabel : L1O1_WERKGEVER.copyLabel}
        </button>
        <a className={`${dienst.button} ${STARK_CTA} ${STARK_CTA_PRIMARY}`} href={mailto}>
          {L1O1_WERKGEVER.mailLabel}
        </a>
      </div>
    </>
  )
}
