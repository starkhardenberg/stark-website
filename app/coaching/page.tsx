import Link from 'next/link'
import { CTA_KENNISMAKING_LABEL, hrefKennismaking } from '@/lib/contact'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import { coachingFaq } from '@/components/faq/faq-coaching'
import LandingServiceCard from '@/components/landing/LandingServiceCard'
import { coachingCards } from '@/components/landing/landing-cards'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import { oswaldTrim } from '@/lib/displayTrim'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Coaching — STARK! Hardenberg',
  description: 'Coachingstrajecten van eerste online stap tot intensief persoonlijk programma. Lijf en hoofd versterken elkaar.',
}

export default function CoachingPage() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} ${styles.heroCoaching}`}>
        <div className={styles.heroBg}>
          <Image
            src="/images/foto-coaching-hero-flipchart.png"
            alt="Coachinggesprek met scherpe vragen bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImg} ${styles.heroBgImgCoaching}`}
            sizes="100vw"
            priority
            style={{ objectPosition: '55% 38%' }}
          />
        </div>
        <Nav />
        <div className={styles.heroContent}>
          <span className={styles.heroSlash} />
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>COACHING</span>
            <span className={styles.heroPunch}>BIJ STARK</span>
          </h1>
          <p className={styles.heroSub}>
            Een helder hoofd. Een lijf dat aankan wat je vraagt.
          </p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <section className={`${styles.introSection} ${styles.introSectionLight}`} aria-label="Wat coaching is">
        <div className={styles.introRow}>
          <div className={styles.introHead}>
            <p className={styles.introLabel}>Stap voor stap, echt resultaat</p>
            <h2 className={styles.introStatement}>Klaar met aanmodderen.</h2>
          </div>
          <div className={styles.introBody}>
            <div className={styles.introCols}>
              <div className={styles.introCol}>
                <p className={styles.introColLabel}>Dit herken je. En het irriteert je ook.</p>
                <ul className={styles.introColList}>
                  <li>Je weet wat je wilt veranderen, maar blijft hangen in uitstel, twijfel of oude patronen.</li>
                  <li>Je weet en je voelt het: als ik zo doorga, verandert er niets.</li>
                  <li>Je bent bereid eerlijk te kijken naar wat je doet, en wat je overslaat.</li>
                </ul>
              </div>
              <div className={styles.introCol}>
                <p className={styles.introColLabel}>Jouw traject, jouw focus.</p>
                <ul className={styles.introColList}>
                  <li>Jij bepaalt waar we op inzetten. Je lijf, je hoofd, of allebei.</li>
                  <li>Training én coaching in één traject. Geen losse gesprekken, geen losse workouts.</li>
                  <li>Iemand die hardop zegt wat jij liever niet benoemt. En zo patronen doorbreekt.</li>
                  <li>Verandering die blijft als het traject klaar is.</li>
                </ul>
              </div>
            </div>

            <div className={styles.introCtaRow}>
              <Link href={hrefKennismaking} className={`${styles.introCta} ${styles.introCtaFilled}`}>
                {CTA_KENNISMAKING_LABEL}
              </Link>
              <WhatsAppLink className={styles.introCta}>
                <WhatsAppIcon className={styles.introCtaIcon} />
                <span>Stuur een WhatsApp</span>
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionWithOrangeBottom} ${styles.sectionCatalog}`}>
        <div className={styles.catalogHead}>
          <h2 className={styles.title} style={oswaldTrim('Twee')}>
            Twee <span className={styles.titleAccentOutline}>trajecten.</span>
          </h2>
          <p className={styles.catalogIntro}>
            Samen sterker in een groep, of alle aandacht voor jou alleen.
          </p>
        </div>
        <div className={`${styles.resultGrid} ${styles.resultGridPhotos} ${styles.resultGridTwo} ${styles.resultGridSpaced}`}>
          {coachingCards.map((card, i) => (
            <LandingServiceCard key={card.title} {...card} num={String(i + 1).padStart(2, '0')} />
          ))}
        </div>
      </section>

      <div className={`${styles.split} ${styles.splitStatement}`}>
        <div className={styles.splitContent} data-num="01">
          <div className={styles.splitInner}>
            <span className={styles.label}>Waar wij voor staan</span>
            <h2 className={styles.title} style={oswaldTrim('ZO')}>ZO COACHEN WIJ</h2>
            <ul className={styles.featureTiles}>
              <li>
                <span>Lijf en hoofd trainen we samen, nooit los van elkaar.</span>
              </li>
              <li>
                <span>We werken aan wie je bent, niet alleen aan wat je doet.</span>
              </li>
              <li>
                <span>We benoemen wat jij liever overslaat.</span>
              </li>
              <li>
                <span>Streng waar nodig, warm waar het kan.</span>
              </li>
              <li>
                <span>Coaches die je verhaal kennen en bijhouden.</span>
              </li>
              <li>
                <span>Verandering die blijft, ook als het traject klaar is.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <span className={styles.label}>Wat je nog wilt weten</span>
          <h2 className={styles.title} style={oswaldTrim('Goede')}>Goede vragen</h2>
          <FaqList items={coachingFaq} />
        </div>
      </section>

      <Footer photoFirst photoSet="coaching" brandPrefix="BIJ" />
    </main>
  )
}
