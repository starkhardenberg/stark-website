import LeiderschapPage from '@/components/dienst/LeiderschapPage'
import { L1O1_META } from '@/components/dienst/leiderschap-1-op-1'
import { pageMetadata } from '@/lib/open-graph'

export const metadata = pageMetadata(
  'leiderschap',
  L1O1_META.title,
  L1O1_META.description,
)

export default function Page() {
  return <LeiderschapPage />
}
