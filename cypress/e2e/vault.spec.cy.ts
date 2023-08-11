describe('Vault feature Test', () => {
    const un = Cypress.env('USERNAME')
    const pwd = Cypress.env('PASSWORD')
    beforeEach(() => {
        cy.vault_login(un, pwd)
    })
     it('When user click on Vault link,should navigate to vault page successfully ', () => {
        cy.visit('/vault')
       cy.url().should('include', '/vault')
       cy.get('a:contains(Artefact list )').should('be.visible')
       cy.get('.list-group').contains('li', 'Report').next('li').children('a:contains(Artefact list )').should('exist')
       cy.get('a[href="/ctng4/vault/artefact/download"]').should('exist')
       cy.get('a[href="/ctng4/vault/artefact/add"]').should('exist')
       cy.get('a[href="/ctng4/vault/artefact/manage"]').should('exist')
     })
    it('When user click on  Artefact search link,should navigate to Artefact Manage page successfully ', () => {
        cy.visit('/vault')
        cy.get('a[href="/ctng4/vault/artefact/manage"]').click()
        cy.url().should('include', '/artefact/manage')
        cy.get('input[placeholder="Search"]').should('exist')
        cy.get('a:contains(Upload New Artefact)').should('be.visible')
        cy.get('table[class="table table-bordered table-condensed table-hover"]').children('thead').children('tr').each((index, element) => {
            const expectedHeader = [' Title ', 'Description', 'Tags', 'FileName', 'Created On', 'Status','Actions']
            expect(element.textContent).to.equal(expectedHeader[index])
        })
    })
    it('When user click on  Upload New Artefact link,should navigate to artefact/add page successfully ', () => {
        cy.visit('/vault')
        cy.get('a[href="/ctng4/vault/artefact/manage"]').click()
        cy.get('a:contains(Upload New Artefact)').click()
        cy.url().should('include', '/artefact/add')
        cy.get('.form-group').contains('label', 'Title').next('div').find('input[name="title"]').should('exist')
        cy.get('.form-group').contains('label', 'Description').next('div').find('input[name="description"]').should('exist')
    })
    it('When user click on Download Published link,should navigate to  Download Published Templates page successfully ', () => {
        cy.visit('/vault')
        cy.get('a[href="/ctng4/vault/artefact/download"]').click()
        cy.url().should('include', '/artefact/download')
        cy.contains('Download published artefacts from CampusTrack that can be used for bulk data uploads.').should('be.visible')
        cy.get('input[placeholder="Search"]').should('exist')
        cy.get('a:contains(Upload New Template)').should('exist')
        cy.get('table[class="table table-bordered table-condensed table-hover"]').children('thead').children('tr').each((index, element) => {
            const expectedHeader = ['Title', 'Description', 'Download']
            expect(element.textContent).to.equal(expectedHeader[index])
        })
    })
    it('When user click on Upload New Template link,should navigate to artefact/download/add page successfully ', () => {
        cy.visit('/vault')
        cy.get('a[href="/ctng4/vault/artefact/download"]').click()
        cy.get('a:contains(Upload New Template)').click()
        cy.url().should('include', '/artefact/download/add')
        cy.get('.form-group').contains('label', 'Title').next('div').find('input[name="title"]').should('exist')
        cy.get('.form-group').contains('label', 'Description').next('div').find('input[name="description"]').should('exist')
    })
    it('When user click on Upload artefact link,should navigate to artefact/download/add page successfully ', () => {
        cy.visit('/vault')
        cy.get('a[href="/ctng4/vault/artefact/download"]').click()
        cy.get('a:contains(Upload New Template)').click()
        cy.url().should('include', '/artefact/download/add')
        cy.get('.form-group').contains('label', 'Title').next('div').find('input[name="title"]').should('exist')
        cy.get('.form-group').contains('label', 'Description').next('div').find('input[name="description"]').should('exist')
    })
    it('When user enter all valid details in textfield and upload a file , artefact should get added ', () => {
        cy.visit('/vault')
        cy.get('a[href="/ctng4/vault/artefact/manage"]').click()
        cy.get('a:contains(Upload New Artefact)').click()
        cy.get('.form-group').contains('label', 'Title').next('div').find('input[name="title"]').type('college report')
        cy.get('.form-group').contains('label', 'Description').next('div').find('input[name="description"]').type('college details report')
        cy.get('input[id="file"]').selectFile('./cypress/fixtures/college.png')
          cy.get('button[class="btn btn-success btn-s"]').click() 
    })
    it('When user click on download ,Selected artefact should get download ', () => {
        cy.visit('/vault')
        cy.get('a[href="/ctng4/vault/artefact/manage"]').click()
        cy.contains('td', ' adjustment transaction ') .parent('tr').within(() => {cy.get('div').children('button[type="button"]').click()
      cy.get('ul').get('a:contains(Download)').click() })   
      cy.verifyDownload('.st', { contains: true })
    })
    it('When user click on disable ,Selected artefact should get disable ', () => {
        cy.visit('/vault')
        cy.get('a[href="/ctng4/vault/artefact/manage"]').click()
        cy.contains('td', ' college report ') .parent('tr').within(() => {cy.get('div').children('button[type="button"]').click()
      cy.get('ul').get('a:contains(Disable)').click() })   
      cy.contains('td', ' college report ') .parent('tr').within(() => {cy.get('div').children('button[type="button"]').click()
      cy.get('ul').get('a:contains(Enable)').should('exist') })
    })
    it('When user click on Enable ,Selected artefact should get Enable ', () => {
        cy.visit('/vault')
        cy.get('a[href="/ctng4/vault/artefact/manage"]').click()
        cy.contains('td', ' college report ') .parent('tr').within(() => {cy.get('div').children('button[type="button"]').click()
      cy.get('ul').get('a:contains(Enable)').click() })   
      cy.contains('td', ' college report ') .parent('tr').within(() => {cy.get('div').children('button[type="button"]').click()
      cy.get('ul').get('a:contains(Disable)').should('exist') })
    })
    it('When user click on Upload artefact link,should navigate to artefact/download/add and it should contain Artefact Details', () => {
        cy.visit('/vault')
        cy.get('a[href="/ctng4/vault/artefact/add"]').click()
        cy.url().should('include', '/vault/artefact/add')
        cy.get('.form-group').contains('label', 'Title').next('div').find('input[name="title"]').should('exist')
        cy.get('.form-group').contains('label', 'Description').next('div').find('input[name="description"]').should('exist')
        cy.get('label:contains(Meta)').should('be.visible')
        cy.get('input[placeholder="key"]').should('exist')
    })
    it('When user click on  Upload Artefact link,should navigate to artefact/add page successfully ', () => {
        cy.visit('/vault')
        cy.get('a[href="/ctng4/vault/artefact/add"]').click()
        cy.url().should('include', '/artefact/add')
        cy.get('.form-group').contains('label', 'Title').next('div').find('input[name="title"]').should('exist')
        cy.get('.form-group').contains('label', 'Description').next('div').find('input[name="description"]').should('exist')
    })
    it('Verify back button in Artefact feature', () => {
        cy.visit('/vault')
        cy.get('a[href="/ctng4/vault/artefact/add"]').click()  
        cy.url().should('eq', Cypress.config().baseUrl + '/vault/artefact/add')  
        cy.click_Back_Button()     
        cy.url().should('eq', Cypress.config().baseUrl + '/vault')  
        cy.get('a[href="/ctng4/vault/artefact/manage"]').click()  
        cy.url().should('eq', Cypress.config().baseUrl + '/vault/artefact/manage')  
        cy.get('a:contains(Upload New Artefact)').click()  
        cy.url().should('eq', Cypress.config().baseUrl + '/vault/artefact/add')  
        cy.click_Back_Button()     
        cy.url().should('eq', Cypress.config().baseUrl + '/vault/artefact/manage')  
        cy.click_Back_Button()     
        cy.url().should('eq', Cypress.config().baseUrl + '/vault') 
        cy.get('a[href="/ctng4/vault/artefact/download"]').click()  
        cy.url().should('eq', Cypress.config().baseUrl + '/vault/artefact/download') 
        cy.get('a:contains(Upload New Template)').click() 
        cy.url().should('eq', Cypress.config().baseUrl + '/vault/artefact/download/add')  
        cy.click_Back_Button()    
        cy.url().should('eq', Cypress.config().baseUrl + '/vault/artefact/download') 
        cy.click_Back_Button()     
        cy.url().should('eq', Cypress.config().baseUrl + '/vault') 
      })
})
