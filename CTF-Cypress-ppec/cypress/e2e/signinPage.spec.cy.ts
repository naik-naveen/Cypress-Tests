describe('Signin page and title validate', () => {

    beforeEach(() => {
      cy.visit("/")
    })
    it('verify sign in page', () => {
      cy.get('input[placeholder="Email"]').should('exist')
      cy.get('#password').should('exist')
      cy.get('input[type="submit"]').should('exist').should('be.enabled')
      cy.url().should('eq', 'https://ppec.campustrack.net/home')
      cy.get('a:contains(About)').should('have.attr', 'href', '/about')
      cy.get('a:contains(FAQ)').should('have.attr', 'href', '/faq')
      cy.get('a:contains(Contact)').should('have.attr', 'href', '/contact')
  })
})