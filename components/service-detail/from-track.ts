import type { AanbodTrack } from '@/components/aanbod/aanbod-tracks'
import type { ServiceDetailBlock } from '@/components/service-detail/types'

const BLOCK_MAP = [
  { keys: ['past bij jou als'], label: 'Past bij jou als' },
  { keys: ['zo werkt het'], label: 'Zo werkt het' },
  { keys: ['wat zit erin'], label: 'Wat zit erin' },
  { keys: ['hoe starten', 'start'], label: 'Hoe starten' },
] as const

export function blocksFromTrack(track: AanbodTrack): ServiceDetailBlock[] {
  return BLOCK_MAP.map(({ keys, label }) => {
    const row = track.menu?.find((item) => keys.some((key) => item.label.toLowerCase() === key))
    return {
      label,
      text: row?.text ?? 'Tekst volgt.',
    }
  })
}

export const DETAIL_PLACEHOLDER = {
  opening: 'Openingszin. Definitieve tekst volgt.',
  depth: [
    'Diepteblok. Definitieve tekst volgt. Dit is het enige doorlopende argument op deze pagina.',
  ],
  depthHighlight: 'Eén uitgelichte zin, naast de openingszin. Volgt later.',
} as const
