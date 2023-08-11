import cypress = require("cypress")

describe('Logout functionality', () => {
  it('Logout of application', () => {
    cy.visit("/")
    cy.get('input[placeholder="Email"]').type(Cypress.env('USERNAME'))
    cy.get('#password').type(Cypress.env('PASSWORD'))
    cy.get('input[type="submit"]').click()
    cy.get('button[type="button"]').click()
    cy.get('i.fa.fa-sign-out').click();
  })
})