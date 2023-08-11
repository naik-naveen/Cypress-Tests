describe('Home page feature Test', () => {
  const un = Cypress.env('USERNAME')
    const pwd = Cypress.env('PASSWORD')
    beforeEach(() => {
        cy.home_login(un, pwd)
    })

    it('verify home page with user id on top right and Guided tour pops ', () => {
      cy.visit('/cards')
      cy.get('div:contains(Help )').should('be.visible')
      cy.get('button:contains(Guided Tour)').click({force:true})
      cy.window().then((win) => { cy.stub(win, 'alert').as('popup') })
      cy.get('div:contains(To view release info of CampusTrack)').should('be.visible')
      cy.get('a:contains(Next)').should('exist').click()
  
      cy.get('div:contains(To view User Info and Persona list)').should('be.visible')
      cy.get('a:contains(Done)').should('exist').click()
      cy.url().should('include', '/cards')
      cy.contains(Cypress.env('USERNAME')).should('be.visible')
      cy.get('div:contains(Quick Links )').should('be.visible')
      cy.get('div:contains(Notifications )').should('be.visible')
      cy.get('div:contains(Upcoming Events )').should('be.visible')
    })

    it('When click profile should navigate profile page', () => {
      cy.visit('/cards')
      cy.contains(Cypress.env('USERNAME')).click({force:true})
      cy.get('a[href="/home/userProfile"]').click({force:true})
      cy.url().should('include','/home/userProfile')
      cy.get('label:contains(Name)').should('be.visible').next().children('input[name="Name"]').should('exist')
      cy.get('label:contains(Institute Name)').should('be.visible').next().children('input[name="instName"]').should('exist')
    })  
  })