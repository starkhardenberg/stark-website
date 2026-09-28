import ImpactPage from '@/components/dienst/ImpactPage'
import { pageMetadata } from '@/lib/open-graph'

export const metadata = pageMetadata(
  'impact',
  'Impact · 12 weken één op één coachen en trainen in Hardenberg · STARK!',
  'Twaalf weken één op één met je eigen coach. Elke week een gesprek, twee keer per week trainen in een kleine groep. Start zonder wachtlijst.',
)

export default function Page() {
  return <ImpactPage />
}
