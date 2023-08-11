/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
require('cy-verify-downloads').addCustomCommand();

Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/admin"]').click({force: true})
  })
})
Cypress.Commands.add('home_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()   
    cy.get('a[href="/cards"]').click({force: true})
  })
})
Cypress.Commands.add('accdamic_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/academics"]').click({force: true})
  })
})
Cypress.Commands.add('fee_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/fees"]').click({force: true})
  })
})
Cypress.Commands.add('vault_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.wait(10000)
    cy.get('a[href="/vault"]').click({force: true})
  })
})
Cypress.Commands.add('click_Back_Button', () => {
  cy.contains('Back').should('exist').click({force: true})
})

