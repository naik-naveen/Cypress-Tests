describe('Login Test and validate page title', () => {

    before(() => {
      cy.visit("/")
    })
    beforeEach(() => {
      cy.get('input[placeholder="Email"]').type(Cypress.env('USERNAME'))
      cy.get('#password').type(Cypress.env('PASSWORD'))
      cy.get('input[type="submit"]').click()
    })
  
    it('Logs into the application', () => {
      cy.title().should('eq', 'CampusTrack')
      cy.url().should('include', '/home')
    })
  
    afterEach(() => {
      cy.contains(Cypress.env('USERNAME')).click()
      cy.get('i.fa.fa-sign-out').click();
    })
  
  })
  describe('Login with incorrect credential', () => {
    it('When user try to login with incorret credential,proper error message should display', () => {
      cy.visit("/")
      cy.get('input[placeholder="Email"]').type(Cypress.env('USERNAME'))
      cy.get('#password').type(Cypress.env('INCORRECT'))
      cy.get('input[type="submit"]').click()
      cy.url().should('include', '/home')
      cy.contains('Invalid Email or Password').should('be.visible')
    })
  })