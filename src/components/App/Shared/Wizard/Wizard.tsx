import { useTranslation } from 'react-i18next'

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
  onPreviousPage: Function
}

const Wizard = ({ pages, currentPage, onPreviousPage }: WizardProps) => {
  const { t } = useTranslation('common')

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
            <Button color="primary" type="submit">
              {t('Wizard.continueButton')}
            </Button>
          )}
          {currentPage > 0 && (
            <Button onClick={() => onPreviousPage()} color="secondary">
              {t('Wizard.returnButton')}
            </Button>
          )}
        </>
      </Card>
    </div>
  )
}

export default Wizard
