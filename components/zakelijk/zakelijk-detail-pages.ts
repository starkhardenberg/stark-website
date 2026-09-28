import { zakelijkSoloRoutes } from '@/components/zakelijk/zakelijk-solo-routes'
import { hrefKennismaking } from '@/lib/contact'
import type { ServiceDetailContent } from '@/components/service-detail/types'

const ZAKELIJK_BACK = {
  backHref: '/zakelijk-v2',
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

const leiderschap = byId('leiderschap-1-op-1')
const jaartraject = byId('jaartraject')
const momentumWerk = byId('momentum-at-werk')

export const leiderschapDetail: ServiceDetailContent = {
  ...ZAKELIJK_BACK,
  title: leiderschap.mediaLabel ?? leiderschap.cat,
  num: leiderschap.num,
  eyebrow: leiderschap.eyebrow ?? '',
  headerImage: {
    src: `/images/${leiderschap.photo}`,
    alt: leiderschap.photoAlt,
    objectPosition: leiderschap.photoObjectPosition,
  },
  transitionImage: {
    src: '/images/foto-zakelijk-hero-sled.png',
    alt: '',
    objectPosition: '58% 42%',
  },
  closeImage: {
    src: '/images/foto-zakelijk-tegel-fundament-flipchart.png',
    alt: '',
    objectPosition: 'center 40%',
  },
  opening: 'Sterker worden in hoe je leidt, en in wat je lijf aankan.',
  blocks: [
    {
      label: 'Past bij jou als',
      text: [
        'Je in je werk meer voor elkaar wilt krijgen dan er nu uitkomt.',
        'Als ondernemer of directeur betekent dat meestal: de beslissing die je uitstelt, het gesprek dat er niet komt, de stap die al een jaar op de plank ligt.',
        'Als MT-lid of teamleider: je plek innemen, verantwoordelijkheid laten waar hij hoort, en niet alles zelf oplossen.',
      ],
    },
    {
      label: 'Zo werkt het',
      text: [
        'Wekelijks een uur coaching op wat er die week speelt. Daarnaast train je wekelijks bij ons in Hardenberg.',
        'Vanaf een kwartaal, in de praktijk meestal een half jaar of een jaar.',
      ],
    },
    {
      label: 'Wat zit erin',
      text: [
        'We werken aan hoe je functioneert in je werk: de beslissingen die je neemt en of je eraan vasthoudt, je plek in het team, hoe je mensen meekrijgt.',
        'Ben je zelf eigenaar, dan is er niemand die je aanspreekt op wat je laat liggen. Dat doen wij.',
        'De richting bepalen we in een startgesprek. Betaalt je werkgever mee, dan sluit je leidinggevende daarbij aan.',
      ],
    },
    {
      label: 'Hoe starten',
      text: 'Plan een kennismakingsgesprek. Je kunt ook eerst een keer meedoen op de Proef op de Som, donderdag 5 november.',
    },
  ],
  depthTitle: 'Voor je werkgever',
  depthNote: 'Ben je in loondienst en betaalt je werkgever mee? Dit blok kun je doorsturen.',
  depthBrief: true,
  depth: [
    {
      type: 'item',
      label: 'Wat het is',
      text: 'Een individueel coachingtraject op persoonlijk leiderschap in het werk, gecombineerd met wekelijkse fysieke training.',
    },
    {
      type: 'item',
      label: 'Wat het inhoudt',
      text: 'Wekelijks een uur coaching, wekelijks trainen bij STARK! in Hardenberg. Looptijd vanaf een kwartaal, in de praktijk meestal een half jaar of een jaar.',
    },
    {
      type: 'item',
      label: 'Waar we aan werken',
      text: 'Aan wat deze medewerker in het werk voor elkaar krijgt: beslissingen nemen en eraan vasthouden, positie innemen in het team, mensen meekrijgen. De richting bepalen we in een startgesprek, samen met de leidinggevende.',
    },
    {
      type: 'item',
      label: 'Wat het de organisatie oplevert',
      text: 'Iemand die zelfstandiger beslist, meer draagt en eerder ingrijpt. De leidinggevende krijgt handen vrij.',
    },
    {
      type: 'item',
      label: 'Hoe we terugkoppelen',
      text: 'Na drie maanden en aan het eind een gesprek met de leidinggevende erbij. De inhoud van de coaching blijft vertrouwelijk; de voortgang bespreken we.',
    },
    {
      type: 'item',
      label: 'Investering',
      text: 'Afhankelijk van looptijd en frequentie. Bij een half jaar gaat het om wekelijks een uur coaching en wekelijks trainen. We maken een offerte op maat na het kennismakingsgesprek.',
    },
  ],
}

export const jaartrajectDetail: ServiceDetailContent = {
  ...ZAKELIJK_BACK,
  title: jaartraject.mediaLabel ?? jaartraject.cat,
  num: jaartraject.num,
  eyebrow: jaartraject.eyebrow ?? '',
  headerImage: {
    src: `/images/${jaartraject.photo}`,
    alt: jaartraject.photoAlt,
    objectPosition: jaartraject.photoObjectPosition,
  },
  transitionImage: {
    src: '/images/foto-zakelijk-tegel-momentum-team.png',
    alt: '',
    objectPosition: 'center 35%',
  },
  closeImage: {
    src: '/images/foto-coaching-samen.jpg',
    alt: '',
    objectPosition: 'center 40%',
  },
  opening: 'Een team dat weet wat er moet gebeuren, het toezegt en het ook doet.',
  blocks: [
    {
      label: 'Past bij jou als',
      text: 'Je wilt dat je team die stap zet, en je bent bereid er zelf in mee te gaan.',
    },
    {
      label: 'Zo werkt het',
      text: [
        'Een jaar. Wekelijkse coaching voor het team, wekelijkse opdrachten die over het werk van die week gaan. Het eerste kwartaal traint het team samen.',
        'Jij doet daarnaast je eigen wekelijkse 1-op-1 coaching. Die zit in het traject.',
      ],
    },
    {
      label: 'Wat zit erin',
      text: [
        'We beginnen met het team dat het dichtst bij de koers zit: het MT, de teamleiders of kantoor. Vandaaruit werken we naar de vloer.',
        'Een jaar is de ondergrens. Jezelf veranderen gaat sneller dan een team veranderen — bij één persoon werken we vanaf een kwartaal, bij een team duurt het langer voordat nieuw gedrag het gedrag van de groep is en niet iets wat één iemand probeert.',
      ],
    },
    {
      label: 'Hoe starten',
      text: 'Plan een kennismakingsgesprek. Je kunt ook eerst een keer meedoen op de Proef op de Som, donderdag 5 november.',
    },
  ],
  depthTitle: 'Waar een team het verschil maakt',
  depth: [
    {
      type: 'p',
      text: 'De meeste teams weten prima wat er moet gebeuren. Het verschil zit in het moment dat het anders gaat dan bedacht.',
    },
    {
      type: 'p',
      text: 'Daar wordt zichtbaar wat een team kan. Iemand zegt wat hij ziet, de ander hoort het, ze corrigeren en gaan door. Of: het wordt persoonlijk. Er wordt niets meer gezegd. De afspraak verwatert, iemand gaat het zelf maar doen, en de volgende keer kijkt iedereen eerst even naar jou.',
    },
    {
      type: 'p',
      text: 'Dat ene moment bepaalt hoe het volgende overleg gaat. Teams die dat moment aankunnen, halen hun afspraken. Teams die het niet aankunnen, hebben elke week een overleg waarin hetzelfde punt terugkomt.',
    },
    {
      type: 'p',
      text: 'Het is aan te leren. Een afspraak nakomen, ook als het uitkomt om het niet te doen. Zeggen wat je ziet voordat het een probleem is. Horen wat iemand over jouw werk zegt zonder dat het over jou gaat. Dat zijn vaardigheden. Je kunt ze oefenen.',
    },
    { type: 'heading', text: 'Daarom trainen we er samen bij' },
    {
      type: 'p',
      text: 'Feedback geven in een overleg is moeilijk, omdat er vijftien jaar samenwerken achter zit. Wie wat ooit heeft laten liggen. Wat je vorig jaar tegen elkaar hebt gezegd. Wie boven wie staat — en dat ben jij. Voordat iemand zijn mond opendoet, is dat allemaal al meegewogen.',
    },
    {
      type: 'p',
      text: 'In de trainingszaal telt dat niet. Een collega tilt, zijn rug rondt, jij ziet het. Je zegt het of je zegt het niet. Hij past het aan of niet. Binnen twee minuten weet je of het gewerkt heeft.',
    },
    {
      type: 'p',
      text: 'De geschiedenis is er nog. Dezelfde collega, de rest van het team staat erbij. Maar het gaat over die ene set en over niets anders. Daar valt niets in te lezen.',
    },
    {
      type: 'p',
      text: 'Daarom doe jij mee. In de groep, met een gewicht in je handen. Een set van tien is een set van tien, ook voor de eigenaar. Nergens in het bedrijf staan jullie zo gelijk.',
    },
    {
      type: 'p',
      text: 'Een kwartaal lang, elke week. Daarna is het gesprek in het overleg bekend terrein. Alleen zwaarder.',
    },
  ],
}

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
