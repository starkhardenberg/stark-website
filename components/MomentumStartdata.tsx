'use client'

import { useEffect, useState } from 'react'
import {
  formatCoachingLabel,
  formatStartLabel,
  amsterdamTodayIso,
  visibleMomentumStarts,
} from '@/content/momentum-startdata'
import styles from '@/components/dienst/DienstPage.module.css'

type Props = {
  variant: 'list' | 'next'
}

export default function MomentumStartdata({ variant }: Props) {
  const [today, setToday] = useState<string | null>(null)

  useEffect(() => {
    setToday(amsterdamTodayIso())
  }, [])

  if (today === null) {
    if (variant === 'list') return <ul className={styles.list} />
    return null
  }

  const upcoming = visibleMomentumStarts(today)

  if (variant === 'next') {
    const next = upcoming[0]
    if (!next) return <>Nieuwe data volgen.</>
    return <>{formatStartLabel(next.start)}.</>
  }

  if (upcoming.length === 0) {
    return (
      <ul className={styles.list}>
        <li>Nieuwe data volgen.</li>
      </ul>
    )
  }

  return (
    <ul className={styles.list}>
      {upcoming.map((item, index) =>
        index === 0 ? (
          <li key={item.start}>
            <b>{formatStartLabel(item.start)}</b>
            <span className={styles.small}>eerstvolgende start</span>
          </li>
        ) : (
          <li key={item.start}>
            <b>{formatStartLabel(item.start)}</b> · groep {item.groep}
            <span className={styles.small}>eerste coachingsessie {formatCoachingLabel(item.start)}</span>
          </li>
        ),
      )}
    </ul>
  )
}
