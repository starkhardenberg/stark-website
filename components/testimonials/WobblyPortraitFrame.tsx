import { PORTRAIT_FRAME_SPECS } from '@/app/team/team-portrait-frames'
import styles from './PortraitQuoteStage.module.css'

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'butt' as const,
  strokeLinejoin: 'miter' as const,
  vectorEffect: 'non-scaling-stroke' as const,
}

/** Zelfde polyline-kader als de teampagina, per portret een andere lijn. */
export default function WobblyPortraitFrame({ index }: { index: number }) {
  const spec = PORTRAIT_FRAME_SPECS[(index % 11) + 1]

  return (
    <span className={styles.frame} aria-hidden="true" style={{ transform: `rotate(${spec.rotateDeg}deg)` }}>
      <svg className={styles.frameSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline points={spec.top} {...STROKE} strokeWidth={spec.strokeWidth} />
        <polyline points={spec.right} {...STROKE} strokeWidth={spec.strokeWidth} />
        <polyline points={spec.bottom} {...STROKE} strokeWidth={spec.strokeWidth} />
        <polyline points={spec.left} {...STROKE} strokeWidth={spec.strokeWidth} />
      </svg>
    </span>
  )
}

const TILT = [-1.6, 1.2, -0.9, 1.5, -1.3, 0.8, 1.4, -1.1, 0.6, -1.5, 1.1]

export function portraitTilt(index: number) {
  return TILT[index % TILT.length]
}
