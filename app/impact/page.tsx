import ServiceDetailPage from '@/components/service-detail/ServiceDetailPage'
import { impactDetail } from '@/components/coaching/coaching-detail-pages'
import { pageMetadata } from '@/lib/open-graph'

export const metadata = pageMetadata(
  'impact',
  'Impact — 12 weken individueel traject — STARK! Hardenberg',
  'Twaalf weken waarin je stappen zet die ertoe doen. Fysiek, mentaal, of allebei, met één vaste coach aan je zijde.',
)

export default function ImpactPage() {
  return <ServiceDetailPage page={impactDetail} />
}
