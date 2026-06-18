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
    name: 'Rosanne K',
    context: 'Impact traject',
  },
  {
    id: 'stephanie-1',
    text: 'Ik wou dat ik het eerder had aangedurfd.',
    name: 'Stephanie',
    context: 'Momentum traject',
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
  {
    id: 'hilda-1',
    text: 'Ik ontdekte al snel dat sterk worden niet alleen een fysieke aangelegenheid is.',
    name: 'Hilda',
    context: 'Impact traject',
  },
  {
    id: 'geert-willem-1',
    text: 'Ik wist dat als ik niks zou gaan doen, alles exact zou blijven zoals het was.',
    name: 'Geert-Willem',
    context: 'Impact traject',
  },
  {
    id: 'rosanne-2',
    text: 'Dankzij de veilige en vertrouwde omgeving verleg ik wekelijks mijn grenzen.',
    name: 'Rosanne A',
    context: 'Impact traject',
  },
  {
    id: 'gerlinde-1',
    text: 'Ik herken nu patronen bij mezelf en wat ik hiermee kan doen. Dat lukt echt niet altijd, maar heel vaak ook wel.',
    name: 'Gerlinde',
    context: 'Momentum traject',
  },
  {
    id: 'renee-1',
    text: 'Ik kreeg af en toe een liefdevolle schop onder mijn kont die niemand me eerder durfde te geven.',
    name: 'Renee',
    context: 'Impact traject',
  },
  {
    id: 'annemarie-1',
    text: 'Ik wist de stemmetjes om te buigen naar gedachten die me de kracht gaven om tot het gaatje te gaan.',
    name: 'Annemarie',
    context: 'Momentum traject',
  },
  {
    id: 'sandra-1',
    text: "'Wie zit er nou op mij te wachten!' Coaching helpt me om niet mee te gaan met die beperkende stem.",
    name: 'Sandra',
    context: 'Momentum traject',
  },
  {
    id: 'mark-1',
    text: 'Ik heb meer rust en ruimte gecreëerd in mijn hoofd en leven. Dat maakt me een betere man voor mijn vrouw en ik ben veel effectiever in mijn werk.',
    name: 'Mark',
    context: 'Impact traject',
  },
  {
    id: 'marije-1',
    text: 'Ik vond iemand die dwars door mij heen kijkt. Niet altijd even leuk, wel noodzakelijk om shit te doorbreken.',
    name: 'Marije',
    context: 'Impact traject',
  },
  {
    id: 'rebekka-1',
    text: 'De combinatie van sporten en coaching zorgt voor directe feedback tijdens het sporten: wat doe ik als het zwaar wordt?',
    name: 'Rebekka',
    context: 'Momentum traject',
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
