import ImpactPage from '@/components/dienst/ImpactPage'
import ServiceJsonLd from '@/components/ServiceJsonLd'
import { pageMetadata } from '@/lib/open-graph'

const description =
  'Twaalf weken één op één met je eigen coach. Elke week een gesprek, twee keer per week trainen in een kleine groep. Start zonder wachtlijst.'

export const metadata = pageMetadata(
  'impact',
  'Impact · 12 weken één op één coachen en trainen in Hardenberg · STARK!',
  description,
)

export default function Page() {
  return (
    <>
      <ServiceJsonLd name="Impact" description={description} path="/impact" />
      <ImpactPage />
    </>
  )
}
