import quoteStyles from '@/components/ContentQuoteBlock.module.css'
import { ProefButton, ProefDate, ProefNext, ProefScheduleProvider, ProefWhen } from '@/components/zakelijk/ProefSchedule'
import { ZAKELIJK_START } from '@/components/zakelijk/zakelijk-landing'
import { proefScheduleAt } from '@/lib/editions'
import { STARK_CTA_ROW } from '@/lib/stark-cta'
import pageStyles from './ZakelijkOndernemersPage.module.css'

function includedLine(lead: string, value: string) {
  const body = `${value.charAt(0).toLowerCase()}${value.slice(1)}`
  const sentence = /[.!?]$/.test(body) ? body : `${body}.`
  return `${lead} ${sentence}`
}

function ticketIncluded() {
  const soup = includedLine(ZAKELIJK_START.includedLead, ZAKELIJK_START.included)
  const clothing = ZAKELIJK_START.meta.find((item) => item.startsWith('Kleding')) ?? ''
  const clothingSentence = /[.!?]$/.test(clothing) ? clothing : `${clothing}.`
  return `${soup} ${clothingSentence}`
}

export default function HoeHetBegintSection({ wide = false }: { wide?: boolean }) {
  const initial = proefScheduleAt(new Date())

  return (
    <ProefScheduleProvider initial={initial}>
      <section
        className={`${quoteStyles.section} ${pageStyles.start}${wide ? ` ${pageStyles.startWide}` : ''}`}
        id="zo-begin-je"
        aria-label={ZAKELIJK_START.title}
      >
        <div className={pageStyles.startInner}>
          <div className={pageStyles.startDesk}>
            <div className={pageStyles.deskCopy}>
              <p className={pageStyles.startEyebrow}>{ZAKELIJK_START.eyebrow}</p>
              <h2 className={`${pageStyles.startTitle} ${pageStyles.deskTitle}`}>
                <span>De Proef</span>
                <span>op de Som</span>
              </h2>
              <p className={pageStyles.deskLead}>
                {ZAKELIJK_START.introBefore}
                <strong>{ZAKELIJK_START.introStrong}</strong>
              </p>
              <div className={pageStyles.deskDo}>
                <h3>Wat je doet</h3>
                <p>{ZAKELIJK_START.doing}</p>
              </div>
            </div>

            <aside className={pageStyles.ticket} aria-label="Praktisch">
              <ProefDate beside />
              <div className={pageStyles.ticketFacts}>
                <ProefWhen />
                <p>{ZAKELIJK_START.where}</p>
                <p>{ticketIncluded()}</p>
              </div>
              <p className={pageStyles.ticketPrice}>
                <span>{ZAKELIJK_START.meta[0]}</span>
                <span className={pageStyles.ticketDot} aria-hidden="true">
                  ·
                </span>
                <span>
                  {ZAKELIJK_START.places} plaatsen
                </span>
              </p>
              <div className={`${STARK_CTA_ROW} ${pageStyles.startCta} ${pageStyles.ticketCta}`}>
                <ProefButton />
              </div>
              <ProefNext />
            </aside>
          </div>
        </div>
      </section>
    </ProefScheduleProvider>
  )
}
