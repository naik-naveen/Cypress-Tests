describe('Login Test and validate page title', () => {
    it('Logs into the application', () => {
      cy.visit("/")
      cy.get('input[placeholder="Email"]').type(Cypress.env('USERNAME'))
      cy.get('#password').type(Cypress.env('PASSWORD'))
      cy.get('input[type="submit"]').click()
      cy.title().should('eq', 'CampusTrack')
      cy.url().should('include', '/home')
    })
    it('verify sign in page', () => {
      cy.visit("/")
      cy.get('input[placeholder="Email"]').should('exist')
      cy.get('#password').should('exist')
      cy.get('input[type="submit"]').should('exist').should('be.enabled')
      cy.url().should('eq', 'https://svc.campustrack.net/ctng4/home')
      cy.get('a:contains(About)').should('have.attr', 'href', '/ctng4/about')
      cy.get('a:contains(FAQ)').should('have.attr', 'href', '/ctng4/faq')
      cy.get('a:contains(Contact)').should('have.attr', 'href', '/ctng4/contact')
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