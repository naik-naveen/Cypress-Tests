describe('Home page feature Test', () => {
    beforeEach(() => {
      cy.visit("/")
      cy.get('input[placeholder="Email"]').type(Cypress.env('USERNAME'))
      cy.get('#password').type(Cypress.env('PASSWORD'))
      cy.get('input[type="submit"]').click()
    })
    it(' home page with user id on top right', () => {
      cy.url().should('include', '/home')
      cy.contains(Cypress.env('USERNAME')).should('be.visible')
    })
  
    it('When click on meet guidelines user should redirct to meet guidelines', () => {
      cy.get('a[href="https://prod.campustrack.net/assets/Meeting guidelines.pdf"]').click()
  
    })
    it('When click profile should navigate profile page', () => {
      cy.contains(Cypress.env('USERNAME')).click()
      cy.get('a[href="/home/userProfile"]').click()
      cy.url().should('include','/home/userProfile')
      cy.get('label:contains(Name)').should('be.visible').next().children('input[name="Name"]').should('exist')
      cy.get('label:contains(Institute Name)').should('be.visible').next().children('input[name="instName"]').should('exist')
    })
    afterEach(() => {
      cy.contains(Cypress.env('USERNAME')).click()
      cy.get('i.fa.fa-sign-out').click();
    })
  
  })