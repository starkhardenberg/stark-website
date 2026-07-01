import { GROUP_PHOTO_FRAME_SPEC } from './team-portrait-frames'
import styles from './team.module.css'

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'butt' as const,
  strokeLinejoin: 'miter' as const,
  vectorEffect: 'non-scaling-stroke' as const,
}

export default function GroupPhotoFrame() {
  const spec = GROUP_PHOTO_FRAME_SPEC

  return (
    <div
      className={styles.groupBandFrameWrap}
      aria-hidden
      style={{ transform: `rotate(${spec.rotateDeg}deg)` }}
    >
      <svg
        className={styles.photoFrameSvg}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
      >
        <polyline points={spec.top} {...STROKE} strokeWidth={spec.strokeWidth} />
        <polyline points={spec.right} {...STROKE} strokeWidth={spec.strokeWidth} />
        <polyline points={spec.bottom} {...STROKE} strokeWidth={spec.strokeWidth} />
        <polyline points={spec.left} {...STROKE} strokeWidth={spec.strokeWidth} />
      </svg>
    </div>
  )
}
