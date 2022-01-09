import { useTranslation } from 'react-i18next'

import compactOriginLogo from 'assets/icons/origin-logo-compact.svg'

import styles from './Title.module.css'

const Title = () => {
  const { t } = useTranslation('App')

  return (
    <div className={styles.Title}>
      <img className={styles.logo} src={compactOriginLogo} alt="" />
      <div className={styles.title}>
        <div className={styles.main}>
          <b>{t('Wizard.HomeScreen.Title.main')}</b>
        </div>
        <div className={styles.description}>
          {t('Wizard.HomeScreen.Title.description')}
        </div>
      </div>
    </div>
  )
}

export default Title
