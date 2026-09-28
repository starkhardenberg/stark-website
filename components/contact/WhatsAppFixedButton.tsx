'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import {
  hrefWhatsAppKennismaking,
  whatsappDeepLink,
} from '@/lib/contact'
import styles from './WhatsAppFixedButton.module.css'

const BASE_OFFSET = 20
const FOOTER_GAP = 12

function isMobileDevice() {
  if (typeof navigator === 'undefined') return false
  return /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export default function WhatsAppFixedButton() {
  const [bottomOffset, setBottomOffset] = useState(BASE_OFFSET)

  useEffect(() => {
    const updatePosition = () => {
      const footer = document.querySelector('footer')
      if (!footer) {
        setBottomOffset(BASE_OFFSET)
        return
      }

      const rect = footer.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        setBottomOffset(window.innerHeight - rect.top + FOOTER_GAP)
        return
      }

      setBottomOffset(BASE_OFFSET)
    }

    updatePosition()
    window.addEventListener('scroll', updatePosition, { passive: true })
    window.addEventListener('resize', updatePosition)

    return () => {
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [])

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isMobileDevice()) return

    event.preventDefault()
    window.location.href = whatsappDeepLink()

    window.setTimeout(() => {
      if (document.visibilityState === 'visible') {
        window.location.href = hrefWhatsAppKennismaking
      }
    }, 1200)
  }

  return (
    <a
      href={hrefWhatsAppKennismaking}
      className={styles.fab}
      style={{ bottom: bottomOffset }}
      onClick={handleClick}
      rel="noopener noreferrer"
      aria-label="App ons even via WhatsApp"
      title="App ons even"
    >
      <WhatsAppIcon className={styles.icon} />
      <span className={styles.labelFull}>App ons even</span>
    </a>
  )
}
