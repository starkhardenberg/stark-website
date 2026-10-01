import { zakelijkSoloRoutes } from '@/components/zakelijk/zakelijk-solo-routes'
import { hrefKennismaking } from '@/lib/contact'
import type { ServiceDetailContent } from '@/components/service-detail/types'

const ZAKELIJK_BACK = {
  backHref: '/zakelijk',
  backLabel: 'Terug naar zakelijk',
  navCtaLabel: 'Plan een gesprek',
  navCtaHref: hrefKennismaking,
  footerPhotoSet: 'zakelijk' as const,
  proefGraf:
    'Of kom een keer meedoen. De Proef op de Som is een middag voor eigenaren, directeuren, MT-leden en teamleiders. Je maakt mee hoe we werken — coaching en training, precies zoals in een traject.',
}

function byId(id: string) {
  const track = zakelijkSoloRoutes.find((item) => item.id === id)
  if (!track) throw new Error(`Zakelijke route ontbreekt: ${id}`)
  return track
}

const momentumWerk = byId('momentum-at-werk')

export const momentumAtWerkDetail: ServiceDetailContent = {
  ...ZAKELIJK_BACK,
  title: momentumWerk.mediaLabel ?? momentumWerk.cat,
  num: momentumWerk.num,
  eyebrow: momentumWerk.eyebrow ?? '',
  headerImage: {
    src: `/images/${momentumWerk.photo}`,
    alt: momentumWerk.photoAlt,
    objectPosition: momentumWerk.photoObjectPosition,
  },
  transitionImage: {
    src: '/images/foto-zakelijk-tegel-werkgevers-groep.jpg',
    alt: '',
    objectPosition: 'center 40%',
  },
  closeImage: {
    src: '/images/foto-coaching-moment.jpg',
    alt: '',
    objectPosition: 'center 30%',
  },
  opening: 'Tien weken waarin je mensen leren wat ze nodig hebben om overeind te blijven als het werk voller wordt.',
  blocks: [
    {
      label: 'Past bij jou als',
      text: 'Je verantwoordelijk bent voor een groep medewerkers en wilt dat ze zichzelf staande houden. En je wilt weten of het werkt.',
    },
    {
      label: 'Zo werkt het',
      text: [
        'Tien weken, twee keer per week trainen. Om de week is een van die twee een langere sessie waarin coaching en fysieke uitdaging samenvallen: wat je in je hoofd tegenkomt, kom je daar in je lijf tegen.',
        'Vaste groep, vaste start, vaste eindstreep. Minimaal vijf deelnemers. Alles gebeurt bij ons in Hardenberg, dus het kost jou geen ruimte en geen organisatie.',
      ],
    },
    {
      label: 'Wat zit erin',
      text: [
        'Twintig trainingen, vijf groepssessies en een dagelijks incheckmoment. Iedere deelnemer benoemt bij de start één concrete situatie die hem energie kost — een echte situatie, geen thema.',
        'Voor de start een individuele intake en nulmeting. Na tien weken dezelfde meting opnieuw.',
      ],
    },
    {
      label: 'Hoe starten',
      text: 'Plan een kennismakingsgesprek. We bespreken voor wie het programma geschikt is en wie er beter bij een arts terechtkan.',
    },
  ],
  depthTitle: 'Wat je terugkrijgt',
  depth: [
    {
      type: 'p',
      text: 'Een programma inkopen voor je mensen is één ding. Kunnen uitleggen wat het heeft opgeleverd is iets anders. Daarom meten we.',
    },
    {
      type: 'p',
      text: 'Bij de start brengen we per deelnemer in kaart hoe hij ervoor staat: inzetbaarheid, energie, en één fysieke benchmark. En hij benoemt dat ene ding waar hij op omvalt, met erbij hoe lang het al loopt.',
    },
    {
      type: 'p',
      text: 'Na tien weken doen we dezelfde meting opnieuw. En de deelnemer zegt of zijn ding is opgelost. Ja of nee.',
    },
    {
      type: 'p',
      text: 'Wat jij krijgt is een geanonimiseerde rapportage over de groep: de scores voor en na, hoeveel deelnemers hun doel haalden, de opkomst, en de thema\'s die structureel naar boven kwamen. Dat laatste is vaak het waardevolst — als vier mensen hetzelfde noemen, gaat het niet meer over die vier.',
    },
    {
      type: 'p',
      text: 'Wat jij niet krijgt is informatie over één persoon. Ook niet positief, ook niet als je erom vraagt. Dat is wat de deelnemers de ruimte geeft om er iets aan te hebben.',
    },
  ],
}
