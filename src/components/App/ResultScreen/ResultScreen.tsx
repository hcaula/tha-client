import { Trans } from 'react-i18next'

import { useHealthScore } from 'lib/api'

import Loading from './Loading'
import Error from './Error'
import Results from './Results'

export const ResultScreenTitle = () => (
  <Trans i18nKey="App.Wizard.ResultScreen.title">
    Here's your <b>financial wellness score</b>:
  </Trans>
)

type ResultScreenProps = {
  form: React.RefObject<HTMLFormElement>
}

const ResultScreen = ({ form }: ResultScreenProps) => {
  const { healthScore, loading, error } = useHealthScore({
    monthlyCosts: form.current?.monthlyCosts?.value,
    annualIncome: form.current?.annualIncome?.value
  })

  return loading ? (
    <Loading />
  ) : error ? (
    // TODO: handle errors properly with ErrorBoundary
    <Error />
  ) : (
    <Results healthScore={healthScore!} />
  )
}

export default ResultScreen
