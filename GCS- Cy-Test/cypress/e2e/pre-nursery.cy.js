
context('Pre-Nursery feature test', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('When User click on pre Nursery link should navigate to pre Nursery page ', () => {
        cy.get('a[href="/preNursery"]').first().click()
        cy.url().should('eq', Cypress.config().baseUrl + '/preNursery')
        cy.get('ul').should('be.visible')
        const expectedTexts = ["Our Philosophy", "Activities", "Physical Development", "Cultural Events"]
        cy.get("ul.dropdown-menu.sub-menu.show li").each((liElement, index) => {
            const liText = liElement.text().trim();
            expect(liText).to.equal(expectedTexts[index])
        })
        cy.contains('div', ' © 2023 V.V.S.G.C School. All Rights Reserved').should('be.visible')
        cy.contains('h4', 'Our Philosophy').should('be.visible')
            .next('h4').should('have.text', 'Pre-school is the first experience for many children in a structured setting with teachers and group of children.').should('be.visible')
            .next('p').should('have.text', 'It’s an opportunity to learn, to share, to follow instructions and begin the foundation for learning. Every child has a unique way of learning and responding to the given learning environment. So activities are created around the preferred learning style that empowers the children to think and explore. Hence our school has adopted a unique concept of “Play, Learn and Grow.”').should('be.visible')
    })
    it('When User click on Our Philosophy link , should navigte to Our Philosophy page ', () => {
        cy.get('a[href="/preNursery"]').first().click()
        cy.get('a[href="/preNursery/ourPhilosophy"]').click()
        cy.url().should('eq', Cypress.config().baseUrl + '/preNursery/ourPhilosophy')
        cy.contains('h4', 'Our Philosophy').should('be.visible')
            .next('h4').should('have.text', 'Pre-school is the first experience for many children in a structured setting with teachers and group of children.').should('be.visible')
            .next('p').should('have.text', 'It’s an opportunity to learn, to share, to follow instructions and begin the foundation for learning. Every child has a unique way of learning and responding to the given learning environment. So activities are created around the preferred learning style that empowers the children to think and explore. Hence, our school has adopted a unique concept of “Play, Learn and Grow.”').should('be.visible')
    })
    it('When User click on Activitieslink , should navigte to Activitiespage ', () => {
        cy.get('a[href="/preNursery"]').first().click()
        cy.get('a[href="/preNursery/activities"]').click()
        cy.url().should('eq', Cypress.config().baseUrl + '/preNursery/activities')
        cy.contains('h4', 'Activities').should('be.visible')
        cy.contains('h3', 'Rhyme and Rhythm').should('be.visible')
            .next('p').should('have.text', 'Delightful and enjoyable rhyme sessions get the children involved in singing by which their phonological awareness is enhanced.').should('be.visible')
        cy.contains('h3', 'Story time ').should('be.visible')
            .next('p').should('have.text', 'Story session includes the use of attractive teaching aids like flash cards, puppets, stuffed toys with voice modulation and dramatization from the teachers which help in excellent understanding leading to recapitulation by the children. ').should('be.visible')
        cy.contains('h3', 'Concept time ').should('be.visible')
            .next('p').should('have.text', 'Early learning skills are focused by asking thought provoking questions and introducing new vocabulary during general knowledge time. ').should('be.visible')
    })
    it('When User click on Physical Development link , should navigte to Physical Development page ', () => {
        cy.get('a[href="/preNursery"]').first().click()
        cy.get('a[href="/preNursery/physicalDevelopment"]').click()
        cy.url().should('eq', Cypress.config().baseUrl + '/preNursery/physicalDevelopment')
        cy.contains('h4', 'Physical Development').should('be.visible').next()
            .next('p').should('have.text', 'Indoor activities such as threading beads, sorting grains, pegging, fixing toys etc help children develop fine motor skills.').should('be.visible')
            .next('p').should('have.text', 'Physical development is achieved through organized games and free play. ').should('be.visible').next().next()
            .next('p').should('have.text', 'Physical development is achieved through organized games and free play. ').should('be.visible')
    })
    it('When User click on Cultural Events link , should navigte to Cultural Events page ', () => {
        cy.get('a[href="/preNursery"]').first().click()
        cy.get('a[href="/preNursery/culturalEvents"]').click()
        cy.url().should('eq', Cypress.config().baseUrl + '/preNursery/culturalEvents')
        cy.contains('h4', 'Cultural Events').should('be.visible')
            .next('p').should('have.text', 'Cultural events and sports form a part of a child’s social, emotional and all round development. They enjoy the sense of participation and winning.').should('be.visible')
    })

})