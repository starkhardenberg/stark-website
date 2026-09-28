'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { TRAINEN_ROOSTER_GROUPS } from '@/lib/trainen-rooster'
import TrainenRoosterGroupCard from './TrainenRoosterGroupCard'
import styles from './TrainenRoosterModal.module.css'

type Props = {
  open: boolean
  onClose: () => void
}

export default function TrainenRoosterModal({ open, onClose }: Props) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const [mounted, setMounted] = useState(false)
  const [activeGroupId, setActiveGroupId] = useState(
    TRAINEN_ROOSTER_GROUPS[0]?.id ?? 'volwassenen',
  )
  const activeGroup =
    TRAINEN_ROOSTER_GROUPS.find((group) => group.id === activeGroupId) ??
    TRAINEN_ROOSTER_GROUPS[0]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open || !mounted) return null

  return createPortal(
    <div className={styles.backdrop} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          <div>
            <h2 id={titleId} className={styles.title}>
              Weekrooster
            </h2>
            <p className={styles.lead}>
              Vaste momenten, kleine groepen. Actueel rooster altijd in de SportBit-app.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Rooster sluiten"
          >
            <span aria-hidden>×</span>
          </button>
        </header>

        <div className={styles.picker}>
          <label htmlFor="rooster-modal-group" className={styles.pickerLabel}>
            Groep
          </label>
          <select
            id="rooster-modal-group"
            className={styles.pickerSelect}
            value={activeGroupId}
            onChange={(event) => setActiveGroupId(event.target.value)}
          >
            {TRAINEN_ROOSTER_GROUPS.map((group) => (
              <option key={group.id} value={group.id}>
                {group.title}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.body}>
          {activeGroup ? <TrainenRoosterGroupCard group={activeGroup} /> : null}
        </div>
      </div>
    </div>,
    document.body,
  )
}
