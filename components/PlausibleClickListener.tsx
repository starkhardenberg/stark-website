'use client'

import { useEffect } from 'react'
import { track } from '@/lib/plausible'

function eventForHref(href: string): string | null {
  let url: URL
  try {
    url = new URL(href, window.location.href)
  } catch {
    return null
  }

  const host = url.hostname.toLowerCase()
  if (host === 'kennismaken.starkhardenberg.nl' || host === 'bookings.cloud.microsoft') {
    return 'Kennismaking'
  }
  if (host === 'proefopdesom.starkhardenberg.nl') {
    return 'Proef op de Som'
  }
  if (host === 'wa.me' || host === 'api.whatsapp.com') {
    return 'WhatsApp'
  }
  return null
}

/** Eén luisteraar voor elke ankerlink naar kennismaken, de proef of WhatsApp. */
export default function PlausibleClickListener() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href) return
      const eventName = eventForHref(href)
      if (eventName) track(eventName)
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}

export function PlausiblePageEvent({ eventName }: { eventName: string }) {
  useEffect(() => {
    track(eventName)
  }, [eventName])

  return null
}
