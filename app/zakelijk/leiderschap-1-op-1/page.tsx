import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail/ServiceDetailPage'
import { leiderschapDetail } from '@/components/zakelijk/zakelijk-detail-pages'

export const metadata: Metadata = {
  title: 'Leiderschap 1 op 1 — STARK! Hardenberg',
  description: '1-op-1 leiderschapstraject bij STARK! Hardenberg. Vanaf een kwartaal.',
  robots: { index: false, follow: false },
}

export default function LeiderschapPage() {
  return <ServiceDetailPage page={leiderschapDetail} />
}
