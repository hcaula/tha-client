import Card from './Card'
import Button from './Button'

import styles from './Wizard.module.css'

export type WizardPage = {
  Component: React.FC
  title: React.FC
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
  const CurrentComponent = pages[currentPage].Component
  const Title = pages[currentPage].title

  return (
    <div className={styles.Wizard}>
      <Title />
      <Card>
        <>
          <CurrentComponent />

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
