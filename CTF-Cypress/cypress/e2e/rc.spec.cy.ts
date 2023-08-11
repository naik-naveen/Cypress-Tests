describe('RegulatoryCompliance feature Test', () => {
    const un = Cypress.env('USERNAME')
    const pwd = Cypress.env('PASSWORD')
    beforeEach(() => {
        cy.rc_login(un, pwd)
    })
    it('When user click on RegulatoryCompliance link, should navigate to RegulatoryCompliance page successfully ', () => {
        cy.visit('/regulatoryCompliance')
      cy.url().should('include', '/regulatoryCompliance')
      cy.get('li.list-group-item').contains('li.list-group-item', 'TC Book').should('be.visible').should('exist')
      cy.get('li.list-group-item').contains('li.list-group-item', 'Fee Receipts').should('be.visible').should('exist')
      cy.get('li.list-group-item.ct-panel').contains('Reports').should('exist')
      cy.get('li.list-group-item.ct-panel').contains('Reports').next().children().should('have.attr', 'href', '/regulatoryCompliance/admissionReport')
    })
    })