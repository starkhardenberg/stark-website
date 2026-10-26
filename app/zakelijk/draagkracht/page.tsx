import TrajectPage from '@/components/dienst/TrajectPage'
import { TRAJECT_META } from '@/components/dienst/zakelijk-traject'
import { pageMetadata } from '@/lib/open-graph'

export const metadata = pageMetadata(
  'draagkracht',
  TRAJECT_META.title,
  TRAJECT_META.description,
)

export default function Page() {
  return <TrajectPage />
}
