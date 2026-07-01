import HeroSection from '@/components/HeroSection'
import IntroSection from '@/components/IntroSection'
import FilmSection from '@/components/FilmSection'
import AanbodSection from '@/components/AanbodSection'
import OverSection from '@/components/OverSection'
import ResultatenSection from '@/components/ResultatenSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <AanbodSection />
      <FilmSection />
      <OverSection />
      <ResultatenSection />
      <Footer photoless brandPrefix="BIJ" />
    </>
  )
}
