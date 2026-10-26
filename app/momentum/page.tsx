import DienstPage from '@/components/dienst/DienstPage'
import ServiceJsonLd from '@/components/ServiceJsonLd'
import { pageMetadata } from '@/lib/open-graph'

const description =
  '10 weken trainen en coachen in een kleine groep in Hardenberg. Voor wie weet wat er moet gebeuren en het steeds ziet wegzakken. Vaste start, vaste eindstreep.'

export const metadata = pageMetadata(
  'momentum',
  'Momentum · 10 weken trainen en coachen in Hardenberg · STARK!',
  description,
)

export default function MomentumPage() {
  return (
    <>
      <ServiceJsonLd name="Momentum" description={description} path="/momentum" />
      <DienstPage />
    </>
  )
}
