'use client'

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { toBelLink, voornaamVan } from '@/lib/contact'
import { postNetlifyForm } from '@/lib/netlify-form'
import { track } from '@/lib/plausible'
import { STARK_CTA, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import {
  PROEF_ANSWERS,
  ROUTE_BOOKING_URL,
  ROUTE_PROEF_URL,
  ROUTES,
  routeWhatsAppUrl,
  type RouteChoice,
} from './route-kiezer'
import styles from './RouteKiezer.module.css'

type Step = 1 | 2 | 3

function StepPane({
  active,
  children,
}: {
  active: boolean
  children: ReactNode
}) {
  return (
    <div
      className={active ? `${styles.step} ${styles.stepActive}` : styles.step}
      aria-hidden={active ? undefined : true}
      ref={(node) => {
        if (!node) return
        node.toggleAttribute('inert', !active)
      }}
    >
      {children}
    </div>
  )
}

function Progress({ step, onBack }: { step: Step; onBack: () => void }) {
  return (
    <>
      <div className={styles.progressHead}>
        {step > 1 ? (
          <button type="button" className={styles.back} onClick={onBack}>
            Terug
          </button>
        ) : (
          <span />
        )}
        <span className={styles.stepCount}>Stap {step} van 3</span>
      </div>
      <div
        className={styles.track}
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={3}
        aria-valuenow={step}
        aria-valuetext={`Stap ${step} van 3`}
      >
        <span className={styles.trackFill} style={{ width: `${(step / 3) * 100}%` }} />
      </div>
    </>
  )
}

function AnswerButton({
  title,
  hint,
  chosen,
  onChoose,
}: {
  title: string
  hint?: string
  chosen: boolean
  onChoose: () => void
}) {
  return (
    <button
      type="button"
      className={`${styles.answer}${chosen ? ` ${styles.answerChosen}` : ''}`}
      onClick={onChoose}
      aria-pressed={chosen}
    >
      <span className={styles.answerCopy}>
        <span className={styles.answerTitle}>{title}</span>
        {hint ? <span className={styles.answerHint}>{hint}</span> : null}
      </span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </button>
  )
}

export default function RouteKiezer() {
  const rootRef = useRef<HTMLDivElement>(null)
  const shouldFocus = useRef(false)
  const [step, setStep] = useState<Step>(1)
  const [route, setRoute] = useState<RouteChoice | null>(null)
  const [answer, setAnswer] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')
  const [voornaam, setVoornaam] = useState('')

  useEffect(() => {
    if (!shouldFocus.current) return
    const heading = rootRef.current?.querySelector<HTMLElement>(
      `.${styles.stepActive} [data-step-heading]`,
    )
    heading?.focus({ preventScroll: true })
  }, [step, status])

  function focusNext() {
    shouldFocus.current = true
  }

  function chooseRoute(next: RouteChoice) {
    setRoute(next)
    setAnswer('')
    setStep(2)
    focusNext()
    track('Routekiezer stap 1', { route: next.title })
  }

  function chooseAnswer(next: string) {
    setAnswer(next)
    setStep(3)
    focusNext()
    track('Routekiezer stap 2', { antwoord: next })
  }

  function goBack() {
    setStatus('idle')
    setStep((current) => (current > 1 ? ((current - 1) as Step) : current))
    focusNext()
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!route) return
    setStatus('submitting')

    const form = event.currentTarget
    const data = new FormData(form)
    const naam = String(data.get('naam') ?? '').trim()
    const bedrijf = String(data.get('bedrijf') ?? '').trim()
    const nummer = String(data.get('nummer') ?? '').trim()

    try {
      await postNetlifyForm({
        'form-name': 'terugbelverzoek',
        'bot-field': String(data.get('bot-field') ?? ''),
        naam,
        bedrijf,
        nummer,
        keuze_stap1: route.title,
        keuze_stap2: answer,
        subject: `Terugbelverzoek van ${naam} (${bedrijf})`,
        bel_link: toBelLink(nummer),
      })
      setVoornaam(voornaamVan(naam))
      setStatus('done')
      focusNext()
      track('Routekiezer terugbelverzoek verstuurd')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const particulier = route?.kind === 'particulier'
  const bedrijf = route?.kind === 'bedrijf'
  const showProef = PROEF_ANSWERS.has(answer)

  return (
    <div className={styles.stage} ref={rootRef}>
      <StepPane active={step === 1 && status !== 'done'}>
        <Progress step={1} onBack={goBack} />
        <h3 className={styles.question} tabIndex={-1} data-step-heading id="route-vraag-1">
          Waar kom je voor?
        </h3>
        <div className={styles.answers} role="group" aria-labelledby="route-vraag-1">
          {ROUTES.map((item) => (
            <AnswerButton
              key={item.id}
              title={item.title}
              hint={item.hint}
              chosen={route?.id === item.id}
              onChoose={() => chooseRoute(item)}
            />
          ))}
        </div>
      </StepPane>

      <StepPane active={step === 2 && status !== 'done' && route !== null}>
        {route ? (
          <>
            <Progress step={2} onBack={goBack} />
            <h3 className={styles.question} tabIndex={-1} data-step-heading id="route-vraag-2">
              {route.question}
            </h3>
            <div className={styles.answers} role="group" aria-labelledby="route-vraag-2">
              {route.answers.map((item) => (
                <AnswerButton
                  key={item}
                  title={item}
                  chosen={answer === item}
                  onChoose={() => chooseAnswer(item)}
                />
              ))}
            </div>
          </>
        ) : null}
      </StepPane>

      <StepPane active={step === 3 && status !== 'done' && particulier && route !== null}>
        {route ? (
          <>
            <Progress step={3} onBack={goBack} />
            <h3 className={styles.endTitle} tabIndex={-1} data-step-heading>
              Mooi. Kom aan tafel.
            </h3>
            <p className={styles.lead}>
              Plan een kennismakingsgesprek van een uur bij ons in de zaal. Je kiest zelf de dag en tijd.
            </p>
            <div className={styles.actions}>
              <a
                href={ROUTE_BOOKING_URL}
                className={`${styles.primary} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
                rel="noopener noreferrer"
                onClick={() => track('Routekiezer naar Bookings')}
              >
                Plan je kennismaking
              </a>
              <a
                href={routeWhatsAppUrl(route.title, answer)}
                className={styles.secondary}
                rel="noopener noreferrer"
                onClick={() => track('Routekiezer naar WhatsApp')}
              >
                App Yvonne
              </a>
            </div>
          </>
        ) : null}
      </StepPane>

      <StepPane active={step === 3 && status !== 'done' && bedrijf && route !== null}>
        <Progress step={3} onBack={goBack} />
        <h3 className={styles.endTitle} tabIndex={-1} data-step-heading>
          Mooi. Wij bellen jou.
        </h3>
        <p className={styles.lead}>
          Laat je nummer achter. Engbert-Jan belt je binnen één werkdag.
        </p>
        <form
          name="terugbelverzoek"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="terugbelverzoek" />
          <input type="hidden" name="keuze_stap1" value={route?.title ?? ''} />
          <input type="hidden" name="keuze_stap2" value={answer} />
          <input type="hidden" name="subject" value="" />
          <input type="hidden" name="bel_link" value="" />
          <p className={styles.honeypot}>
            <label>
              Laat dit veld leeg
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <div className={styles.field}>
            <label htmlFor="rk-naam">Naam</label>
            <input id="rk-naam" name="naam" type="text" required autoComplete="name" />
          </div>
          <div className={styles.field}>
            <label htmlFor="rk-bedrijf">Bedrijf</label>
            <input id="rk-bedrijf" name="bedrijf" type="text" required autoComplete="organization" />
          </div>
          <div className={styles.field}>
            <label htmlFor="rk-nummer">Mobiel of direct nummer</label>
            <input
              id="rk-nummer"
              name="nummer"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
            />
          </div>
          {showProef ? (
            <a
              href={ROUTE_PROEF_URL}
              className={styles.textLink}
              rel="noopener noreferrer"
              onClick={() => track('Routekiezer naar Proef op de Som')}
            >
              Of meld je aan voor de Proef op de Som <span aria-hidden="true">→</span>
            </a>
          ) : null}
          <p className={styles.privacy}>
            We gebruiken je gegevens alleen om je terug te bellen. Lees de{' '}
            <a href="/privacy">privacyverklaring</a>.
          </p>
          {status === 'error' ? (
            <p className={styles.error} role="alert">
              Er ging iets mis. Probeer het opnieuw of bel Engbert-Jan.
            </p>
          ) : null}
          <button
            type="submit"
            className={`${styles.primary} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Versturen…' : 'Bel mij terug'}
          </button>
        </form>
      </StepPane>

      <StepPane active={status === 'done'}>
        <h3 className={styles.endTitle} tabIndex={-1} data-step-heading>
          Geregeld, {voornaam}.
        </h3>
        <p className={styles.lead}>Engbert-Jan belt je binnen één werkdag.</p>
      </StepPane>
    </div>
  )
}
