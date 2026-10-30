'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const backToTopCss = `
        .starkBackToTop {
          position: fixed;
          right: 16px;
          bottom: 16px;
          z-index: 80;
          width: 48px;
          height: 48px;
          padding: 0;
          border: none;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--orange);
          color: white;
          cursor: pointer;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.28), 0 4px 6px -4px rgb(0 0 0 / 0.28);
          opacity: 0;
          translate: 0 8px;
          pointer-events: none;
          transition: opacity 250ms ease, translate 250ms ease, background 180ms ease;
        }
        .starkBackToTop[data-visible="true"] {
          opacity: 1;
          translate: 0 0;
          pointer-events: auto;
        }
        .starkBackToTop:hover {
          background: var(--orange-deep);
        }
        .starkBackToTop:focus-visible {
          outline: 2px solid var(--orange);
          outline-offset: 3px;
        }
        .starkBackToTop[data-quiet="true"],
        .starkBackToTop[data-quiet="true"]:hover {
          background: var(--stark-black);
        }
        .starkBackToTop[data-quiet="true"]:focus-visible {
          outline-color: var(--stark-black);
        }
        @media (min-width: 768px) {
          .starkBackToTop {
            right: 32px;
            bottom: 32px;
          }
        }
      `

export default function BackToTop() {
  const pathname = usePathname()
  const quiet = pathname === '/drop-in'
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <>
      <button
        type="button"
        className="starkBackToTop"
        aria-label="Naar boven"
        aria-hidden={visible ? undefined : true}
        tabIndex={visible ? 0 : -1}
        onClick={scrollToTop}
        data-visible={visible ? 'true' : 'false'}
        data-quiet={quiet ? 'true' : 'false'}
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M6 11l6-6 6 6" />
        </svg>
      </button>
      <style dangerouslySetInnerHTML={{ __html: backToTopCss }} />
    </>
  )
}
