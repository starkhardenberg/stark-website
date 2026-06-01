'use client'

import type { MouseEvent, ReactNode } from 'react'
import {
  hrefWhatsAppKennismaking,
  whatsappDeepLink,
} from '@/lib/contact'

type Props = {
  className?: string
  children: ReactNode
}

function isMobileDevice() {
  if (typeof navigator === 'undefined') return false
  return /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export default function WhatsAppLink({ className, children }: Props) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isMobileDevice()) return

    event.preventDefault()
    const deep = whatsappDeepLink()
    window.location.href = deep

    // Als de app niet opent, na korte tijd alsnog de web-URL proberen
    window.setTimeout(() => {
      if (document.visibilityState === 'visible') {
        window.location.href = hrefWhatsAppKennismaking
      }
    }, 1200)
  }

  return (
    <a
      href={hrefWhatsAppKennismaking}
      className={className}
      onClick={handleClick}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
