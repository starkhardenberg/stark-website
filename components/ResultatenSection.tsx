import Image from 'next/image'
import RotatingTestimonials, { type Testimonial } from './RotatingTestimonials'
import styles from './ResultatenSection.module.css'

const cards: Testimonial[] = [
  {
    id: 'eva-1',
    text: 'Ik ben de fijnste versie van mezelf. Het is het beste cadeau aan jezelf.',
    name: 'Eva',
    context: 'Impact traject',
  },
  {
    id: 'rosanne-1',
    text: 'De stap lijkt groot. De stappen die je daarna maakt, zijn nog veel groter.',
    name: 'Rosanne',
    context: 'Impact traject',
  },
  {
    id: 'yael-1',
    text: 'Ik wou dat ik het eerder had aangedurfd.',
    name: 'Yael',
    context: 'Impact traject',
  },
  {
    id: 'joyce-1',
    text: 'Ik voel me zekerder, fitter en heb veel meer rust in mijn hoofd.',
    name: 'Joyce',
    context: 'Impact traject',
  },
  {
    id: 'joyce-2',
    text: 'Ik heb nog geen dag spijt gehad van mijn beslissing.',
    name: 'Joyce',
    context: 'Impact traject',
  },
  {
    id: 'yael-2',
    text: 'STARK! is voor mij een vertrouwde en veilige omgeving om persoonlijke grenzen te verleggen.',
    name: 'Yael',
    context: 'Impact traject',
  },
  {
    id: 'robbert-1',
    text: 'Ik heb het traject niet als leraar/leerling of psycholoog/patiënt ervaren, maar als heel eerlijk, echt en open.',
    name: 'Robbert',
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
                Ik heb echt geleerd rust te nemen en naar mijn lichaam te luisteren in plaats van door te denderen en
                grip verliezen.
              </p>
            </blockquote>
            <figcaption className={styles.heroCite}>
              <span className={styles.heroName}>Amanda</span>
              <span className={styles.heroContext}>Deelnemer Momentum (de vrouwen editie, voorheen Camp Leone)</span>
            </figcaption>
          </div>
        </figure>

        <div className={styles.testimonials}>
          <RotatingTestimonials items={cards} />
        </div>
      </div>
    </section>
  )
}
