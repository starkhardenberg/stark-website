import Image, { type ImageProps } from 'next/image'
import styles from './StarkImage.module.css'

export type StarkImageProps = ImageProps & {
  /** Desktop hover: kleur terug (klikbare kaarten). */
  hoverColor?: boolean
  /** Geen STARK-filter (bijv. al ZW of logo-achtig). */
  unaltered?: boolean
  /** Extra class op de wrapper. */
  wrapperClassName?: string
}

export default function StarkImage({
  hoverColor = false,
  unaltered = false,
  wrapperClassName,
  className,
  fill,
  alt,
  ...props
}: StarkImageProps) {
  const wrapClass = [
    fill ? styles.fillWrap : styles.inlineWrap,
    hoverColor ? styles.hoverColor : '',
    wrapperClassName,
  ]
    .filter(Boolean)
    .join(' ')

  const imgClass = [unaltered ? styles.imgUnaltered : styles.img, className].filter(Boolean).join(' ')

  if (fill) {
    return (
      <span className={wrapClass}>
        <Image {...props} fill alt={alt} className={imgClass} />
      </span>
    )
  }

  return (
    <span className={wrapClass}>
      <Image {...props} alt={alt} className={imgClass} />
    </span>
  )
}

/** Zelfde filter voor native <img> (footer e.d.). */
export const starkImgClass = styles.img
