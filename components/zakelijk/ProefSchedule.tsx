'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { proefFooterNote, proefScheduleAt, type ProefScheduleView } from '@/lib/editions'
import { ZAKELIJK_START } from '@/components/zakelijk/zakelijk-landing'
import { STARK_CTA, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import pageStyles from './ZakelijkOndernemersPage.module.css'

const ProefScheduleContext = createContext<ProefScheduleView | null>(null)

function useProefSchedule() {
  const view = useContext(ProefScheduleContext)
  if (!view) throw new Error('ProefSchedule ontbreekt')
  return view
}

export function ProefScheduleProvider({
  initial,
  children,
}: {
  initial: ProefScheduleView
  children: ReactNode
}) {
  const [view, setView] = useState(initial)

  useEffect(() => {
    setView(proefScheduleAt(new Date()))
  }, [])

  return <ProefScheduleContext.Provider value={view}>{children}</ProefScheduleContext.Provider>
}

export function ProefDate({ beside = false }: { beside?: boolean }) {
  const view = useProefSchedule()
  if (!view.hasEdition) return null
  return (
    <p className={beside ? `${pageStyles.startDate} ${pageStyles.startDateBeside}` : pageStyles.startDate}>
      <span className={pageStyles.startDateMain}>{view.shortLabel}</span>
      {view.year ? <span className={pageStyles.startDateYear}>{view.year}</span> : null}
    </p>
  )
}

export function ProefWhen() {
  const view = useProefSchedule()
  if (!view.when) return null
  return <p className={pageStyles.startWhen}>{view.when}</p>
}

export function ProefButton() {
  const view = useProefSchedule()
  return (
    <a
      href={ZAKELIJK_START.href}
      className={`${STARK_CTA} ${STARK_CTA_PRIMARY}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {view.buttonWhen ? (
        <>
          <span className={pageStyles.ticketBtnPart}>Meld je aan voor</span>
          <span className={pageStyles.ticketBtnPart}>{view.buttonWhen}</span>
        </>
      ) : (
        view.button
      )}
    </a>
  )
}

export function ProefNext() {
  const view = useProefSchedule()
  const note = proefFooterNote(view)
  if (!note) return null
  return <p className={pageStyles.ticketNext}>{note}</p>
}
