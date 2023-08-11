describe('Contact link Testing', () => {
  it('should navigate to Contact page successfully', () => {
    cy.visit("/")
    cy.get('a[href="/contact"]').click()
    cy.url().should('include', '/contact')
    cy.contains('support@campustrack.net').should('be.visible')
    cy.contains('+ 91 802.671.6453').should('be.visible')
    cy.contains('#311/1, Zikhin Bhavan, 26th Cross, 9th Main, Banashankari II Stage, Bengaluru, Karnataka 560070').should('be.visible')
  })

})