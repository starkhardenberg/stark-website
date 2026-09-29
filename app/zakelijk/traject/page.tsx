import type { Metadata } from 'next'
import TrajectPage from '@/components/dienst/TrajectPage'
import { TRAJECT_META } from '@/components/dienst/zakelijk-traject'
import { getSiteRobots } from '@/lib/site-seo'

export const metadata: Metadata = {
  title: TRAJECT_META.title,
  description: TRAJECT_META.description,
  robots: getSiteRobots(),
}

export default function Page() {
  return <TrajectPage />
}
