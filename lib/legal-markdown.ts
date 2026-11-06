import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export type Inline =
  | { type: 'text'; text: string }
  | { type: 'strong'; text: string }
  | { type: 'link'; text: string; href: string }

export type LegalBlock =
  | { type: 'h1'; inlines: Inline[] }
  | { type: 'h2'; inlines: Inline[]; chapter?: boolean }
  | { type: 'h3'; inlines: Inline[] }
  | { type: 'p'; inlines: Inline[] }
  | { type: 'ul'; items: Inline[][] }
  | { type: 'ol'; items: Inline[][] }

const INLINE = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g

function parseInlines(input: string): Inline[] {
  const parts: Inline[] = []
  let last = 0

  for (const match of input.matchAll(INLINE)) {
    const index = match.index ?? 0
    if (index > last) parts.push({ type: 'text', text: input.slice(last, index) })
    if (match[1] != null) parts.push({ type: 'strong', text: match[1] })
    else parts.push({ type: 'link', text: match[2] ?? '', href: match[3] ?? '' })
    last = index + match[0].length
  }

  if (last < input.length) parts.push({ type: 'text', text: input.slice(last) })
  return parts
}

function isStructural(line: string) {
  return line.startsWith('## ') || line.startsWith('# ') || line.startsWith('- ') || /^\d+\.\s+/.test(line)
}

/** Beperkte markdown: koppen, alinea's, lijsten, vet en links. Geen frontmatter. */
export function parseLegalMarkdown(source: string): LegalBlock[] {
  const lines = source.replace(/\r\n/g, '\n').split('\n')
  const blocks: LegalBlock[] = []
  let i = 0
  let seenHashHeading = false
  let afterLaterHashHeading = false

  while (i < lines.length) {
    const line = lines[i]
    if (line.trim() === '') {
      i += 1
      continue
    }

    if (line.startsWith('## ')) {
      blocks.push({
        type: afterLaterHashHeading ? 'h3' : 'h2',
        inlines: parseInlines(line.slice(3).trim()),
      })
      i += 1
      continue
    }

    if (line.startsWith('# ')) {
      const inlines = parseInlines(line.slice(2).trim())
      if (!seenHashHeading) {
        blocks.push({ type: 'h1', inlines })
        seenHashHeading = true
      } else {
        blocks.push({ type: 'h2', chapter: true, inlines })
        afterLaterHashHeading = true
      }
      i += 1
      continue
    }

    if (line.startsWith('- ')) {
      const items: Inline[][] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(parseInlines(lines[i].slice(2).trim()))
        i += 1
      }
      blocks.push({ type: 'ul', items })
      continue
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: Inline[][] = []
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(parseInlines(lines[i].replace(/^\d+\.\s+/, '').trim()))
        i += 1
      }
      blocks.push({ type: 'ol', items })
      continue
    }

    const paragraph: string[] = []
    while (i < lines.length && lines[i].trim() !== '' && !isStructural(lines[i])) {
      paragraph.push(lines[i].trim())
      i += 1
    }
    blocks.push({ type: 'p', inlines: parseInlines(paragraph.join(' ')) })
  }

  return blocks
}

export function readLegalMarkdown(filename: 'privacy.md' | 'voorwaarden.md') {
  return readFileSync(join(process.cwd(), 'content', filename), 'utf8')
}
