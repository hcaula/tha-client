import { Trans, useTranslation } from 'react-i18next'

import { useHealthScore } from 'lib/api'
import compactOriginLogo from 'assets/icons/origin-logo-compact.svg'

import styles from './ResultScreen.module.css'
import HealthBars from './HealthBars'
import { HealthBarsColor } from './HealthBars/HealthBars'

export const ResultScreenTitle = () => (
  <Trans i18nKey="App.Wizard.ResultScreen.title">
    Here's your <b>financial wellness score</b>:
  </Trans>
)

enum ColoredLevels {
  HEALTHY = 3,
  MEDIUM = 2,
  LOW = 1
}

type ResultScreenProps = {
  form: React.RefObject<HTMLFormElement>
}

const ResultScreen = ({ form }: ResultScreenProps) => {
  const { t } = useTranslation('App')
  const { healthScore, loading, error } = useHealthScore({
    monthlyCosts: form.current?.monthlyCosts?.value,
    annualIncome: form.current?.annualIncome?.value
  })

  return loading ? (
    <>Loading...</>
  ) : error ? (
    // TODO: handle errors properly with ErrorBoundary
    <>Something went wrong when calculating your financial wellness score...</>
  ) : (
    <div className={styles.ResultScreen}>
      <img className={styles.logo} src={compactOriginLogo} alt="" />
      {healthScore && (
        <HealthBars
          // @ts-ignore
          coloredLevels={ColoredLevels[healthScore]}
          levels={3}
          color={healthScore.toLowerCase() as HealthBarsColor}
        />
      )}

      <div className={styles.results}>
        <div className={styles.resultsTitle}>
          {t(`Wizard.ResultScreen.Results.title-${healthScore}`)}
        </div>
        <div className={styles.resultsDescription}>
          <Trans
            i18nKey="Wizard.ResultScreen.Results.description"
            healthScore={healthScore}
          >
            Your financial wellness score is{' '}
            <b>{t(`Wizard.ResultScreen.HealthScore.${healthScore}`)}</b>.
          </Trans>
        </div>
      </div>
    </div>
  )
}

export default ResultScreen
