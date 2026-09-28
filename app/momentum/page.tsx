import DienstPage from '@/components/dienst/DienstPage'
import { pageMetadata } from '@/lib/open-graph'

export const metadata = pageMetadata(
  'momentum',
  'Momentum · 10 weken trainen en coachen in Hardenberg · STARK!',
  '10 weken trainen en coachen in een kleine groep in Hardenberg. Voor wie weet wat er moet gebeuren en het steeds ziet wegzakken. Vaste start, vaste eindstreep.',
)

export default function MomentumPage() {
  return <DienstPage />
}
