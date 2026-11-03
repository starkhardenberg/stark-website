'use client'

import { useCallback, useMemo, useState, type ReactNode } from 'react'
import TrainenRoosterModal from './TrainenRoosterModal'
import { TrainenRoosterContext } from './TrainenRoosterContext'

export default function TrainenRoosterProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [groupId, setGroupId] = useState('volwassenen')

  const openRooster = useCallback((id?: string) => {
    setGroupId(id || 'volwassenen')
    setOpen(true)
  }, [])

  const value = useMemo(() => ({ openRooster }), [openRooster])

  return (
    <TrainenRoosterContext.Provider value={value}>
      {children}
      <TrainenRoosterModal open={open} groupId={groupId} onClose={() => setOpen(false)} />
    </TrainenRoosterContext.Provider>
  )
}
