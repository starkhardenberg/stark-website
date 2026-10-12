import PortraitStories from './testimonials/PortraitStories'
import { homepagePeople } from './testimonials/portrait-quotes'

export default function ResultatenSection() {
  return <PortraitStories id="resultaten" people={homepagePeople} showGoogleReviews />
}
