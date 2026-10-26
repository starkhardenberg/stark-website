import Link from 'next/link'
import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import HeroTitle from '@/components/dienst/HeroTitle'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { BookButton, CloseStamp, Section, SplitAside, createPageRhythm } from './DienstParts'
import DienstQuoteRoster from './DienstQuoteRoster'
import { momentumPeople } from '@/components/testimonials/portrait-quotes'
import {
  MOMENTUM_FAQ,
  MOMENTUM_SCHEDULE,
  MOMENTUM_STARTS,
} from './momentum'
import styles from './DienstPage.module.css'

export default function DienstPage() {
  let section = 0
  const num = () => String(++section).padStart(2, '0')
  const { tone, footerTone } = createPageRhythm()
  const introTone = tone()
  const worksTone = tone()
  const eerlijkTone = tone()
  const quoteTone = tone()
  const praktischTone = tone()
  const faqTone = tone()
  const slotTone = tone()

  return (
    <main className={styles.page}>
      <FaqJsonLd items={MOMENTUM_FAQ} />

      <header className={styles.hero}>
        <Nav />
        <div className={styles.heroSplit}>
          <div className={styles.heroPhotoWrap}>
            <StarkImage
              className={styles.heroPhoto}
              src="/images/foto-momentum-zaal.jpg"
              alt="Groepstraining in de zaal bij STARK! Hardenberg"
              fill
              unaltered
              priority
              quality={85}
              sizes="(min-width: 800px) 56vw, 100vw"
            />
          </div>
          <div className={styles.heroCopy} data-hero-copy="">
            <div className={styles.heroStack}>
              <HeroTitle />
              <p className={styles.heroLine}>Stop met stoppen</p>
            </div>
          </div>
        </div>
      </header>

      <Section number={num()} title="Je weet donders goed wat je wilt:" tone={introTone}>
        <ul className={styles.scenes}>
          <li>
            Uitgerust wakker worden<span className={styles.dot}>.</span>
          </li>
          <li>
            De boodschappen in één keer naar binnen dragen<span className={styles.dot}>.</span>
          </li>
          <li>
            &apos;s Avonds nog een potje voetballen met je kinderen<span className={styles.dot}>.</span>
          </li>
          <li>
            Je broek van vorig jaar weer aan kunnen<span className={styles.dot}>.</span>
          </li>
          <li>
            Doen wat je die dag had bedacht, zonder jezelf tekort te doen
            <span className={styles.dot}>.</span>
          </li>
        </ul>
        <div className={`${styles.prose} ${styles.introProse}`}>
          <p>
            Of iets anders wat je voor elkaar wilt krijgen. En je weet ook heel goed wat er moet gebeuren om dat voor elkaar te krijgen.
            Afvallen. Aankomen. Stoppen met roken.
            Structuur in je dag. Afspraken met jezelf die je nakomt. Kennis genoeg.
          </p>
          <p>
            Dus je begint vol goede moed. Een week, soms drie. Dan komt er iets tussen, of het wordt
            uitdagender dan je dacht. Daar blijft het meestal liggen.
          </p>
          <p>
            Momentum is tien weken in een kleine groep. Trainen, coachen, challenges en
            opdrachten. Zodat je elke week opnieuw doet wat je te doen hebt. Ook als het tegenvalt of
            meer van je vraagt dan je gewend bent.
          </p>
        </div>
        <CloseStamp lines={['Dit keer fiks je het']} />
      </Section>

      <Section number={num()} title="Hoe het werkt" tone={worksTone}>
        <div className={styles.parts}>
          <div className={styles.part}>
            <h3 className={styles.partTitle}>Trainen</h3>
            <p>
              Elke training kom je op een punt waar je liever ophoudt. Daar zie je wat je doet. Harder
              gaan om er vanaf te zijn. Een slokje water voor wat extra rust. Het goedpraten. Of
              met verstand op 0 gewoon maar dom door blijven gaan. Dat doe je thuis en op je werk ook. Hier zie je het gebeuren, in je eigen lijf,
              met een coach ernaast. 15 keer in 10 weken. Je hoeft nog geen sporter te zijn. Iedereen kan meedoen.
            </p>
          </div>
          <div className={styles.part}>
            <h3 className={styles.partTitle}>Coachen</h3>
            <p>
              Om de week zit je twee uur met de groep. Elke sessie gaat over één ding dat bepaalt of je
              iets volhoudt. Hoe sterk je plan is. Welke acties je echt moet doen. In welke patronen je
              schiet als het moeilijk wordt. En boven alles: iemand worden die de acties ook echt doet.
              Je krijgt uitleg, je ziet hoe het bij jou werkt, en je bepaalt wat je vóór de volgende
              sessie doet.
            </p>
          </div>
          <div className={styles.part}>
            <h3 className={styles.partTitle}>Challenge</h3>
            <p>
              In elke coachingsessie zit een challenge: een fysieke uitdaging die past bij het thema van
              die sessie. Soms alleen, soms als groep. Daar word je uitgedaagd en kom je jezelf tegen. Je
              gaat er bewust mee aan de slag, en daarna bespreek je wat je deed. Zo leer je jezelf kennen
              in uitdagende situaties, en leer je ermee omgaan op een manier die werkt.
            </p>
          </div>
          <div className={styles.part}>
            <h3 className={styles.partTitle}>Opdracht voor thuis</h3>
            <p>
              Uit elke coaching komt een opdracht waarmee je thuis aan de slag gaat, in de weken tussen
              de sessies. Je werkt aan het thema van die sessie. Tussendoor bespreek je hem met de groep.
              Samen weet je meer dan alleen.
            </p>
          </div>
        </div>
        <p className={styles.afsluiter}>
          En je wordt sterker en fitter door het trainen. Dat heb je nodig, want iets volhouden wat nieuw voor je is, kost energie.
          Wie om zes uur &apos;s avonds leeg op de bank ploft, komt er niet meer af.
        </p>
      </Section>

      <Section number={num()} title="Wat we van je vragen" tone={eerlijkTone}>
        <SplitAside
          main={
            <>
              <div className={styles.prose}>
                <p>
                  Je komt. Twee keer per week, ook op de avond dat je jezelf hoort zeggen dat
                  één keer overslaan niet uitmaakt. Juist op die avond maak je het verschil.
                </p>
                <p>
                  Je doet je opdracht en de acties die eruit voortkomen. Iets waar je tot nu
                  toe liever voor wegliep. Wat je moet doen wist je al. Nu doe je het.
                </p>
                <p>
                  Je zegt het als het niet gelukt is. Dan praten we erover, want daar zit de
                  winst. We rekenen je er niet op af. We willen dat je verder komt. Wat er in de groep gezegd
                  wordt, blijft in de groep.
                </p>
              </div>
              <CloseStamp lines={['Jij zet de stappen.', 'Wij lopen naast je.']} />
            </>
          }
          aside={
            <div className={styles.sub}>
              <h3 className={styles.h3}>Soms past iets anders beter</h3>
              <ul className={styles.list}>
                <li>
                  Wil je alleen fitter worden en verder niets veranderen? Word dan lid. Dat is goedkoper en
                  het werkt.
                </li>
                <li>Zoek je een schema of tips en trucs? Dan past personal training beter.</li>
                <li>
                  Zit je in een burn-out of ben je onder behandeling? Dan werken we liever{' '}
                  <Link href="/impact" className={styles.link}>
                    1-op-1
                  </Link>{' '}
                  met je, zodat we met gerichte aandacht aan de slag kunnen.
                </li>
              </ul>
            </div>
          }
        />
      </Section>

      <DienstQuoteRoster tone={quoteTone} people={momentumPeople} />

      <Section number={num()} title="Praktisch" tone={praktischTone}>
        <div className={styles.groups}>
          <div className={styles.group}>
            <h3 className={styles.h3}>Tijden</h3>
            <ul className={styles.list}>
              {MOMENTUM_SCHEDULE.map((slot) => (
                <li key={slot.when}>
                  <b>{slot.when}</b> · {slot.what}
                  {'note' in slot ? <span className={styles.listLine}>{slot.note}</span> : null}
                </li>
              ))}
            </ul>
            <p className={styles.groupClose}>Elke groep, tien weken lang</p>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>De groep</h3>
            <ul className={styles.list}>
              <li>Een groep van 5 tot 10 mensen. Vaste start, vaste eindstreep, niemand stroomt halverwege in</li>
              <li>Onze coaches begeleiden je van de eerste tot de laatste week</li>
            </ul>
            <p className={styles.groupClose}>Samen uit, samen thuis.</p>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>Startdata</h3>
            <ul className={styles.list}>
              {MOMENTUM_STARTS.map((item) => (
                <li key={item.start}>
                  <b>{item.start}</b> · {item.group}
                  <span className={styles.small}>eerste coachingsessie {item.firstCoaching}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <BookButton className={styles.buttonTiles} />
      </Section>

      <Section number={num()} title="Goede vragen" tone={faqTone}>
        <FaqList tone={faqTone} items={MOMENTUM_FAQ} />
      </Section>

      <Section number={num()} title="Het begint met een gesprek" tone={slotTone}>
        <div className={styles.prose}>
          <p>
            Een kennismaking van een uur met één van onze coaches. Wat wil je voor elkaar krijgen, en waar liep
            het tot nu toe op vast? Past het, dan plannen we je start. Past het niet, dan zeggen we dat.
            Ook dat is een uitkomst.
          </p>
        </div>
        <BookButton className={styles.buttonSlot} />
        <p className={styles.dialect}>
          Kom moar op<span className={styles.dialectBang}>!</span>
        </p>
      </Section>

      <Footer photoless ctaless tone={footerTone()} />
    </main>
  )
}
