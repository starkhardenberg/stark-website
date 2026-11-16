import Footer from '@/components/Footer'
import StarkImage from '@/components/StarkImage'
import { pageMetadata } from '@/lib/open-graph'
import { getZichtbareVerhalen } from '@/lib/verhalen'
import styles from './verhalen.module.css'

export const metadata = pageMetadata(
  'verhalen',
  'Starke verhalen — STARK! Hardenberg',
  'Leden, coaches en bedrijven vertellen hoe het ging. Waar ze stonden, wat ze deden en wat er nu anders is.',
)

export default function VerhalenPage() {
  const verhalen = getZichtbareVerhalen()

  return (
    <>
      <main className={styles.page}>
        <div className={styles.overview}>
          <h1 className="stark-h1">Starke verhalen</h1>
          <p className={styles.lead}>
            Leden, coaches en bedrijven vertellen hoe het ging. Waar ze stonden, wat ze deden en wat er nu anders is.
          </p>
          <ul className={styles.list}>
            {verhalen.map((verhaal, index) => (
              <li key={verhaal.slug}>
                <a className={styles.tile} href={`/verhalen/${verhaal.slug}`}>
                  <span className={styles.tilePhoto}>
                    <StarkImage
                      src={verhaal.foto}
                      alt=""
                      fill
                      priority={index === 0}
                      hoverColor
                      sizes="(min-width: 720px) 46vw, 100vw"
                      className={styles.photoImg}
                    />
                  </span>
                  <span className={styles.tileCopy}>
                    <h2 className="stark-h2">{verhaal.titel}</h2>
                    <p className="starkSectionMeta">
                      {verhaal.verteller} · {verhaal.programma}
                    </p>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer variant="dark" />
    </>
  )
}
