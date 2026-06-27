type StarkArrowProps = {
  className?: string
  variant?: 'right' | 'up-right'
}

export default function StarkArrow({ className, variant = 'right' }: StarkArrowProps) {
  if (variant === 'up-right') {
    return (
      <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
        focusable="false"
      >
        <path
          d="M5.5 10.5 10.5 5.5M10.5 5.5H6.25M10.5 5.5v4.25"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      focusable="false"
    >
      <path
        d="M3.5 8h9M9 4.5l3.5 3.5L9 11.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
