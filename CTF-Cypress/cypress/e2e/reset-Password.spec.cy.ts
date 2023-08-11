describe('Reset Password', () => {
  it('Rest Password pop should display', () => {
    cy.visit("/")
    cy.get('a:contains("Reset password")').click();
    cy.contains('Reset Password').should('be.visible')
  })
})