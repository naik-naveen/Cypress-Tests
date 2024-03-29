describe('Timetable feature Test', () => {
    const un = Cypress.env('USERNAME')
    const pwd = Cypress.env('PASSWORD')
    beforeEach(() => {
        cy.tt_login(un, pwd)
    })
    it('should navigate to ttPlannerpage successfully ', () => {
        cy.visit('/ttPlanner')
        cy.url().should('include', '/ttPlanner')
        cy.get('span').children('a:contains(Help)').should('be.visible')
        cy.get('span').children('a:contains(Reset)').should('be.visible')
        cy.get('span').children('button:contains( Export )').should('exist')
        cy.get('div[class="column2"]').children('tt-input').find('table').children('tbody').children('tr').within(() => { cy.get('td:contains( Weekly pattern )').find('i[class="fa fa-question-circle"]').parents('td').find('label:contains(8 - 5)').prev('input[value="85"]').should('be.checked').should('be.visible') })
        cy.get('div[class="column2"]').children('tt-input').find('table').children('tbody').children('tr').within(() => { cy.get('td:contains( Weekly pattern )').next().find('a:contains(Sections :)').should('be.visible').parent().siblings().find('input[name="sectionsCount"]').should('exist') })
        cy.get('div[class="column2"]').children('tt-input').find('table').children('tbody').children('tr').within(() => { cy.get('td:contains( Weekly pattern )').next().next().find('a:contains(Subjects :)').should('be.visible').parent().siblings().find('input[name="subjectCount"]').should('exist') })
        cy.get('div[class="column2"]').children('tt-input').find('table').children('tbody').children('tr').within(() => { cy.get('td:contains( Weekly pattern )').next().siblings().next().find('a:contains(Staff :)').should('be.visible').parent().siblings().find('input[name="staffCount"]').should('exist').parent().next().find('i[title="additional staff"]').should('exist').next('input[name="additionalStaffCount"]').should('exist') })
    })
    it('When user click on Help link, Instruction pop should dispaly', () => {
        cy.visit('/ttPlanner')
        cy.url().should('include', '/ttPlanner')
        cy.get('span').children('a:contains(Help)').click()
        cy.window().then((win) => { cy.stub(win, 'alert').as('popup') })
         cy.get('h2:contains(Instructions)').should('be.visible')
         cy.screenshot()
         cy.get('button').children('span:contains(×)').click()
    })
    it('When user click on Reset link, Reset pop should dispaly', () => {
        cy.visit('/ttPlanner')
        cy.url().should('include', '/ttPlanner')
        cy.get('span').children('a:contains(Reset)').click()
        cy.window().then((win) => { cy.stub(win, 'alert').as('popup') })
         cy.get('h3:contains(Reset)').should('be.visible')
         cy.get('h4').should('contain.text', 'Clicking on Yes would clear all the data entered. Would you like to continue ?')
         cy.screenshot()
         cy.get('button:contains(No)').should('exist')
         cy.get('button:contains(Yes)').should('exist')
         cy.get('button:contains(No)').click()
    })
    it('When user click on Export button, Time table should get download ', () => {
        cy.visit('/ttPlanner')
        cy.url().should('include', '/ttPlanner')
        cy.get('span').children('button:contains( Export )').click()  
        cy.verifyDownload('.csv', { contains: true })
    })
    it('When user click on Sample data link, Sample titable should dispaly ', () => {
        cy.visit('/ttPlanner')
        cy.url().should('include', '/ttPlanner')
        cy.get('span:contains(Section-Staff-Subject (upload))').click()
      cy.get('a:contains(Sample data)').click()
      cy.screenshot()
    })
    it('When user click on Policy , list of Rules should display ', () => {
        cy.visit('/ttPlanner')
        cy.url().should('include', '/ttPlanner')
        cy.get('span:contains(Policy)').click()
      cy.get('thead').children('tr').children('th:contains(Rules)').should('be.visible')
    })
    it('When user click on TT , list avilable staff and subject ,section should dispaly', () => {
        cy.visit('/ttPlanner')
        cy.url().should('include', '/ttPlanner')
        cy.get('.col-md-8 span').contains('TT').click()
      cy.get('thead').children('tr').get('td:contains(Period)').should('exist').prev().children('a:contains(Section)').should('exist').parent().prev().children('a:contains(Subject)').should('exist').parent().prev().children('a:contains(Staff)').should('exist')
    })
    it('When user click on chose file and select the file , selected time table should displayy', () => {
        cy.visit('/ttPlanner')
        cy.url().should('include', '/ttPlanner')
        cy.get('span:contains(Section-Staff-Subject (upload))').click()
      cy.get('input[type="file"]').selectFile('./cypress/fixtures/btlcol_tt_2023Apr28.csv')
    })
    it('When user click on assign , list of days should dispaly', () => {
        cy.visit('/ttPlanner')
        cy.url().should('include', '/ttPlanner')
        cy.get('span:contains(Section-Staff-Subject (upload))').click()
        cy.get('a:contains(Sample data)').click()
        cy.get('.col-md-8 span').contains('TT').click()
      cy.get('div[class="tt-pool"]').children('table').get('tbody').children('tr').children('td:contains(SOU)').next('td:contains(DC)').next('td:contains(5A)').next('td').children('a:contains(Assign)').click({force: true} )
      cy.get('div[class="popover-class"]').should('be.visible')
    })
    it('When user click on Section link, section pop should display ', () => {
      cy.visit('/ttPlanner')
      cy.url().should('include', '/ttPlanner')
      cy.wait(10000)
      cy.get('div[class="column2"]').children('tt-input').find('table').children('tbody').children('tr').within(() => { cy.get('td:contains( Weekly pattern )').next().find('a:contains(Sections :)').click() })
      cy.wait(10000)
      cy.window().then((win) => { cy.stub(win, 'alert').as('popup') })
      cy.get('h2:contains(Sections)').should('be.visible')
      cy.get('thead tr th').should('have.length', 2).each((th, index) => cy.wrap(th).should('have.text', ['Id', 'Name'][index]))
      cy.get('button:contains(Save)').should('exist')
      cy.get('button[class="close"]').should('exist').click()
    })
    it('When user click on Subject link, subject pop should display ', () => {
      cy.visit('/ttPlanner')
      cy.url().should('include', '/ttPlanner')
      cy.wait(10000)
      cy.get('div[class="column2"]').children('tt-input').find('table').children('tbody').children('tr').within(() => { cy.get('td:contains( Weekly pattern )').next().next().find('a:contains(Subjects :)').click() })
      cy.wait(10000)
      cy.window().then((win) => { cy.stub(win, 'alert').as('popup') })
      cy.get('h2:contains(Subjects)').should('be.visible')
      cy.get('thead tr th').should('have.length', 2).each((th, index) => cy.wrap(th).should('have.text', ['Id', 'Name'][index]))
      cy.get('button:contains(Save)').should('exist')
      cy.get('button[class="close"]').should('exist').click()
    })
    it('When user click on Staff link, staff pop should display ', () => {
      cy.visit('/ttPlanner')
      cy.url().should('include', '/ttPlanner')
      cy.wait(10000)
      cy.get('div[class="column2"]').children('tt-input').find('table').children('tbody').children('tr').within(() => { cy.get('td:contains( Weekly pattern )').next().siblings().next().find('a:contains(Staff :)').click() })
      cy.wait(10000)
      cy.window().then((win) => { cy.stub(win, 'alert').as('popup') })
      cy.get('h2:contains(Staff)').should('be.visible')
      cy.get('thead tr th').should('have.length', 2).each((th, index) => cy.wrap(th).should('have.text', ['Id', 'Name'][index]))
      cy.get('button:contains(Save)').should('exist')
      cy.get('button[class="close"]').should('exist').click()
    })
})