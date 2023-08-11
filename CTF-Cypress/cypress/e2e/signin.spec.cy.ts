describe('Signin Test and validate page title', () => {

    beforeEach(() => {
      cy.visit("/")
    })
  
    it('Signin into the application', () => {
        //cy.get('div[class="abcRioButtonContentWrapper"]').click()
        //cy.screenshot()
        // cy.window().then((win) => {
     // expect(win.location.href).to.eq('https://accounts.google.com/')
   // });
      //cy.title().should('eq', 'CampusTrack')
      //cy.url().should('include', '/home')
    })
    it('verify sign in page', () => {
      cy.get('input[placeholder="Email"]').should('exist')
      cy.get('#password').should('exist')
      cy.get('input[type="submit"]').should('exist').should('be.enabled')
      cy.url().should('eq', 'https://prod.campustrack.net/home')
      cy.get('span').should('contain', 'CampusTrack')
      cy.get('a:contains(About)').should('have.attr', 'href', '/about')
      cy.get('a:contains(FAQ)').should('have.attr', 'href', '/faq')
      cy.get('a:contains(Contact)').should('have.attr', 'href', '/contact')
  })
})