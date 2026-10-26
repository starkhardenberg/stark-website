import StructuredData from '@/components/StructuredData'
import { buildServiceJsonLd } from '@/lib/json-ld'

export default function ServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return <StructuredData data={buildServiceJsonLd(name, description, path)} />
}
