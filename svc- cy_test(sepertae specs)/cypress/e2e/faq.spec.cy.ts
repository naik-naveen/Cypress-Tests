describe('FAQ Page', () => {
  it('Has a working link to FAQ page', () => {
    cy.visit("/")
    cy.get('a[href="/ctng4/faq"]').click() // Click on the FAQ link
    cy.url().should('include', '/faq') // Check if the URL contains '/faq'
    cy.contains('FAQ').should('be.visible') // Check if the FAQ page loads
    cy.get('span[_ngcontent-c22]').should('contain', 'For any further queries contact')
    cy.get('a:contains(support@campustrack.net)').should('be.visible').should('exist')
  cy.get('a:contains(×)').should('exist').should('have.attr', 'href', '/ctng4/home')
  })
  it('Link What are the costs associated with registration? and Text Registration is absolutely free. Verification', () => {
    cy.visit("/")
    cy.get('a[href="/ctng4/faq"]').click()
    cy.get('a:contains(What are the costs associated with registration? )').should('exist').click()
  cy.get('p:contains(Registration is absolutely free.)') .should('exist')
})
  })
