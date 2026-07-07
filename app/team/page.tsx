import TeamPage from './TeamPage'
import { pageMetadata } from '@/lib/open-graph'

export const metadata = pageMetadata(
  'team',
  'Ons team — STARK! Hardenberg',
  'Maak kennis met het team van STARK! Hardenberg. Negen trainers opgeleid door een intensieve interne opleiding vanuit de eigen leden, plus eigenaren Engbert-Jan en Yvonne.',
)

export default function Page() {
  return <TeamPage />
}
