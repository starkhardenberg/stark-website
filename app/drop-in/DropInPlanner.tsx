'use client'

import { useEffect, useState, type SyntheticEvent } from 'react'
import { DROPIN_PLANNER_URL } from '@/lib/drop-in'
import styles from './drop-in.module.css'

const FALLBACK_MS = 30000

function isPlannerFrame(frame: HTMLIFrameElement) {
  return frame.src.includes('dropinplanner')
}

export default function DropInPlanner() {
  const [visible, setVisible] = useState(true)
  const [src, setSrc] = useState<string | undefined>(undefined)

  useEffect(() => {
    setSrc(DROPIN_PLANNER_URL)
    const timer = window.setTimeout(() => setVisible(false), FALLBACK_MS)
    return () => window.clearTimeout(timer)
  }, [])

  function onLoad(event: SyntheticEvent<HTMLIFrameElement>) {
    if (!isPlannerFrame(event.currentTarget)) return
    setVisible(false)
  }

  return (
    <div className={styles.frameWrap}>
      <iframe
        className={styles.frame}
        src={src}
        title="Drop-in planner"
        allow="payment"
        onLoad={onLoad}
      />
      {visible ? (
        <p className={styles.loading} role="status">
          <span className={styles.loadingNote}>
            <span className={styles.spinner} aria-hidden="true" />
            De planner laadt, een moment...
          </span>
        </p>
      ) : null}
    </div>
  )
}
