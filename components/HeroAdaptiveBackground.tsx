import HeroBackgroundVideo from './HeroBackgroundVideo'

type Props = {
  poster: string
  mobileSrc: string
  desktopSrc: string
}

/** Video staat meteen in de HTML. Een latere wissel laat Safari een afspeelknop tekenen. */
export default function HeroAdaptiveBackground({ poster, mobileSrc, desktopSrc }: Props) {
  return <HeroBackgroundVideo poster={poster} mobileSrc={mobileSrc} desktopSrc={desktopSrc} />
}
