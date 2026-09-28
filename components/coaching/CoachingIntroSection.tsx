'use client'

import { useEffect, useRef, useState } from 'react'
import introStyles from '@/components/IntroSection.module.css'
import styles from './CoachingIntroSection.module.css'

type Beat = {
  lead: string
  rest?: string[]
  ghost?: boolean
  variant?: 'break'
}

const BEATS: Beat[] = [
  {
    lead: 'Er is iets wat je graag wilt',
    rest: ['Meer van wat al werkt.', 'Of iets wat steeds blijft liggen.'],
  },
  {
    lead: 'Je gaat ermee aan de slag',
    rest: ['Nieuw plan, vol goede moed.', 'Je weet wat je te doen hebt.'],
  },
  {
    lead: 'Er komt iets tussen',
    rest: [
      'Een rotweek, druk op je werk, gedoe thuis.',
      'Je laat het er een keer bij zitten. Daarna nog een keer.',
    ],
  },
  {
    lead: 'Je plan verdwijnt van tafel',
    rest: [
      'Eerst langzaam, dan helemaal. Je begint er niet meer over.',
      'Onbewust vind je dan iets van jezelf. En dat beeld blijft hangen.',
    ],
  },
  {
    lead: 'En je bent terug bij af',
    rest: [
      'Weken, maanden, soms jaren later.',
      'Omdat je in dat beeld over jezelf bent gaan geloven, het is je waarheid geworden.',
    ],
    ghost: true,
  },
  {
    lead: 'Terwijl je het graag anders zou willen',
    rest: [
      'Meer energie, meer zelfvertrouwen, meer resultaat.',
      'Of wat er al langer knaagt, in je kop of je lijf.',
    ],
  },
  {
    lead: 'Precies dat patroon leer je hier doorbreken',
    variant: 'break',
  },
]

/*
 * Zes momenten op de ring (het zevende is de doorbraak). Start- en eindpunt
 * delen de top: vijf bolletjes op 72 graden van elkaar, en bij de inzet is de
 * cirkel weer rond. Eén scrollstap = één moment; de boog en het punt springen
 * per stap mee.
 */
const RING_MOMENTS = 6
const DOT_ANGLES = [0, 72, 144, 216, 288]
const BEAT_ANGLES = [0, 72, 144, 216, 288, 360]
const SEG_SVH = 52
/* Extra scroll op de laatste stap vóór de knap: anders knalt de doorbraak er te snel in */
const WINDUP_SEGMENTS = 1
/* Ná de doorbraak: de zin blijft in beeld. Eén veeg mag hem niet voorbij schieten. */
const TAIL_SEGMENTS = 2
const TOTAL_SEGMENTS = RING_MOMENTS + WINDUP_SEGMENTS + TAIL_SEGMENTS

/* De hele ring draait langzaam mee met je scroll: continue feedback, geen dode momenten */
const RING_SPIN_DEG = 40
/* In de aanloop naar de knap windt de ring zich extra op, en veert tijdens de knap terug */
const RING_TENSION_DEG = 12

/* Ring-geometrie: de lus sluit op het startpunt */
const RING_R = 88
const RING_C = 2 * Math.PI * RING_R

function dotPos(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { cx: 100 + RING_R * Math.sin(rad), cy: 100 - RING_R * Math.cos(rad) }
}

export default function CoachingIntroSection() {
  const [activeBeat, setActiveBeat] = useState(0)
  // Zonder JS blijft het verhaal een leesbare kolom; de scène start pas na hydration
  const [live, setLive] = useState(false)
  const [entered, setEntered] = useState(false)
  const sceneRef = useRef<HTMLDivElement | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const arcRef = useRef<SVGCircleElement | null>(null)
  const dotGroupRef = useRef<SVGGElement | null>(null)
  const activeBeatRef = useRef(0)
  const exitLockRef = useRef(false)

  useEffect(() => {
    setLive(true)
  }, [])

  useEffect(() => {
    if (!live) return

    let ticking = false
    let lastY = window.scrollY
    let snapOn = false
    const root = document.documentElement
    const prevSnap = root.style.scrollSnapType
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const setSnap = (on: boolean) => {
      // Na klik op de doorbraak-pijl: snap uit tot we de scène verlaten
      if (exitLockRef.current) on = false
      if (on === snapOn) return
      snapOn = on
      // Omlaag: proximity-snap per moment. Omhoog: uit, zodat één veeg de scène uit kan.
      root.style.scrollSnapType = on ? 'y proximity' : ''
    }

    const update = () => {
      ticking = false
      const el = sceneRef.current
      if (!el) return
      const viewportH = window.innerHeight
      const scrollable = el.offsetHeight - viewportH
      if (scrollable <= 0) return
      const top = el.getBoundingClientRect().top
      // Entree: de ring schaalt naar vol formaat zodra de scène halverwege in beeld is
      if (top < viewportH * 0.55) setEntered(true)
      const pPx = -top
      const segPx = scrollable / TOTAL_SEGMENTS
      const raw = pPx / segPx
      // Spin tot einde wind-up; daarna knap + staart stil
      const spinRange = scrollable * ((RING_MOMENTS + WINDUP_SEGMENTS) / TOTAL_SEGMENTS)
      const p = Math.min(1, Math.max(0, pPx / spinRange))

      // Momenten 0–5 over RING_MOMENTS segmenten; daarna WINDUP nog op de laatste
      // tekststap, pas daarna de doorbraak. Zo krijgt "Terwijl je…" lucht.
      let beat: number
      if (raw < RING_MOMENTS) {
        beat = Math.min(RING_MOMENTS - 1, Math.max(0, Math.round(raw + 0.1)))
      } else if (raw < RING_MOMENTS + WINDUP_SEGMENTS) {
        beat = RING_MOMENTS - 1
      } else {
        beat = BEATS.length - 1
      }
      const isBroken = beat === BEATS.length - 1

      if (svgRef.current && !reducedMotion) {
        if (isBroken) {
          // Vast rechtop: gat + pijl wijzen naar de methode-sectie eronder
          svgRef.current.style.transform = 'rotate(0deg)'
        } else {
          // Opwinden tijdens wind-up: ring spant aan, veert terug vlak vóór de knap
          const wind = (raw - (RING_MOMENTS - 1)) / (WINDUP_SEGMENTS + 1)
          let tension = 0
          if (wind > 0 && wind < 1) {
            tension =
              wind < 0.55
                ? (wind / 0.55) * RING_TENSION_DEG
                : (1 - (wind - 0.55) / 0.45) * RING_TENSION_DEG
          }
          svgRef.current.style.transform = `rotate(${(p * RING_SPIN_DEG + tension).toFixed(2)}deg)`
        }
      }

      // Boog en punt springen per stap (CSS-transities doen de beweging)
      const angle = BEAT_ANGLES[Math.min(beat, RING_MOMENTS - 1)]
      if (arcRef.current) {
        arcRef.current.style.strokeDashoffset = String(RING_C * (1 - angle / 360))
      }
      if (dotGroupRef.current) {
        dotGroupRef.current.style.transform = `rotate(${angle}deg)`
      }

      activeBeatRef.current = beat
      setActiveBeat(beat)
    }

    const onScroll = () => {
      const y = window.scrollY
      const goingDown = y > lastY
      lastY = y

      const el = sceneRef.current
      if (el) {
        const rect = el.getBoundingClientRect()
        const inScene = rect.top < window.innerHeight && rect.bottom > 0
        if (!inScene) exitLockRef.current = false
        setSnap(goingDown && inScene)
      } else {
        exitLockRef.current = false
        setSnap(false)
      }

      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    // Wheel/trackpad: richting meteen zetten vóór de scroll-uitloop, anders
    // vangt proximity-snap een omhoog-veeg alsnog op de ankerpunten
    const onWheel = (e: WheelEvent) => {
      const el = sceneRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const inScene = rect.top < window.innerHeight && rect.bottom > 0
      if (!inScene) {
        exitLockRef.current = false
        setSnap(false)
        return
      }
      setSnap(e.deltaY > 0)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('resize', onScroll)
      root.style.scrollSnapType = prevSnap
    }
  }, [live])

  const goToBeat = (i: number) => {
    const el = sceneRef.current
    if (!el) return
    const scrollable = el.offsetHeight - window.innerHeight
    if (scrollable <= 0) return
    const segPx = scrollable / TOTAL_SEGMENTS
    const sceneTop = window.scrollY + el.getBoundingClientRect().top
    window.scrollTo({ top: sceneTop + i * segPx, behavior: 'smooth' })
  }

  const goToMethod = () => {
    const target = document.getElementById('methode')
    if (!target) return
    exitLockRef.current = true
    document.documentElement.style.scrollSnapType = ''
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Snap eerst loslaten, anders kapt die de scroll naar de methode af
    requestAnimationFrame(() => {
      target.scrollIntoView({
        behavior: reduce ? 'auto' : 'smooth',
        block: 'start',
      })
    })
  }

  const broken = activeBeat === BEATS.length - 1

  return (
    <section
      className={`${introStyles.intro} ${styles.bridgeToMethod}`}
      aria-label="Coaching bij STARK!"
    >
      <div className={introStyles.inner}>
        <header className={introStyles.banner}>
          <h2 className={`${introStyles.quote} ${introStyles.quoteLoud}`}>
            <span className={introStyles.quoteLine}>Klaar met</span>
            <span className={`${introStyles.quoteLine} ${introStyles.quoteMark}`}>aanmodderen</span>
          </h2>
          <p className={`starkSectionMeta ${introStyles.positioning} ${styles.metaLouder}`}>
            Wij noemen het cirkelen
          </p>
        </header>

        {live ? (
          <div
            ref={sceneRef}
            className={styles.scene}
            style={{ height: `${TOTAL_SEGMENTS * SEG_SVH + 100}svh` }}
          >
            {/* Ankerpunten voor de proximity-snap: één per moment */}
            {Array.from({ length: TOTAL_SEGMENTS + 1 }, (_, i) => (
              <div
                key={i}
                className={`${styles.snapPoint}${
                  i === RING_MOMENTS + WINDUP_SEGMENTS ? ` ${styles.snapPointHold}` : ''
                }`}
                style={{ top: `${i * SEG_SVH}svh` }}
                aria-hidden
              />
            ))}
            <div className={styles.stage}>
              <div
                className={`${styles.stageRing}${entered ? ` ${styles.stageRingIn}` : ''}${
                  broken ? ` ${styles.stageRingBroken}` : ''
                }`}
              >
                <svg ref={svgRef} viewBox="0 0 200 200" className={styles.sceneSvg} aria-hidden>
                  <circle
                    cx="100"
                    cy="100"
                    r={RING_R}
                    className={styles.ringBase}
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Geen non-scaling-stroke op de boog: Chrome rekent het dash-patroon dan in schermpixels en knipt de boog in stukken */}
                  <g className={styles.arcGroup}>
                    <circle
                      ref={arcRef}
                      cx="100"
                      cy="100"
                      r={RING_R}
                      className={styles.sceneArc}
                      strokeDasharray={RING_C}
                      strokeDashoffset={RING_C}
                      transform="rotate(-90 100 100)"
                    />
                  </g>
                  {/* Stations: holle oranje ringen op de lus, klikbaar */}
                  <g className={styles.dotsLayer}>
                    {DOT_ANGLES.map((dotAngle, i) => {
                      const { cx, cy } = dotPos(dotAngle)
                      return (
                        <circle
                          key={dotAngle}
                          cx={cx}
                          cy={cy}
                          r="5"
                          className={styles.ringDot}
                          vectorEffect="non-scaling-stroke"
                          onClick={() => goToBeat(i)}
                        />
                      )
                    })}
                  </g>
                  <g ref={dotGroupRef} className={styles.travelGroup}>
                    <circle
                      cx="100"
                      cy={100 - RING_R}
                      r="3.6"
                      className={styles.travelDot}
                      vectorEffect="non-scaling-stroke"
                    />
                  </g>
                  {/* Uitbraak: outline-pijl recht omlaag, door het gat naar #methode */}
                  <g transform="translate(100 100)">
                    <path
                      d="M-6.2 54 L-6.2 78 L-14 78 L0 98 L14 78 L6.2 78 L6.2 54 Z"
                      className={styles.breakArrow}
                    />
                  </g>
                </svg>

                {broken ? (
                  <button
                    type="button"
                    className={styles.breakToMethod}
                    onClick={goToMethod}
                    aria-label="Naar onze methode"
                  />
                ) : null}

                <div className={styles.stageBeats}>
                  {BEATS.map((beat, i) => (
                    <div
                      key={i}
                      className={`${styles.sceneBeat}${
                        i === activeBeat ? ` ${styles.sceneBeatActive}` : ''
                      }${beat.ghost ? ` ${styles.beatGhost}` : ''}${
                        beat.variant === 'break' ? ` ${styles.beatBreak}` : ''
                      }`}
                    >
                      <p className={`${styles.beatLead} ${styles.sceneLead}`}>{beat.lead}</p>
                      {beat.rest ? (
                        <p className={`${styles.beatRest} ${styles.sceneRest}`}>
                          {beat.rest.map((line) => (
                            <span key={line} className={styles.beatRestLine}>
                              {line}
                            </span>
                          ))}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.loop}>
            {BEATS.map((beat, i) => (
              <div
                key={i}
                className={`${styles.beat}${beat.ghost ? ` ${styles.beatGhost}` : ''}`}
              >
                <p className={styles.beatLead}>{beat.lead}</p>
                {beat.rest ? (
                  <p className={styles.beatRest}>
                    {beat.rest.map((line) => (
                      <span key={line} className={styles.beatRestLine}>
                        {line}
                      </span>
                    ))}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
