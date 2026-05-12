import Image from 'next/image'
import QuoteCard from './QuoteCard'
import styles from './ResultatenSection.module.css'

const cards = [
  {
    text: 'Ik ben de fijnste versie van mezelf. Het is het beste cadeau aan jezelf.',
    name: 'Eva',
    context: 'Impact traject',
  },
  {
    text: 'De stap lijkt groot. De stappen die je daarna maakt, zijn nog veel groter.',
    name: 'Rosanne',
    context: 'Impact traject',
  },
  {
    text: 'Ik wou dat ik het eerder had aangedurfd.',
    name: 'Yael',
    context: 'Impact traject',
  },
]

export default function ResultatenSection() {
  return (
    <section className={styles.resultaten} id="resultaten">
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Wat mensen zeggen</h2>

        {/* Amanda — hero quote */}
        <figure className={styles.heroQuote}>
          <div className={styles.heroImgWrap} aria-hidden="true">
            <Image
              src="/images/foto-vrouw-lachen.jpg"
              alt=""
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              className={styles.heroImg}
            />
          </div>
          <div className={styles.heroContent}>
            <blockquote className={styles.heroText}>
              <p>
                Ik sport nu 3 keer per week. Dat is me nog nooit eerder gelukt.
              </p>
            </blockquote>
            <figcaption className={styles.heroCite}>
              <span className={styles.heroName}>Amanda</span>
              <span className={styles.heroContext}>na burn-out, Impact traject</span>
            </figcaption>
          </div>
        </figure>

        {/* 3 quote cards */}
        <div className={styles.grid}>
          {cards.map((card) => (
            <QuoteCard key={card.name} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
