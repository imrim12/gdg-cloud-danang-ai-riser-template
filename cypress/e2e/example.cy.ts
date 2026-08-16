describe('Midone Dashboard', () => {
  it('loads the root dashboard page', () => {
    cy.visit('/')
    cy.get('#app').should('exist')
    cy.get('body').should('be.visible')
  })

  it('renders the side menu with General Reports section', () => {
    cy.visit('/')
    cy.contains('GENERAL REPORTS', { timeout: 10000 }).should('exist')
  })

  it('renders the main dashboard with General Report heading', () => {
    cy.visit('/')
    cy.contains('General Report', { timeout: 10000 }).should('be.visible')
  })

  it('renders the Sales Report section', () => {
    cy.visit('/')
    cy.contains('Sales Report', { timeout: 10000 }).should('be.visible')
  })

  it('navigates to login page', () => {
    cy.visit('/login')
    cy.get('#app').should('exist')
    cy.get('body').should('be.visible')
  })

  it('navigates to register page', () => {
    cy.visit('/register')
    cy.get('#app').should('exist')
    cy.get('body').should('be.visible')
  })
})
