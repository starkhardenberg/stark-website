'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import styles from './DienstPage.module.css'

const WORD = 'Momentum'

export default function HeroTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [outlineCount, setOutlineCount] = useState(0)

  useLayoutEffect(() => {
    const title = titleRef.current
    if (!title) return

    const measure = () => {
      const photo = title.closest('header')?.querySelector('img')?.parentElement
      if (!photo) return
      const photoBox = photo.getBoundingClientRect()
      const letters = title.querySelectorAll('span')
      let count = 0
      for (const letter of letters) {
        const box = letter.getBoundingClientRect()
        const fullyOnPhoto =
          box.left >= photoBox.left - 1 &&
          box.right <= photoBox.right - 1 &&
          box.top >= photoBox.top - 1 &&
          box.bottom <= photoBox.bottom + 1
        if (!fullyOnPhoto) break
        count += 1
      }
      setOutlineCount((current) => (current === count ? current : count))
    }

    measure()
    const header = title.closest('header')
    const observer = new ResizeObserver(measure)
    if (header) observer.observe(header)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <h1 ref={titleRef} className={styles.heroTitle}>
      {WORD.split('').map((char, index) => (
        <span key={index} className={index < outlineCount ? styles.heroTitleOutline : undefined}>
          {char}
        </span>
      ))}
    </h1>
  )
}
