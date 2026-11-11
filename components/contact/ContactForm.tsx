'use client'

import { useRef, useState, type FormEvent } from 'react'
import { PHONE_CALL, voornaamVan } from '@/lib/contact'
import { postNetlifyForm } from '@/lib/netlify-form'
import { track } from '@/lib/plausible'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [voornaam, setVoornaam] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const data = new FormData(form)
    const naam = String(data.get('naam') ?? '').trim()
    const vraag = String(data.get('vraag') ?? '').trim()
    const bereikbaar = String(data.get('bereikbaar') ?? '').trim()

    try {
      await postNetlifyForm({
        'form-name': 'vraag',
        'bot-field': String(data.get('bot-field') ?? ''),
        vraag,
        naam,
        bereikbaar,
        subject: `Vraag via de site van ${naam}`,
      })
      track('Contactformulier')
      setVoornaam(voornaamVan(naam))
      setStatus('success')
      form.reset()
      requestAnimationFrame(() => headingRef.current?.focus({ preventScroll: true }))
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <h3 className={styles.successTitle} tabIndex={-1} ref={headingRef}>
          Geregeld, {voornaam}.
        </h3>
        <p className={styles.successText}>Je hoort binnen één werkdag van ons.</p>
      </div>
    )
  }

  return (
    <form
      name="vraag"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input type="hidden" name="form-name" value="vraag" />
      <input type="hidden" name="subject" value="" />

      <p className={styles.honeypot}>
        <label>
          Laat dit veld leeg
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className={styles.field}>
        <label htmlFor="vraag-tekst">Je vraag</label>
        <textarea id="vraag-tekst" name="vraag" rows={3} required />
      </div>

      <div className={styles.field}>
        <label htmlFor="vraag-naam">Naam</label>
        <input id="vraag-naam" name="naam" type="text" required autoComplete="name" />
      </div>

      <div className={styles.field}>
        <label htmlFor="vraag-bereikbaar">Mobiel nummer of e-mail</label>
        <input id="vraag-bereikbaar" name="bereikbaar" type="text" required autoComplete="on" />
      </div>

      <p className={styles.privacy}>
        We gebruiken je gegevens alleen om je vraag te beantwoorden. Lees de{' '}
        <a href="/privacy">privacyverklaring</a>.
      </p>

      {status === 'error' ? (
        <p className={styles.error} role="alert">
          Er ging iets mis. Probeer het opnieuw of bel ons op {PHONE_CALL.display}.
        </p>
      ) : null}

      <div className={styles.actions}>
        <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Versturen…' : 'Versturen'}
        </button>
      </div>
    </form>
  )
}
