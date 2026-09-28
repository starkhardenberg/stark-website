import { coachingTracks } from '@/components/coaching/coaching-tracks'
import { blocksFromTrack, DETAIL_PLACEHOLDER } from '@/components/service-detail/from-track'
import type { ServiceDetailContent } from '@/components/service-detail/types'

const COACHING_BACK = {
  backHref: '/coaching',
  backLabel: 'Terug naar coaching',
  footerPhotoSet: 'coaching' as const,
}

function byId(id: string) {
  const track = coachingTracks.find((item) => item.id === id)
  if (!track) throw new Error(`Coaching-route ontbreekt: ${id}`)
  return track
}

const momentum = byId('momentum')
const impact = byId('impact')

export const momentumDetail: ServiceDetailContent = {
  ...COACHING_BACK,
  title: momentum.mediaLabel ?? momentum.cat,
  num: momentum.num,
  eyebrow: momentum.eyebrow ?? '',
  chapterHero: true,
  heroKicker: '10 weken · in de groep',
  headerImage: {
    src: '/images/foto-momentum-hero.jpg',
    alt: 'Groep op de vloer na het trainen bij STARK! Hardenberg',
    objectPosition: 'center 42%',
  },
  transitionImage: {
    src: '/images/foto-momentum-quotes-hero.png',
    alt: '',
    objectPosition: 'center 40%',
  },
  closeImage: {
    src: '/images/foto-coaching-tegel-momentum-groep.png',
    alt: '',
    objectPosition: 'center 40%',
  },
  opening: DETAIL_PLACEHOLDER.opening,
  blocks: blocksFromTrack(momentum),
  depth: DETAIL_PLACEHOLDER.depth.map((text) => ({ type: 'p' as const, text })),
  depthHighlight: DETAIL_PLACEHOLDER.depthHighlight,
}

export const impactDetail: ServiceDetailContent = {
  ...COACHING_BACK,
  title: impact.mediaLabel ?? impact.cat,
  num: impact.num,
  eyebrow: impact.eyebrow ?? '',
  headerImage: {
    src: `/images/${impact.photo}`,
    alt: impact.photoAlt,
    objectPosition: impact.photoObjectPosition,
  },
  transitionImage: {
    src: '/images/foto-impact-kettlebell.png',
    alt: '',
    objectPosition: 'center 40%',
  },
  closeImage: {
    src: '/images/foto-coaching-impact.png',
    alt: '',
    objectPosition: 'center 16%',
  },
  opening: DETAIL_PLACEHOLDER.opening,
  blocks: blocksFromTrack(impact),
  depth: DETAIL_PLACEHOLDER.depth.map((text) => ({ type: 'p' as const, text })),
  depthHighlight: DETAIL_PLACEHOLDER.depthHighlight,
}
