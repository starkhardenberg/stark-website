import type { Metadata } from 'next'
import LeiderschapPage from '@/components/dienst/LeiderschapPage'
import { L1O1_META } from '@/components/dienst/leiderschap-1-op-1'
import { getSiteRobots } from '@/lib/site-seo'

export const metadata: Metadata = {
  title: L1O1_META.title,
  description: L1O1_META.description,
  robots: getSiteRobots(),
}

export default function Page() {
  return <LeiderschapPage />
}
