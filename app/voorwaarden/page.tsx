import type { Metadata } from 'next'
import LegalDocument from '@/components/legal/LegalDocument'
import { pageMetadata } from '@/lib/open-graph'

export const metadata: Metadata = {
  ...pageMetadata(
    'voorwaarden',
    'Algemene voorwaarden — STARK! Hardenberg',
    'Afspraken voor lidmaatschap, coaching en trainen bij STARK! Hardenberg, plus de huisregels.',
  ),
  robots: { index: true, follow: true },
}

export default function VoorwaardenPage() {
  return <LegalDocument file="voorwaarden.md" />
}
