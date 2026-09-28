import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail/ServiceDetailPage'
import { jaartrajectDetail } from '@/components/zakelijk/zakelijk-detail-pages'

export const metadata: Metadata = {
  title: 'Zakelijk traject — STARK! Hardenberg',
  description: 'Traject voor teams bij STARK! Hardenberg.',
  robots: { index: false, follow: false },
}

export default function JaartrajectPage() {
  return <ServiceDetailPage page={jaartrajectDetail} />
}
