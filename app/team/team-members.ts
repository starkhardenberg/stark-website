export type TeamMember = {
  id: number
  name: string
  role: string
  photo: string
  objectPosition: string
  quote: string
}

export const TEAM: TeamMember[] = [
  { id: 1, name: 'Engbert-Jan', role: 'Eigenaar, coach en trainer', photo: '/images/team/engbert-jan.jpg', objectPosition: '50% 34%', quote: 'Laten we niet praten over excuses maar over stappen.' },
  { id: 2, name: 'Yvonne', role: 'Eigenaar, coach en trainer', photo: '/images/team/yvonne-new.png', objectPosition: '50% 24%', quote: 'Je begint door te beginnen.' },
  { id: 3, name: 'Anne', role: 'Trainer', photo: '/images/team/anne.jpg', objectPosition: '50% 30%', quote: 'Comfort staat groei in de weg. Ga het oncomfortabele aan en groei!' },
  { id: 4, name: 'Els', role: 'Trainer', photo: '/images/team/els.jpg', objectPosition: '50% 30%', quote: 'Alleen ben je STARK, samen zijn we STARKER.' },
  { id: 5, name: 'Yoeri', role: 'Trainer', photo: '/images/team/marinus.jpg', objectPosition: '50% 32%', quote: 'Bewegen is al winst. Hard trainen is nog meer winst.' },
  { id: 6, name: 'Marinus', role: 'Trainer', photo: '/images/team/yoeri.jpg', objectPosition: '50% 32%', quote: 'Het leven begint aan het einde van je comfortzone.' },
  { id: 7, name: 'Jordi', role: 'Trainer kids', photo: '/images/team/jordi.jpg', objectPosition: '50% 28%', quote: 'Elke overwinning verdient het om gevierd te worden, ongeacht hoe klein.' },
  { id: 8, name: 'Tineke', role: 'Onze steun en toeverlaat', photo: '/images/team/tineke.jpg', objectPosition: '50% 24%', quote: 'U vraagt, ik draai!' },
  { id: 9, name: 'Tygo', role: 'Trainer kids en teens', photo: '/images/team/tygo.jpg', objectPosition: '50% 32%', quote: 'Sterk worden mag ook gewoon leuk zijn.' },
  { id: 10, name: 'Nina', role: 'Trainer', photo: '/images/team/nina.jpg', objectPosition: '50% 30%', quote: 'Kleine progressie is ook progressie.' },
  { id: 11, name: 'Mark', role: 'Trainer', photo: '/images/team/mark.jpg', objectPosition: '50% 28%', quote: 'Een sterk en fit lichaam is een groot goed en je verdient het om daar tijd in te steken.' },
]

export const col1 = TEAM.filter((_, i) => i % 3 === 0)
export const col2 = TEAM.filter((_, i) => i % 3 === 1)
export const col3 = TEAM.filter((_, i) => i % 3 === 2)
