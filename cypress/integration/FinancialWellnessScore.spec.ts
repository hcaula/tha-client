/// <reference types="cypress" />

const ANNUAL_INCOME_DATA_CY = 'annualIncome'
const MONTHLY_COSTS_DATA_CY = 'monthlyCosts'
const SUBMIT_BUTTON_DATA_CY = 'submitBtn'
const RETURN_BUTTON_DATA_CY = 'returnBtn'
const FORM_DATA_CY = 'form'
const RESULTS_TITLE_LOW = 'results-title-LOW'
const RESULTS_TITLE_MEDIUM = 'results-title-MEDIUM'
const RESULTS_TITLE_HEALHTY = 'results-title-HEALTHY'
const ERROR_DATA_CY = 'financialHealthError'
const HOMESCREEN_STEP = 'homeScreen'

const dataCy = (value: string): string => `[data-cy="${value}"]`

describe('FinancialWellnessScore', () => {
  beforeEach(() => cy.visit(''))

  it('validates the form fields', () => {
    // Validate required fields
    cy.get(dataCy(ANNUAL_INCOME_DATA_CY))
      .invoke('prop', 'validity')
      .should('include', { valueMissing: true })
    cy.get(dataCy(MONTHLY_COSTS_DATA_CY))
      .invoke('prop', 'validity')
      .should('include', { valueMissing: true })
    cy.get(dataCy(SUBMIT_BUTTON_DATA_CY)).click()

    // Validate min values
    cy.get(dataCy(ANNUAL_INCOME_DATA_CY))
      .type('0')
      .invoke('prop', 'validity')
      .should('include', { rangeUnderflow: true })
    cy.get(dataCy(SUBMIT_BUTTON_DATA_CY)).click()

    cy.get(dataCy(MONTHLY_COSTS_DATA_CY))
      .type('0')
      .invoke('prop', 'validity')
      .should('include', { rangeUnderflow: true })
    cy.get(dataCy(SUBMIT_BUTTON_DATA_CY)).click()
  })

  it('does not submit form with invalid inputs', () => {
    cy.get(dataCy(FORM_DATA_CY)).invoke('submit', (e) => {
      e.preventDefault()
      // If this error is thrown, the form has been submitted and the test should fail
      throw new Error('Form was submitted')
    })

    cy.get(dataCy(SUBMIT_BUTTON_DATA_CY)).click()
  })

  it('returns to the first page after clicking on return button', () => {
    cy.stubFinancialHealthStatus({ data: 'LOW' })
    cy.fillFinancialHealthForm({})

    cy.get(dataCy(RETURN_BUTTON_DATA_CY)).click()
    cy.get(dataCy(HOMESCREEN_STEP)).should('exist')
  })

  context('when the health score is low', () => {
    beforeEach(() => {
      cy.stubFinancialHealthStatus({ data: 'LOW' })
      cy.fillFinancialHealthForm({ monthlyCosts: '75' })
    })

    it('should show health status low message', () => {
      cy.get(dataCy(RESULTS_TITLE_LOW)).should('exist')
    })
  })

  context('when the health score is medium', () => {
    beforeEach(() => {
      cy.stubFinancialHealthStatus({ data: 'MEDIUM' })
      cy.fillFinancialHealthForm({ monthlyCosts: '30' })
    })

    it('should show health status medium message', () => {
      cy.get(dataCy(RESULTS_TITLE_MEDIUM)).should('exist')
    })
  })

  context('when the health score is healthy', () => {
    beforeEach(() => {
      cy.stubFinancialHealthStatus({ data: 'HEALTHY' })
      cy.fillFinancialHealthForm({ monthlyCosts: '10' })
    })

    it('should show health status healthy message', () => {
      cy.get(dataCy(RESULTS_TITLE_HEALHTY)).should('exist')
    })
  })

  context('when the API returns an error', () => {
    beforeEach(() => {
      cy.stubFinancialHealthStatus({ error: 'Some error' })
      cy.fillFinancialHealthForm({})
    })

    it('should show health status healthy message', () => {
      cy.get(dataCy(ERROR_DATA_CY)).should('exist')
    })
  })
})
