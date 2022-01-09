import { useState } from 'react'

import Wizard, { WizardPage } from './Shared/Wizard'

import styles from './App.module.css'

const pages: WizardPage[] = [
  {
    Component: () => <>page 1</>,
    title: () => <h3>Let's find out your financial wellness score.</h3>
  },
  {
    Component: () => <>page 2</>,
    title: () => <h3>Here's your financial wellness score:</h3>
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
