import TestimonialsSection from './testimonials/TestimonialsSection'
import { getHomepageTestimonials, heroQuoteAmanda } from './testimonials/testimonials-data'

export default function ResultatenSection() {
  return (
    <TestimonialsSection
      id="resultaten"
      hero={heroQuoteAmanda}
      items={getHomepageTestimonials()}
      narrow
    />
  )
}
