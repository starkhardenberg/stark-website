import type { Metadata } from 'next'
import LegalDocument from '@/components/legal/LegalDocument'
import { pageMetadata } from '@/lib/open-graph'

export const metadata: Metadata = {
  ...pageMetadata(
    'privacy',
    'Privacyverklaring — STARK! Hardenberg',
    'Welke gegevens STARK! verwerkt, waarvoor, hoe lang we ze bewaren en welke rechten je hebt.',
  ),
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return <LegalDocument file="privacy.md" />
}
