import MomentumAtWerkPage from '@/components/dienst/MomentumAtWerkPage'
import { MAW_META } from '@/components/dienst/momentum-at-werk'
import { pageMetadata } from '@/lib/open-graph'

export const metadata = pageMetadata(
  'duurzameInzetbaarheid',
  MAW_META.title,
  MAW_META.description,
)

export default function Page() {
  return <MomentumAtWerkPage />
}
