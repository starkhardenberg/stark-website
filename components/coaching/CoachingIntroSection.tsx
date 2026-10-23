'use client'

import { useEffect, useRef, useState } from 'react'
import introStyles from '@/components/IntroSection.module.css'
import styles from './CoachingIntroSection.module.css'
import methodStyles from './CoachingMethodSection.module.css'

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
/* Ná de doorbraak: één stap, dan komt de methode. Langer houdt de pijl boven leegte. */
const TAIL_SEGMENTS = 1
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
  const arrowRef = useRef<SVGGElement | null>(null)
  const shaftRef = useRef<SVGPathElement | null>(null)
  const activeBeatRef = useRef(0)
  const exitLockRef = useRef(false)
  const handsOffUntilRef = useRef(0)
  const cancelMoveRef = useRef<() => void>(() => {})
  const brokeOutRef = useRef(false)

  useEffect(() => {
    setLive(true)
  }, [])

  useEffect(() => {
    if (!live) return

    let ticking = false
    const root = document.documentElement
    const prevSnap = root.style.scrollSnapType
    // Geen CSS-snap: die vocht met de trackpad-uitloop en sloeg stappen over of bleef hangen.
    root.style.scrollSnapType = ''
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const update = () => {
      ticking = false
      const el = sceneRef.current
      if (!el) return
      const viewportH = window.innerHeight
      const scrollable = el.offsetHeight - viewportH
      if (scrollable <= 0) return
      const top = el.getBoundingClientRect().top
      const banner = el.querySelector('[class*="stageBanner"]') as HTMLElement | null
      if (banner && window.matchMedia('(max-width: 899px)').matches) {
        const bannerH = `${Math.ceil(banner.offsetHeight)}px`
        if (el.style.getPropertyValue('--circle-banner') !== bannerH) {
          el.style.setProperty('--circle-banner', bannerH)
        }
      }
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
      // Pijl direct weg. Anders draait die mee en wijst linksonder bij het terugtikken.
      if (arrowRef.current && !isBroken) {
        arrowRef.current.style.opacity = '0'
        arrowRef.current.style.transform = ''
        arrowRef.current.style.transition = ''
      }
      syncPeek(el)
      if (isBroken) {
        fitShaft(el)
        retractArrow()
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
      const el = sceneRef.current
      if (el) {
        const rect = el.getBoundingClientRect()
        const inScene = rect.top < window.innerHeight && rect.bottom > 0
        if (!inScene) exitLockRef.current = false
      } else {
        exitLockRef.current = false
      }

      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    /*
     * Eén veeg = één stap, tot de cirkel dicht is.
     * De veeg daarna is de doorbraak: ring open, pijl omlaag, methode eronder.
     * Geen extra lege stap, en de uitloop van de trackpad mag niet doorvliegen.
     */
    const ANIM_MS = 420
    const CLOSED = RING_MOMENTS - 1
    let stepIndex = 0
    let gesture = false
    let acc = 0
    let lastEvent = 0
    let lastAbs = 0
    let animDoneAt = 0
    let anim = 0
    let breakTimer = 0
    let touchStartY = 0
    let touchStartX = 0
    let handedOff = false

    const metrics = (el: HTMLElement) => {
      const scrollable = el.offsetHeight - window.innerHeight
      const segPx = scrollable / TOTAL_SEGMENTS
      const top = el.getBoundingClientRect().top
      const raw = segPx > 0 ? -top / segPx : 0
      const sceneTop = window.scrollY + top
      return { scrollable, segPx, raw, sceneTop, top }
    }

    const animateTo = (top: number, dur = ANIM_MS) => {
      cancelAnimationFrame(anim)
      if (reducedMotion) {
        window.scrollTo(0, top)
        return
      }
      const from = window.scrollY
      const dist = top - from
      const t0 = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - t0) / dur)
        const eased = 1 - (1 - t) ** 3
        window.scrollTo(0, from + dist * eased)
        if (t < 1) anim = requestAnimationFrame(tick)
      }
      anim = requestAnimationFrame(tick)
    }

    const releasePeek = (method: HTMLElement, peek: HTMLElement) => {
      peek.style.display = 'none'
      method.style.visibility = ''
    }

    // Onder de cirkel staat het begin van de methode al. Geen leeg vlak.
    const syncPeek = (el: HTMLElement) => {
      const method = document.getElementById('methode')
      const peek = el.querySelector('[class*="methodPeek"]') as HTMLElement | null
      const ring = el.querySelector('[class*="stageRing"]') as HTMLElement | null
      if (!method || !peek || !ring) return
      if (!brokeOutRef.current) handedOff = false
      const narrow = window.matchMedia('(max-width: 899px)').matches
      const scene = el.getBoundingClientRect()
      const inCircle = narrow && scene.top < 48 && scene.bottom > window.innerHeight * 0.5
      if (!inCircle || handedOff) {
        releasePeek(method, peek)
        return
      }
      const ringBottom = ring.getBoundingClientRect().bottom
      peek.style.display = 'flex'
      peek.style.top = `${Math.round(ringBottom)}px`
      const peekHead = peek.querySelector('h2')
      const realHead = method.querySelector('h2')
      if (brokeOutRef.current && peekHead && realHead) {
        const realTop = realHead.getBoundingClientRect().top
        const peekTop = peekHead.getBoundingClientRect().top
        const close = realTop <= peekTop + 20
        const settled = performance.now() > animDoneAt && realTop < window.innerHeight * 0.85
        if (close || settled) {
          handedOff = true
          releasePeek(method, peek)
          return
        }
      }
      method.style.visibility = 'hidden'
    }

    // Schacht onder de zin. Het puntje tikt de kop van de methode aan.
    const fitShaft = (el: HTMLElement) => {
      const path = shaftRef.current
      if (!path || !window.matchMedia('(max-width: 899px)').matches) return
      const ring = el.querySelector('[class*="stageRing"]') as HTMLElement | null
      const lead = el.querySelector(
        '[class*="beatBreak"] [class*="sceneLead"]',
      ) as HTMLElement | null
      const beat = lead?.parentElement
      const peek = el.querySelector('[class*="methodPeek"]') as HTMLElement | null
      const target =
        (peek && peek.style.display !== 'none' ? peek.querySelector('h2') : null) ||
        document.querySelector('#methode h2')
      if (!ring || !lead || !beat || !target) return
      const ringRect = ring.getBoundingClientRect()
      const leadRect = lead.getBoundingClientRect()
      const headRect = target.getBoundingClientRect()
      const h = ring.offsetHeight
      if (h <= 0 || ringRect.height <= 0) return
      const transform = getComputedStyle(beat).transform
      const shift = transform && transform !== 'none' ? new DOMMatrix(transform).m42 : 0
      const center = ringRect.top + ringRect.height / 2
      const toLocal = (y: number) => ((y - center) / ringRect.height) * 200
      const leadLocal = toLocal(leadRect.bottom - shift)
      const shaft = Math.max(6, leadLocal + (16 * 200) / (h * 0.92) + 1.1)
      const tipViewport = headRect.top + 8
      // Schacht kruist de naad. De punt gaat open in het zwart, niet op de lijn.
      const strokePx = (2.2 / 200) * ringRect.height
      const barbViewport = ringRect.bottom + 58 + strokePx / 2
      const tip = toLocal(tipViewport)
      const barb = toLocal(barbViewport)
      const top = Math.min(shaft, barb - 8).toFixed(1)
      const neck = barb.toFixed(1)
      const point = Math.max(barb + 6, tip).toFixed(1)
      path.setAttribute(
        'd',
        `M-6.2 ${top} L-6.2 ${neck} L-16 ${neck} L0 ${point} L16 ${neck} L6.2 ${neck} L6.2 ${top} Z`,
      )
    }

    // Weg zodra de methode in beeld komt. Geen CSS-transform op de pijl:
    // die overschrijft translate(100 100) en zet de pijl linksboven vast.
    const retractArrow = () => {
      const arrow = arrowRef.current
      if (!arrow) return
      arrow.style.transform = ''
      if (!window.matchMedia('(max-width: 899px)').matches) {
        arrow.style.opacity = ''
        arrow.style.transition = ''
        return
      }
      const head = document.querySelector('#methode h2')
      if (!head) return
      const headTop = head.getBoundingClientRect().top
      const fadeStart = window.innerHeight * 0.88
      const fadeEnd = window.innerHeight * 0.62
      const t = Math.min(1, Math.max(0, (fadeStart - headTop) / (fadeStart - fadeEnd)))
      if (t <= 0) {
        arrow.style.opacity = ''
        arrow.style.transition = ''
        return
      }
      arrow.style.transition = 'none'
      arrow.style.opacity = t >= 1 ? '0' : (1 - t).toFixed(3)
    }

    // Eén beweging: ring open, pijl omlaag, methode eronder. Geen tussenstop.
    const startBreakout = (el: HTMLElement) => {
      const method = document.getElementById('methode')
      if (!method) return
      gesture = true
      acc = 0
      brokeOutRef.current = true
      window.clearTimeout(breakTimer)
      const dur = 860
      animDoneAt = performance.now() + dur + 200
      const narrow = window.matchMedia('(max-width: 899px)').matches
      syncPeek(el)
      if (narrow) fitShaft(el)
      const ring = el.querySelector('[class*="stageRing"]') as HTMLElement | null
      const peekHead = el.querySelector('[class*="methodPeek"] h2')
      const realHead = method.querySelector('h2')
      let gap = 0
      if (narrow && peekHead && ring) {
        const ringRect = ring.getBoundingClientRect()
        const h = ring.offsetHeight
        const delta = h > 0 ? (h * 0.92) / 2 - ringRect.height / 2 : 0
        gap = Math.round(peekHead.getBoundingClientRect().top + delta)
      }
      const anchor = narrow && realHead ? realHead : method
      const dest = window.scrollY + anchor.getBoundingClientRect().top - gap
      stepIndex = TOTAL_SEGMENTS
      animateTo(dest, dur)
    }

    const goToIndex = (el: HTMLElement, index: number) => {
      const { segPx, sceneTop, scrollable } = metrics(el)
      if (scrollable <= 0) return
      const next = Math.max(0, Math.min(TOTAL_SEGMENTS, index))
      stepIndex = next
      animateTo(sceneTop + next * segPx)
    }

    const syncIndex = (el: HTMLElement) => {
      const { raw, scrollable } = metrics(el)
      if (scrollable <= 0) return
      stepIndex = Math.max(0, Math.min(TOTAL_SEGMENTS, Math.round(raw)))
    }

    // 'free' | 'arrive' | 'in'
    const zone = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      if (rect.top <= 16 && rect.bottom > vh * 0.45) return 'in'
      if (rect.top > 16 && rect.top < vh * 0.42 && rect.bottom > vh * 0.85) return 'arrive'
      return 'free'
    }

    const atExit = (dir: number) =>
      (dir < 0 && stepIndex <= 0 && !brokeOutRef.current) || (dir > 0 && brokeOutRef.current)

    cancelMoveRef.current = () => {
      cancelAnimationFrame(anim)
      window.clearTimeout(breakTimer)
      gesture = false
      acc = 0
    }

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return
      const el = sceneRef.current
      if (!el || exitLockRef.current) return
      const where = zone(el)
      if (where === 'free') return

      // Muiswiel komt soms in 'regels' binnen. Eén tik moet één stap zijn.
      const delta =
        e.deltaMode === 1 ? e.deltaY * 40 : e.deltaMode === 2 ? Math.sign(e.deltaY) * 80 : e.deltaY
      const dir = delta > 0 ? 1 : delta < 0 ? -1 : 0
      if (!dir) return

      const now = performance.now()
      const gap = now - lastEvent
      lastEvent = now
      const abs = Math.abs(delta)
      const animating = now < animDoneAt
      // Uitloop wordt kleiner. Een nieuwe vinger zet er weer een harde tik op.
      const spike = gesture && !animating && abs > Math.max(28, lastAbs * 2.4)
      const fresh = !animating && (gap > 110 || spike)
      lastAbs = abs * 0.6 + lastAbs * 0.4

      if (now < handsOffUntilRef.current) {
        e.preventDefault()
        return
      }

      if (fresh) {
        gesture = false
        acc = 0
        syncIndex(el)
      }

      // De veeg die de cirkel bereikt parkeert op de eerste stap.
      if (where === 'arrive') {
        if (dir < 0) return
        e.preventDefault()
        if (!gesture) {
          gesture = true
          animDoneAt = now + ANIM_MS
          goToIndex(el, 0)
        }
        return
      }

      if (!gesture && atExit(dir)) return

      e.preventDefault()
      if (gesture) return

      // Cirkel is dicht. Deze ene tik breekt uit. Geen tweede of derde stap.
      const closed = stepIndex >= CLOSED || metrics(el).raw >= CLOSED - 0.05
      if (dir > 0 && closed && !brokeOutRef.current) {
        acc += delta
        if (acc >= 18) startBreakout(el)
        return
      }

      // Vanuit de doorbraak één veeg terug naar de gesloten cirkel.
      if (dir < 0 && brokeOutRef.current) {
        acc += delta
        if (acc <= -18) {
          brokeOutRef.current = false
          gesture = true
          animDoneAt = now + ANIM_MS
          goToIndex(el, CLOSED)
        }
        return
      }

      acc += delta
      if (Math.abs(acc) >= 18) {
        gesture = true
        animDoneAt = now + ANIM_MS
        goToIndex(el, stepIndex + (acc > 0 ? 1 : -1))
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0]
      if (!t) return
      touchStartY = t.clientY
      touchStartX = t.clientX
      const el = sceneRef.current
      if (el && performance.now() >= animDoneAt) syncIndex(el)
    }

    const onTouchMove = (e: TouchEvent) => {
      const el = sceneRef.current
      if (!el || exitLockRef.current || zone(el) !== 'in') return
      const t = e.touches[0]
      if (!t) return
      const dy = touchStartY - t.clientY
      const dx = touchStartX - t.clientX
      if (Math.abs(dy) < 10 || Math.abs(dy) < Math.abs(dx)) return
      const dir = dy > 0 ? 1 : -1
      if (atExit(dir)) return
      e.preventDefault()
    }

    const onTouchEnd = (e: TouchEvent) => {
      const el = sceneRef.current
      if (!el || exitLockRef.current || zone(el) !== 'in') return
      const t = e.changedTouches[0]
      if (!t) return
      const dy = touchStartY - t.clientY
      const dx = touchStartX - t.clientX
      if (Math.abs(dy) < 36 || Math.abs(dy) < Math.abs(dx)) return
      const now = performance.now()
      if (now < animDoneAt) return
      const dir = dy > 0 ? 1 : -1
      syncIndex(el)
      if (atExit(dir)) return
      if (dir > 0 && stepIndex >= CLOSED && !brokeOutRef.current) {
        startBreakout(el)
        return
      }
      if (dir < 0 && brokeOutRef.current) {
        brokeOutRef.current = false
        gesture = true
        animDoneAt = now + ANIM_MS
        goToIndex(el, CLOSED)
        return
      }
      gesture = true
      animDoneAt = now + ANIM_MS
      goToIndex(el, stepIndex + dir)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('resize', onScroll)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      cancelAnimationFrame(anim)
      window.clearTimeout(breakTimer)
      cancelMoveRef.current = () => {}
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      root.style.scrollSnapType = prevSnap
      const method = document.getElementById('methode')
      if (method) method.style.visibility = ''
    }
  }, [live])

  const goToBeat = (i: number) => {
    const el = sceneRef.current
    if (!el) return
    const scrollable = el.offsetHeight - window.innerHeight
    if (scrollable <= 0) return
    cancelMoveRef.current()
    brokeOutRef.current = false
    handsOffUntilRef.current = performance.now() + 650
    const segPx = scrollable / TOTAL_SEGMENTS
    const sceneTop = window.scrollY + el.getBoundingClientRect().top
    window.scrollTo({ top: sceneTop + i * segPx, behavior: 'smooth' })
  }

  const goToMethod = () => {
    const target = document.getElementById('methode')
    if (!target) return
    cancelMoveRef.current()
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
              <header className={`${introStyles.banner} ${styles.stageBanner}`}>
                <h2 className={`${introStyles.quote} ${introStyles.quoteLoud}`}>
                  <span className={introStyles.quoteLine}>Klaar met</span>
                  <span className={`${introStyles.quoteLine} ${introStyles.quoteMark}`}>
                    aanmodderen
                  </span>
                </h2>
                <p className={`starkSectionMeta ${introStyles.positioning} ${styles.metaLouder}`}>
                  Wij noemen het cirkelen
                </p>
              </header>
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
                    />
                  </g>
                  {/* Uitbraak: outline-pijl recht omlaag, door het gat naar #methode.
                      Op mobiel loopt een langere kop door tot in het donker eronder. */}
                  <g ref={arrowRef} transform="translate(100 100)">
                    <path
                      d="M-6.2 54 L-6.2 78 L-14 78 L0 98 L14 78 L6.2 78 L6.2 54 Z"
                      className={styles.breakArrow}
                    />
                    <path
                      ref={shaftRef}
                      d="M-6.2 34 L-6.2 124 L-16 124 L0 156 L16 124 L6.2 124 L6.2 34 Z"
                      className={`${styles.breakArrow} ${styles.breakArrowDeep}`}
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
              <div className={styles.methodPeek} aria-hidden="true">
                <div className={methodStyles.inner}>
                  <header className={methodStyles.head}>
                    <h2 className={methodStyles.statement}>
                      <span>Onze methode</span>
                    </h2>
                    <p className={methodStyles.opener}>
                      <span>Informatie is er genoeg. Daar ligt het niet aan.</span>
                      <span>Daar waar je jezelf in de weg zit. Daar start onze coaching.</span>
                    </p>
                  </header>
                  <div className={methodStyles.chain}>
                    <div className={`${methodStyles.chainStep} ${methodStyles.chainStepActive}`}>
                      <span className={methodStyles.chainWord}>Wie je bent</span>
                      <span className={methodStyles.chainNote}>Hier beginnen wij</span>
                    </div>
                    <span className={methodStyles.chainArrow} aria-hidden>
                      →
                    </span>
                    <div className={methodStyles.chainStep}>
                      <span className={methodStyles.chainWord}>Wat je doet</span>
                      <span className={methodStyles.chainNote}>Hier begint de meeste coaching</span>
                    </div>
                    <span className={methodStyles.chainArrow} aria-hidden>
                      →
                    </span>
                    <div className={methodStyles.chainStep}>
                      <span className={methodStyles.chainWord}>Je resultaat</span>
                      <span className={methodStyles.chainNote}>Hier kijkt iedereen naar</span>
                    </div>
                  </div>
                  <div className={methodStyles.chapters}>
                    <div className={`${methodStyles.chapter} ${methodStyles.chapterActive}`}>
                      <div className={methodStyles.chapterText}>
                        <h3 className={methodStyles.chapterTitle}>De meeste coaching slaat dit over</h3>
                        <p className={methodStyles.chapterBody}>
                          Meestal weet je wel wat je moet doen om iets te veranderen. Toch blijft het
                          liggen, of begin je vol goede moed en stop je na een paar weken alweer.
                        </p>
                      </div>
                    </div>
                  </div>
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
