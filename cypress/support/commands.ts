const ANNUAL_INCOME_DATA_CY = 'annualIncome'
const MONTHLY_COSTS_DATA_CY = 'monthlyCosts'
const SUBMIT_BUTTON_DATA_CY = 'submitBtn'

const dataCy = (value: string): string => `[data-cy="${value}"]`

Cypress.Commands.add('stubFinancialHealthStatus', ({ data, error }) => {
  cy.intercept(`${Cypress.env('API_URL')}/financial/health*`, {
    statusCode: error ? 500 : 200,
    body: error ? error : data
  })
})

Cypress.Commands.add(
  'fillFinancialHealthForm',
  ({ annualIncome = '1000', monthlyCosts = '10' }) => {
    cy.visit('')
    cy.get(dataCy(ANNUAL_INCOME_DATA_CY)).type(annualIncome)
    cy.get(dataCy(MONTHLY_COSTS_DATA_CY)).type(monthlyCosts)
    cy.get(dataCy(SUBMIT_BUTTON_DATA_CY)).click()
  }
)
