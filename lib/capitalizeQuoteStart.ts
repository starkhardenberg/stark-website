/** Zorgt dat quotetekst met een hoofdletter begint (na eventuele aanhalingstekens). */
export function capitalizeQuoteStart(text: string): string {
  const index = text.search(/\p{L}/u)
  if (index === -1) return text
  return text.slice(0, index) + text[index].toLocaleUpperCase('nl-NL') + text.slice(index + 1)
}
