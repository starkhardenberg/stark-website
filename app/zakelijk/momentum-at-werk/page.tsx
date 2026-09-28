import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail/ServiceDetailPage'
import { momentumAtWerkDetail } from '@/components/zakelijk/zakelijk-detail-pages'

export const metadata: Metadata = {
  title: 'Momentum @ Werk — STARK! Hardenberg',
  description: 'Tien weken Momentum @ Werk bij STARK! Hardenberg.',
  robots: { index: false, follow: false },
}

export default function MomentumAtWerkPage() {
  return <ServiceDetailPage page={momentumAtWerkDetail} />
}
