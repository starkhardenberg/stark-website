import HeroSection from '@/components/HeroSection'
import IntroSection from '@/components/IntroSection'
import FilmSection from '@/components/FilmSection'
import AanbodSection from '@/components/AanbodSection'
import OverSection from '@/components/OverSection'
import ResultatenSection from '@/components/ResultatenSection'
import Footer from '@/components/Footer'
import { pageMetadata } from '@/lib/open-graph'

export const metadata = pageMetadata(
  'home',
  'STARK! Hardenberg — Sterker worden. In lijf en hoofd.',
  'STARK! Hardenberg. Coaching, bedrijven en trainen. We houden je hand vast en geven je tegelijk een schop onder je kont. Hardenberg, sinds 2013.',
)

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <AanbodSection />
      <FilmSection />
      <OverSection />
      <ResultatenSection />
      <Footer photoless />
    </>
  )
}
