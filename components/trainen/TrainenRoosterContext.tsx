'use client'

import { createContext, useContext } from 'react'

type TrainenRoosterApi = {
  openRooster: (groupId?: string) => void
}

export const TrainenRoosterContext = createContext<TrainenRoosterApi | null>(null)

export function useTrainenRooster() {
  const ctx = useContext(TrainenRoosterContext)
  if (!ctx) {
    throw new Error('Rooster is hier niet beschikbaar')
  }
  return ctx
}

export function useTrainenRoosterOptional() {
  return useContext(TrainenRoosterContext)
}
