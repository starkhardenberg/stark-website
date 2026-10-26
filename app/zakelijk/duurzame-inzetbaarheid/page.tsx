import MomentumAtWerkPage from '@/components/dienst/MomentumAtWerkPage'
import ServiceJsonLd from '@/components/ServiceJsonLd'
import { MAW_META } from '@/components/dienst/momentum-at-werk'
import { pageMetadata } from '@/lib/open-graph'

export const metadata = pageMetadata(
  'duurzameInzetbaarheid',
  MAW_META.title,
  MAW_META.description,
)

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="Momentum @ Werk"
        description={MAW_META.description}
        path="/zakelijk/duurzame-inzetbaarheid"
      />
      <MomentumAtWerkPage />
    </>
  )
}
