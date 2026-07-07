import type { FaqItem } from '@/components/faq/FaqList'
import StructuredData from '@/components/StructuredData'
import { buildFaqPageJsonLd } from '@/lib/json-ld'

type Props = {
  items: readonly FaqItem[]
}

export default function FaqJsonLd({ items }: Props) {
  return <StructuredData data={buildFaqPageJsonLd(items)} />
}
