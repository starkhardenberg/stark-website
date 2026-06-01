import {
  PHONE_WHATSAPP,
  WHATSAPP_KENNISMAKING_MESSAGE,
} from '@/lib/contact'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import styles from './WhatsAppCTA.module.css'

type Props = {
  variant?: 'panel' | 'pill' | 'embedded' | 'aside' | 'strip'
}

export default function WhatsAppCTA({ variant = 'panel' }: Props) {
  if (variant === 'pill') {
    return (
      <WhatsAppLink className={styles.pill}>
        <WhatsAppIcon className={styles.pillIcon} />
        WhatsApp {PHONE_WHATSAPP.display}
      </WhatsAppLink>
    )
  }

  if (variant === 'strip') {
    return (
      <section className={styles.strip} aria-label="Snel contact via WhatsApp">
        <div className={styles.stripText}>
          <p className={styles.stripLabel}>Snel via WhatsApp</p>
          <p className={styles.stripDesc}>
            Je bericht staat al klaar. Op je telefoon direct de app in, op je computer WhatsApp Web.
          </p>
          <p className={styles.stripNumber}>
            {PHONE_WHATSAPP.display}
          </p>
        </div>
        <WhatsAppLink className={styles.stripBtn}>
          <WhatsAppIcon className={styles.stripBtnIcon} />
          <span>Stuur een WhatsApp</span>
        </WhatsAppLink>
      </section>
    )
  }

  const isEmbedded = variant === 'embedded'
  const isAside = variant === 'aside'
  const isMinimal = isEmbedded || isAside

  return (
    <section
      className={`${styles.panel} ${isEmbedded ? styles.panelEmbedded : ''} ${isAside ? styles.panelAside : ''}`}
      {...(!isMinimal ? { 'aria-labelledby': 'whatsapp-cta-title' } : {})}
    >
      {!isMinimal && (
        <>
          <p className={styles.eyebrow}>Snel contact</p>
          <h2 id="whatsapp-cta-title" className={styles.title}>
            Liever appen?
          </h2>
          <p className={styles.desc}>
            Op je computer opent WhatsApp Web. Op je telefoon ga je direct de app in.
          </p>
        </>
      )}
      <blockquote className={styles.preview}>
        <span className={styles.previewLabel}>Je bericht staat al klaar</span>
        {WHATSAPP_KENNISMAKING_MESSAGE}
      </blockquote>
      <WhatsAppLink className={styles.btn}>
        <WhatsAppIcon className={styles.btnIcon} />
        <span>Stuur een WhatsApp</span>
      </WhatsAppLink>
      <p className={styles.number}>
        Via WhatsApp Business · <strong>{PHONE_WHATSAPP.display}</strong>
      </p>
    </section>
  )
}
