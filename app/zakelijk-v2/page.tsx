import type { Metadata } from 'next'
import Link from 'next/link'
import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import ContentQuoteBlock from '@/components/ContentQuoteBlock'
import AanbodFeatureCard from '@/components/aanbod/AanbodFeatureCard'
import aanbodStyles from '@/components/AanbodSection.module.css'
import introStyles from '@/components/IntroSection.module.css'
import { zakelijkOndernemersFaq } from '@/components/faq/faq-zakelijk-ondernemers'
import { zakelijkSoloRoutes } from '@/components/zakelijk/zakelijk-solo-routes'
import ZakelijkCtaBand, {
  ZakelijkImpactLink,
} from '@/components/zakelijk/ZakelijkCtaBand'
import { hrefZakelijk } from '@/lib/contact'
import { STARK_GRAIN } from '@/lib/stark-grain'
import pageStyles from '@/components/zakelijk/ZakelijkOndernemersPage.module.css'
import styles from '../landing.module.css'

export const metadata: Metadata = {
  title: 'Zakelijk — STARK! Hardenberg',
  description:
    'Sterker worden, en doen wat er te doen is. Voor ondernemers, DGA\'s en ZZP\'ers. Het begint bij jou. Hardenberg.',
  robots: { index: false, follow: false },
}

const LAYERS = [
  {
    id: '01',
    lead: 'Jij',
    rest: 'wilt een bedrijf waar je trots op bent. Het besluit dat al maanden ligt, ligt er nog steeds. Jij bent de enige hier zonder baas.',
  },
  {
    id: '02',
    lead: 'Je leidinggevende',
    rest: 'wil een team dat draait. Hij wacht met dat ene gesprek op een moment van zekerheid. Die zekerheid blijft uit.',
  },
  {
    id: '03',
    lead: 'Je mensen',
    rest: 'willen bijdragen aan iets dat groter is dan hun eigen taak. Als het druk wordt, of als het over hen gaat, springt hun hoofd ertussen.',
  },
] as const

/**
 * Preview van de nieuwe /zakelijk (ondernemerspagina).
 * Bestaande /zakelijk blijft staan tot review.
 */
export default function ZakelijkV2Page() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} ${styles.heroTall} ${styles.heroCoaching} ${styles.heroReadable}`}>
        <div className={styles.heroBg}>
          <StarkImage
            src="/images/foto-zakelijk-hero-sled.png"
            alt="Training bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImg} ${styles.heroBgImgCoaching}`}
            sizes="100vw"
            priority
            style={{ objectPosition: '58% 42%' }}
          />
        </div>
        <Nav deep ctaLabel="Plan een gesprek" ctaHref={hrefZakelijk} />
        <div className={styles.heroContent}>
          <span className={styles.heroSlash} />
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>Als jouw werk</span>{' '}
            <span className={styles.heroPunch}>zwaar wordt</span>
          </h1>
          <p className={styles.heroSub}>Dan begint ons werk.</p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <p className={pageStyles.heroDivert}>
        Werk je bij een organisatie met HR en meerdere afdelingen?{' '}
        <Link href="/zakelijk/duurzame-inzetbaarheid" className={pageStyles.heroDivertLink}>
          Naar duurzame inzetbaarheid
        </Link>
      </p>

      <ContentQuoteBlock title="Je weet wat je te doen hebt">
        <p>Er is altijd iets wat je moet doen voor wat je echt wilt.</p>
        <p>
          Bellen voor nieuwe klanten. Het gesprek voeren dat al maanden op je lijst staat. Iemand
          aanspreken die je liever met rust laat. Zelf blijven trainen terwijl je agenda vol zit.
        </p>
        <p>
          Je doet die dingen voor wat eronder ligt. Een bedrijf dat groeit. Een team dat draait.
          Een lijf dat het over tien jaar nog doet.
        </p>
        <p>
          En dan wordt het lastig. Het loopt anders, het valt tegen, iemand heeft er een mening
          over. Dan doe je wat je altijd doet. Uitstellen of afraffelen. Wegkijken of eroverheen
          walsen. Terugtrekken of alles overnemen.
        </p>
        <p>
          Je weet precies wat er te doen is. Het gat zit tussen wat je belangrijk vindt en wat dat
          op een moeilijk moment van je vraagt.
        </p>
        <p>
          <strong>Daar zit ons werk.</strong>
        </p>
      </ContentQuoteBlock>

      <section className={introStyles.intro} aria-label="Dat gat zit op drie plekken">
        <div className={introStyles.inner}>
          <header className={introStyles.banner}>
            <h2 className={`${introStyles.quote} ${introStyles.quoteLoud}`}>
              <span className={introStyles.quoteLine}>Dat gat zit</span>
              <span className={introStyles.quoteLine}>op drie plekken</span>
            </h2>
            <p className={`starkSectionMeta ${introStyles.positioning}`}>
              En het is elke keer hetzelfde
            </p>
          </header>
          <div className={introStyles.copyCol}>
            <ol className={introStyles.regels}>
              {LAYERS.map((layer) => (
                <li key={layer.id} className={introStyles.regel}>
                  <span className={introStyles.regelNum} aria-hidden>
                    {layer.id}
                  </span>
                  <div className={introStyles.regelCopy}>
                    <p className={introStyles.regelLead}>{layer.lead}</p>
                    <p className={introStyles.regelRest}>{layer.rest}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className={introStyles.note}>
              Jullie willen alle drie hetzelfde. Jullie weten alleen van elkaar niet dat de ander
              dat ook wil.
            </p>
          </div>
        </div>
      </section>

      <ContentQuoteBlock title="Van boven naar beneden">
        <p>Het regent van boven naar beneden. Daarvoor moet er boven wel iets vallen.</p>
        <p>
          Daarom begint het bij jou. Werk je alleen, dan is dat het hele verhaal. Heb je mensen, dan
          komen zij erbij zodra jij staat.
        </p>
        <p>
          <strong>Die volgorde ligt vast.</strong>
        </p>
      </ContentQuoteBlock>

      <ContentQuoteBlock title="Waarom je bij ons traint" tone="dark">
        <p>Praten over hoe je reageert onder druk is iets anders dan het zien gebeuren.</p>
        <p>
          Bij ons sta je op de vloer. Elke keer kom je op het punt waar je liever stopt. Daar komt
          je patroon vanzelf boven. Je gaat harder om er vanaf te zijn, je zakt af, je praat het
          goed, of je gaat gewoon door. Precies wat je op je werk doet, alleen zie je het hier
          gebeuren.
        </p>
        <p>
          En je wordt er sterker van. Meer energie, meer kracht. Kiezen kost wat, en wie leeg is
          laat het lopen.
        </p>
        <p>
          <strong>Wij trainen wat je doet als het zwaar wordt.</strong>
        </p>
      </ContentQuoteBlock>

      <section
        id="routes"
        className={`${styles.section} ${styles.sectionBlack} ${styles.sectionWithOrangeBottom} ${STARK_GRAIN}`}
        aria-label="Waar we beginnen hangt af van wie er meedoet"
      >
        <h2
          className={`${aanbodStyles.sectionTitle} ${aanbodStyles.sectionTitleCentered} ${aanbodStyles.sectionIntro} ${aanbodStyles.sectionIntroCentered}`}
        >
          <span className={aanbodStyles.titleLine}>Waar we beginnen</span>
          <span className={aanbodStyles.titleLine}>hangt af van wie er meedoet</span>
        </h2>
        <div className={`${aanbodStyles.cardsAndCta} ${aanbodStyles.cardsAndCtaCentered}`}>
          {zakelijkSoloRoutes.map((track) => (
            <AanbodFeatureCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      <ContentQuoteBlock title="Als er iemand in je team vastzit" id="impact">
        <p>
          Iemand die vastloopt of thuis zit kan niet wachten op een traject voor het hele team.
        </p>
        <p>
          Twaalf weken, één op één. Twee keer per week trainen in een kleine groep, elke week een
          coachgesprek. Voor wie dreigt uit te vallen en voor wie terugkomt na verzuim.
        </p>
        <p>
          Dit doen we al jaren. In de helft van de gevallen betaalt de werkgever mee of volledig,
          vaak al voordat er verzuim is. Dat is het goedkoopste moment.
        </p>
        <div className={pageStyles.inlineCta}>
          <ZakelijkImpactLink />
        </div>
      </ContentQuoteBlock>

      <ContentQuoteBlock title="Waar wij nee op zeggen">
        <p>Je mensen laten repareren terwijl je zelf toekijkt.</p>
        <p>Een teamuitje.</p>
        <p>Iemand die al in een burn-out zit. Die hoort bij een arts.</p>
        <p>
          En blijkt het probleem in je rooster te zitten, in je bezetting, of in een besluit dat
          jij al twee jaar voor je uit schuift — dan zeggen we dat, en verkopen we je niets.
        </p>
      </ContentQuoteBlock>

      <ContentQuoteBlock title="Zo beginnen we">
        <p>
          <strong>Eén gesprek.</strong> We rekenen samen uit wat het je nu kost dat het blijft
          liggen. Dat bedrag krijg je mee, ook als je verder niets met ons doet.
        </p>
        <p>
          <strong>De diagnose.</strong> Twee dagdelen bij jou op locatie. Ik spreek jou, ik spreek
          je mensen, ik kijk naar je cijfers. Je krijgt één A4: wat ik aantrof, wat de cijfers
          zeggen, en wat ik voorstel.
        </p>
        <p>
          <strong>Het voorstel.</strong> Op basis van wat we aantroffen.
        </p>
      </ContentQuoteBlock>

      <section className={`${styles.section} ${styles.sectionLight}`}>
        <ZakelijkCtaBand className={pageStyles.closeBand} />
      </section>

      <section className={`${styles.faqSection} ${styles.faqSectionLight}`}>
        <header className={styles.sectionQuoteHead}>
          <h2 className={styles.sectionQuote}>
            <span className={styles.sectionQuoteLine}>Goede vragen</span>
          </h2>
          <p className={`starkSectionMeta ${styles.sectionQuoteMeta}`}>
            Wat je nog wilt weten
          </p>
        </header>
        <div className={styles.faqInner}>
          <FaqList items={zakelijkOndernemersFaq} tone="light" />
          <FaqJsonLd items={zakelijkOndernemersFaq} />
        </div>
      </section>

      <Footer
        photoFirst
        photoSet="zakelijk"
        hideBrand
        statement="Koffie en verder praten?"
        statementMeta="Gratis gesprek · ~1 uur"
      />
    </main>
  )
}
