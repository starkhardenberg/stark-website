import TeamPage from './TeamPage'
import { pageMetadata } from '@/lib/open-graph'

export const metadata = pageMetadata(
  'team',
  'Ons team — STARK! Hardenberg',
  'Maak kennis met het team van STARK! Hardenberg. Acht trainers, intern opgeleid vanuit de eigen leden. Eigenaren Engbert-Jan en Yvonne, en Tineke die alles draaiende houdt.',
)

export default function Page() {
  return <TeamPage />
}
