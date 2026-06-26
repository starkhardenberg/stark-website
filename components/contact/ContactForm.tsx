'use client'

import { useEffect, useState, type FormEvent } from 'react'
import {
  CONTACT_ONDERWERP_OPTIONS,
  CONTACT_ONTDEKT_ANDERS,
  CONTACT_ONTDEKT_VIA_LID,
  CONTACT_ONTDEKT_OPTIONS,
  PHONE_CALL,
  type ContactOnderwerp,
  type ContactOntdekt,
} from '@/lib/contact'
import styles from './ContactForm.module.css'

type Props = {
  initialOnderwerp: ContactOnderwerp
}

function encodeFormBody(data: Record<string, string>) {
  return new URLSearchParams(data).toString()
}

export default function ContactForm({ initialOnderwerp }: Props) {
  const [onderwerp, setOnderwerp] = useState<ContactOnderwerp>(initialOnderwerp)
  const [ontdekt, setOntdekt] = useState<ContactOntdekt | ''>('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const vraagtNaamVia = ontdekt === CONTACT_ONTDEKT_VIA_LID
  const vraagtAndersToelichting = ontdekt === CONTACT_ONTDEKT_ANDERS

  useEffect(() => {
    setOnderwerp(initialOnderwerp)
  }, [initialOnderwerp])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const data = new FormData(form)

    const body = encodeFormBody({
      'form-name': 'contact',
      'bot-field': String(data.get('bot-field') ?? ''),
      naam: String(data.get('naam') ?? ''),
      email: String(data.get('email') ?? ''),
      telefoon: String(data.get('telefoon') ?? ''),
      ontdekt: String(data.get('ontdekt') ?? ''),
      ontdekt_via_naam: String(data.get('ontdekt_via_naam') ?? ''),
      ontdekt_anders: String(data.get('ontdekt_anders') ?? ''),
      onderwerp: String(data.get('onderwerp') ?? ''),
      bericht: String(data.get('bericht') ?? ''),
    })

    try {
      const res = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })

      if (!res.ok) throw new Error('submit failed')
      setStatus('success')
      form.reset()
      setOnderwerp(initialOnderwerp)
      setOntdekt('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <p className={styles.successTitle}>Bedankt.</p>
        <p className={styles.successText}>
          We nemen binnen uiterlijk 2 werkdagen contact met je op. Liever direct bellen?{' '}
          {PHONE_CALL.display}.
        </p>
        <a href="/" className={styles.successLink}>
          Terug naar home
        </a>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={`${styles.form} ${styles.wrap}`}
    >
      <input type="hidden" name="form-name" value="contact" />

      <p className={styles.honeypot}>
        <label>
          Laat dit veld leeg
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className={styles.field}>
        <label htmlFor="naam">Naam</label>
        <input id="naam" name="naam" type="text" required autoComplete="name" />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>

      <div className={styles.field}>
        <label htmlFor="telefoon">Telefoon</label>
        <input
          id="telefoon"
          name="telefoon"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="ontdekt">Hoe heb je ons ontdekt?</label>
        <select
          id="ontdekt"
          name="ontdekt"
          required
          value={ontdekt}
          onChange={(e) => setOntdekt(e.target.value as ContactOntdekt | '')}
        >
          <option value="" disabled>
            Kies een optie
          </option>
          {CONTACT_ONTDEKT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {vraagtNaamVia && (
        <div className={`${styles.field} ${styles.fieldNested}`}>
          <label htmlFor="ontdekt_via_naam">Wie ken je bij STARK!?</label>
          <input
            id="ontdekt_via_naam"
            name="ontdekt_via_naam"
            type="text"
            required
            autoComplete="name"
            placeholder="Voornaam en achternaam"
          />
        </div>
      )}

      {vraagtAndersToelichting && (
        <div className={`${styles.field} ${styles.fieldNested}`}>
          <label htmlFor="ontdekt_anders">Hoe precies?</label>
          <input
            id="ontdekt_anders"
            name="ontdekt_anders"
            type="text"
            required
            placeholder="Bijv. via een flyer, podcast of buurthuis"
          />
        </div>
      )}

      <div className={styles.field}>
        <label htmlFor="onderwerp">Waar ben je naar op zoek?</label>
        <select
          id="onderwerp"
          name="onderwerp"
          required
          value={onderwerp}
          onChange={(e) => setOnderwerp(e.target.value as ContactOnderwerp)}
        >
          {CONTACT_ONDERWERP_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="bericht">
          Bericht <span className={styles.optional}>(optioneel)</span>
        </label>
        <textarea id="bericht" name="bericht" rows={4} />
      </div>

      <p className={styles.privacy}>
        We gebruiken je gegevens alleen om contact met je op te nemen.
      </p>

      {status === 'error' && (
        <p className={styles.error} role="alert">
          Er ging iets mis. Probeer het opnieuw of bel ons op {PHONE_CALL.display}.
        </p>
      )}

      <div className={styles.actions}>
        <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Versturen…' : 'Verstuur je vraag'}
        </button>
        <a href="/#aanbod" className={styles.back}>
          ← Terug naar home
        </a>
      </div>
    </form>
  )
}
