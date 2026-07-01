import type { Testimonial } from '../RotatingTestimonials'

export type TestimonialCategory =
  | 'impact'
  | 'momentum'
  | 'groepstraining'
  | 'kids'
  | 'teens'
  | 'zilverfitness'

export type TestimonialEntry = Testimonial & {
  category: TestimonialCategory
}

export type HeroQuote = {
  text: string
  name: string
  context: string
  image: string
  imageAlt?: string
  /** Foto horizontaal spiegelen (scaleX(-1)). */
  imageMirror?: boolean
  /** Foto in zwart-wit tonen (zelfde filter als overige B&W-foto's). */
  imageBw?: boolean
  objectPosition?: string
  /** Per-foto inzoom (overschrijft de gedeelde transform). 1 = geen zoom. */
  imageScale?: number
  /** Verticale verschuiving i.p.v. de standaard translateY op .heroImg (bv. '4%'). */
  imageTranslateY?: string
  /** Focuspunt voor de inzoom, bv. 'center 30%'. */
  imageScaleOrigin?: string
  /** Studioshot op zwart: blok wordt donker, foto volledig in beeld (contain),
   *  zwart smelt samen met het blok. Alleen voor foto's met zwarte studio-fond. */
  darkPortrait?: boolean
  /** Foto het blok laten vullen (object-fit: cover) i.p.v. contain. Handig bij
   *  een donkere (geen pure zwart-fond) foto die je toch in het dark-blok wilt. */
  imageCover?: boolean
  /** Foto volledig in beeld (contain), zelfde blokmaat als cover — geen crop op gezicht. */
  imageContain?: boolean
  /** Staande portretfoto: geen standaard translateY, crop op bovenste derde. */
  portraitCrop?: boolean
}

export const heroQuoteAmanda: HeroQuote = {
  text: 'Ik heb echt geleerd rust te nemen en naar mijn lichaam te luisteren in plaats van door te denderen en grip verliezen.',
  name: 'Amanda',
  context: 'Deelnemer Momentum (de vrouwen editie, voorheen Camp Leone)',
  image: '/images/foto-vrouw-lachen.jpg',
  imageAlt: 'Amanda, deelnemer Momentum bij STARK! Hardenberg',
}

/** Alle testimonials — één bron voor homepage, Momentum en Impact. */
export const allTestimonials: TestimonialEntry[] = [
  {
    id: 'eva-1',
    text: 'Ik ben de fijnste versie van mezelf. Het is het beste cadeau aan jezelf.',
    name: 'Eva',
    context: 'Impact traject',
    category: 'impact',
  },
  {
    id: 'erwin-1',
    text: 'Zestig kilo eraf. Maar wat echt veranderde zit vanbinnen: ik geef niet meer op.',
    name: 'Erwin',
    context: 'Impact traject',
    category: 'impact',
  },
  {
    id: 'anne-1',
    text: 'Ik kwam voor mezelf. Ik kreeg er mijn huwelijk bij terug. We zijn weer gelukkig samen.',
    name: 'Anne',
    context: 'Impact traject',
    category: 'impact',
  },
  {
    id: 'monique-1',
    text: 'Mijn kinderen zien nu een moeder die doorzet. Dat is het mooiste wat ik ze kan geven.',
    name: 'Monique',
    context: 'Impact traject',
    category: 'impact',
  },
  {
    id: 'bethtina-1',
    text: 'Ik heb de sprong gewaagd. Mijn eigen bedrijf staat er nu, en ik sta achter mezelf.',
    name: 'Bethtina',
    context: 'Impact traject',
    category: 'impact',
  },
  {
    id: 'rosanne-1',
    text: 'De stap lijkt groot. De stappen die je daarna maakt, zijn nog veel groter.',
    name: 'Rosanne K',
    context: 'Impact traject',
    category: 'impact',
  },
  {
    id: 'stephanie-1',
    text: 'Ik wou dat ik het eerder had aangedurfd.',
    name: 'Stephanie',
    context: 'Momentum traject',
    category: 'momentum',
  },
  {
    id: 'joyce-1',
    text: 'Ik voel me zekerder, fitter en heb veel meer rust in mijn hoofd.',
    name: 'Joyce',
    context: 'Impact traject',
    category: 'impact',
  },
  {
    id: 'yael-2',
    text: 'STARK! is voor mij een vertrouwde en veilige omgeving om persoonlijke grenzen te verleggen.',
    name: 'Yael',
    context: 'Impact traject',
    category: 'impact',
  },
  {
    id: 'robbert-1',
    text: 'Ik heb het traject niet als leraar/leerling of psycholoog/patiënt ervaren, maar als heel eerlijk, echt en open.',
    name: 'Robbert',
    context: 'Impact traject',
    category: 'impact',
  },
  {
    id: 'hilda-1',
    text: 'Ik ontdekte al snel dat sterk worden niet alleen een fysieke aangelegenheid is.',
    name: 'Hilda',
    context: 'Impact traject',
    category: 'impact',
  },
  {
    id: 'geert-willem-1',
    text: 'Ik wist dat als ik niks zou gaan doen, alles exact zou blijven zoals het was.',
    name: 'Geert-Willem',
    context: 'Impact traject',
    category: 'impact',
  },
  {
    id: 'gerlinde-1',
    text: 'Ik herken nu patronen bij mezelf en wat ik hiermee kan doen. Dat lukt echt niet altijd, maar heel vaak ook wel.',
    name: 'Gerlinde',
    context: 'Momentum traject',
    category: 'momentum',
  },
  {
    id: 'renee-1',
    text: 'Ik kreeg af en toe een liefdevolle schop onder mijn kont die niemand me eerder durfde te geven.',
    name: 'Renee',
    context: 'Impact traject',
    category: 'impact',
  },
  {
    id: 'annemarie-1',
    text: 'Ik wist de stemmetjes om te buigen naar gedachten die me de kracht gaven om tot het gaatje te gaan.',
    name: 'Annemarie',
    context: 'Momentum traject',
    category: 'momentum',
  },
  {
    id: 'sandra-1',
    text: 'Wie zit er nou op mij te wachten! Coaching helpt me om niet mee te gaan met die beperkende stem.',
    name: 'Sandra',
    context: 'Momentum traject',
    category: 'momentum',
  },
  {
    id: 'mark-1',
    text: 'Ik heb meer rust en ruimte gecreëerd in mijn hoofd en leven. Dat maakt me een betere man voor mijn vrouw en ik ben veel effectiever in mijn werk.',
    name: 'Mark',
    context: 'Impact traject',
    category: 'impact',
  },
  {
    id: 'marije-1',
    text: 'Ik vond iemand die dwars door mij heen kijkt. Niet altijd even leuk, wel noodzakelijk om shit te doorbreken.',
    name: 'Marije',
    context: 'Impact traject',
    category: 'impact',
  },
  {
    id: 'rebekka-1',
    text: 'De combinatie van sporten en coaching zorgt voor directe feedback tijdens het sporten: wat doe ik als het zwaar wordt?',
    name: 'Rebekka',
    context: 'Momentum traject',
    category: 'momentum',
  },
  {
    id: 'matthijs-1',
    text: "Het woord 'proberen' ken ik niet meer, ik doe het gewoon.",
    name: 'Matthijs',
    context: 'Groepstraining',
    category: 'groepstraining',
  },
  {
    id: 'richard-1',
    text: 'STARK bouwt geen lichamen, STARK bouwt doorzetters.',
    name: 'Richard',
    context: 'Groepstraining',
    category: 'groepstraining',
  },
  {
    id: 'yara-1',
    text: 'Bij STARK voel ik me sterk en blij! Ik heb nieuwe vriendjes en het is altijd heel gezellig!',
    name: 'Yara',
    context: 'Kids',
    category: 'kids',
  },
  {
    id: 'jaloe-1',
    text: 'Bij STARK leer ik mijn grenzen te verleggen en hierdoor word ik de sterke versie van mezelf.',
    name: 'Jaloe',
    context: 'Teens',
    category: 'teens',
  },
  {
    id: 'mieke-1',
    text: 'Begeleiding die vertrouwen geeft en uitdaging biedt. Zo ontwikkel ik me in spierkracht en stevigheid waardoor werk in de tuin veel beter vol te houden is.',
    name: 'Mieke',
    context: 'ZilverFitness',
    category: 'zilverfitness',
  },
  {
    id: 'renske-1',
    text: 'Je lijf kan zoveel meer dan je denkt. Je mag het even niet weten, de trainer geeft je de ruimte en helpt je om weer door te gaan.',
    name: 'Renske',
    context: 'Groepstraining',
    category: 'groepstraining',
  },
  {
    id: 'jose-1',
    text: 'Gewoon lekker sporten, met een grapje en een grolletje op zijn tijd.',
    name: 'José',
    context: 'Groepstraining',
    category: 'groepstraining',
  },
  {
    id: 'mads-1',
    text: 'Met de juiste begeleiding verleg ik mijn grenzen, groei ik in mijn zelfvertrouwen en zit ik lekkerder in mijn vel.',
    name: 'Mads',
    context: 'Groepstraining',
    category: 'groepstraining',
  },
  {
    id: 'elisa-1',
    text: 'Gezellig sterker worden. Iedereen is aardig en het is altijd heel gezellig.',
    name: 'Elisa',
    context: 'Kids',
    category: 'kids',
  },
  {
    id: 'gerhard-1',
    text: 'Ik kom met plezier en ik voel me er goed bij.',
    name: 'Gerhard',
    context: 'ZilverFitness',
    category: 'zilverfitness',
  },
  {
    id: 'rosanne-g-1',
    text: 'STARK! heeft me geleerd dat ik niet alles hoef te geloven wat mijn hoofd zegt. Juist door door te zetten ontdek ik hoe sterk ik echt ben in plaats van naar mijn twijfels te luisteren.',
    name: 'Rosanne',
    context: 'Groepstraining',
    category: 'groepstraining',
  },
]

/**
 * Homepage-carousel: diversiteit over trainen, coaching, kids, teens en 55+.
 * Richard + Matthijs (trainen), Hilda (Impact), Sandra (Momentum),
 * Yara (Kids), Jaloe (Teens), Mieke (ZilverFitness).
 */
export const homepageTestimonialIds = [
  'richard-1',
  'matthijs-1',
  'hilda-1',
  'sandra-1',
  'yara-1',
  'jaloe-1',
  'mieke-1',
] as const

export function getTestimonialsByIds(ids: readonly string[]): Testimonial[] {
  const map = new Map(allTestimonials.map((item) => [item.id, item]))
  return ids.flatMap((id) => {
    const item = map.get(id)
    return item ? [item] : []
  })
}

export function getTestimonialsByCategory(category: TestimonialCategory): Testimonial[] {
  return allTestimonials.filter((item) => item.category === category)
}

export function getHomepageTestimonials(): Testimonial[] {
  return getTestimonialsByIds(homepageTestimonialIds)
}

export const heroQuoteRenske: HeroQuote = {
  text: 'Je lijf kan zoveel meer dan je denkt. Je mag het even niet weten, de trainer geeft je de ruimte en helpt je om weer door te gaan.',
  name: 'Renske',
  context: 'Groepstraining',
  image: '/images/foto-trainen-quotes-renske.jpg',
  imageAlt: 'Renske tijdens groepstraining bij STARK! Hardenberg',
}

const TRAINEN_PAGE_HERO_ID = 'renske-1'

/** Trainen-landing carousel: quotes die niet op de homepage staan. */
export const trainenPageCarouselIds = [
  'jose-1',
  'mads-1',
  'elisa-1',
  'gerhard-1',
  'rosanne-g-1',
] as const

export function getTrainenPageCarouselTestimonials(): Testimonial[] {
  const onHomepage = new Set<string>(homepageTestimonialIds)
  return getTestimonialsByIds(trainenPageCarouselIds).filter(
    (item) => item.id !== TRAINEN_PAGE_HERO_ID && !onHomepage.has(item.id),
  )
}

export const heroQuoteRebekka: HeroQuote = {
  text: 'De combinatie van sporten en coaching zorgt voor directe feedback tijdens het sporten: wat doe ik als het zwaar wordt?',
  name: 'Rebekka',
  context: 'Momentum traject',
  image: '/images/foto-momentum-quotes-hero.png',
  imageAlt: 'Rebekka tijdens sledpull-training bij STARK! Hardenberg',
  imageBw: true,
  objectPosition: 'center 42%',
}

/** Momentum-pagina: hero Rebekka + carousel (Sandra zit op homepage). */
export const momentumPageCarouselIds = ['gerlinde-1', 'annemarie-1', 'stephanie-1'] as const

export function getMomentumPageTestimonials(): Testimonial[] {
  return getTestimonialsByIds(momentumPageCarouselIds)
}

export const heroQuoteEva: HeroQuote = {
  text: 'Ik ben de fijnste versie van mezelf. Het is het beste cadeau aan jezelf.',
  name: 'Eva',
  context: 'Impact traject',
  image: '/images/foto-impact-kettlebell.png',
  imageBw: true,
  objectPosition: 'center 38%',
}

export const heroQuoteRenee: HeroQuote = {
  text: 'Ik kreeg af en toe een liefdevolle schop onder mijn kont die niemand me eerder durfde te geven.',
  name: 'Renee',
  context: 'Impact traject',
  image: '/images/foto-impact-quotes-renee.png',
  imageAlt: 'Renee met weerstandsband tijdens training bij STARK! Hardenberg',
  imageBw: true,
  objectPosition: '48% 14%',
  imageScale: 1.08,
  imageScaleOrigin: '48% 15%',
  imageTranslateY: '0',
}

/** Impact-pagina carousel: zes quotes, 3 vrouwen / 3 mannen (hero = Renee, homepage = Hilda). */
export const impactPageCarouselIds = [
  'eva-1',
  'erwin-1',
  'marije-1',
  'mark-1',
  'anne-1',
  'geert-willem-1',
] as const

export function getImpactPageTestimonials(): Testimonial[] {
  return getTestimonialsByIds(impactPageCarouselIds)
}
