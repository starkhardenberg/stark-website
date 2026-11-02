import quoteStyles from '@/components/ContentQuoteBlock.module.css'
import { ZAKELIJK_START } from '@/components/zakelijk/zakelijk-landing'
import { STARK_CTA, STARK_CTA_PRIMARY, STARK_CTA_ROW } from '@/lib/stark-cta'
import pageStyles from './ZakelijkOndernemersPage.module.css'

function includedLine(lead: string, value: string) {
  const body = `${value.charAt(0).toLowerCase()}${value.slice(1)}`
  const sentence = /[.!?]$/.test(body) ? body : `${body}.`
  return `${lead} ${sentence}`
}

export default function HoeHetBegintSection() {
  const { date } = ZAKELIJK_START
  const meta = ZAKELIJK_START.nextEdition
    ? [...ZAKELIJK_START.meta, `Volgende editie: ${ZAKELIJK_START.nextEdition}`]
    : [...ZAKELIJK_START.meta]

  return (
    <section className={`${quoteStyles.section} ${pageStyles.start}`} id="zo-begin-je" aria-label={ZAKELIJK_START.title}>
      <div className={pageStyles.startInner}>
        <p className={pageStyles.startEyebrow}>{ZAKELIJK_START.eyebrow}</p>
        <h2 className={pageStyles.startTitle}>{ZAKELIJK_START.title}</h2>
        <p className={pageStyles.startLead}>
          {ZAKELIJK_START.introBefore}
          <strong>{ZAKELIJK_START.introStrong}</strong>
        </p>

        <div className={pageStyles.startWhenBlock}>
          <p className={pageStyles.startDate}>
            <span className={pageStyles.startDateMain}>{date.shortLabel}</span>
            {date.year ? <span className={pageStyles.startDateYear}>{date.year}</span> : null}
          </p>
          <div className={pageStyles.startFacts}>
            <p className={pageStyles.startWhen}>{ZAKELIJK_START.when}</p>
            <p>{ZAKELIJK_START.where}</p>
            <p>{includedLine(ZAKELIJK_START.includedLead, ZAKELIJK_START.included)}</p>
            <p className={pageStyles.startPlaces}>
              {ZAKELIJK_START.places} plaatsen
            </p>
          </div>
        </div>

        <ul className={pageStyles.startColumns}>
          {ZAKELIJK_START.columns.map((column) => (
            <li key={column.label}>
              <h3>{column.label}</h3>
              <p>{column.text}</p>
            </li>
          ))}
        </ul>

        <div className={`${STARK_CTA_ROW} ${pageStyles.startCta}`}>
          <a
            href={ZAKELIJK_START.href}
            className={`${STARK_CTA} ${STARK_CTA_PRIMARY}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ZAKELIJK_START.button}
          </a>
        </div>

        <p className={pageStyles.startMeta}>{meta.join(' · ')}</p>
      </div>
    </section>
  )
}
