import HeroSection from '@/components/HeroSection'
import IntroSection from '@/components/IntroSection'
import FilmSection from '@/components/FilmSection'
import AanbodSection from '@/components/AanbodSection'
import OverSection from '@/components/OverSection'
import ResultatenSection from '@/components/ResultatenSection'
import WijBintStark from '@/components/WijBintStark'
import Footer from '@/components/Footer'
import { pageMetadata } from '@/lib/open-graph'

export const metadata = {
  ...pageMetadata(
    'home',
    'STARK! Hardenberg — Sterker worden. In lijf en hoofd.',
    'Krachttraining en conditie in kleine groepen, en coaching in Hardenberg. Een coach naast je, sinds 2013. Plan een gratis kennismaking.',
  ),
  robots: { index: true, follow: true },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <AanbodSection />
      <FilmSection />
      <OverSection />
      <ResultatenSection />
      <WijBintStark size="hero" />
      <Footer variant="dark" />
    </>
  )
}
