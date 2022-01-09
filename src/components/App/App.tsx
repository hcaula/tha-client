import { useState } from 'react'
import { Trans } from 'react-i18next'

import Wizard, { WizardPage } from './Shared/Wizard'

import styles from './App.module.css'

const pages: WizardPage[] = [
  {
    Component: () => <>page 1</>,
    Title: () => (
      <Trans i18nKey="App.Wizard.HomeScreen.title">
        Let's find out your <b>financial wellness score</b>.
      </Trans>
    )
  },
  {
    Component: () => <>page 2</>,
    Title: () => (
      <Trans i18nKey="App.Wizard.ResultScreen.title">
        Here's your <b>financial wellness score</b>:
      </Trans>
    )
  }
]

const App = () => {
  const [currentPage, setCurrentPage] = useState<number>(0)

  const handleNextPage = () => setCurrentPage((currentPage) => currentPage + 1)
  const handlePreviousPage = () =>
    setCurrentPage((currentPage) => currentPage - 1)

  return (
    <main className={styles.App}>
      <Wizard
        pages={pages}
        currentPage={currentPage}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </main>
  )
}

export default App
