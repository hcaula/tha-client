import { useTranslation } from 'react-i18next'

import lockIcon from 'assets/icons/lock-icon.svg'
import styles from './Footer.module.css'

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <div className={styles.Footer}>
      <div className={styles.content}>
        <img src={lockIcon} alt="" className={styles.lockIcon} />
        <div className={styles.disclaimer}>
          {t('Footer.encryptionDisclaimer')}
        </div>
      </div>
    </div>
  )
}

export default Footer
