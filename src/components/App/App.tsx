import { useState } from 'react'

import Wizard, { WizardPage } from './Shared/Wizard'
import HomeScreen, { HomeScreenTitle } from './HomeScreen'
import ResultScreen, { ResultScreenTitle } from './ResultScreen'

import styles from './App.module.css'

const pages: WizardPage[] = [
  {
    Component: HomeScreen,
    Title: HomeScreenTitle
  },
  {
    Component: ResultScreen,
    Title: ResultScreenTitle
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
