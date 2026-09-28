import Link from 'next/link'
import Nav from '@/components/Nav'
import HeroTitle from '@/components/dienst/HeroTitle'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { STARK_CTA, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import {
  BOOKINGS_URL,
  MOMENTUM_FAQ,
  MOMENTUM_QUOTE,
  MOMENTUM_SCHEDULE,
  MOMENTUM_SCHEDULE_NOTE,
  MOMENTUM_STARTS,
} from './momentum'
import styles from './DienstPage.module.css'

function BookButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={BOOKINGS_URL}
      className={`${styles.button} ${STARK_CTA} ${STARK_CTA_PRIMARY} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Plan je kennismaking
    </a>
  )
}

/**
 * Vast koppatroon voor dienstenpagina's: nummer met streepje, titel in Oswald.
 * Links de kop, rechts de inhoud. Op mobiel onder elkaar.
 */
function Section({
  number,
  title,
  tone = 'light',
  children,
}: {
  number: string
  title: string
  tone?: 'light' | 'dark'
  children: React.ReactNode
}) {
  return (
    <section className={tone === 'dark' ? styles.dark : styles.light}>
      <div className={styles.wrap}>
        <div className={styles.sec}>
          <div className={styles.secLead}>
            <span className={styles.num} aria-hidden="true">
              {number}
            </span>
            <h2 className={styles.h2}>{title}</h2>
          </div>
          <div className={styles.secBody}>{children}</div>
        </div>
      </div>
    </section>
  )
}

export default function DienstPage() {
  return (
    <main className={styles.page}>
      <FaqJsonLd items={MOMENTUM_FAQ} />

      <header className={styles.hero}>
        <Nav />
        <div className={styles.heroSplit}>
          <div className={styles.heroPhotoWrap}>
            <img
              className={styles.heroPhoto}
              src="/images/foto-momentum-zaal.jpg"
              alt="Groepstraining in de zaal bij STARK! Hardenberg"
            />
          </div>
          <div className={styles.heroCopy}>
            <div className={styles.heroStack}>
              <HeroTitle />
              <p className={styles.heroLine}>Stop met stoppen</p>
              <BookButton />
            </div>
          </div>
        </div>
      </header>

      <Section number="01" title="Je weet donders goed wat je wilt:">
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
          <li className={styles.sceneOpen}>Of wat jij voor elkaar wilt krijgen.</li>
        </ul>
        <div className={`${styles.prose} ${styles.introProse}`}>
          <p>
            En je weet ook heel goed wat er moet gebeuren. Afvallen. Aankomen. Stoppen met roken.
            Structuur in je dag. Afspraken met jezelf die je nakomt. Kennis genoeg.
          </p>
          <p>
            Dus je begint vol goede moed. Een week, soms drie. Dan komt er iets tussen, of het wordt
            uitdagender dan je dacht. Daar blijft het meestal liggen.
          </p>
          <p>
            <strong>Momentum is tien weken in een kleine groep.</strong> Trainen, coachen, challenges en
            opdrachten. Zodat je elke week opnieuw doet wat je te doen hebt. Ook als het tegenvalt of
            meer van je vraagt dan je gewend bent.
          </p>
        </div>
        <p className={styles.close}>
          <span>Dit keer lukt het.</span>
          <span className={styles.closeAccent}>En blijft het lukken.</span>
        </p>
      </Section>

      <Section number="02" title="Hoe het werkt" tone="dark">
        <div className={styles.parts}>
          <div className={styles.part}>
            <h3 className={styles.partTitle}>Trainen</h3>
            <p>
              Elke training kom je op een punt waar je liever ophoudt. Daar zie je wat je doet. Harder
              gaan om er vanaf te zijn. Een slokje water voor wat extra rust. Het goedpraten. Of
              doorgaan. Dat doe je thuis en op je werk ook. Hier zie je het gebeuren, in je eigen lijf,
              met een coach ernaast. 15 keer in 10 weken. Je hoeft nog geen sporter te zijn.
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
              die sessie. Soms alleen, soms als groep. In de training komt het moment dat het zwaar wordt
              vanzelf. In de challenge ga je er bewust mee aan de slag, en daarna bespreek je wat je
              deed. Zo leer je jezelf kennen in situaties die jij uitdagend vindt.
            </p>
          </div>
          <div className={styles.part}>
            <h3 className={styles.partTitle}>Opdracht</h3>
            <p>
              Uit elke coaching komt een opdracht: iets waarmee je in je eigen week aan de slag gaat met
              het thema van die sessie. Tussendoor bespreek je hem met de groep. Samen weet je meer dan
              alleen.
            </p>
          </div>
        </div>
        <p className={styles.afsluiter}>
          En je wordt sterker en fitter door het trainen. Dat heb je nodig, want volhouden kost energie.
          Wie om zes uur &apos;s avonds leeg op de bank ploft, komt er niet meer af.
        </p>
        <div className={styles.sub}>
          <h3 className={styles.h3}>Wat je krijgt</h3>
          <ul className={styles.list}>
            <li>15 trainingen van een uur: de ene week twee, de andere week één</li>
            <li>5 coachingsessies van 2 uur, om de week, elk met een fysieke challenge</li>
            <li>Uit elke coaching één opdracht, die je thuis doet en tussendoor met de groep bespreekt</li>
            <li>Een groep van 5 tot 10 mensen. Vaste start, vaste eindstreep, niemand stroomt halverwege in</li>
            <li>Anne en Els begeleiden je van de eerste tot de laatste week</li>
          </ul>
          <p className={styles.note}>Samen uit, samen thuis.</p>
        </div>
      </Section>

      <Section number="03" title="Eerlijk is eerlijk">
        <div className={styles.prose}>
          <p>
            <strong>Je komt.</strong> Twee keer per week, ook op de avond dat je jezelf hoort zeggen dat
            één keer overslaan niet uitmaakt. Juist op die avond maak je het verschil.
          </p>
          <p>
            <strong>Je doet je opdracht</strong> en de acties die eruit voortkomen. Iets waar je tot nu
            toe liever voor wegliep. Wat je moet doen wist je al. Nu doe je het.
          </p>
          <p>
            <strong>Je zegt het als het niet gelukt is.</strong> Dan praten we erover, want daar zit de
            winst. We rekenen je er niet op af. We willen dat je verder komt. Wat er in de groep gezegd
            wordt, blijft in de groep.
          </p>
        </div>
        <p className={`${styles.close} ${styles.closeTight}`}>
          <span>Jij zet de stappen.</span>
          <span className={styles.closeAccent}>Wij lopen naast je.</span>
        </p>
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
      </Section>

      <section className={styles.proof} aria-label="Ervaring van een deelnemer">
        <div className={styles.proofGrid}>
          <div className={styles.proofPhotoWrap}>
            <img className={styles.proofPhoto} src={MOMENTUM_QUOTE.image} alt={MOMENTUM_QUOTE.alt} />
          </div>
          <figure className={styles.proofText}>
            <blockquote className={styles.quote}>“{MOMENTUM_QUOTE.text}”</blockquote>
            <figcaption className={styles.cite}>
              {MOMENTUM_QUOTE.name} · {MOMENTUM_QUOTE.role}
            </figcaption>
          </figure>
        </div>
      </section>

      <Section number="04" title="Praktisch">
        <div className={styles.groups}>
          <div className={styles.group}>
            <h3 className={styles.h3}>Tijden</h3>
            <p className={styles.note}>Elke groep, tien weken lang</p>
            <ul className={styles.list}>
              {MOMENTUM_SCHEDULE.map((slot) => (
                <li key={slot.when}>
                  <b>{slot.when}</b> · {slot.what}
                </li>
              ))}
            </ul>
            <p className={styles.note}>{MOMENTUM_SCHEDULE_NOTE}</p>
          </div>
          <div className={styles.group}>
            <h3 className={styles.h3}>Startdata</h3>
            <p className={styles.note}>Vaste start, vaste eindstreep</p>
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
        <BookButton className={styles.buttonSection} />
      </Section>

      <Section number="05" title="Goede vragen">
        <FaqList tone="light" initialOpen={0} items={MOMENTUM_FAQ} />
      </Section>

      <Section number="06" title="Het begint met een gesprek" tone="dark">
        <div className={styles.prose}>
          <p>
            Een kennismaking van een uur met Anne of Els. Wat wil je voor elkaar krijgen, en waar liep
            het tot nu toe op vast? Past het, dan plannen we je start. Past het niet, dan zeggen we dat.
            Ook dat is een uitkomst.
          </p>
        </div>
        <BookButton className={styles.buttonSection} />
        <p className={styles.dialect}>Kom moar op!</p>
      </Section>

      <Footer photoless ctaless tone="dark" />
    </main>
  )
}
