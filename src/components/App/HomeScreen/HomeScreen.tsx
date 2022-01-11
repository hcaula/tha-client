import { Trans } from 'react-i18next'

import Title from './Title'
import Inputs from './Inputs'

import styles from './HomeScreen.module.css'

export const HomeScreenTitle = () => (
  <Trans i18nKey="App.Wizard.HomeScreen.title">
    Let's find out your <b>financial wellness score</b>.
  </Trans>
)

const HomeScreen = () => {
  return (
    <div className={styles.HomeScreen} data-cy="homeScreen">
      <Title />
      <Inputs />
    </div>
  )
}

export default HomeScreen
