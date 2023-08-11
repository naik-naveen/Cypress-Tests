describe('Brochure link Test and spell check', () => {
    it('When user visit https://prod.campustrack.net/home it should contain Brochure link ', () => {
      cy.visit("/")
      cy.contains('Brochure').should('be.visible')
    })
    it('When user  Brochure link, brochue should open ', () => {
        cy.visit("/")
        cy.get('a:contains(Brochure)').click()
      })
  })