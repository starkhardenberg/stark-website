import styles from './Uitroepteken.module.css'

type UitroeptekenProps = {
  /** background = gigantisch decor; bullet = oranje route-markering */
  variant?: 'background' | 'bullet'
  className?: string
}

/**
 * Zwaar uitroepteken in display-stijl (Archivo Black-proporties), als SVG.
 * Alleen twee toepassingen op de site (Prompt 5).
 */
export default function Uitroepteken({
  variant = 'bullet',
  className,
}: UitroeptekenProps) {
  const rootClass =
    variant === 'background'
      ? `${styles.background} ${className ?? ''}`.trim()
      : `${styles.bullet} ${className ?? ''}`.trim()

  return (
    <svg
      className={rootClass}
      viewBox="0 0 32 88"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      {/* Stam + punt — strak, zwaar, geen afronding */}
      <path d="M8 0h16v58H8V0zm0 68h16v20H8V68z" />
    </svg>
  )
}
