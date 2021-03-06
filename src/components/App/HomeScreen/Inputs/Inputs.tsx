import { useTranslation } from 'react-i18next'

import styles from './Inputs.module.css'

import CurrencyInput from './CurrencyInput'

const Inputs = () => {
  const { t } = useTranslation('App')

  return (
    <div className={styles.Inputs}>
      <CurrencyInput
        name="annualIncome"
        label={t('Wizard.HomeScreen.Inputs.annualIncome')}
        className={styles.annualIncome}
      />
      <CurrencyInput
        name="monthlyCosts"
        label={t('Wizard.HomeScreen.Inputs.monthlyCosts')}
      />
    </div>
  )
}

export default Inputs
