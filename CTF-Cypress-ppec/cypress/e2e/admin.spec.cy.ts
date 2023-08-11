describe('Admin feature Test', () => {
  let title
  const un = Cypress.env('USERNAME')
  const pwd = Cypress.env('PASSWORD')
  beforeEach(() => {
    cy.login(un, pwd)
  })
  it('should navigate to admin page successfully ', () => {
    cy.visit('/admin')
    cy.url().should('include', '/admin')
    cy.contains('Course').should('be.visible')
    cy.get('a[href="/admin/course/manage"]').should('exist')
    cy.get('a[href="/admin/course/add"]').should('exist')
    cy.contains('Institute').should('be.visible')
    cy.get('a[href="/admin/inst"]').should('exist')
    cy.get('a[href="/admin/inst/add"]').should('exist')
    cy.contains('Student').should('be.visible')
    cy.get('a[href="/admin/student/manage"]').should('exist')
    cy.get('a[href="/admin/student/add"]').should('exist')
    cy.get('a[href="/admin/courseListReport"]').should('exist')
    cy.get('a[href="/admin/receiptConsolidatedReport"]').should('exist')
    cy.get('a[href="/admin/summaryReport"]').should('exist')
    cy.get('a[href="/admin/calendarReport"]').should('exist')
    cy.get('a[href="/admin/upcomingEventsAdminReport"]').should('exist')
    cy.get('a[href="/admin/usersReport"]').should('exist')
    cy.get('a[href="/admin/coursewiseBreakupReport"]').should('exist')
    cy.get('a[href="/admin/studentDetailsReport"]').should('exist')
    cy.get('a:contains(Student Details )').should('exist')
    cy.get('a:contains(Students Sectionwise Breakup )').should('exist')
    cy.get('a:contains(Students Basic Sectionwise Breakup )').should('exist')
    cy.get('a:contains(Students Parent Details )').should('exist')
    cy.get('a:contains(New Admissions Report )').should('exist')
    cy.get('a:contains(TC Students List )').should('exist')
  })
  it('when user click on course add link, should navigate to course add page successfully ', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/course/add"]').click( {force: true})
    cy.url().should('include', 'course/add')
    cy.get('input[name="courseName"]').should('exist')
    cy.get('input[name="branch"]').should('exist')
    cy.get('select[name="eduLevel"]').should('exist')
    cy.get('input[name="affiliation"]').should('exist')
    cy.get('button[class="btn btn-xs btn-success"]').should('contain', 'Save')
    cy.get('button[class="btn btn-xs btn-success"]').should('be.enabled')
  })
  it('When user enter valid details in all textfield of course add page and click on save course should display in course manage page ', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/course/add"]').click( {force: true})
    cy.get('input[name="courseName"]').type(Cypress.env('COURSE_NAME'))
    // cy.get('input[name="branch"]').type(Cypress.env('BRANCH'))
    cy.get('select').select('Graduate').should('have.value', '30')
    cy.get('input[name="affiliation"]').type(Cypress.env('AFFILIATION'))
    cy.get('button[class="btn btn-xs btn-success"]').should('exist')
   // cy.get('a[href="/admin/course/manage"]').click()
   // cy.get('input[placeholder="Search"]').type(Cypress.env('COURSE_NAME'))
    //cy.get('i[class="fa fa-search"]').click()
   // cy.contains(Cypress.env('COURSE_NAME')).should('be.visible')
  })
  it('When user click on Terms link, should navigate to Terms page ', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/course/manage"]').click( {force: true})
    cy.contains('tr', Cypress.env('course_Name')).within(() => { cy.contains('a', 'Terms').click( {force: true}) })
    cy.url().should('include', '/admin/course/manageTerms')
    cy.get('a:contains(Add New Term)').should('be.visible')
  })
  it('When user click on Copy As link, should navigate to Copy As page ', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/course/manage"]').click( {force: true})
    cy.contains('tr', Cypress.env('course_Name')).within(() => { cy.contains('a', 'Copy As').click( {force: true}) })
    cy.url().should('include', '/admin/course/manage/copy')
    cy.get('.form-group').contains('label', 'Name').next('div').find('input[name="courseName"]').should('exist')
    cy.get('button:contains(Save)').should('be.disabled')
  })
  it('When user click on Disable,selected course will be should be disabled', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/course/manage"]').click( {force: true})
    cy.contains('tr', Cypress.env('course_Name')).within(() => { cy.get('a[class="text-danger"]').should('exist') })
    // cy.contains('tr', 'B.Com 2').within(() => { cy.get('a[title="Enable course"]').click() })
    // cy.contains('tr', 'B.Com 2').find('a').contains('Enable').click()
  })/*
  it('When user click on Enable,selected course will be should be Enabled', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/course/manage"]').click()
    cy.contains('tr', Cypress.env('COURSE_NAME')).within(() => { cy.get('a[title="Enable course"]').click() })
    // cy.contains('tr', 'B.Com 2').find('a').contains('Enable').click()
  })*/
  it('When user click on Add New Term link ,should navigate to Add Term page', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/course/manage"]').click( {force: true})
    cy.contains('tr', Cypress.env('course_Name')).within(() => { cy.contains('a', 'Terms').click( {force: true}) })
    cy.get('a:contains(Add New Term)').click()
    cy.url().should('include', '/admin/course/addTerm')
    cy.get('.form-group').contains('label', 'Name').next('div').find('input[name="termName"]').should('exist')
    cy.get('.form-group').contains('label', 'From').next('div').find('span').children('i[class="glyphicon glyphicon-calendar"]').next('input[name="from"]').should('exist')
    cy.get('.form-group').contains('label', 'To').next('div').children('span').find('i[class="glyphicon glyphicon-calendar"]').next('input[name="to"]').should('exist')
    cy.get('button:contains(Save)').should('be.disabled')
    cy.get('input[name="termName"]').type(Cypress.env('TermName'))
    cy.get('input[name="from"]').type(Cypress.env('DateFrom'))
    cy.get('input[name="to"]').type(Cypress.env('DateTo'))
    cy.get('button:contains(Save)').should('exist')
  })
  it('When user click on Sections,should navigate to Course/term/sections page page', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/course/manage"]').click( {force: true})
    cy.contains('tr', Cypress.env('course_Name')).within(() => { cy.contains('a', 'Terms').click( {force: true}) })
    cy.contains('tr', Cypress.env('TermName')).contains('Sections').click()
    cy.url().should('include', '/manageSections')
    cy.get('a:contains(Add New Section)').should('be.visible')
  })/*
  it('When user click on Delete,User selected term should be deleted', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/course/manage"]').click()
    cy.contains('tr', Cypress.env('COURSE_NAME')).within(() => { cy.contains('a', 'Terms').click() })
    cy.contains('tr', Cypress.env('TermName')).contains('Delete').click()
    cy.get('a:contains(Add New Term)').click()
    cy.get('input[name="termName"]').type(Cypress.env('TermName'))
    cy.get('input[name="from"]').type(Cypress.env('DateFrom'))
    cy.get('input[name="to"]').type(Cypress.env('DateTo'))
    cy.get('button:contains(Save)').click()
    cy.get('button[ng-reflect-router-link="/admin/course/manageTerms"]').click()
  })*/
  it('When user click on course edit link, User  should navigate to edit page', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/course/manage"]').click( {force: true})
    cy.contains('tr', Cypress.env('course_Name')).within(() => { cy.contains('a', 'Terms').click( {force: true}) })
    cy.contains('a', Cypress.env('TermName')).click( {force: true})
    cy.url().should('include', '/course/editTerm')
    cy.get('.form-group').contains('label', 'Name').next('div').find('input[ng-reflect-model="Annual"]').should('exist')
    cy.get('button:contains(Rename Term)').should('be.enabled')
    cy.get('.form-group').contains('label', 'From').next('div').children('span').find('i[class="glyphicon glyphicon-calendar"]').next('input[name="from"]').should('exist')
    cy.get('.form-group').contains('label', 'To').next('div').children('span').find('i[class="glyphicon glyphicon-calendar"]').next('input[name="to"]').should('exist')
    cy.get('button:contains(Update Term)').should('be.enabled')
  })/*
  it('When user edit/change the terms detail and click on Update Term button term details should be updated', () => {
    const now = new Date();
    cy.clock(now)
    cy.visit('/admin')
    cy.get('a[href="/admin/course/manage"]').click()
    cy.contains('tr', Cypress.env('COURSE_NAME')).within(() => { cy.contains('a', 'Terms').click() })
    cy.contains('a', Cypress.env('TermName')).click()
    cy.url().should('include', '/course/editTerm')
    cy.get('input[name="from"]').clear().type('2022-04-03')
    cy.get('input[name="to"]').clear().type(new Date().toLocaleDateString())
    cy.get('button:contains(Update Term)').click()
  })*/
  it('When user click copy AS link navigte to course/manage/copy and enter valid input in name text field then save copied course on clicking save', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/course/manage"]').click( {force: true})
    cy.contains('tr', Cypress.env('course_Name')).within(() => { cy.contains('a', 'Copy As').click( {force: true}) })
    cy.url().should('include', '/course/manage/copy')
    cy.get('input[name="courseName"]').type(Cypress.env('course_Name'))
    cy.get('button:contains(Save)').should('exist')
  })
  it('When user click on course mange link, should navigate to course manage page ', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/course/manage"]').click( {force: true})
    cy.url().should('include', '/course/manage')
    cy.get('input[placeholder="Search"]').should('exist')
    cy.get('a[href="/admin/course/add"]').should('exist')
    cy.get('h3').should('contain.text', 'AdminCourseManage')
    cy.get('thead').find('th').should('have.length', 4).each(($th, index) => expect($th).to.contain(['Name', 'Level', 'Affiliation', 'Actions'][index]))
  })
  it('When user click on Institutes Add link, should navigate to Institutes Add  page', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/inst/add"]').click( {force: true})
    cy.url().should('include', '/inst/add')
    cy.get('input[name="instName"]').should('exist')
    cy.get('input[name="instShortName"]').should('exist')
    cy.get('input[name="acadFrom"]').should('exist')
    cy.get('i[class="glyphicon glyphicon-calendar"]').should('exist')
    cy.get('input[name="acadTo"]').should('exist')
    cy.get('i[class="glyphicon glyphicon-calendar"]').should('exist')
    cy.get('button[class="btn btn-xs btn-success"]').should('contain', 'Save')
    cy.get('button[class="btn btn-xs btn-success"]').should('be.disabled')
  })
  it('When user enter all valid details in text field of institute add page , save button should get enabled', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/inst/add"]').click( {force: true})
    cy.get('input[name="acadFrom"]').type(Cypress.env('DateFrom'))
    cy.get('input[name="acadTo"]').type(Cypress.env('DateTo'))
    cy.get('input[name="instName"]').type(Cypress.env('instName'),{force: true})
    cy.get('input[name="instShortName"]').type(Cypress.env('instShortName'),{force: true})
    cy.wait(3000)
    cy.get('button[class="btn btn-xs btn-success"]').should('contain', 'Save').should('be.enabled')
  })
  it('When user click on admin/inst link, should navigate to admin/inst  page', () => {
    cy.visit('/admin')
    cy.get('[title="Search/Edit Insts"]').click( {force: true})
    cy.wait(5000)
    cy.url().should('include', '/admin/inst')
    cy.contains('h3 > small > a', 'Admin').siblings('strong').should('have.length', 2).each(($strong, index) => {
      const expectedTexts = ['Institute', 'Manage']
      cy.wrap($strong).should('have.text', expectedTexts[index])
    })
    cy.get('ul.list-group').within(() => {
      cy.contains('Security').should('exist')
      cy.get('a:contains(Manage Personas & Permissions)').should('exist')
      cy.get('a:contains(Manage Users (People who can log into institute))').should('exist')
    })
   /* cy.get('ul.list-group').first().within(() => {
      cy.contains('Finance').should('be.visible')
      cy.get('a:contains(Manage Finance)').should('exist')
    })*/
  })
  it('When user click on Manage Personas & Permissions  link, should navigate to persona manage page', () => {
    cy.visit('/admin')
    cy.get('[title="Search/Edit Insts"]').click( {force: true})
    cy.get('a[href="/admin/inst/persona"]').click( {force: true})
    cy.url().should('include', '/inst/persona')
    cy.contains('h3 > small > a', 'Admin').siblings('strong').should('have.length', 2).each(($strong, index) => {
      const expectedTexts = ['Personas', 'Manage']
      cy.wrap($strong).should('have.text', expectedTexts[index])
    })
    cy.get('input[type="search"]').should('exist')
    cy.get('a:contains(Add New Persona)').should('exist')
    cy.get('thead tr th').should('have.length', 4).each((th, index) => cy.wrap(th).should('have.text', ['Title', 'Type', 'Manage', 'Actions'][index]))
  })
  it('When user click on Add New Persona link, should navigate to persona add page', () => {
    cy.visit('/admin')
    cy.get('[title="Search/Edit Insts"]').click( {force: true})
    cy.get('a[href="/admin/inst/persona"]').click( {force: true})
    cy.get('a:contains(Add New Persona)').click( {force: true})
    cy.url().should('include', '/persona/add')
    cy.contains('h3 > small > a', 'Admin').siblings('strong').should('have.length', 1).each(($strong, index) => {
      const expectedTexts = ['Add']
      cy.wrap($strong).should('have.text', expectedTexts[index])
    })
    cy.contains('.panel-heading', 'Persona Details').should('be.visible').children('span.pull-right').find('button').should('have.text', 'Save').and('be.disabled').and('be.visible')
    cy.get('label:contains(Title)').should('be.visible').next().find('input[name="personaName"]').should('exist')
    cy.get('label:contains(Type)').should('be.visible').next().find('select[name="persona"]').should('exist').find('option').should('have.length', 7).then((options) => {
      const optiontexts = ['Anon', 'Management', 'Parent','Staff', 'Student','External','Dev']
      options.each((i, option) => {
        expect(option.text).to.equal(optiontexts[i]) 
      })
    })
  })
  it('When user click on Manage User link, should navigate to Users Manage page', () => {
    cy.visit('/admin')
    cy.get('[title="Search/Edit Insts"]').click( {force: true})
    cy.get('a[href="/admin/inst/user"]').click( {force: true})
    cy.url().should('include', '/inst/user')
    cy.contains('h3 > small > a', 'Admin').siblings('strong').should('have.length', 2).each(($strong, index) => {
      const expectedTexts = ['Users', 'Manage']
      cy.wrap($strong).should('have.text', expectedTexts[index])
    })
    cy.get('input[placeholder="Search"]').should('exist')
    cy.get('a:contains(Add New User)').should('exist')
    cy.get('thead tr th').should('have.length', 5).each((th, index) => cy.wrap(th).should('have.text', ['NameHandle', 'Email', 'Recovery Details', 'Manage','Actions'][index]))
  })
  it('When user click on Add New User link, should navigate to add Users page', () => {
    cy.visit('/admin')
    cy.get('[title="Search/Edit Insts"]').click({force: true})
    cy.get('a[href="/admin/inst/user"]').click({force: true})
    cy.get('a:contains(Add New User)').click({force: true})
    cy.url().should('include', '/user/add')
    cy.contains('h3 > small > a', 'Admin').siblings('strong').should('have.length', 1).each(($strong, index) => {
      const expectedTexts = ['Add']
      cy.wrap($strong).should('have.text', expectedTexts[index])
    })
    cy.contains('.panel-heading', 'User Details ').should('be.visible').children('span.pull-right').find('button').should('have.text', 'Save').and('be.disabled').and('be.visible')
    cy.get('label:contains(Name)').should('be.visible').next().find('input[placeholder="first  middle  last"]').should('exist')
    cy.get('label:contains(Email)').should('be.visible').next().find('input[name="email"]').should('exist')
    cy.get('label:contains(Persona)').should('be.visible').next().find('select[name="persona"]').should('exist').find('option').should('have.length', 4).then((options) => {
      const optiontexts = [ 'Dev','Support', 'Clerk','Teacher']
      options.each((i, option) => {
        expect(option.text).to.equal(optiontexts[i]) 
      })
    })
  })/*
  it('When user click on Manage Finance link, should navigate to Finance page', () => {
    cy.visit('/admin')
    cy.get('[title="Search/Edit Insts"]').click()
    cy.get('a[href="/admin/inst/finance"]').click()
    cy.url().should('include', '/inst/finance')
    cy.get('strong:contains(Services)').parent().next().find('thead tr th').should('have.length', 2).each((th, index) => cy.wrap(th).should('have.text', ['Service', 'Price'][index]))
    cy.get('strong:contains(Payment History)').parent().next().find('thead tr th').should('have.length', 4).each((th, index) => cy.wrap(th).should('have.text', ['Service', 'Amount', 'Date', 'Actions'][index]))
  })*/
  it('When user click on student Add link, should navigate to student Add  page', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/student/add"]').click( {force: true})
    cy.url().should('include', '/student/add')
    cy.get('.form-group').contains('label', 'Name').next('div').find('input[placeholder="first  middle  last"]').should('exist')
    cy.get('.form-group').contains('label', 'Date Of Birth').next('div').find('input[placeholder="Datepicker"]').should('exist')
    cy.get('.form-group').contains('label', 'Gender').next('div').find('select[name="gender"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Course').next('div').find('select[name="course"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Aadhar Number').next('div').find('input[name="aadharNo"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Student ID').next('div').find('input[name="stuId"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Date Of Admission').next('div').find('input[placeholder="Datepicker"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Admission No').next('div').find('input[name="admnNo"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Application No').next('div').find('input[name="appNo"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Email').next('div').find('input[name="email"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Mobile').next('div').find('input[name="mobile"]').should('exist').should('be.enabled')
  })
  it('When user click on Student search link, should navigate to Student manage page  page', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/student/manage"]').click( {force: true})
    cy.url().should('include', '/student/manage')
    cy.get('input[placeholder="Search"]').should('exist')
    cy.get('a:contains(Enrol New Student)').should('be.visible')
    cy.get('input[type="checkbox"]').next().contains('label', 'Todays Absentees').should('be.visible')
  })
  it('When user click on Enroll new student link, should navigate to student/add page', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/student/manage"]').click( {force: true})
    cy.get('a:contains(Enrol New Student)').click( {force: true})
    cy.url().should('include', 'student/add')
    cy.get('.form-group').contains('label', 'Name').next('div').find('input[placeholder="first  middle  last"]').should('exist')
    cy.get('.form-group').contains('label', 'Date Of Birth').next('div').find('input[placeholder="Datepicker"]').should('exist')
    cy.get('.form-group').contains('label', 'Gender').next('div').find('select[name="gender"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Course').next('div').find('select[name="course"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Aadhar Number').next('div').find('input[name="aadharNo"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Student ID').next('div').find('input[name="stuId"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Date Of Admission').next('div').find('input[placeholder="Datepicker"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Admission No').next('div').find('input[name="admnNo"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Application No').next('div').find('input[name="appNo"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Email').next('div').find('input[name="email"]').should('exist').should('be.enabled')
    cy.get('.form-group').contains('label', 'Mobile').next('div').find('input[name="mobile"]').should('exist').should('be.enabled')
  })
  it('When user click on student name link, should navigate to student/edit page', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/student/manage"]').click( {force: true})
    // cy.get('input[placeholder="Search"]').clear().type(Cypress.env('id')).parent().next().children('i[class="fa fa-search"]').click()
    cy.get('td').contains(Cypress.env('name')).click( {force: true})
    //cy.get('thead[class="bg-info"]').next().children('tr').find('td:nth-child(4)').find('a').click()
    cy.url().should('include', '/student/manage/edit')
    cy.get('div:contains(Identity )').first().within(() => { cy.get('button:contains(Update)').should('be.disabled') })
    cy.get('.form-group').contains('label', 'Name').next('div').find('input[name="FName"]').should('exist')
    cy.get('label:contains("Student photo")').should('exist')
    cy.get('input[name="DOB"]').should('exist')
    cy.get('select[name="gender"]').should('exist')
    cy.get('input[name="DOA"]').should('exist')
    cy.get('input[name="admnNo"]').should('exist')
    cy.get('input[name="appNo"]').should('exist')
    cy.get('input[name="aadharNo"]').should('exist')
    cy.get('div:contains(Home Phone )').first().within(() => { cy.get('button:contains(Update home phone)').should('be.disabled') })
    cy.get('.form-group').contains('label', 'Home Phone').next('div').find('input[name="homePhone"]').should('exist')
    cy.get('div:contains( Domicile )').first().within(() => { cy.get('button:contains(Update)').should('be.disabled') })
    cy.get('input[name="DomicileCountry"]').should('exist')
    cy.get('select[name="DomicileState"]').should('exist')
    cy.get('input[name="DomicileCaste"]').should('exist')
    cy.get('input[name="DomicileMotherTongue"]').should('exist')
    cy.get('div:contains(Address )').first().within(() => { cy.get('button:contains(Update address)').should('be.disabled') })
    cy.get('.form-group').contains('label', 'Line 1').next('div').find('input[name="line1"]').should('exist')
    cy.get('.form-group').contains('label', 'Line 2').next('div').find('input[name="line2"]').should('exist')
    cy.get('.form-group').contains('label', 'City').next('div').find('input[name="city"]').should('exist')
    cy.get('.form-group').contains('label', 'State').next('div').find('input[name="state"]').should('exist')
    cy.get('.form-group').contains('label', 'Pincode').next('div').find('input[name="pincode"]').should('exist')
    cy.get('.form-group').contains('label', 'Country').next('div').find('input[name="country"]').should('exist')
    cy.get('div:contains(Issue TC )').first().within(() => { cy.get('button:contains(Issue TC)').should('be.disabled') })
    cy.get('.form-group').contains('label', 'TC Number').next('div').find('input[id="TCNo"]').should('exist')
    cy.get('.form-group').contains('label', 'Character').next('div').find('input[name="studCharacter"]').should('exist')
    cy.get('.form-group').contains('label', 'Remarks').next('div').find('input[name="Remarks"]').should('exist')
    cy.get('.form-group').contains('label', 'Applied On').next('div').find('input[name="AppliedOn"]').next().find('i[class="glyphicon glyphicon-calendar"]').should('exist')
    cy.get('.form-group').contains('label', 'Issued On').next('div').find('input[name="IssuedOn"]').should('exist')
  })/*
  it('When user enter valid input in text field, issue TC button should get enabled and it should be clickable', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/student/manage"]').click()
    // cy.get('input[placeholder="Search"]').clear().type(Cypress.env('id')).parent().next().children('i[class="fa fa-search"]').click()
    cy.get('td').contains(Cypress.env('name')).click()
    //cy.get('thead[class="bg-info"]').next().children('tr').find('td:nth-child(4)').find('a').click()
    cy.url().should('include', '/student/manage/edit')
    cy.get('.form-group').contains('label', 'TC Number').next('div').find('input[id="TCNo"]').type('058')
    cy.get('.form-group').contains('label', 'Character').next('div').find('input[name="studCharacter"]').type('good')
    cy.get('.form-group').contains('label', 'Remarks').next('div').find('input[name="Remarks"]').type('behaviour is good')
    cy.get('.form-group').contains('label', 'Applied On').next('div').find('input[name="AppliedOn"]').type('2023-04-03')
    cy.get('.form-group').contains('label', 'Issued On').next('div').find('input[name="IssuedOn"]').type('2023-04-11')
    cy.get('div:contains(Issue TC )').first().within(() => { cy.get('button:contains(Issue TC)').should('be.enabled') })
  })
   it('When user click on disable link, related student details get disabled page', () => {
     cy.visit('/admin')
     cy.get('a[href="/admin/student/manage"]').click()
     cy.get('input[placeholder="Search"]').clear().type(Cypress.env('Student_Id')).parent().next().children('i[class="fa fa-search"]').click()
     cy.get('td').contains(Cypress.env('Student_Id')).parents('tr').last().find('button[type="button"]').click()
   })
   it('When user clcik on orgnisation add link, should navigate to org/add page', () => {
     cy.visit('/admin')
     cy.get('a[href="/admin/org/add"]').click()
     cy.url().should('include', '/org/add')
     cy.get('.panel-heading').should('contain.text', 'Org Details').get('.btn-success').should('be.disabled').should('exist')
     cy.get('.form-group').contains('label', 'Name').next('div').find('input[name="orgName"]').should('exist')
     cy.get('.form-group').contains('label', 'Short Name').next('div').find('input[name="orgShortName"]').next().find('em:contains(6 characters left)').should('exist')
     cy.get('.form-group').contains('label', 'Parent').next('div').find('select[name="parent"]').should('exist')
     cy.get('select[name="owner"]').should('exist')
   })
   it('When user clcik on orgnisation search link, should navigate to Organization manage page', () => {
     cy.visit('/admin')
     cy.get('a[href="/admin/org"]').click()
     cy.url().should('include', '/org')
     cy.get('a:contains(Add New Organization)').should('exist')
     cy.get('input[placeholder="Search"]').should('exist')
   })
   it('When user clcik on Add New Organization link, should navigate to org/add page', () => {
     cy.visit('/admin')
     cy.get('a[href="/admin/org"]').click()
     cy.get('a:contains(Add New Organization)').click()
     cy.get('.panel-heading').should('contain.text', 'Org Details').get('.btn-success').should('be.disabled').should('exist')
     cy.get('.form-group').contains('label', 'Name').next('div').find('input[name="orgName"]').should('exist')
     cy.get('.form-group').contains('label', 'Short Name').next('div').find('input[name="orgShortName"]').next().find('em:contains(6 characters left)').should('exist')
     cy.get('.form-group').contains('label', 'Parent').next('div').find('select[name="parent"]').should('exist')
     cy.get('select[name="owner"]').should('exist')
   })*/
   it('When user clcik on report manager link, should navigate to report/manage page', () => {
     cy.visit('/admin')
     cy.get('a[href="/admin/report/manage"]').click( {force: true})
     cy.url().should('include', '/admin/report/manage')
     cy.get('a:contains(Upload New report)').should('exist')
     cy.get('thead tr th').should('have.length', 6).each((th, index) => cy.wrap(th).should('have.text', ['Name', 'Created On', 'Meta', 'Size', 'Modified On', 'Actions'][index]))
   })
   it('When user clcik on Upload New reportlink, should navigate to Upload New report page', () => {
     cy.visit('/admin')
     cy.get('a[href="/admin/report/manage"]').click( {force: true})
     cy.get('a:contains(Upload New report)').click( {force: true})
     cy.url().should('include', '/admin/report/add')
     cy.get('input[name="title"]').should('exist')
     cy.get('input[name="description"]').should('exist')
     cy.get('[placeholder="No file extension"]').should('exist')
     cy.get('input[placeholder="key"]').should('exist')
     cy.get('input[placeholder="value"]').should('exist')
   })
   it('When user clcik on add report link, should navigate to add report page', () => {
    cy.visit('/admin')
    cy.get('i[title="Add Report"]').click( {force: true})
    cy.url().should('include', '/admin/report/add')
    cy.get('input[name="title"]').should('exist')
    cy.get('input[name="description"]').should('exist')
    cy.get('[placeholder="No file extension"]').should('exist')
    cy.get('input[placeholder="key"]').should('exist')
    cy.get('input[placeholder="value"]').should('exist')
  })/*
   it('When user clcik on Download link, selected template should get download', () => {
     cy.visit('/admin')
     cy.get('a[href="/admin/report/manage"]').click()
     // cy.get('a:contains(sectionwise_report.st)').click()
     cy.contains('tr', Cypress.env('REPORT_NAME')).within(() => {
       cy.get('button').click()
       cy.get('ul').within(() => { cy.get('a:contains(Download)').click() })
     })
   })
   it('When user clcik on disable link, selected template should disabled', () => {
     cy.visit('/admin')
     cy.get('a[href="/admin/report/manage"]').click()
     // cy.get('a:contains(sectionwise_report.st)').click()
     cy.contains('tr', Cypress.env('REPORT_NAME')).within(() => {
       cy.get('button').click()
       cy.get('ul').within(() => { cy.get('a:contains(Disable)').click() })
     })
     cy.contains('tr', Cypress.env('REPORT_NAME')).within(() => {
       cy.get('button').click()
       cy.get('ul').within(() => { cy.get('a:contains(Enable)').click() })
     })
   })
   it('When user clcik on name of report link, should navigate to report details page', () => {
     cy.visit('/admin')
     cy.get('a[href="/admin/report/manage"]').click()
     cy.contains('tr', 'payment_conformation.st').within(() => { cy.contains('a', 'payment_conformation.st').click() })
     cy.url().should('include', '/admin/report/manage/edit')
     cy.get('div:contains(Report Details )').first().within(() => { cy.get('button:contains(Update)').should('exist') })
     cy.get('[name="title"]').should('exist')
     cy.get('[name="description"]').should('exist')
     cy.get('[name="fileName"]').should('exist')
     cy.get('[placeholder="key"]').clear()
   })
   it('When user changes rport details and click on update button , report should get updated', () => {
     cy.visit('/admin')
     cy.get('a[href="/admin/report/manage"]').click()
     cy.contains('tr', 'adjustment_transaction.st').within(() => { cy.contains('a', 'adjustment_transaction.st').click() })
     cy.get('[placeholder="key"]').type('B')
     cy.get('div:contains(Report Details )').first().within(() => { cy.get('button:contains(Update)').click() })
   })*/
  it('When user made changes in student details and click on update button changed details should be saved ', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/student/manage"]').click( {force: true})
    // cy.get('input[placeholder="Search"]').type('250').parent().next().children('i[class="fa fa-search"]').click()
    cy.get('td').contains(Cypress.env('name')).click( {force: true})
    cy.get('input[name="aadharNo"]').clear().type('741258963256')
    cy.get('div:contains(Identity )').first().within(() => { cy.get('button:contains(Update)').should('be.enabled') })
  })
  it('When user go to report upload page, Model section should be exist', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/report/add"]').click( {force: true})
    cy.get('div:contains(Model )').should('be.visible').parent('section').should('exist')
  })
  it('When user go to report upload page, Template section should be exist and it should be clickable', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/report/add"]').click( {force: true})
    // cy.get('div:contains(Template)').click()
    cy.get('div:contains(Model )').parent('section').parent().next().children('div:contains(Template)').click({force: true})
    cy.get('div:contains(Template )').should('be.visible').parent('section').should('exist')
  })
  it('When user go to report upload page, View section should be exist and it should be clickable', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/report/add"]').click( {force: true})
    cy.get('div:contains(Model )').parent('section').parent().next().next().children('div:contains(View)').click({force: true})
    cy.get('div:contains(View )').should('be.visible').parent('section').should('exist').children().find('i[class="fa fa-refresh"]').should('exist')
  })/*
  it('When user enter valid inputs/details in report upload page, and click on save report should save', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/report/add"]').click()
    cy.get('input[name="title"]').type('report_college')
    cy.get('input[name="description"]').type('exam')
    cy.get('input[name="fileName"]').type('college_exam')
    cy.get('button:contains(Save Model)').click()
    cy.get('button:contains(Save Template)').click()
  })*/
  it('when user click on calender link, should navigate to Calendar Report page successfully ', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/calendarReport"]').click( {force: true})
    cy.url().should('include', '/calendarReport')
    cy.get('button[title="Download As PDF"]').should('be.enabled')
    cy.get('button[title="Print"]').should('be.enabled')
    cy.contains('Report Header').should('be.visible')
    cy.contains('Page Header').should('be.visible')
    cy.contains('Page Header On Each Page').should('be.visible')
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')
  })
  it('When user click on Summary report  link in admin page , user navigate to summaryReport page', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/summaryReport"]').click( {force: true})
    cy.url().should('include', '/admin/summaryReport')
    cy.get("h4 small a").should("have.text", "Admin");
    cy.get("h4 strong").should("have.text", " Institutes Summary ");
    cy.get('button[title="Download As PDF"]').should('be.enabled')
    cy.get('button[title="Print"]').should('be.enabled')
    cy.contains('Report Header').should('be.visible')
    cy.contains('Page Header').should('be.visible')
    cy.contains('Page Header On Each Page').should('be.visible')
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')
  })
  it('When user click on Upcoming events link in admin page , user navigate to upcomingEventsAdminReport page', () => {
    cy.visit('/admin')
    cy.get('a:contains(Upcoming events )').click( {force: true})
    cy.url().should('include', '/admin/upcomingEventsAdminReport')
    cy.get("h4 small a").should("have.text", "Admin");
    cy.get("h4 strong").should("have.text", " Upcoming Events");
    cy.get('button[title="Download As PDF"]').should('be.enabled')
    cy.get('button[title="Print"]').should('be.enabled')
    cy.contains('Report Header').should('be.visible')
    cy.contains('Page Header').should('be.visible')
    cy.contains('Page Header On Each Page').should('be.visible')
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')
  })
  it('When user click on Courses Offered link, should navigate to courseList Report page and should able to download report', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/courseListReport"]').click( {force: true})
    cy.url().should('include', '/admin/courseListReport')
    cy.get('h4').should('contain.text', 'Admin Course List')
    cy.get('i[class="fa fa-file-pdf-o"]').should('exist')
    cy.get('button[title="Download As PDF"]').should('be.enabled')
    cy.get('button[title="Print"]').should('be.enabled')
    cy.contains('Report Header').should('be.visible')
    cy.contains('Page Header').should('be.visible')
    cy.contains('Page Header On Each Page').should('be.visible')
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')
  })
  it('When user click on Consolidated Report link, should navigate to the Receipts Consolidated Report page and should able to download the report', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/receiptConsolidatedReport"]').click( {force: true})
    cy.url().should('include', '/admin/receiptConsolidatedReport')
    cy.get('h4').should('contain.text', 'Admin Receipts Consolidated Report')
    cy.get('label:contains(Range : )').should('be.visible').next().children('select').find('option').should('have.length', 3).then((options) => {
      const optionValues = ['monthly', 'quarterly', 'annual']
      options.each((i, option) => {
        expect(option.value).to.equal(optionValues[i])
      })
    })
    cy.get('label:contains(Range : )').should('be.visible').next().children('select').select('Monthly').parent().next().children('select').find('option').should('have.length', 12).then((options) => {
      const optionValues = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      options.each((i, option) => {
        expect(option.text).to.equal(optionValues[i])
      })
    })
    cy.get('label:contains(Range : )').should('be.visible').next().children('select').select('Quarterly').parent().next().children('select').find('option').should('have.length', 4).then((options) => {
      const optionValues = ['January - March', 'April - June', 'July - September', 'October - December']
      options.each((i, option) => {
        expect(option.text).to.equal(optionValues[i])
      })
    })
    cy.get('label:contains(Range : )').should('be.visible').next().children('select').select('Annual').parent().next().children('select').find('option').should('have.length', 4).then((options) => {
      const optionValues = ['2022-2023', '2021-2022', '2020-2021', '2019-2020']
      options.each((i, option) => {
        expect(option.text).to.equal(optionValues[i])
      })
    })
    cy.get('button[title="Download As PDF"]').should('be.enabled')
    cy.get('button[title="Print"]').should('be.enabled')
    cy.contains('Report Header').should('be.visible')
    cy.contains('Page Header').should('be.visible')
    cy.contains('Page Header On Each Page').should('be.visible')
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')
  })
  it('When user click on Students Coursewise Breakup link, should navigate to coursewise Breakup Report page and should able to download report', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/coursewiseBreakupReport"]').click( {force: true})
    cy.url().should('include', '/admin/coursewiseBreakupReport')
    cy.get('h4').should('contain.text', 'Admin Coursewise Students Breakup')
    cy.get('span:contains(Course : )').should('be.visible').next('select').select('I')
    cy.get('button[title="Download As PDF"]').should('be.enabled')
    cy.get('button[title="Print"]').should('be.enabled')
    cy.contains('Report Header').should('be.visible')
    cy.contains('Page Header').should('be.visible')
    cy.contains('Page Header On Each Page').should('be.visible')
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')
  })
  it('When user click on Student Details link, should navigate to student Details Report page and should able to download report', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/studentDetailsReport"]').click( {force: true})
    cy.wait(2000)
    cy.url().should('include', '/admin/studentDetailsReport')
    cy.get('h4').should('contain.text', 'Admin Student Details')
    cy.get('span:contains(Course : )').should('be.visible').next('select').select('I')
    cy.get('button[title="Download As PDF"]').should('be.enabled')
    cy.get('button[title="Print"]').should('be.enabled')
    cy.contains('Report Header').should('be.visible')
    cy.contains('Page Header').should('be.visible')
    cy.contains('Page Header On Each Page').should('be.visible')
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')
  })
  it('When user click on Students Sectionwise Breakup link, should navigate to sectionwise Breakup Report page and should able to download report', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/sectionwiseBreakupReport"]').click( {force: true})
    cy.url().should('include', '/admin/sectionwiseBreakupReport')
    cy.get('h4').should('contain.text', 'Admin Sectionwise Students Breakup')
    cy.get('span:contains(Course : )').should('be.visible').next('select').select('I A')
    cy.get('button[title="Download As PDF"]').should('be.enabled')
    cy.get('button[title="Print"]').should('be.enabled')
    cy.contains('Report Header').should('be.visible')
    cy.contains('Page Header').should('be.visible')
    cy.contains('Page Header On Each Page').should('be.visible')
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')
  })
  it('When user click on Students Basic Sectionwise Breakup link, should navigate to basic Sectionwise Breakup Report page and should able to download report', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/basicSectionwiseBreakupReport"]').click( {force: true})
    cy.url().should('include', '/admin/basicSectionwiseBreakupReport')
    cy.get('h4').should('contain.text', 'Admin Sectionwise Students Breakup')
    cy.get('span:contains(Course : )').should('be.visible').next('select').select('I A')
    cy.get('span:contains(New Admissions Only)').prev('input[type="checkbox"]').check()
    cy.get('button[title="Download As PDF"]').should('be.enabled')
    cy.get('button[title="Print"]').should('be.enabled')
    cy.contains('Report Header').should('be.visible')
    cy.contains('Page Header').should('be.visible')
    cy.contains('Page Header On Each Page').should('be.visible')
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')
  })
  it('When user click on Students Parent Details link, should navigate to sectionwise Parent Details Report page and should able to download report', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/sectionwiseParentDetailsReport"]').click( {force: true})
    cy.url().should('include', '/admin/sectionwiseParentDetailsReport')
    cy.get('h4').should('contain.text', 'Admin Students Parent Details')
    cy.get('span:contains(Course : )').should('be.visible').next('select').select('I A')
    cy.get('button[title="Download As PDF"]').should('be.enabled')
    cy.get('button[title="Print"]').should('be.enabled')
    cy.contains('Report Header').should('be.visible')
    cy.contains('Page Header').should('be.visible')
    cy.contains('Page Header On Each Page').should('be.visible')
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')
  })
  it('When user click on New Admissions Report link, should navigate to new Admissions Report page and should able to download report', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/newAdmissionsReport"]').click()
    cy.url().should('include', '/admin/newAdmissionsReport')
    cy.get('h4').should('contain.text', 'Admin New Admissions')
    cy.get('button[title="Download As PDF"]').should('be.enabled')
    cy.get('button[title="Print"]').should('be.enabled')
    cy.contains('Report Header').should('be.visible')
    cy.contains('Page Header').should('be.visible')
    cy.contains('Page Header On Each Page').should('be.visible')
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')
  })
  it('When user click on User access report link, should navigate to users Report page and should able to download report', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/usersReport"]').click( {force: true})
    cy.url().should('include', '/admin/usersReport')
    cy.get('h4').should('contain.text', 'Admin Users Report')
    cy.get('button[title="Download As PDF"]').should('be.enabled')
    cy.get('button[title="Print"]').should('be.enabled')
    cy.contains('Report Header').should('be.visible')
    cy.contains('Page Header').should('be.visible')
    cy.contains('Page Header On Each Page').should('be.visible')
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')
  })
  it('When user click on TC Students List link, should navigate to TC Students List page and should able to download report', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/tcStudentsList"]').click( {force: true})
    cy.url().should('include', '/admin/tcStudentsList')
    cy.get('h4').should('contain.text', 'Admin TC Students List')
    cy.get('button[title="Download As PDF"]').should('be.enabled')
    cy.get('button[title="Print"]').should('be.enabled')
    cy.contains('Report Header').should('be.visible')
    cy.contains('Page Header').should('be.visible')
    cy.contains('Page Header On Each Page').should('be.visible')
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')
  })
  it('When user click on Data templates , user should navigate to Data manage page ', () => {
    cy.visit('/admin')
    cy.get('i[title="Data Templates"]').click( {force: true})
    cy.url().should('include', '/admin/data/manage')
    cy.get('h3').should('contain.text', 'AdminData')
    cy.get('input[placeholder="Search"]').should('exist').parent().next().children('i[class="fa fa-search"]').should('exist')
    cy.get('thead').find('th').should('have.length', 3).each(($th, index) => expect($th).to.contain(['Title', 'Description', 'Download'][index]))
  })
  it('When user click on With data link, A CSV file with the name same as the title should get downloaded', () => {
    cy.visit('/admin')
    cy.get('i[title="Data Templates"]').click( {force: true})
    cy.get('td:contains(Library)').next().next().find('a:contains(Without data)').click( {force: true})
   // cy.verifyDownload('Library.csv', { contains: true })
  })
  it('When user click on Without data link, A CSV file with the name same as the title should get downloaded', () => {
    cy.visit('/admin')
    cy.get('i[title="Data Templates"]').click( {force: true})
    cy.get('td:contains(Library)').next().next().next().find('a:contains(With data)').click( {force: true})
    //cy.verifyDownload('Library.csv', { contains: true })
  })
  it('Verify back button in course feature', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/course/add"]').click( {force: true})  // course add link
    cy.url().should('include', 'course/add')  // verify course add page
    cy.contains('Back').should('exist').click( {force: true})   // click on back button based on text 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')  // verify that we are in admin page after click on back button
    cy.get('a[href="/admin/course/manage"]').click( {force: true}) // course manage link
    cy.get('a:contains(Add New Course)').click( {force: true})  // verify that we are in course manage page after click on back button
    cy.contains('Back').should('exist').click({force: true})
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/course/manage') // verify that we are in course manage page
    cy.get('a:contains(Name)').parents('thead').next('tbody').children('tr').first().find('a:contains(I )').click()  // click on course name
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/course/manage/edit')  // verify course edit page
    cy.contains('Back').should('exist').click({force: true}) 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/course/manage') // verify that we are in course manage page after click on back button
    cy.get('a:contains(Name)').parents('thead').next('tbody').children('tr').first().find('a:contains(Terms)').click()  //click on terms link in course manage page
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/course/manageTerms')   // verify terms manage page
    cy.get('a:contains(Add New Term)').click({force: true})
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/course/addTerm')  // verify terms add page
    cy.contains('Back').should('exist').click({force: true})   
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/course/manageTerms')  // verify terms manage page
    cy.get('th:contains(Name)').parents('thead').next('tbody').children('tr').first().find('a:contains(Annual)').click({force: true}) // click on term name
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/course/editTerm')  // verify term edit page
    cy.contains('Back').should('exist').click({force: true})  // click back button
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/course/manageTerms')  // verify terms manage page
    cy.contains('Back').should('exist').click({force: true})
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/course/manage') // verify that we are in course manage page
    cy.get('a:contains(Name)').parents('thead').next('tbody').children('tr').first().find('a:contains(Copy As)').click({force: true})  //click on copy AS link in course manage page
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/course/manage/copy')
    cy.contains('Back').should('exist').click({force: true})      // click back button
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/course/manage') // verify that we are in course manage page
    cy.contains('Back').should('exist').click({force: true})      // click on back button 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')  // verify that we are in admin page after click on back button
  })
  it('Verify back button in Data feature', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/data/manage"]').click({force: true})    // data manage link
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/data/manage')  // verify data manage page
    cy.contains('Back').should('exist').click({force: true})     // click on back button based on text 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')  // verify that we are in admin page after click on back button
  })
  it('Verify back button in Institute feature', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/inst/add"]').click({force: true})  
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst/add')  
    cy.contains('Back').should('exist').click({force: true})   
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')  
    cy.get('a[href="/admin/inst"]').click({force: true})  
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst')
    cy.get('a:contains(Manage Personas & Permissions )').click({force: true})  // click on Manage Personas & Permissions link
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst/persona')  // verify Manage Personas page
    cy.get('a:contains(Add New Persona)').click({force: true})          // click on Add New Persona link in Manage Personas page
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst/persona/add')    // verify add Personas page
    cy.contains('Back').should('exist').click({force: true})  // click on back button 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst/persona') 
    cy.get('a:contains(Title)').parents('thead').next('tbody').children('tr').first().find('a:contains(Dev )').click({force: true}) 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst/persona/edit') 
    cy.contains('Back').should('exist').click({force: true})  // click on back button 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst/persona')  // verify Manage Personas page
    cy.get('a:contains(Title)').parents('thead').next('tbody').children('tr').first().find('a:contains(Permissions)').click({force: true}) 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst/persona/permissions') 
    cy.contains('Back').should('exist').click({force: true}) 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst/persona')  // verify Manage Personas page
    cy.contains('Back').should('exist').click({force: true})     // click back button 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst')   // verify institute Manage page
    cy.get('a:contains(Manage Users (People who can log into institute) )').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst/user')  
    cy.get('a:contains(Add New User)').click({force: true})
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst/user/add')  // verify user add page
    cy.contains('Back').should('exist').click({force: true})   
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst/user') 
    cy.contains('Back').should('exist').click({force: true}) 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst')
    cy.get('a:contains(Manage Finance )').click({force: true})
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst/finance')
    cy.contains('Back').should('exist').click({force: true}) 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/inst')
    cy.contains('Back').should('exist').click({force: true}) 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')  
   })
   it('Verify back button in Student feature', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/student/add"]').click({force: true})    
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/student/add')  
    cy.click_Back_Button()   
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')  
    cy.get('a[href="/admin/student/manage"]').click({force: true})  
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/student/manage') 
    cy.get('a:contains(Enrol New Student)').click({force: true})                           // click on Enrol New Student link in student manage page
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/student/add')  // verify student add page
    cy.click_Back_Button()    
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/student/manage') // verify student manage page
    cy.contains(Cypress.env('studentName')).click({force: true})                           // click on student name
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/student/manage/edit')  // verify student details edit page
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/student/manage')    
    cy.contains(Cypress.env('studentName')).parents('tr').last().find('a[title="Parent Details"]').click({force: true})   // click on parent details icon in student manage page
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/student/manage/parentDetails')   //  verify student parent details edit page
    cy.click_Back_Button()  
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/student/manage')                   // verify student manage page
    cy.contains(Cypress.env('studentName')).parents('tr').last().find('a[title="Report Card"]').click({force: true})   // click on report card icon
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/student/manage/reportCard')  
    cy.click_Back_Button()  
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/student/manage')   
    cy.contains(Cypress.env('studentName')).parents('tr').last().find('a[title="Send Email"]').click({force: true}) 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/student/manage/sendEmail')  
    cy.click_Back_Button()  
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/student/manage')      // verify student manage page
    cy.click_Back_Button()  
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')                       // verify admin page 
  })
  it('Verify back button in Report feature', () => {
    cy.visit('/admin')
    cy.get('a[href="/admin/report/add"]').click({force: true})  
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/report/add')  
    cy.click_Back_Button()     
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')  
    cy.get('a[href="/admin/report/manage"]').click({force: true})  
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/report/manage')  
    cy.get('a:contains(Upload New report)').click({force: true})  
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/report/add')  
    cy.click_Back_Button()     
    cy.contains(Cypress.env('Report')).click({force: true}) 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/report/manage/edit')  
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin/report/manage')  
    cy.click_Back_Button() 
    cy.url().should('eq', Cypress.config().baseUrl + '/admin')
  })

})