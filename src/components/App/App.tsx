import { useRef, useState } from 'react'

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
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCurrentPage((currentPage) => currentPage + 1)
  }

  const handlePreviousPage = () =>
    setCurrentPage((currentPage) => currentPage - 1)

  return (
    <main className={styles.App}>
      <form
        ref={formRef}
        data-cy="form"
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <Wizard
          pages={pages}
          form={formRef}
          currentPage={currentPage}
          onPreviousPage={handlePreviousPage}
        />
      </form>
    </main>
  )
}

export default App
