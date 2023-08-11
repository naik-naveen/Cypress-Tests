/// <reference types="cypress" />

context('GCS vidya vardhaka sangha website Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('When User visit website verify the URl and Page Elements', () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/about')
    cy.contains('a', 'VVS Gandhi Centenary English Primary School ').should('be.visible')
    cy.contains('a', 'About').should('be.visible')
    cy.contains('a', ' The School ').should('be.visible')
    cy.contains('a', ' Pre-Nursery ').should('be.visible')
    cy.contains('a', ' Nursery ').should('be.visible')
    cy.contains('a', ' Primary ').should('be.visible')
    cy.contains('a', 'Contact Us').should('be.visible')
    cy.get('div[class="carousel slide"]').should("exist").and("be.visible")
    cy.contains('h3', 'About VVS GCS').should('be.visible')
    cy.contains('h4', 'Mission').should('be.visible')
    cy.contains('h4', ' Vision ').should('be.visible')
    cy.contains('a', 'Download Brochure').should('be.visible')
    cy.get("marquee a").contains("Photos of Annual sports' day celebrations 2023").should('exist').and('be.visible')
    cy.contains('h4', ' Management Team ').should('be.visible')
    cy.get('h4:contains(Management Team)').next("img").should("exist").and("have.attr", "src", "assets/img/managementTeam.jpg")
    cy.contains('h4', ' Management Team ').next("img").then((img) => {
      const imageElement = img.get(0)
      expect(imageElement.naturalWidth).to.be.greaterThan(0)  // Check if the image has a valid natural width (greater than 0) indicating that it's loaded
    })
    cy.contains('h4', ' Latest News & Events: ').should('be.visible').next('div[class="event-wrapper"]').should('exist')
    cy.contains('h4', ' Thought for the day: ').should('be.visible').next('div[class="thought-wrapper"]').should('exist')
    cy.contains(".footerContent h3", "Quick Links").as("quickLinksHeader");
    cy.get("@quickLinksHeader").should("exist")
    cy.get("@quickLinksHeader").next("ul").find("li").should("have.length.at.least", 1)
      .each((listItem) => {
        const listItemText = listItem.text().trim()
        const expectedLinkNames = ["About Us", "The School", "Pre-Nursery", "Nursery", "Primary School", "News", "CampusTrack"]
        expect(expectedLinkNames).to.include(listItemText)
      })
    cy.contains(".footerContent h3", "Contact Us").as("contactUsHeader")
    cy.get("@contactUsHeader").should("exist")
    cy.get("@contactUsHeader").next("h4").should("contain", "VVS Gandhi Centenary School")
    cy.get("@contactUsHeader").nextAll("p").eq(0).should("contain", "1st 'N' Block, Rajajinagar Bangalore – 560010")
    cy.get("@contactUsHeader").nextAll("p").eq(1).find("a").should("have.attr", "href", "/contact").and("contain", "Locate Us")
    cy.contains('div', ' © 2023 V.V.S.G.C School. All Rights Reserved').should('be.visible')
  })
  it.only("Verify text in mission and vision", () => {
    cy.contains('h4', 'Mission').next().find('i').should('have.text', 'To provide holistic education comprising facts of academics, culture, spirituality, ethics, heritage, environment, sports and hobbies.')
    cy.contains('h4', ' Vision ').next().find('b:contains(To provide high quality in education and set high standards.)').should('be.visible').parent('p')
      .next('p').should('have.text', 'The V.V.S. Gandhi Centenary School, or V.V.S.G.C.School as it is popularly known as, was started in the year 1969, the Birth Centenary year of Mahatma Gandhi. This is the Primary wing of the Vidya Vardhaka Sangha.')
      .next('p').should('have.text', 'The school has grown in leaps and bounds since inception. The institution conducts classes from Play School (2½ yrs.) to Std VII – i.e., the Primary School. The school has two campuses viz., Saptharshidhama and Dhruvadhama.')
      .next('p').should('have.text', 'The Play School or the Pre-Nursery section and the Lower Primary School i.e., Std I to IV are housed in the Saptharshidhama. The Nursery section and the Higher Primary operate from the Dhruvadhama campus. Each unit works under a Headmistress and the overall management is carried out by the Principal.')
      .next('p').should('have.text', 'The units are staffed by 76 well qualified and trained teachers. The total number of students in all the 4 units is about 1,600 students.')
  })
})


