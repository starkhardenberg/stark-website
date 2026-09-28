import introStyles from '@/components/IntroSection.module.css'
import styles from './ZakelijkBridgeSection.module.css'

const LAYERS = [
  {
    id: '01',
    lead: 'Bovenin',
    rest: 'Hoop je dat het financieel goedkomt zonder dat het al te veel moet kosten. Je weet niet precies wat er op de vloer speelt, en als er geklaagd wordt, weet je even niet wat je ermee moet.',
  },
  {
    id: '02',
    lead: 'De laag eronder',
    rest: 'Doe je het werk liever zelf, want jij doet het sneller en beter. Je ziet allang wie er niet meekomt, maar je weet niet hoe je dat zegt zonder dat het verkeerd valt. En je merkt dat je hem inmiddels op een bepaalde manier bent gaan zien.',
  },
  {
    id: '03',
    lead: 'Op de vloer',
    rest: 'Neem je van alles over om de boel draaiende te houden. Of je doet het omgekeerde: je doet je werk, je zegt niets meer, en je bent er eigenlijk niet meer echt bij.',
  },
] as const

export default function ZakelijkBridgeSection() {
  return (
    <section className={introStyles.intro} aria-label="Leiderschap op drie lagen">
      <div className={introStyles.inner}>
        <header className={`${introStyles.banner} ${introStyles.bannerToRegels}`}>
          <h2 className={`${introStyles.quote} ${introStyles.quoteLoud}`}>
            <span className={introStyles.quoteLine}>Leiderschap begint</span>
            <span className={introStyles.quoteLine}>bij jezelf</span>
          </h2>
          <p className={`starkSectionMeta ${introStyles.positioning} ${styles.metaLouder}`}>
            En het houdt niet op bij de laag onder je
          </p>
        </header>

        <div className={introStyles.copyCol}>
          <p className={styles.bridgeLead}>
            <span className={styles.bridgeLeadLine}>
              Er is altijd iets wat gedaan moet worden voordat er iets verandert.
            </span>
            <span className={styles.bridgeLeadPunch}>
              In een bedrijf speelt dat op drie plekken tegelijk.
            </span>
          </p>

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

          <p className={`${introStyles.note} ${styles.closeNote}`}>
            Ze weten alle drie precies wat er te doen is. Het gaat mis op het moment dat het
            ongemakkelijk wordt, en dan doet ieder wat hij altijd doet.
          </p>
        </div>
      </div>
    </section>
  )
}
