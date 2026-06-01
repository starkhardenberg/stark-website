import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/landing.module.css'

export type MenuLink = { href: string; label: string; external?: boolean }

export type MenuRow = {
  label: string
  text?: string
  bullets?: string[]
  link?: { href: string; label: string }
  /** Tekst met inline links: strings en links in volgorde. */
  parts?: Array<string | MenuLink>
}

function isMenuLink(part: string | MenuLink): part is MenuLink {
  return typeof part !== 'string'
}

export type LandingServiceCardData = {
  title: string
  image: string
  imageAlt: string
  objectPosition?: string
  kidsImage?: boolean
  inverted?: boolean
  detailHref?: string
  detailLabel?: string
  menu: MenuRow[]
}

export default function LandingServiceCard({
  title,
  image,
  imageAlt,
  objectPosition,
  kidsImage,
  inverted,
  detailHref,
  detailLabel,
  menu,
}: LandingServiceCardData) {
  const clickable = Boolean(detailHref)
  return (
    <div
      className={`${styles.resultItem} ${styles.resultItemStatic}${
        clickable ? ` ${styles.resultItemClickable}` : ''
      }${inverted ? ` ${styles.resultItemInverted}` : ''}${
        kidsImage ? ` ${styles.resultItemKidsBand}` : ''
      }`}
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
              <dd>
                {row.bullets ? (
                  <ul className={styles.menuBullets}>
                    {row.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : row.parts ? (
                  row.parts.map((part, i) =>
                    isMenuLink(part) ? (
                      part.external ? (
                        <a
                          key={i}
                          href={part.href}
                          className={styles.menuInlineLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {part.label}
                        </a>
                      ) : (
                        <Link key={i} href={part.href} className={styles.menuInlineLink}>
                          {part.label}
                        </Link>
                      )
                    ) : (
                      <span key={i}>{part}</span>
                    ),
                  )
                ) : (
                  <>
                    {row.text}
                    {row.link ? (
                      <>
                        {row.text ? ' ' : null}
                        <a
                          href={row.link.href}
                          className={styles.menuInlineLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {row.link.label}
                        </a>
                      </>
                    ) : null}
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
        {detailHref ? (
          <Link
            href={detailHref}
            className={`${styles.menuDetailLink} ${styles.menuDetailLinkStretched}`}
          >
            {detailLabel ?? 'Lees meer'}
            <span aria-hidden>→</span>
          </Link>
        ) : null}
      </div>
    </div>
  )
}
