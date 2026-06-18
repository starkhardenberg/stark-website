import Link from 'next/link'
import Image from 'next/image'
import { hrefCoaching } from '@/lib/contact'
import styles from '../landing.module.css'
import b from './page.module.css'

export const metadata = {
  title: 'De Eerste Stap — Online sessie, pakket en gesprek — STARK! Hardenberg',
  description:
    'In 60 minuten door drie vragen die je leven veranderen: waar sta je nu, wat wil je werkelijk, en wie moet je zijn om daar te komen. Online sessie, fysiek pakket en een persoonlijk gesprek. Eenmalig 57 euro.',
}

export default function DeEersteStapPage() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Link href="/#aanbod" className={styles.navBack}>
          ← Terug naar STARK!
        </Link>
        <Link href={hrefCoaching} className={styles.navCta}>
          Kom kennismaken
        </Link>
      </nav>

      {/* 1 — Hero */}
      <section className={`${styles.hero} ${b.hero}`}>
        <div className={styles.heroBg}>
          <Image
            src="/images/foto-coaching-impact.png"
            alt="Coachingsgesprek bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImg} ${b.heroBgImg}`}
            sizes="100vw"
            priority
            style={{ objectPosition: 'center 28%' }}
          />
        </div>
        <div className={`${styles.heroContent} ${b.heroContent}`}>
          <span className={styles.heroLabel}>Online kennismakingsproduct · De Eerste Stap</span>
          <h1 className={b.heroTitle}>
            <span className={b.heroTitleOutline}>Een eerlijke blik.</span>
            <span>Een nieuw vertrekpunt.</span>
          </h1>
        </div>
      </section>

      {/* 2 — Route (zigzag tijdlijn) */}
      <section className={b.route}>
        <ol className={b.routeList}>
          <li className={b.routeStep}>
            <span className={b.routeNum}>01</span>
            <div className={b.routeBody}>
              <span className={b.routeLabel}>Online sessie</span>
              <p className={b.routeText}>60 minuten, alleen jij en de juiste vragen.</p>
            </div>
          </li>
          <li className={b.routeStep}>
            <span className={b.routeNum}>02</span>
            <div className={b.routeBody}>
              <span className={b.routeLabel}>Pakket per post</span>
              <p className={b.routeText}>Jouw eigen woorden, mooi vormgegeven, thuisbezorgd.</p>
            </div>
          </li>
          <li className={b.routeStep}>
            <span className={b.routeNum}>03</span>
            <div className={b.routeBody}>
              <span className={b.routeLabel}>1-op-1 gesprek</span>
              <p className={b.routeText}>Een persoonlijk gesprek met Engbert-Jan of Yvonne.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* 3 — Voor wie */}
      <section className={`${b.sectionBase} ${b.sectionLight}`}>
        <div className={b.splitRow}>
          <div className={b.splitHead}>
            <span className={b.label}>Voor wie?</span>
            <h2 className={b.heading}>Dit is voor jou als je klaar bent met stilstaan</h2>
            <p className={b.body}>
              Je weet dat er meer in je zit. Je voelt het al een tijdje. Maar je kunt het niet helemaal
              benoemen, en dus gebeurt er niets. De Eerste Stap is gemaakt voor mensen die het wél willen
              benoemen.
            </p>
          </div>
          <ul className={`${b.checklist} ${b.splitBody}`}>
            <li>Je hebt vaker gedacht 'ik wil iets veranderen', zonder te weten waar je moet beginnen.</li>
            <li>Je weet dat er meer in je zit dan je nu laat zien.</li>
            <li>Je bent klaar met praten over je doelen en wil eindelijk helderheid.</li>
            <li>Je wil eerlijk naar jezelf kijken, zonder cursus, zonder verplichting.</li>
            <li>Je wil weten of de aanpak van STARK! bij jou past.</li>
          </ul>
        </div>
      </section>

      {/* 4 — Hoe het werkt */}
      <section id="hoe-werkt-het" className={`${b.sectionBase} ${b.sectionNavy}`}>
        <div className={b.splitRow}>
          <div className={b.splitHead}>
            <span className={b.label}>Hoe het werkt</span>
            <h2 className={b.heading}>Drie stappen. Eén ervaring.</h2>
            <p className={b.body}>
              Geen cursus om door te ploegen. Een korte route met een begin, een midden en een eind, op een
              tempo dat jij bepaalt.
            </p>
          </div>
          <ol className={`${b.steps} ${b.splitBody}`}>
          <li>
            <h3 className={b.stepTitle}>De online sessie</h3>
            <p className={b.stepText}>
              Direct na je inschrijving krijg je toegang tot de online sessie. Geen video's, geen cursus.
              Eén vraag tegelijk, in een rustige omgeving, op een moment dat jij kiest. Reken op 60 minuten
              van eerlijk nadenken.
            </p>
          </li>
          <li>
            <h3 className={b.stepTitle}>Plan je gesprek in</h3>
            <p className={b.stepText}>
              Aan het einde van de sessie kies je een moment voor je persoonlijke gesprek met Engbert-Jan of
              Yvonne. Zodra je dat hebt ingepland, sturen we je pakket op.
            </p>
          </li>
          <li>
            <h3 className={b.stepTitle}>Je pakket en je gesprek</h3>
            <p className={b.stepText}>
              Binnen een paar dagen ligt jouw pakket op de mat, met jouw eigen woorden uit de sessie, mooi
              vormgegeven. Vlak daarna voer je het gesprek waarin we samen dieper kijken naar wat je hebt
              opgeschreven.
            </p>
          </li>
          </ol>
        </div>
      </section>

      {/* 5 — De online sessie */}
      <section className={`${b.sectionBase} ${b.sectionLight}`}>
        <div className={b.narrow}>
          <span className={b.label}>De sessie</span>
          <h2 className={b.heading}>60 minuten die het verschil maken</h2>
          <p className={b.body}>
            De online sessie is geen cursus. Geen lessen. Geen video's om door te kijken. Het is een
            gestructureerd gesprek met jezelf, geleid door de vragen die we normaal stellen in onze coaching.
          </p>
          <p className={b.body}>
            Je doet de sessie alleen, op een rustig moment, zonder afleiding. Eén vraag per scherm. Je typt je
            antwoord. Je gaat verder.
          </p>
        </div>
        <ul className={b.outcomes}>
          <li className={b.outcomeItem}>
            <h3 className={b.outcomeTitle}>Helder beeld van waar je nu staat</h3>
            <p className={b.outcomeText}>
              Geen vaag gevoel meer, maar concrete woorden. Op de gebieden die er voor jou toe doen, lichaam,
              werk, relaties en persoonlijke groei, kijk je eerlijk naar de huidige werkelijkheid.
            </p>
          </li>
          <li className={b.outcomeItem}>
            <h3 className={b.outcomeTitle}>Helder beeld van wat je werkelijk wil</h3>
            <p className={b.outcomeText}>
              Niet wat realistisch is. Niet wat anderen verwachten. Maar wat jij echt wil creëren. Concreet.
              In jouw woorden.
            </p>
          </li>
          <li className={b.outcomeItem}>
            <h3 className={b.outcomeTitle}>Eén zin die jou aanwijst</h3>
            <p className={b.outcomeText}>
              De sessie eindigt met één vraag waarop jij in één zin antwoord geeft: wie moet jij zijn om jouw
              Punt B te realiseren? Die zin is van jou, en komt op een kaart in je pakket.
            </p>
          </li>
        </ul>
      </section>

      {/* 6 — Het pakket */}
      <section className={`${b.sectionBase} ${b.sectionNavy}`}>
        <div className={b.narrow}>
          <span className={b.label}>Wat je thuisbezorgd krijgt</span>
          <h2 className={b.heading}>Jouw eigen woorden, tastbaar</h2>
          <p className={b.body}>
            Wat je opschrijft tijdens de sessie blijft niet op een scherm. Een paar dagen later vind je een
            pakket in je brievenbus, strak vormgegeven, in de STARK! stijl. Het bevat:
          </p>
        </div>
        <ul className={b.packageList}>
          <li>
            <strong>Jouw samenvatting</strong>
            <span>
              Een helder overzicht van wat je hebt opgeschreven over Punt A, Punt B en wat jou tegenhoudt.
              Niet een lap tekst, maar mooi opgemaakt op een stevige kaart of klein boekje. Iets om te
              bewaren.
            </span>
          </li>
          <li>
            <strong>De kaart met jouw zin</strong>
            <span>
              Die ene zin die je aan het einde hebt geschreven, wie jij moet zijn om jouw Punt B te
              realiseren, staat groot en strak vormgegeven op een stevige kaart. Om op je bureau te zetten, in
              je agenda te leggen, of op te hangen.
            </span>
          </li>
          <li>
            <strong>Je intakekaart</strong>
            <span>
              Drie vragen die je voorbereiden op het persoonlijke gesprek. Zodat je er bewust en open in
              stapt.
            </span>
          </li>
          <li>
            <strong>Een persoonlijk kaartje van Engbert-Jan &amp; Yvonne</strong>
            <span>Kort. Met de hand. Echt.</span>
          </li>
        </ul>
      </section>

      {/* 7 — Het gesprek */}
      <section className={`${b.sectionBase} ${b.sectionLight}`}>
        <div className={b.narrow}>
          <span className={b.label}>Het gesprek</span>
          <h2 className={b.heading}>Wat je alleen niet kunt zien</h2>
          <p className={b.body}>
            De online sessie laat je eerlijk kijken. Maar er is een grens aan wat je over jezelf kunt zien
            zonder iemand die met je meedenkt.
          </p>
          <p className={b.body}>
            Daarom sluit De Eerste Stap af met een persoonlijk gesprek van 45 tot 60 minuten met Engbert-Jan
            of Yvonne. We gaan in op wat jij hebt opgeschreven. We stellen de vragen die jij jezelf nog niet
            hebt durven stellen. En we kijken samen naar wat jouw volgende stap zou kunnen zijn.
          </p>
          <p className={b.body}>Online of bij ons in Hardenberg, jij kiest.</p>
          <p className={b.body}>Geen verkooppraatje. Een eerlijk gesprek.</p>
        </div>
      </section>

      {/* 8 — Quote */}
      <section className={b.quoteSection}>
        <blockquote className={b.pullQuote}>
          <p>
            Je leven verandert niet door wat je weet. Het verandert door <span>wie je besluit te zijn</span>,
            en wat je daarna doet.
          </p>
          <cite className={b.pullQuoteCite}>Engbert-Jan &amp; Yvonne · STARK! Hardenberg</cite>
        </blockquote>
      </section>

      {/* 9 — Waarom dit anders is */}
      <section className={`${b.sectionBase} ${b.sectionLight}`}>
        <div className={b.narrow}>
          <span className={b.label}>Het verschil</span>
          <h2 className={b.heading}>Geen cursus. Geen challenge. Een vertrekpunt.</h2>
        </div>
        <div className={b.compare}>
          <div className={b.compareCol}>
            <p className={b.compareHead}>Wat de meeste mensen doen</p>
            <ul className={b.compareList}>
              <li>Een boek lezen dat ze nooit afmaken.</li>
              <li>Een cursus volgen die ze al snel naast zich neerleggen.</li>
              <li>Wachten op het juiste moment om te beginnen.</li>
              <li>Doelen formuleren die vaag blijven.</li>
              <li>Het gevoel van 'ik moet iets', zonder concreet plan.</li>
            </ul>
          </div>
          <div className={`${b.compareCol} ${b.compareColAlt}`}>
            <p className={b.compareHead}>Wat De Eerste Stap doet</p>
            <ul className={b.compareList}>
              <li>Eén ervaring van 60 minuten die je nu doet.</li>
              <li>Eerlijke vragen die werken, geen theorie om te onthouden.</li>
              <li>Direct beginnen, op een moment dat jij kiest.</li>
              <li>Concrete antwoorden in jouw eigen woorden.</li>
              <li>Een persoonlijk gesprek dat je verder helpt.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10 — Over STARK! */}
      <section className={`${b.sectionBase} ${b.sectionNavy}`}>
        <div className={b.narrow}>
          <span className={b.label}>Wie zijn wij?</span>
          <h2 className={b.heading}>Engbert-Jan &amp; Yvonne · STARK! Hardenberg</h2>
          <p className={b.body}>
            Wij runnen STARK! Hardenberg, een gym voor mensen van 5 tot 87 jaar die meer willen uit hun leven.
            Niet alleen fysiek, maar als geheel.
          </p>
          <p className={b.body}>
            Naast functionele fitness coachen wij mensen die leiderschap willen nemen over de kwaliteit van
            hun eigen leven. We werken met de Straight Line Leadership methode van Duran Djukich, geen
            motivatie of inspiratie, maar leiderschap, identiteit en kernacties.
          </p>
          <p className={b.body}>
            De Eerste Stap is onze manier om die aanpak toegankelijk te maken. Voor iedereen die wil
            ontdekken of dit bij hen past, zonder direct een traject in te gaan.
          </p>
        </div>
      </section>

      {/* 11 — De investering */}
      <section className={`${b.sectionBase} ${b.sectionLight}`}>
        <div className={b.narrow}>
          <span className={b.label}>Investering</span>
          <h2 className={b.heading}>Eén keer. €57. Daarna is het aan jou.</h2>
        </div>
        <div className={b.priceWrap}>
          <div className={b.priceCard}>
            <span className={b.priceBadge}>De Eerste Stap</span>
            <div className={b.priceAmount}>€57</div>
            <p className={b.priceSub}>eenmalig · geen abonnement · alles inbegrepen</p>
            <ul className={b.priceList}>
              <li>Online sessie van ±60 minuten</li>
              <li>Jouw persoonlijke samenvatting</li>
              <li>De kaart met jouw zin</li>
              <li>De intakekaart en het persoonlijke kaartje</li>
              <li>Pakket per post, verstuurd zodra je je gesprek hebt ingepland</li>
              <li>Persoonlijk 1-op-1 gesprek (45 tot 60 min, t.w.v. €75)</li>
            </ul>
            <Link href={hrefCoaching} className={b.priceBtn}>
              Ik start nu voor €57
            </Link>
            <p className={b.priceNote}>
              Veilig betalen · Direct toegang tot je sessie · Geen verborgen kosten
            </p>
          </div>
        </div>
      </section>

      {/* 12 — FAQ */}
      <section className={`${b.sectionBase} ${b.sectionNavy}`}>
        <div className={b.narrow}>
          <span className={b.label}>Veelgestelde vragen</span>
          <h2 className={b.heading}>Goede vragen</h2>
          <dl className={b.faq}>
            <div>
              <dt>Hoeveel tijd kost de online sessie?</dt>
              <dd>
                Reken op ongeveer 60 minuten als je het serieus doet. Sommige mensen doen er iets langer over
                omdat de vragen je echt aan het denken zetten. Je kunt tussendoor pauzeren, je voortgang wordt
                automatisch opgeslagen.
              </dd>
            </div>
            <div>
              <dt>Wanneer komt het pakket aan?</dt>
              <dd>
                Het pakket wordt verstuurd zodra je het 1-op-1 gesprek hebt ingepland. Reken op 2 tot 5
                werkdagen na verzending. Het pakket arriveert meestal vlak voor het gesprek, precies op tijd.
              </dd>
            </div>
            <div>
              <dt>Waarom moet ik eerst het gesprek inplannen voordat het pakket wordt verstuurd?</dt>
              <dd>
                Omdat het pakket en het gesprek bij elkaar horen. De samenvatting in je pakket is bedoeld als
                voorbereiding op het gesprek, niet als eindpunt. Door eerst in te plannen weet jij zeker dat je
                het volledige product ontvangt zoals het bedoeld is.
              </dd>
            </div>
            <div>
              <dt>Vindt het gesprek online of fysiek plaats?</dt>
              <dd>
                Dat kies jij zelf bij het inplannen. Via videobellen is prima, maar je bent ook van harte
                welkom in Hardenberg voor een gesprek in persoon.
              </dd>
            </div>
            <div>
              <dt>Is dit ook geschikt als ik geen ervaring heb met coaching?</dt>
              <dd>
                Absoluut. De Eerste Stap is juist gemaakt voor mensen die nog nooit met coaching te maken
                hebben gehad. Geen vakjargon, geen voorkennis nodig, alleen de bereidheid om eerlijk naar
                jezelf te kijken.
              </dd>
            </div>
            <div>
              <dt>Moet ik lid zijn van STARK! Hardenberg?</dt>
              <dd>Nee. De Eerste Stap staat open voor iedereen.</dd>
            </div>
            <div>
              <dt>Wat als ik daarna meer wil?</dt>
              <dd>
                Dan bespreken we dat in het persoonlijke gesprek, als jij dat wil. We bieden individuele
                trajecten en een groepsprogramma aan. Maar er is geen verplichting. Het gesprek is van jou,
                niet van ons.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 13 — Finale CTA */}
      <section className={b.finale}>
        <span className={b.label}>De vraag die telt</span>
        <h2 className={b.finaleTitle}>
          <span>60 minuten.</span>
          <span>Eén pakket.</span>
          <span>Eén gesprek.</span>
          <span>Een nieuw vertrekpunt.</span>
        </h2>
        <p className={b.finaleBody}>
          Voor €57 doe jij de eerste stap die de meeste mensen blijven uitstellen. Geen verplichting daarna.
          Alleen wat het je oplevert.
        </p>
        <Link href={hrefCoaching} className={b.btnPrimary}>
          Ik zet de eerste stap
        </Link>
      </section>

      <footer className={b.footer}>
        <p>© 2026 STARK! Hardenberg · Functionele fitness &amp; performance coaching · Hardenberg</p>
      </footer>
    </main>
  )
}
