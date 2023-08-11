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
    cy.get('a[href="/ctng4/admin"]').click()
  })
})
Cypress.Commands.add('accdamic_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/ctng4/academics"]').click()
  })
})
Cypress.Commands.add('connect_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/ctng4/connect"]').click()
  })
})
Cypress.Commands.add('vault_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/ctng4/vault"]').click()
  })
})
Cypress.Commands.add('fee_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/ctng4/fees"]').click()
  })
})
Cypress.Commands.add('library_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/ctng4/library"]').click()
  })
})
  Cypress.Commands.add('receipt_login', (username, password) => {
    cy.session([username, password], () => {
      cy.visit('/')
      cy.get('input[placeholder="Email"]').type(username)
      cy.get('#password').type(password)
      cy.get('input[type="submit"]').click()
      cy.get('a[href="/ctng4/receipts"]').click()
    })
})
Cypress.Commands.add('assets_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/ctng4/assets"]').click()
  })
})
Cypress.Commands.add('lms_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/ctng4/lms"]').click()
  })
})
Cypress.Commands.add('admission_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/ctng4/admissions"]').click()
  })
})
Cypress.Commands.add('tt_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/ctng4/ttPlanner"]').click()
  })
})
Cypress.Commands.add('hr_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/ctng4/hr"]').click()
  })
})
Cypress.Commands.add('rc_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username)
    cy.get('#password').type(password)
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/ctng4/regulatoryCompliance"]').click()
  })
})
Cypress.Commands.add('accounting_login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('input[placeholder="Email"]').type(username,{ delay: 100 })
    cy.get('#password').type(password,{ delay: 100 })
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/ctng4/accounting"]').click()
  })
})
Cypress.Commands.add('click_Back_Button', () => {
  cy.contains('Back').should('exist').click()
})
