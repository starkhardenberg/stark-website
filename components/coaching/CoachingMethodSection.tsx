'use client'

import { useEffect, useRef, useState } from 'react'
import { STARK_GRAIN } from '@/lib/stark-grain'
import styles from './CoachingMethodSection.module.css'

type StepId = 'zijn' | 'doen' | 'resultaat'

const STEPS: Array<{ id: StepId; word: string; note: string }> = [
  { id: 'zijn', word: 'Wie je bent', note: 'Hier beginnen wij' },
  { id: 'doen', word: 'Wat je doet', note: 'Hier begint de meeste coaching' },
  { id: 'resultaat', word: 'Je resultaat', note: 'Hier kijkt iedereen naar' },
]

const CHAPTERS: Array<{ step: StepId; title: string; body: string | string[] }> = [
  {
    step: 'zijn',
    title: 'De meeste coaching slaat dit over',
    body: [
      'Meestal weet je wel wat je moet doen om iets te veranderen. Toch blijft het liggen, of begin je vol goede moed en stop je na een paar weken alweer. Bijvoorbeeld als het moeilijk wordt, of er iets gebeurt in je leven waarmee je een excuus hebt om het niet te doen.',
      'Blijvend resultaat vraagt om iets anders. Wat we moeten doen, ervaren we als oncomfortabel, moeilijk, lastig, uitdagend: geef het maar een naam. Daar zit een verhaal onder. Over hoe je jezelf onbewust ziet. Hoe je jezelf onbewust hebt gebouwd. Wie je als vanzelf wordt als iets moeilijk voor je wordt. En die persoon houdt het niet vol om te doen wat er gedaan moet worden voor wat je wilt bereiken.',
      'Je gaat iets pas structureel doen als je jezelf hebt gebouwd tot iemand die wél doet wat er gedaan moet worden. Ook als het tegenzit, of als het niet loopt zoals je zou willen.',
    ],
  },
  {
    step: 'doen',
    title: 'Eerst het zien, dan meters maken',
    body: [
      'Je komt omdat er iets in je leven niet werkt: je blijft steken op hetzelfde punt, of wat je wilt komt niet dichterbij. In de coaching maken we zichtbaar wat je nu nog niet van jezelf ziet. En als je het niet ziet, kun je het ook niet aanpakken. Daarom is coaching onderdeel van onze programma\'s: het stuk waar het begint.',
      'We combineren dat met het fysieke. Want precies dat ongemakkelijke stuk komt ook voorbij in de training. Elke sessie raak je het punt waar iets uitdagend, moeilijk of oncomfortabel voelt. Ga je daar niet bewust mee om, dan doe je als vanzelf wat je altijd doet. Je patronen komen boven: niet zeuren, schouders eronder, doorgaan. Of je geeft toe aan redenen en excuses om het niet te doen, of je doet een paar herhalingen minder. Of je vindt die training maar een stom gebeuren.',
      'Precies wat je thuis ook doet, alleen zie je het hier gebeuren met je eigen lijf. Zo oefen je met kiezen, voor dat wat in je leven anders moet.',
      'Door fysiek te trainen leg je ook een sterke basis. Meer energie om je dag door te komen. Echt sterker worden. Dingen makkelijker kunnen doen.',
      'Bouw je jezelf tot iemand die doet wat er gedaan moet worden voor wat je wilt bereiken, dan onderneem je die acties ook. Dat gaat met vallen en opstaan. We blijven mens. Kracht zit in hoe snel je corrigeert. Wie je bent bepaalt wat je doet. Lukt het in de training, dan voedt dat een stemmetje: hé, ik kan dit wel. Het lukt me wel. En precies dat helpt je ook bij andere dingen die nu nog oncomfortabel lijken.',
    ],
  },
  {
    step: 'resultaat',
    title: 'Je hebt het je eigen gemaakt',
    body: [
      'Het resultaat is geen nieuw plan. Het is dat je anders staat: als iemand die doet wat er gedaan moet worden, ook als het schuurt. Dat heb je geoefend, keer op keer, onder druk. In coaching zichtbaar gemaakt, in training op scherp gezet. Daardoor houd je het vast als het traject klaar is.',
      'En door te doen wat je te doen hebt, bouw je ook het resultaat dat er voor jou werkelijk toe doet. Wat dat ook is: een betere relatie met je partner, meer rust in wie je bent als ouder, een collega die blijft staan als de druk op de ketel toeneemt, of een gezonder en sterker lijf. Wat in je leven vastzat, komt in beweging en blijft in beweging.',
    ],
  },
]

export default function CoachingMethodSection() {
  const [activeChapter, setActiveChapter] = useState(0)
  const chapterRefs = useRef<Array<HTMLDivElement | null>>([])
  const activeRef = useRef(0)

  useEffect(() => {
    let frame = 0

    const pickActive = () => {
      const nodes = chapterRefs.current
      if (!nodes.some(Boolean)) return

      // Leeslijn iets boven het midden: daar ligt het oog bij scrollen
      const focusY = window.innerHeight * 0.38
      let next = 0

      for (let i = 0; i < nodes.length; i++) {
        const el = nodes[i]
        if (!el) continue
        const { top, bottom } = el.getBoundingClientRect()
        if (top <= focusY && bottom >= focusY) {
          next = i
          break
        }
        // Nog geen match: laatste hoofdstuk waarvan de top al voorbij de leeslijn is
        if (top <= focusY) next = i
      }

      if (next !== activeRef.current) {
        activeRef.current = next
        setActiveChapter(next)
      }
    }

    const onScrollOrResize = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(pickActive)
    }

    pickActive()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  const activeStep = CHAPTERS[activeChapter].step

  const goToChapter = (i: number) => {
    const el = chapterRefs.current[i]
    if (!el) return
    activeRef.current = i
    setActiveChapter(i)
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section
      id="methode"
      className={`${styles.method} ${STARK_GRAIN}`}
      aria-label="Onze methode"
    >
      <div className={styles.inner}>
        <header className={styles.head}>
          <h2 className={styles.statement}>
            <span>Onze methode</span>
          </h2>
          <p className={styles.opener}>
            <span>Informatie is er genoeg. Daar ligt het niet aan.</span>
            <span>Het verschil zit in wie je bent. Daar start onze coaching.</span>
          </p>
        </header>

        {/* Mobiel: sticky balk met de drie woorden; op desktop staan ze per rij naast hun tekst */}
        <div className={styles.chain} role="tablist" aria-label="De driesprong">
          {STEPS.map((step, i) => (
            <div key={step.id} style={{ display: 'contents' }}>
              {i > 0 ? (
                <span className={styles.chainArrow} aria-hidden>
                  →
                </span>
              ) : null}
              <button
                type="button"
                role="tab"
                aria-selected={activeStep === step.id}
                aria-controls={`methode-${step.id}`}
                className={`${styles.chainStep} ${styles.chainStepButton}${
                  activeStep === step.id ? ` ${styles.chainStepActive}` : ''
                }`}
                onClick={() => goToChapter(i)}
              >
                <span className={styles.chainWord}>{step.word}</span>
                <span className={styles.chainNote}>{step.note}</span>
              </button>
            </div>
          ))}
        </div>

        <div className={styles.chapters}>
          {CHAPTERS.map((chapter, i) => {
            const step = STEPS.find((s) => s.id === chapter.step)!
            const active = i === activeChapter
            return (
              <div
                key={chapter.title}
                id={`methode-${step.id}`}
                data-index={i}
                ref={(el) => {
                  chapterRefs.current[i] = el
                }}
                className={`${styles.chapter}${active ? ` ${styles.chapterActive}` : ''}`}
              >
                <button
                  type="button"
                  className={`${styles.rowRail} ${styles.chainStep} ${styles.chainStepButton}${
                    active ? ` ${styles.chainStepActive}` : ''
                  }`}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => goToChapter(i)}
                >
                  <span className={styles.railCopy}>
                    <span className={styles.chainWord}>{step.word}</span>
                    <span className={styles.railBody}>
                      <span className={styles.railTrack} aria-hidden>
                        <span className={styles.railLine} />
                        {i < CHAPTERS.length - 1 ? (
                          <span className={styles.railArrow}>
                            <svg viewBox="0 0 24 14" width="18" height="12" aria-hidden>
                              <path
                                d="M3 2l9 10 9-10"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span className={styles.railDot} />
                        )}
                      </span>
                      <span className={styles.chainNote}>{step.note}</span>
                    </span>
                  </span>
                </button>
                <div className={styles.chapterText}>
                  <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                  <div className={styles.chapterBodyStack}>
                    {(Array.isArray(chapter.body) ? chapter.body : [chapter.body]).map(
                      (para) => (
                        <p key={para.slice(0, 40)} className={styles.chapterBody}>
                          {para}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
