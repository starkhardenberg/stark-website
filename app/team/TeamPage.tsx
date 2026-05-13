'use client'
import { useState } from 'react'
import Link from 'next/link'
import { mailtoKennismaking } from '@/lib/contact'
import Image from 'next/image'
import navStyles from '../landing.module.css'
import styles from './team.module.css'

const TEAM = [
  { id: 1,  name: 'Engbert-Jan', role: 'Eigenaar, coach en trainer',   photo: '/images/team/engbert-jan.jpg', objectPosition: '50% 34%', quote: 'Laten we niet praten over excuses maar over stappen.' },
  { id: 2,  name: 'Yvonne',      role: 'Eigenaar, coach en trainer',   photo: '/images/team/yvonne-new.png', objectPosition: '50% 24%', quote: 'Je hoeft niet sterk te zijn om te beginnen.' },
  { id: 3,  name: 'Anne',        role: 'Trainer',                      photo: '/images/team/anne.jpg', objectPosition: '50% 30%', quote: 'Comfort staat groei in de weg. Ga het oncomfortabele aan en groei!' },
  { id: 4,  name: 'Els',         role: 'Trainer',                      photo: '/images/team/els.jpg', objectPosition: '50% 30%', quote: 'Techniek eerst, daarna pas tempo.' },
  { id: 5,  name: 'Yoeri',       role: 'Trainer',                      photo: '/images/team/marinus.jpg', objectPosition: '50% 32%', quote: 'Bewegen is al winst. Hard trainen is nog meer winst.' },
  { id: 6,  name: 'Marinus',     role: 'Trainer',                      photo: '/images/team/yoeri.jpg', objectPosition: '50% 32%', quote: 'Consistentie wint het altijd van motivatie.' },
  { id: 7,  name: 'Jordi',       role: 'Trainer kids',                 photo: '/images/team/jordi.jpg', objectPosition: '50% 28%', quote: 'Elke overwinning verdient het om gevierd te worden, ongeacht hoe klein.' },
  { id: 8,  name: 'Tineke',      role: 'Onze steun en toeverlaat',     photo: '/images/team/tineke.jpg', objectPosition: '50% 24%', quote: 'U vraagt, ik draai!' },
  { id: 9,  name: 'Tygo',        role: 'Trainer kids en teens',        photo: '/images/team/tygo.jpg', objectPosition: '50% 32%', quote: 'Sterk worden mag ook gewoon leuk zijn.' },
  { id: 10, name: 'Nina',        role: 'Trainer',                      photo: '/images/team/nina.jpg', objectPosition: '50% 30%', quote: 'Kleine progressie is ook progressie.' },
  { id: 11, name: 'Mark',        role: 'Trainer',                      photo: '/images/team/mark.jpg', objectPosition: '50% 28%', quote: 'Een sterk en fit lichaam is een groot goed en je verdient het om daar tijd in te steken.' },
]

const col1 = TEAM.filter((_, i) => i % 3 === 0)
const col2 = TEAM.filter((_, i) => i % 3 === 1)
const col3 = TEAM.filter((_, i) => i % 3 === 2)

export default function TeamPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const photoClass = (id: number) => {
    if (hoveredId === null) return ''
    return hoveredId === id ? styles.active : styles.inactive
  }

  const nameClass = (id: number) => {
    if (hoveredId === null) return ''
    return hoveredId === id ? styles.active : styles.inactive
  }

  return (
    <main className={styles.page}>

      <nav className={navStyles.nav}>
        <Link href="/#over" className={navStyles.navBack}>← Terug naar STARK!</Link>
        <Link href={mailtoKennismaking} className={navStyles.navCta}>Plan een kennismaking</Link>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/team.jpg"
            alt="Het team van STARK! Hardenberg"
            fill
            className={styles.heroBgImg}
            sizes="100vw"
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Een team van 11 mensen. Eén aanpak.</span>
          <span className={styles.heroSlash} />
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLead}>ONS</span>
            <span className={styles.heroPunch}>TEAM</span>
          </h1>
        </div>
        <div className={styles.heroBar} />
      </section>

      {/* Intro strip */}
      <div className={styles.introSection}>
        <p className={styles.introText}>
          Negen trainers die zelf als lid begonnen, de weg liepen die jij nu loopt, en daarna zijn opgeleid via een intensief intern opleidingstraject.
          Engbert-Jan en Yvonne aan het roer, Tineke die alles in goede banen leidt.{' '}
          <strong>Korte lijnen, vaste gezichten, altijd iemand die jou kent.</strong>
        </p>
      </div>

      {/* Interactive team grid */}
      <section className={styles.teamSection}>
        <div className={styles.teamLayout}>

          {/* Photo grid — 3 staggered columns */}
          <div className={styles.photoGrid}>
            {[col1, col2, col3].map((col, colIdx) => (
              <div
                key={colIdx}
                className={`${styles.col} ${colIdx === 0 ? styles.col1 : ''} ${colIdx === 1 ? styles.col2 : ''} ${colIdx === 2 ? styles.col3 : ''}`}
              >
                {col.map((member) => (
                  <div
                    key={member.id}
                    className={`${styles.photoItem} ${photoClass(member.id)}`}
                    onMouseEnter={() => setHoveredId(member.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className={styles.photoImg}
                      style={{ objectPosition: member.objectPosition }}
                      sizes="(min-width:900px) 18vw, 33vw"
                    />
                    <span className={styles.photoName}>{member.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Name list */}
          <div className={styles.nameList}>
            {TEAM.map((member, i) => (
              <div
                key={member.id}
                className={`${styles.nameItem} ${nameClass(member.id)}`}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <span className={styles.nameNum}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className={styles.memberName}>{member.name}</div>
                  <div className={styles.memberRole}>{member.role}</div>
                  <p className={styles.memberQuote}>&ldquo;{member.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className={navStyles.cta}>
        <span className={`${navStyles.ctaLabel} ${styles.teamBuildLabel}`}>Klaar om te bouwen?</span>
        <h2 className={navStyles.ctaTitle}>WEES WELKOM.</h2>
        <p className={navStyles.ctaSub}>
          Plan een vrijblijvend kennismakingsgesprek. We kijken samen wat het beste bij je past.
        </p>
        <Link href={mailtoKennismaking} className={navStyles.ctaBtn}>Plan een kennismaking</Link>
        <span className={navStyles.ctaNote}>Gratis en vrijblijvend</span>
      </section>

    </main>
  )
}
