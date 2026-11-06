import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { parseLegalMarkdown, readLegalMarkdown, type Inline } from '@/lib/legal-markdown'
import styles from './LegalDocument.module.css'

function InlineText({ parts }: { parts: Inline[] }) {
  return parts.map((part, index) => {
    if (part.type === 'strong') return <strong key={index}>{part.text}</strong>
    if (part.type === 'link') {
      const external = /^https?:/.test(part.href)
      return (
        <a
          key={index}
          href={part.href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {part.text}
        </a>
      )
    }
    return <span key={index}>{part.text}</span>
  })
}

export default function LegalDocument({ file }: { file: 'privacy.md' | 'voorwaarden.md' }) {
  const blocks = parseLegalMarkdown(readLegalMarkdown(file))

  return (
    <>
      <main className={styles.page}>
        <Nav heroBar hideCta />
        <article className={styles.inner}>
          {blocks.map((block, index) => {
            if (block.type === 'h1') {
              return (
                <h1 key={index} className={styles.title}>
                  <InlineText parts={block.inlines} />
                </h1>
              )
            }
            if (block.type === 'h2') {
              return (
                <h2 key={index} className={block.chapter ? styles.chapterTitle : styles.h2}>
                  <InlineText parts={block.inlines} />
                </h2>
              )
            }
            if (block.type === 'h3') {
              return (
                <h3 key={index} className={styles.h3}>
                  <InlineText parts={block.inlines} />
                </h3>
              )
            }
            if (block.type === 'ul' || block.type === 'ol') {
              const List = block.type
              return (
                <List key={index} className={styles.list}>
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <InlineText parts={item} />
                    </li>
                  ))}
                </List>
              )
            }
            return (
              <p key={index}>
                <InlineText parts={block.inlines} />
              </p>
            )
          })}
        </article>
      </main>
      <Footer variant="dark" />
    </>
  )
}
