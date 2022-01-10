import { useTranslation } from 'react-i18next'

import Card from './Card'
import Button from './Button'

import styles from './Wizard.module.css'

type WizardPageProps = {
  form: React.RefObject<HTMLFormElement>
}

export type WizardPage = {
  Component: React.FC<WizardPageProps>
  Title: React.FC
}

type WizardProps = {
  pages: WizardPage[]
  form: React.RefObject<HTMLFormElement>
  currentPage: number
  onPreviousPage: Function
}

const Wizard = ({ pages, form, currentPage, onPreviousPage }: WizardProps) => {
  const { t } = useTranslation('common')

  const { Component, Title } = pages[currentPage]

  return (
    <div className={styles.Wizard}>
      <div className={styles.title}>
        <Title />
      </div>
      <Card>
        <>
          <Component form={form} />

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
