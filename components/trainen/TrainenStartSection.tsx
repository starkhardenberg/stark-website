'use client'

import { useState, type ReactNode } from 'react'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import { CTA_KENNISMAKING_LABEL, hrefKennismaking } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_ROW, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import introStyles from '@/components/IntroSection.module.css'
import TrainenRoosterModal from './TrainenRoosterModal'

type Step = {
  id: string
  lead: string
  rest: [ReactNode, ReactNode]
}

export default function TrainenStartSection() {
  const [roosterOpen, setRoosterOpen] = useState(false)

  const steps: Step[] = [
    {
      id: '01',
      lead: 'Een gesprek',
      rest: ['Gratis. Een uur.', 'Waar sta je, en past dit bij je.'],
    },
    {
      id: '02',
      lead: 'Het startpakket',
      rest: [
        'Vier sessies. Techniek en je lijf leren kennen.',
        'Daarna kun je veilig mee in elke training.',
      ],
    },
    {
      id: '03',
      lead: 'Hoe vaak trainen',
      rest: [
        'Tien keer per maand of onbeperkt.',
        'Elke training een trainer naast je.',
      ],
    },
    {
      id: '04',
      lead: 'Wanneer trainen',
      rest: [
        'We bieden trainingen voor verschillende groepen aan.',
        <>
          Zie ons{' '}
          <button
            type="button"
            className={introStyles.inlineLink}
            onClick={() => setRoosterOpen(true)}
          >
            rooster
          </button>
          .
        </>,
      ],
    },
  ]

  return (
    <>
      <section className={introStyles.intro} aria-label="Deurpakk'n?">
        <div className={introStyles.inner}>
          <header className={`${introStyles.banner} ${introStyles.bannerToRegels}`}>
            <h2 className={`${introStyles.quote} ${introStyles.quoteDialect}`}>
              Deurpakk&apos;n?
            </h2>
            <p className={`starkSectionMeta ${introStyles.positioning}`}>
              Gesprek · Startpakket · Hoe vaak · Wanneer
            </p>
          </header>

          <div className={introStyles.copyCol}>
            <ol className={introStyles.regels}>
              {steps.map((step) => (
                <li key={step.id} className={introStyles.regel}>
                  <span className={introStyles.regelNum} aria-hidden>
                    {step.id}
                  </span>
                  <div className={introStyles.regelCopy}>
                    <p className={introStyles.regelLead}>{step.lead}</p>
                    <p className={introStyles.regelRest}>
                      <span className={introStyles.regelRestLine}>{step.rest[0]}</span>
                      <span className={introStyles.regelRestLine}>{step.rest[1]}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className={`${introStyles.ctaRow} ${introStyles.ctaRowSpaced} ${STARK_CTA_ROW}`}>
              <a
                href={hrefKennismaking}
                className={`${introStyles.cta} ${introStyles.ctaFilled} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
              >
                {CTA_KENNISMAKING_LABEL}
                <span aria-hidden>→</span>
              </a>
              <WhatsAppLink className={`${introStyles.cta} ${STARK_CTA}`}>
                <WhatsAppIcon className={introStyles.ctaIcon} />
                <span>Stuur een WhatsApp</span>
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      <TrainenRoosterModal open={roosterOpen} onClose={() => setRoosterOpen(false)} />
    </>
  )
}
