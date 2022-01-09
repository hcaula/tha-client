import Card from './Card'
import Button from './Button'

import styles from './Wizard.module.css'

export type WizardPage = {
  Component: React.FC
  Title: React.FC
}

type WizardProps = {
  pages: WizardPage[]
  currentPage: number
  onNextPage: Function
  onPreviousPage: Function
}

const Wizard = ({
  pages,
  currentPage,
  onNextPage,
  onPreviousPage
}: WizardProps) => {
  const { Component, Title } = pages[currentPage]

  return (
    <div className={styles.Wizard}>
      <div className={styles.title}>
        <Title />
      </div>
      <Card>
        <>
          <Component />

          {currentPage < pages.length - 1 && (
            <Button onClick={() => onNextPage()} color="primary">
              Continue
            </Button>
          )}
          {currentPage > 0 && (
            <Button onClick={() => onPreviousPage()} color="secondary">
              Return
            </Button>
          )}
        </>
      </Card>
    </div>
  )
}

export default Wizard
