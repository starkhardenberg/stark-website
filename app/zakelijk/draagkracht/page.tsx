import TrajectPage from '@/components/dienst/TrajectPage'
import ServiceJsonLd from '@/components/ServiceJsonLd'
import { TRAJECT_META } from '@/components/dienst/zakelijk-traject'
import { pageMetadata } from '@/lib/open-graph'

export const metadata = pageMetadata(
  'draagkracht',
  TRAJECT_META.title,
  TRAJECT_META.description,
)

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="Draagkracht"
        description={TRAJECT_META.description}
        path="/zakelijk/draagkracht"
      />
      <TrajectPage />
    </>
  )
}
