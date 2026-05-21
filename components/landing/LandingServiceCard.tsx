import Image from 'next/image'
import styles from '@/app/landing.module.css'

export type MenuRow = {
  label: string
  text: string
}

export type LandingServiceCardData = {
  title: string
  image: string
  imageAlt: string
  objectPosition?: string
  kidsImage?: boolean
  inverted?: boolean
  menu: MenuRow[]
}

export default function LandingServiceCard({
  title,
  image,
  imageAlt,
  objectPosition,
  kidsImage,
  inverted,
  menu,
}: LandingServiceCardData) {
  return (
    <div
      className={`${styles.resultItem} ${styles.resultItemStatic}${
        inverted ? ` ${styles.resultItemInverted}` : ''
      }${kidsImage ? ` ${styles.resultItemKidsBand}` : ''}`}
    >
      <div className={styles.resultMedia}>
        <Image
          src={`/images/${image}`}
          alt={imageAlt}
          fill
          className={`${styles.resultMediaImg}${kidsImage ? ` ${styles.resultMediaImgKids}` : ''}`}
          sizes="(min-width: 900px) 33vw, 100vw"
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
      <div className={styles.menuCardBody}>
        <h3 className={styles.resultTitle}>{title}</h3>
        <dl className={styles.menuList}>
          {menu.map((row) => (
            <div key={row.label} className={styles.menuRow}>
              <dt>{row.label}</dt>
              <dd>{row.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
