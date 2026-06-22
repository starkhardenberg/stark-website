import Link from 'next/link'
import { hrefCoaching } from '@/lib/contact'
import Image from 'next/image'
import styles from '../landing.module.css'
import b from './momentum.module.css'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import { getMomentumPageTestimonials, heroQuoteRebekka } from '@/components/testimonials/testimonials-data'

export const metadata = {
  title: 'Momentum — 10 weken groepsprogramma — STARK! Hardenberg',
  description:
    'Tien weken samen verder dan alleen. Fysieke training plus groepscoaching in een vaste kleine groep van maximaal tien mensen.',
}

export default function MomentumPage() {
  return (
    <main className={`${styles.main} ${b.themeB}`}>
      <nav className={styles.nav}>
        <Link href="/#aanbod" className={styles.navBack}>
          ← Terug naar STARK!
        </Link>
        <Link href={hrefCoaching} className={styles.navCta}>
          Kom kennismaken
        </Link>
      </nav>

      <section className={`${styles.hero} ${b.hero}`}>
        <div className={`${styles.heroBg} ${b.heroBg}`}>
          <Image
            src="/images/foto-coaching-samen.jpg"
            alt="Deelnemer midden in een zware oefening tijdens Momentum bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImg} ${b.heroBgImg}`}
            sizes="100vw"
            priority
            style={{ objectPosition: 'center 40%' }}
          />
        </div>
        <div className={`${styles.heroContent} ${b.heroContent}`}>
          <span className={styles.heroLabel}>10-weken groepsprogramma</span>
          <h1 className={b.heroTitle}>
            <span className={b.heroTitleLead}>Stop met</span>
            <span className={b.heroTitlePunch}>stoppen</span>
          </h1>
          <p className={b.heroLead}>
            10 weken waarin je lijf en hoofd samen trainen, zodat je eindelijk voor elkaar krijgt wat er
            voor jou toe doet.
          </p>
          <div className={b.heroActions}>
            <Link href={hrefCoaching} className={b.btnPrimary}>
              Ik wil meedoen
            </Link>
            <a href="#hoe-werkt-het" className={b.btnGhost}>
              Hoe werkt het?
            </a>
          </div>
        </div>
        <div className={styles.heroBar} />
      </section>

      <p className={b.metaLine}>
        10 weken · 20 uur training · 10 uur groepscoaching · 5 challenges · max. 10 personen
      </p>

      <section className={`${b.sectionBase} ${b.sectionLight}`}>
        <div className={b.narrow}>
          <span className={b.label}>Herken je dit?</span>
          <h2 className={b.heading}>Je weet het wel. Je doet het net niet.</h2>
          <p className={b.body}>
            Je weet meestal best wat je te doen hebt. Sporten. Dat gesprek aangaan. Die knoop doorhakken.
            En toch gebeurt het net niet.
          </p>
          <p className={b.body}>
            Je begint vol goede moed en zakt langzaam weer terug. Je stelt uit. Je zegt: volgend jaar echt.
            En diep vanbinnen baal je daarvan.
          </p>
          <p className={b.body}>Dat ligt niet aan je discipline. En zeker niet aan jou als persoon.</p>
        </div>
      </section>

      <section className={`${b.sectionBase} ${b.sectionNavy}`}>
        <div className={b.editorialRow}>
          <figure className={b.editorialMedia}>
            <Image
              src="/images/foto-groep-vloer.jpg"
              alt="Deelnemer op de vloer bij STARK! Hardenberg"
              fill
              className={b.editorialImg}
              sizes="(min-width: 900px) 42vw, 100vw"
              style={{ objectPosition: 'center 34%' }}
            />
          </figure>
          <div className={b.narrowOnDark}>
            <span className={b.labelOnDark}>Waarom het steeds net niet lukt</span>
            <h2 className={b.headingOnDark}>Je brein trekt je terug naar vertrouwd</h2>
            <p className={b.bodyOnDark}>
              Je brein is gebouwd om je te beschermen. Het ziet verandering, ongemak en onzekerheid als
              mogelijk gevaar en trekt je terug naar wat bekend voelt.
            </p>
            <p className={b.bodyOnDark}>
              Dat is het stemmetje dat opduikt zodra je iets nieuws wilt. Het lijkt voorzichtigheid, maar het
              houdt je klein.
            </p>
            <ul className={b.voiceList}>
              <li>Nog even niet.</li>
              <li>Morgen misschien.</li>
              <li>Wat als het fout gaat?</li>
              <li>Dit is niks voor mij.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${b.sectionBase} ${b.sectionLight}`} id="hoe-werkt-het">
        <div className={b.editorialRowReverse}>
          <div className={b.narrowOnDark}>
            <span className={b.labelOnDark}>Wat Momentum anders maakt</span>
            <h2 className={b.headingOnDark}>Niet praten over mindset. Oefenen onder druk.</h2>
            <blockquote className={b.pullQuote}>
              De meeste trajecten bespreken je mindset op een stoel. Wij maken hem voelbaar.
            </blockquote>
            <p className={b.bodyOnDark}>
              Tijdens een intensieve work-out hoor je je stemmetjes precies op het moment dat het zwaar wordt.
              Daar leer je ze herkennen en vervangen door gedachten die je verder helpen.
            </p>
            <p className={b.bodyOnDark}>
              Wat je in de gym oefent, neem je mee naar werk, relaties en keuzes die je te lang uitstelt. En je
              doet het niet alleen: een groep die je scherp houdt en meetrekt als het tegenzit.
            </p>
          </div>
          <figure className={b.editorialMedia}>
            <Image
              src="/images/foto-coaching-moment.jpg"
              alt="Coachingsmoment tijdens Momentum"
              fill
              className={b.editorialImg}
              sizes="(min-width: 900px) 42vw, 100vw"
              style={{ objectPosition: 'center 24%' }}
            />
          </figure>
        </div>
      </section>

      <section className={`${b.sectionBase} ${b.sectionNavy}`}>
        <div className={b.narrowOnDark}>
          <span className={b.labelOnDark}>Dit is wat je gaat doen</span>
          <h2 className={b.headingOnDark}>Tien weken, een helder doel</h2>
          <p className={b.bodyOnDark}>
            Je werkt aan wat je wilt bereiken, en aan wie je moet zijn om dat doel echt te halen.
          </p>
        </div>
        <ul className={b.programList}>
          <li>
            <strong>20 uur fysieke training</strong>
            <span>Sterker worden in je lijf en tegelijk je mindset trainen als het zwaar wordt.</span>
          </li>
          <li>
            <strong>10 uur groepscoaching</strong>
            <span>Vijf sessies van twee uur waarin je patronen leert herkennen en doorbreken.</span>
          </li>
          <li>
            <strong>5 mentale en fysieke challenges</strong>
            <span>Oefenen op het moment dat je normaal uitwijkt. Juist daar gebeurt de doorbraak.</span>
          </li>
        </ul>
        <figure className={b.editorialMediaWide}>
          <Image
            src="/images/foto-coaching-samen.jpg"
            alt="Momentumgroep in actie bij STARK! Hardenberg"
            fill
            className={b.editorialImg}
            sizes="(min-width: 900px) 900px, 100vw"
            style={{ objectPosition: 'center 28%' }}
          />
        </figure>
      </section>

      <section className={`${b.sectionBase} ${b.sectionLight}`}>
        <div className={b.narrow}>
          <span className={b.label}>Wat het je oplevert</span>
          <h2 className={b.heading}>Rust in je hoofd, kracht in je actie</h2>
          <ul className={b.outcomeList}>
            <li>Je herkent het stemmetje dat je tegenhoudt en laat je er niet meer door sturen.</li>
            <li>Je weet wat je doet als het moeilijk wordt en valt niet meer terug in oude patronen.</li>
            <li>Je wordt fysiek sterker, met meer energie en vertrouwen.</li>
            <li>Je zet eindelijk de stap die je al te lang uitstelt.</li>
          </ul>
        </div>
      </section>

      <section className={`${b.sectionBase} ${b.sectionNavy}`}>
        <div className={b.narrowOnDark}>
          <span className={b.labelOnDark}>Voor wie</span>
          <h2 className={b.headingOnDark}>Als je klaar bent om jezelf serieus te nemen</h2>
          <p className={b.bodyOnDark}>
            Voor iedereen die iets voor elkaar wil krijgen wat nu niet lukt, en bereid is daar fysiek en
            mentaal voor te knokken.
          </p>
          <p className={b.bodyOnDark}>Je hoeft geen topsporter te zijn. Je hoeft alleen klaar te zijn om te beginnen.</p>
        </div>
      </section>

      <section className={`${b.sectionBase} ${b.sectionLight}`}>
        <div className={b.narrow}>
          <span className={b.label}>Klaar om te beginnen?</span>
          <h2 className={b.heading}>De volgende groep start binnenkort</h2>
          <p className={b.body}>
            Plekken zijn beperkt, omdat de groep klein genoeg moet blijven om elkaar echt te zien.
          </p>
          <div className={b.heroActions}>
            <Link href={hrefCoaching} className={b.btnPrimary}>
              Meld je aan voor Momentum
            </Link>
            <Link href={hrefCoaching} className={b.btnGhostLight}>
              Plan een kennismaking
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection hero={heroQuoteRebekka} items={getMomentumPageTestimonials()} />

      <section className={`${b.sectionBase} ${b.sectionNavy}`}>
        <div className={b.narrowOnDark}>
          <span className={b.labelOnDark}>Veelgestelde vragen</span>
          <h2 className={b.headingOnDark}>Goede vragen</h2>
          <dl className={b.faq}>
            <div>
              <dt>Moet ik al fit zijn om mee te doen?</dt>
              <dd>
                Nee. We trainen op jouw niveau. Het gaat om wat je in 10 weken in beweging zet, niet om hoe
                sterk je binnenkomt.
              </dd>
            </div>
            <div>
              <dt>Is dit vooral fysiek of vooral mentaal?</dt>
              <dd>
                Allebei. Juist die combinatie werkt. Het fysieke maakt het mentale voelbaar en daardoor blijft
                het hangen.
              </dd>
            </div>
            <div>
              <dt>Wat als ik bang ben dat ik weer afhaak?</dt>
              <dd>
                Dat is precies waar Momentum over gaat. We werken met de patronen waardoor je afhaakt, in een
                groep die je vasthoudt.
              </dd>
            </div>
            <div>
              <dt>Wat zijn kosten, locatie en startdatum?</dt>
              <dd>
                Dat stemmen we concreet met je af in de kennismaking, inclusief tijdsinvestering per week.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  )
}
