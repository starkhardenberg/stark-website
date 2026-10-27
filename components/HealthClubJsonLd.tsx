import StructuredData from '@/components/StructuredData'
import { buildHealthClubJsonLd } from '@/lib/json-ld'

export default function HealthClubJsonLd() {
  return <StructuredData data={buildHealthClubJsonLd()} />
}
