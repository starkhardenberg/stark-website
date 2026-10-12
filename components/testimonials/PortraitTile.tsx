import StarkImage from '@/components/StarkImage'
import type { PortraitPerson } from './portrait-quotes'
import WobblyPortraitFrame, { portraitTilt } from './WobblyPortraitFrame'
import styles from './PortraitQuoteStage.module.css'

export default function PortraitTile({
  person,
  index,
  active,
  onSelect,
  onLight = false,
}: {
  person: PortraitPerson
  index: number
  active: boolean
  onSelect: () => void
  onLight?: boolean
}) {
  return (
    <button
      type="button"
      className={[styles.tile, active ? styles.tileActive : '', onLight ? styles.tileOnLight : '']
        .filter(Boolean)
        .join(' ')}
      aria-pressed={active}
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
    >
      <span className={styles.photo} style={{ transform: `rotate(${portraitTilt(index)}deg)` }}>
        <span className={styles.photoClip}>
          <StarkImage
            src={person.image}
            alt=""
            fill
            unaltered
            sizes="210px"
            className={styles.photoImg}
          />
        </span>
        <WobblyPortraitFrame index={index} />
      </span>
      <span className={onLight ? `${styles.name} ${styles.nameOnLight}` : styles.name}>{person.name}</span>
    </button>
  )
}
