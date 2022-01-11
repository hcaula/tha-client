import { Trans, useTranslation } from 'react-i18next'

import compactOriginLogo from 'assets/icons/origin-logo-compact.svg'
import { HealthScoreEnum } from 'lib/api/Api'

import HealthBars, { HealthBarColor } from './HealthBars'

import styles from './Results.module.css'

enum ColoredLevels {
  HEALTHY = 3,
  MEDIUM = 2,
  LOW = 1
}

type ResultsProps = {
  healthScore: HealthScoreEnum
}

const Results = ({ healthScore }: ResultsProps) => {
  const { t } = useTranslation('App')

  return (
    <div className={styles.Results}>
      <img className={styles.logo} src={compactOriginLogo} alt="" />
      {healthScore && (
        <HealthBars
          // @ts-ignore
          coloredLevels={ColoredLevels[healthScore]}
          levels={3}
          color={healthScore.toLowerCase() as HealthBarColor}
        />
      )}

      <div className={styles.results}>
        <div
          className={styles.resultsTitle}
          data-cy={`results-title-${healthScore}`}
        >
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

export default Results
