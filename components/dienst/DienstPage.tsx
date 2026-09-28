import Nav from '@/components/Nav'
import HeroTitle from '@/components/dienst/HeroTitle'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { STARK_CTA, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import { BOOKINGS_URL, MOMENTUM_FAQ, MOMENTUM_GROUPS } from './momentum'
import styles from './DienstPage.module.css'

const PLACEHOLDER = /\[[^\]]+\]/g

function isPlaceholder(text: string) {
  return text.includes('[')
}

function marked(text: string) {
  const parts = text.split(PLACEHOLDER)
  const marks = text.match(PLACEHOLDER) ?? []
  const nodes: Array<string | JSX.Element> = []
  parts.forEach((part, index) => {
    if (part) nodes.push(part)
    const mark = marks[index]
    if (mark) {
      nodes.push(
        <span key={`${mark}-${index}`} className={styles.mark}>
          {mark}
        </span>,
      )
    }
  })
  return nodes
}

function PhotoSlot({ label }: { label: string }) {
  return (
    <div className={styles.photo} role="img" aria-label={label}>
      <span className={styles.mark}>{label}</span>
    </div>
  )
}

function BookButton() {
  return (
    <a
      href={BOOKINGS_URL}
      className={`${styles.button} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Plan je kennismaking
    </a>
  )
}

function groupTitle(group: (typeof MOMENTUM_GROUPS)[number]) {
  return [group.name, group.start, group.partner].filter(Boolean).join(' · ')
}

export default function DienstPage() {
  const answeredFaq = MOMENTUM_FAQ.filter((item) => !isPlaceholder(item.answer))

  return (
    <main className={styles.page}>
      <FaqJsonLd items={answeredFaq} />

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

      <section className={styles.light}>
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <h2 className={styles.introLead}>Je weet wat er moet gebeuren</h2>
            <ul className={styles.introScenes}>
              <li>Uitgerust wakker worden.</li>
              <li>&apos;s Avonds nog een potje voetballen met je kinderen.</li>
              <li>Je aankleden en tevreden zijn over je lijf.</li>
              <li>Van de grond opstaan zonder je handen te gebruiken.</li>
              <li>Doen wat je die dag had bedacht, zonder jezelf tekort te doen.</li>
            </ul>
            <div className={`${styles.prose} ${styles.introProse}`}>
              <p>Je hoeft nog geen sporter te zijn.</p>
              <p>
                Afvallen. Aankomen. Stoppen met roken. Structuur in je dag. Afspraken met jezelf die je
                nakomt.
              </p>
              <p>
                Je begint vol goede moed. Een week, soms drie. Dan komt er iets tussen, of het wordt
                uitdagender dan je dacht. Daar blijft het meestal liggen.
              </p>
              <p>
                Momentum is tien weken in een kleine groep. Trainen en coachen. Elke week opnieuw doen
                wat je moet doen.
              </p>
            </div>
            <p className={styles.introClose}>
              <span>Je blijft doen wat je hebt afgesproken.</span>
              <span>Ook als het tegenvalt of uitdagend wordt.</span>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.dark}>
        <div className={`${styles.wrap} ${styles.split}`}>
          <div>
            <h2 className={styles.h2}>Als het zwaar wordt</h2>
            <div className={styles.prose}>
              <p>
                Elke training kom je op een punt waar je liever ophoudt. Daar zie je wat je doet. Je gaat
                harder om er vanaf te zijn. Je neemt nog even een slokje water, voor wat extra rust. Je
                praat het goed. Of je gaat door.
              </p>
              <p>
                Dat doe je thuis en op je werk ook. Hier zie je het gebeuren, in je eigen lijf, met een
                coach ernaast. 20 keer in 10 weken.
              </p>
              <p>
                In de coaching neem je het mee naar je week. Waar wil je heen, wat houdt je tegen, wat
                doe je vóór de volgende sessie.
              </p>
              <p>
                En je wordt sterker en fitter. Volhouden kost energie. Wie om zes uur &apos;s avonds leeg
                op de bank ploft, komt er niet meer af.
              </p>
            </div>
          </div>
          <aside className={styles.card}>
            <h3 className={styles.cardTitle}>Wat je krijgt</h3>
            <ul className={styles.cardList}>
              <li>15 trainingen van een uur: de ene week twee, de andere week één</li>
              <li>5 coachingsessies van 2 uur, om de week, elk met een fysieke challenge</li>
              <li>Elke sessie één opdracht die af moet zijn voor de volgende</li>
              <li>
                Een groep van 5 tot 12 mensen. Vaste start, vaste eindstreep, niemand stroomt halverwege
                in
              </li>
              <li>Anne en Els begeleiden je van de eerste tot de laatste week</li>
            </ul>
            <p className={styles.cardNote}>
              Samen uit, samen thuis.
            </p>
          </aside>
        </div>
      </section>

      <section className={styles.light}>
        <div className={`${styles.wrap} ${styles.split}`}>
          <div>
            <h2 className={styles.h2}>Wat er van je verwacht wordt</h2>
            <div className={styles.prose}>
              <p>
                Je komt. Twee keer per week, ook op de avond dat je jezelf hoort zeggen dat één keer
                overslaan niet uitmaakt. Juist op die avond maak je het verschil.
              </p>
              <p>
                Je doet je opdracht. Iets waar je tot nu toe omheen liep. Zo wordt hopen iets wat je
                voor elkaar krijgt.
              </p>
              <p>
                Je zegt het als het niet gelukt is. Dan praten we erover, want daar zit de winst.
                Afrekenen doen we niet.
              </p>
              <p>Wat er in de groep gezegd wordt, blijft in de groep.</p>
            </div>
          </div>
          <div>
            <h2 className={styles.h2}>Eerlijk is eerlijk</h2>
            <ul className={styles.plainList}>
              <li>
                Wil je alleen fitter worden en verder niets veranderen? Word dan lid. Dat is goedkoper en
                het werkt.
              </li>
              <li>Zoek je een schema of tips en trucs? Dan past personal training beter.</li>
              <li>
                Zit je in een burn-out of ben je onder behandeling? Ga dan eerst naar je huisarts. Daarna
                kijken we graag samen wat past.
              </li>
              <li>Verwacht je dat wij het voor je doen? Wij lopen naast je. De stappen zet jij.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.proof} aria-label="Bewijs">
        <PhotoSlot label="FOTO: zwart-wit portret" />
        <p className={styles.proofCaption}>
          {marked('[QUOTE VOLGT — portret zwart-wit, naam, verhaal van een oud-deelnemer]')}
        </p>
      </section>

      <section className={styles.light}>
        <div className={styles.wrap}>
          <h2 className={styles.h2}>Praktisch</h2>
          <div className={styles.groupGrid}>
            {MOMENTUM_GROUPS.map((group) => (
              <article key={group.name} className={styles.group}>
                <h3 className={styles.groupTitle}>{groupTitle(group)}</h3>
                <ul className={styles.plainList}>
                  {group.slots.map((slot) => (
                    <li key={slot}>{slot}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className={styles.invest}>
            <h3 className={styles.h3}>Investering</h3>
            <p className={styles.proseLine}>
              € 1.000 voor 10 weken. Dat is € 100 per week. Betalen kan in één keer, of in overleg in
              termijnen.
            </p>
            <BookButton />
          </div>
        </div>
      </section>

      <section className={styles.lightTight}>
        <div className={styles.wrap}>
          <h2 className={styles.h2}>Goede vragen</h2>
          <FaqList
            tone="light"
            initialOpen={0}
            items={MOMENTUM_FAQ.map((item) => ({
              question: item.question,
              answer: isPlaceholder(item.answer) ? marked(item.answer) : item.answer,
            }))}
          />
        </div>
      </section>

      <section className={styles.slot}>
        <div className={styles.wrap}>
          <h2 className={styles.h2}>Het begint met een gesprek</h2>
          <p className={styles.slotLead}>
            Een kennismaking van {marked('[DUUR]')} met Anne of Els. Wat wil je voor elkaar krijgen, en
            waar liep het tot nu toe op vast? Past het, dan plannen we je start. Past het niet, dan
            zeggen we dat. Ook dat is een uitkomst.
          </p>
          <BookButton />
          <p className={styles.dialect}>{marked('[DIALECTZIN — volgt]')}</p>
        </div>
      </section>

      <Footer photoless ctaless tone="dark" />
    </main>
  )
}
