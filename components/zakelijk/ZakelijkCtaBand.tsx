'use client'

import Link from 'next/link'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import { hrefZakelijk } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_ROW, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import startStyles from '@/components/coaching/CoachingStartSection.module.css'

type Props = {
  /** Extra lead boven de knoppen. Leeg = alleen knoppen. */
  lead?: string
  className?: string
}

/** Zelfde knoppenrij als coaching-start, met zakelijke bestemmingen. */
export default function ZakelijkCtaBand({ lead, className }: Props) {
  return (
    <div
      className={`${startStyles.band}${className ? ` ${className}` : ''}`}
      aria-label="Plan een gesprek"
    >
      {lead ? <p className={`starkSectionMeta ${startStyles.lead}`}>{lead}</p> : null}
      <div className={`${startStyles.ctaRow} ${STARK_CTA_ROW}`}>
        <a
          href={hrefZakelijk}
          className={`${startStyles.cta} ${startStyles.ctaFilled} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
        >
          Plan een gesprek
          <span aria-hidden>→</span>
        </a>
        <WhatsAppLink className={`${startStyles.cta} ${STARK_CTA}`}>
          <WhatsAppIcon className={startStyles.ctaIcon} />
          <span>Stuur een WhatsApp</span>
        </WhatsAppLink>
      </div>
    </div>
  )
}

export function ZakelijkPlanLink({ className }: { className?: string }) {
  return (
    <a
      href={hrefZakelijk}
      className={`${startStyles.cta} ${startStyles.ctaFilled} ${STARK_CTA} ${STARK_CTA_PRIMARY}${className ? ` ${className}` : ''}`}
    >
      Plan een gesprek
      <span aria-hidden>→</span>
    </a>
  )
}

export function ZakelijkImpactLink({ className }: { className?: string }) {
  return (
    <Link
      href="/impact"
      className={`${startStyles.cta} ${STARK_CTA}${className ? ` ${className}` : ''}`}
    >
      Lees over Impact
      <span aria-hidden>→</span>
    </Link>
  )
}
