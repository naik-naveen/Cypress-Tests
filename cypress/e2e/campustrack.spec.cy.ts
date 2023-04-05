describe('About link Test', () => {
 
    it.only('should navigate to About page successfully', () => {
      cy.visit("https://prod.campustrack.net/")
      cy.get('a[href="/about"]').click() // Click the "About" link
      cy.url().should('include', '/about') // Ensure that the URL now includes "/about
      cy.contains('About').should('be.visible')
    })
  })