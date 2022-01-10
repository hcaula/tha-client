import { Trans } from 'react-i18next'

import { useHealthScore } from 'lib/api'

import styles from 'ResultScreen.module.css'

export const ResultScreenTitle = () => (
  <Trans i18nKey="App.Wizard.ResultScreen.title">
    Here's your <b>financial wellness score</b>:
  </Trans>
)

type ResultScreenProps = {
  form: React.RefObject<HTMLFormElement>
}

const ResultScreen = ({ form }: ResultScreenProps) => {
  const { data, loading, error } = useHealthScore({
    monthlyCosts: form.current?.monthlyCosts?.value,
    annualIncome: form.current?.annualIncome?.value
  })

  console.log({ data, loading, error })
  return <>ResultScreen </>
}

export default ResultScreen
