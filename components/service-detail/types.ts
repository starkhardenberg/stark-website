import type { ReactNode } from 'react'

export type ServiceDetailImage = {
  src: string
  alt: string
  objectPosition?: string
}

export type ServiceDetailBlock = {
  label: string
  text: string | string[]
}

export type DepthPiece =
  | { type: 'p'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'item'; label: string; text: string }

export type ServiceDetailContent = {
  title: string
  num: string
  eyebrow: string
  /** Hoofdstuk-hero: korter dan de landing, massieve naam. Alleen pagina's die hem aanzetten. */
  chapterHero?: boolean
  heroKicker?: string
  heroLine?: string
  headerImage?: ServiceDetailImage
  transitionImage?: ServiceDetailImage
  closeImage?: ServiceDetailImage
  opening: ReactNode
  blocks: ServiceDetailBlock[]
  depthTitle?: string
  depthNote?: string
  /** Werkgeversbrief: visueel als één geheel te kopiëren. */
  depthBrief?: boolean
  depth: DepthPiece[]
  depthHighlight?: ReactNode
  backHref: string
  backLabel: string
  navCtaLabel?: string
  navCtaHref?: string
  footerPhotoSet?: 'zakelijk' | 'coaching'
  proefGraf?: string
}
