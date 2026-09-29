import type { Metadata } from 'next'
import MomentumAtWerkPage from '@/components/dienst/MomentumAtWerkPage'
import { MAW_META } from '@/components/dienst/momentum-at-werk'
import { getSiteRobots } from '@/lib/site-seo'

export const metadata: Metadata = {
  title: MAW_META.title,
  description: MAW_META.description,
  robots: getSiteRobots(),
}

export default function Page() {
  return <MomentumAtWerkPage />
}
