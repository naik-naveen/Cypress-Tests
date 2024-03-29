describe('Connect feature Test', () => {
    const un = Cypress.env('USERNAME')
    const pwd = Cypress.env('PASSWORD')
    beforeEach(() => {
        cy.connect_login(un, pwd)
    })
    it('should navigate to connect page successfully ', () => {
        cy.visit('/connect')
        cy.url().should('include', '/connect')
        cy.get('a[href="/ctng4/connect/contactLookup"]').should('exist')
        cy.get('a[href="/ctng4/connect/notifications"]').should('exist')
    })
    it('When user click on contact add link , should navigate to contactLookup page', () => {
        cy.visit('/connect')
        cy.get('i[title="Lookup Contacts"]').click()
        cy.url().should('include', '/contactLookup')
        cy.contains('Contact Lookup').should('be.visible')
        cy.contains('Enter Mobiles / Emails :').should('be.visible')
        cy.get('textarea[placeholder="Can enter multiple values separated by comma / line"]').should('exist')
        cy.get('button[class="btn btn-xs btn-success"]').should('contain', 'Lookup')
        cy.get('button[class="btn btn-xs btn-danger"]').should('contain', 'Block Contacts')
        cy.get('button[class="btn btn-xs btn-success"]').should('be.disabled')
        cy.get('button[class="btn btn-xs btn-danger"]').should('be.disabled')
    })
    it('When user enter input in textarea field Lookup and Block Contact button Should be enabled', () => {
        cy.visit('/connect')
        cy.get('i[title="Lookup Contacts"]').click()
        cy.get('textarea[placeholder="Can enter multiple values separated by comma / line"]').type(Cypress.env('USERNAME'))
        cy.get('button[class="btn btn-xs btn-success"]').should('be.enabled')
        cy.get('button[class="btn btn-xs btn-danger"]').should('be.enabled')
    })
    it('When user click on Email/manage link, should navigate to manageEmail page', () => {
        cy.visit('/connect')
        cy.get('a[href="/ctng4/connect/manageEmail"]').click()
        cy.url().should('include', '/manageEmail')
        cy.get('input[placeholder="Search by: subject or date (yyyy-mm-dd)"]').should('exist')
        cy.get('a[href="/connect/newEmail"]').should('exist')
        cy.get('div[class="input-group pager shadow"]').should('exist')
    })
    it('When user enter subject of Email and click on search, related email details should display', () => {
        cy.visit('/connect')
        cy.get('a[href="/ctng4/connect/manageEmail"]').click()
        cy.get('input[placeholder="Search by: subject or date (yyyy-mm-dd)"]').type('from btl')
        cy.get('i[class="fa fa-search"]').click()
    })
    it('When user enter date of Email in textfield and click on search, related email details should display', () => {
        cy.visit('/connect')
        cy.get('a[href="/ctng4/connect/manageEmail"]').click()
        cy.get('input[placeholder="Search by: subject or date (yyyy-mm-dd)"]').type('2023-03-30')
        cy.get('i[class="fa fa-search"]').click()
    })/*
    it('When user click on New Message link, should navigate to newEmail page', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageEmail"]').click()
        cy.get('a[href="/connect/newEmail"]').click()
        cy.url().should('include', '/newEmail')
    })
    it('When user click on Resend link, should navigate to newEmail page', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageEmail"]').click()
        // cy.contains('td', 'Test email').parent('tr').within(() => { cy.get('a:contains(Resend)').click() })
        cy.get('th:contains(Date Sent)').parent().parent().siblings().get('tr').first().get('td').last().find('a:contains(Resend)').click()
        cy.url().should('include', '/connect/newEmail')
    })
    it('When user click on Email/add link, should navigate to newEmail page', () => {
        cy.visit('/connect')
        cy.get('i[title="Send new Email"]').click()
        cy.url().should('include', '/newEmail')
        cy.get('div.col-md-3 strong').should('contain.text', 'Type');
        cy.get('div.col-md-3 strong').should('contain.text', 'From');
        cy.get('div.col-md-3 strong').should('contain.text', 'Subject');
        cy.get('div.col-md-4 strong').should('contain.text', 'Attachments(Optional)');
        cy.get('div.col-md-3 strong').should('contain.text', 'Body');
        cy.get('div.col-md-3 strong').should('contain.text', 'To');
        cy.get('div.col-md-3 strong').should('contain.text', 'SMS(Optional)');
        cy.get('div.col-md-3 strong').should('contain.text', 'Send');
        cy.screenshot()
    })
    it('When user click on Type , dropdown should visible and user should able to select option', () => {
        cy.visit('/connect')
        cy.get('i[title="Send new Email"]').click()
        cy.contains('div', 'Type').parent().find('i.fa.fa-chevron-down').should('be.visible').click()
        cy.get('select').should('have.value', 'Generic')
    })
    it('When user click on From , textfield which have value support@campustrack.net should be visible and it should be disabled ', () => {
        cy.visit('/connect')
        cy.get('i[title="Send new Email"]').click()
        cy.contains('div', 'From').parent().find('i.fa.fa-chevron-down').should('be.visible').click()
        cy.get('input[name="from"]').should('be.disabled').and('have.value', 'support@campustrack.net')
    })
    it('When user click on Subject , Subject text field should be exist and it should be enabled', () => {
        cy.visit('/connect')
        cy.get('i[title="Send new Email"]').click()
        cy.contains('div', 'Subject').parent().find('i.fa.fa-chevron-down').should('be.visible').click()
        cy.get('input[placeholder="Subject"]').should('exist')
    })
    it('When user click on Body , Textarea field should be exist and mail header shold be visble', () => {
        cy.visit('/connect')
        cy.get('i[title="Send new Email"]').click()
        cy.contains('div', 'Body ').parent().find('i.fa.fa-chevron-down').should('be.visible').click()
        cy.get('textarea[class="ace_text-input"]').should('exist')
        cy.contains('div', 'Body ').within(() => { cy.get('input[type="checkbox"]').should('be.checked') })
        cy.contains('Dear Parent / Guardian,')
        cy.contains('Thank You.')
        cy.contains('Principal.')
        cy.contains('BTL College')
        cy.contains('BSK II Stage')
        cy.contains('Bangalore')
        cy.get('img[alt="BTL Logo"]').should('be.visible')
    })
    it('When user click on To , Textarea field and search text field should exist', () => {
        cy.visit('/connect')
        cy.get('i[title="Send new Email"]').click()
        cy.contains('div', 'To').parent().find('i.fa.fa-chevron-down').should('be.visible').click()
        cy.get('input[placeholder="search"]').should('exist')
        cy.get('div.col-md-4.pull-right input[type="checkbox"]').next('span').should('have.text', 'Send a Copy to myself')
        cy.get('textarea').should('exist')
    })
    it('When user click on Attachments , Choose file input should be visible', () => {
        cy.visit('/connect')
        cy.get('i[title="Send new Email"]').click()
        cy.contains('div', 'Attachments(Optional)').parent().find('i.fa.fa-chevron-down').should('be.visible').click()
        cy.contains('p', 'Select file(s) to attach (500Kb limit). If it\'s new file then upload & then select').should('be.visible')
        cy.get('div.col-md-6').should('contain.text', 'Only PDF allowed for upload').should('contain.text', 'File size should not exceed 500KB').find('input[type="file"]').should('exist')
    })
    it('When user click on SMS , Message Textarea field should exist', () => {
        cy.visit('/connect')
        cy.get('i[title="Send new Email"]').click()
        cy.contains('div', 'SMS(Optional)').parent().find('i.fa.fa-chevron-down').should('be.visible').click()
        cy.get('div[style*="background-color: orange"] strong').should('contain', 'Message')
        cy.get('textarea').should('exist')
        cy.get('form[name="form"] textarea[name="smsMsg"]').should('be.visible')
        cy.get('form[name="form"] span:first-of-type em').should('have.text', '0 characters used')
        cy.get('form[name="form"] span:last-of-type em').should('have.text', '0 SMS Credit')
    })
    it('When user enter all valid input in all fields and click on Send Email button , Email should sent to Recipients and user should navigate to email manage page', () => {
        cy.visit('/connect')
        cy.get('i[title="Send new Email"]').click()
        cy.contains('div', 'Type').parent().find('i.fa.fa-chevron-down').should('be.visible').click()
        cy.get('select').should('have.value', 'Generic')
        cy.contains('div', 'Subject').parent().find('i.fa.fa-chevron-down').should('be.visible').click()
        cy.get('input[placeholder="Subject"]').type('REPORT')
        cy.contains('div', 'To').parent().find('i.fa.fa-chevron-down').should('be.visible').click()
        cy.get('textarea').type(Cypress.env('USERNAME'))
        cy.contains('div', 'To').parent().find('i.fa.fa-chevron-up').should('be.visible').click()
        cy.contains('div', 'Send').parent('div').find('i.fa.fa-chevron-down').should('be.visible').click()
        //cy.contains('Send').parent('div').find('.fa-chevron-down').click()
        cy.get('button:contains(Send Email)').click()
        cy.url().should('include', '/connect/manageEmail')
    })
    it('When user click on SMS/manage link, should navigate to manageSMS page', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageSMS"]').click()
        cy.url().should('include', '/manageSMS')
        cy.get('a:contains(New Message)').should('exist').should('be.visible')
        cy.get('input[type="search"]').should('exist').parent().next().children('i[class="fa fa-search"]').should('be.visible').should('exist')
        cy.get('table[class="table table-bordered table-condensed"]').children('thead').children('tr').each((index, element) => {
            const expectedHeader = ['Date', 'Message', 'Total Credits', 'Recipients ', 'SMS Credits', 'Actions']
            expect(element.textContent).to.equal(expectedHeader[index])
        })
    })
    it('When user click on Show selected receipts link, selected receipts should dispaly ', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageSMS"]').click()
        cy.get('a:contains(New Message)').click()
        cy.get('strong:contains(Recipients (Manual))').should('be.visible').parents('div').siblings().find('textarea').type('9743271351')
        cy.get('tree-node-content').contains('Parent').parent('tree-node-content').parent('div').siblings('tree-node-checkbox').find('input[type="checkbox"]').check()
        cy.get('a:contains(Show Selected Recipients)').click({ multiple: true })
        cy.contains('Recipients (Auto) :').should('be.visible')
        cy.get('span:contains("Parent : All")').should('be.visible')
    })
    it('When user click on Review & Send button, user should navigate to reviewSendSMS page  ', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageSMS"]').click()
        cy.get('a:contains(New Message)').click()
        cy.get('strong:contains(Recipients (Manual))').should('be.visible').parents('div').siblings().find('textarea').type('9743271351')
        cy.get('tree-node-content').contains('Parent').parent('tree-node-content').parent('div').siblings('tree-node-checkbox').find('input[type="checkbox"]').check()
        cy.get('a:contains(Show Selected Recipients)').click({ multiple: true })
        cy.get('button:contains(Review & Send)').click()
        cy.url().should('include', '/connect/reviewSendSMS')
    })
    it('When user click on Resend link, Sms Should resend', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageSMS"]').click()
        cy.contains('tr', Cypress.env('message')).contains('Resend').click()
    })
    it('When user click on Send new SMS link, Should navigate to newSMS page', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/newSMS"]').click()
        cy.get('.orange-bg').should('exist')
        cy.contains('Message').should('exist')
        cy.contains('SMS Credits Table').should('exist')
        cy.get('textarea[name="smsMsg"]').should('exist')
        cy.get('textarea[name="smsMsg"]').should('have.attr', 'maxlength', '459')
        cy.get('span.pull-right').contains('1 SMS Credit').should('exist')
        cy.get('div.bg-info').should('exist')
    })
    it('When user click on Show selected receipts link, selected receipts should dispaly ', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/newSMS"]').click()
        cy.get('strong:contains(Recipients (Manual))').should('be.visible').parents('div').siblings().find('textarea').type('9743271351')
        cy.get('tree-node-content').contains('Parent').parent('tree-node-content').parent('div').siblings('tree-node-checkbox').find('input[type="checkbox"]').check()
        cy.get('a:contains(Show Selected Recipients)').click({ multiple: true })
        cy.contains('Recipients (Auto) :').should('be.visible')
        cy.get('span:contains("Parent : All")').should('be.visible')
    })
    it('When user click on Review & Send button, user should navigate to reviewSendSMS page  ', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/newSMS"]').click()
        cy.get('strong:contains(Recipients (Manual))').should('be.visible').parents('div').siblings().find('textarea').type('9743271351')
        cy.get('tree-node-content').contains('Parent').parent('tree-node-content').parent('div').siblings('tree-node-checkbox').find('input[type="checkbox"]').check()
        cy.get('a:contains(Show Selected Recipients)').click({ multiple: true })
        cy.get('button:contains(Review & Send)').click()
        cy.url().should('include', '/connect/reviewSendSMS')
    })
    it('When user click on view Report link, SMS Delivery Report pop shoud display', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageSMS"]').click()
        cy.contains('tr', Cypress.env('message')).contains('View Report').click()
        cy.window().then((win) => { cy.stub(win, 'alert').as('popup') })
        cy.get('h4:contains(SMS Delivery Report)').should('be.visible')
        cy.get('input[placeholder="Search"]').should('exist')
        cy.get('div[class="modal-body"]').children('table').children('thead').children('tr').within(() => {
            cy.contains('td', 'Sl No').should('be.visible')
            cy.contains('td', 'Student Name').should('be.visible')
            cy.contains('td', 'Course').should('be.visible')
            cy.contains('td', 'Mobile (S)').should('be.visible')
            cy.contains('td', 'Mobile (F)').should('be.visible')
            cy.contains('td', 'Mobile (M)').should('be.visible')
            cy.contains('td', 'Mobile (G)').should('exist')
        })
        cy.get('span:contains(×)').click()
    })
    /*it.only('When user click on Send button, SMS should sent to selectrd recipient', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/newSMS"]').click()
        cy.get('strong:contains(Recipients (Manual))').should('be.visible').parents('div').siblings().find('textarea').type('9743271351')
        cy.get('tree-node-content').contains('Parent').parent('tree-node-content').parent('div').siblings('tree-node-checkbox').find('input[type="checkbox"]').check()   
        cy.get('a:contains(Show Selected Recipients)').click({ multiple: true })
        cy.get('button:contains(Review & Send)').click()
        cy.get('a:contains(Show Recipients :)').should('be.visible').click()
        cy.get('a:contains(Hide Recipients)').should('be.visible')
        cy.get('button:contains(Send)').click()
    })
    it('When user click on notification link, should navigate to notifications page', () => {
        cy.visit('/connect')
        cy.get('span:contains(Notification)').next().find('span').first().find('a[href="/connect/notifications"]').click()
        cy.url().should('include', '/connect/notifications')
        cy.get('h3').should('contain.text', 'ConnectNotifications')
        cy.get('table[class="table table-bordered table-striped"]').children('thead').children('tr').each((index, element) => {
            const expectedHeader = ['Date', 'From', 'Type', 'Title', 'Expiry', 'Status']
            expect(element.textContent).to.equal(expectedHeader[index])
        })
    })
    it('When user click on Schedule Meeting link, should navigate to ScheduleMeeting page', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/msTeams/scheduleMeeting"]').click()
        cy.get('h3').should('contain.text', 'ConnectMeetingsSchedule')
        cy.url().should('include', '/connect/msTeams/scheduleMeeting')
        cy.get('span:contains(Subject)').should('be.visible')
        const toDate = new Date();
        const month = toDate.getMonth() - 3;
        const newDate = new Date(toDate.setMonth(month))
        const date = newDate.toString()
        cy.get('td:contains(Meeting On)').should('be.visible').next().children('input[name="reportFromDate"]').should('exist').clear().type(date)
    })
    it('When user click on New Message link, should navigate to Should navigate to newSMS page page', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageSMS"]').click()
        cy.url().should('include', '/manageSMS')
        cy.get('a:contains(New Message)').click()
        cy.get('.orange-bg').should('exist')
        cy.contains('Message').should('exist')
        cy.contains('SMS Credits Table').should('exist')
        cy.get('textarea[name="smsMsg"]').should('exist')
        cy.get('textarea[name="smsMsg"]').should('have.attr', 'maxlength', '459')
        //cy.get('textarea[name="smsMsg"]').should('be.required')
        cy.get('span.pull-right').contains('1 SMS Credit').should('exist')
        cy.get('div.bg-info').should('exist')
    })
    it('When user click on Manage SMS Templates link, Should navigate to manageSMSTemplate page', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageSMSTemplate"]').click()
        cy.url().should('include', 'connect/manageSMSTemplate')
        cy.get('h3').should('contain.text', 'ConnectSMS Template')
        cy.get('a:contains(New SMS Template)').should('be.visible').should('exist')
        cy.get('a:contains(New SMS Template)').next().children('label').get('span:contains(Approved)').should('be.visible').parent().prev('input[type="radio"]').should('be.checked')
        cy.get('a:contains(New SMS Template)').next().next().children('label').get('span:contains(Pending)').should('be.visible').parent().prev('input[type="radio"]').should('not.be.checked')
        cy.get('a:contains(New SMS Template)').next().next().next().children('label').get('span:contains(Disapproved)').should('be.visible').parent().prev('input[type="radio"]').should('not.be.checked')
        cy.get('table[class="table table-bordered table-condensed"]').children('thead').children('tr').each((index, element) => {
            const expectedHeader = ['Length', 'Total Credits', 'Status', 'Actions']
            expect(element.textContent).to.equal(expectedHeader[index])
        })
    })
    it('When user click on New SMS Template link,Message textarea should display', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageSMSTemplate"]').click()
        cy.url().should('include', 'connect/manageSMSTemplate')
        cy.get('a:contains(New SMS Template)').click()
        cy.get('.orange-bg').should('exist')
        cy.contains('Message').should('exist')
        cy.contains('SMS Credits Table').should('exist')
        cy.get('textarea[name="smsMsg"]').should('exist')
        cy.get('textarea[name="smsMsg"]').should('have.attr', 'maxlength', '459')
        cy.get('span').contains('0 characters used').should('exist')
        cy.get('span.pull-right').contains('0 SMS Credit').should('exist')
        cy.get('div.bg-info').should('exist')
        cy.get('button:contains(Cancel)').should('be.enabled').should('exist')
        cy.get('button:contains(Request Approval)').should('be.disabled').should('exist')
    })
    it('When user type message template in textarea,Request Approval button should get enabled and template should forward to aproval', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageSMSTemplate"]').click()
        cy.url().should('include', 'connect/manageSMSTemplate')
        cy.get('a:contains(New SMS Template)').click()
        cy.get('textarea[name="smsMsg"]').type(Cypress.env('Template'))
        cy.get('button:contains(Request Approval)').click()
        cy.get('a:contains(New SMS Template)').next().next().children('label').get('span:contains(Pending)').should('be.visible').parent().prev('input[type="radio"]').should('be.checked')
    })
    it('When user click on Approve / Disapprove ,Approval / Disapproval pop should dispaly and when user click on approve button template should added', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageSMSTemplate"]').click()
        cy.url().should('include', 'connect/manageSMSTemplate')
        cy.get('a:contains(New SMS Template)').next().next().children('label').get('span:contains(Pending)').should('be.visible').parent().prev('input[type="radio"]').check()
        cy.get('table[class="table table-bordered table-condensed"]').children('tbody').get('tr').first().get('td').last().find('i[class="fa fa-edit"]').click().parent().next().find('a:contains(Approve / Disapprove)').click()
        cy.window().then((win) => { cy.stub(win, 'alert').as('popup') })
        cy.get('label:contains(Promotional)').prev('input[type="radio"]').should('exist')
        cy.get('button:contains(Disapprove)').should('exist')
        cy.get('label:contains(Transactional)').prev('input[type="radio"]').check()
        cy.get('label:contains(No Typos)').should('be.visible').prev('input[type="checkbox"]')
        cy.get('label:contains(Gramatically Correct)').should('be.visible').prev('input[type="checkbox"]')
        cy.get('label:contains(Politically Correct)').should('be.visible').prev('input[type="checkbox"]')
        cy.get('button:contains(Approve)').click()
    })
    it('When use click on disable link, selected Template should get disabled', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageSMSTemplate"]').click()
        cy.url().should('include', 'connect/manageSMSTemplate')
        cy.contains('td', 'Hello').parent().last().find('i[class="fa fa-edit"]').click()
        cy.contains('td', 'Hello').parent().last().find('a:contains(Disable)').should('be.visible').click()
    })
    it('When use click on Enable link, selected Template should get Enabled', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageSMSTemplate"]').click()
        cy.url().should('include', 'connect/manageSMSTemplate')
        cy.contains('td', 'Hello').parent().last().find('i[class="fa fa-edit"]').click()
        cy.contains('td', 'Hello').parent().last().find('a:contains(Enable)').click()
        cy.contains('td', 'Hello').parent().find('td:contains(Active)').should('be.visible')
    })
    it('When use click on Subcription manage link, should navigate to subcription manage page', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageSubscriptions"]').click()
        cy.url().should('include', '/manageSubscriptions')
        cy.get('h3').should('contain.text', 'ConnectSubscriptionsManage')
        cy.get('thead th').each((header, index) => {
            cy.wrap(header).invoke('text').then(text => {
                expect(text.trim()).to.equal(getExpectedHeading(index))
            })
        })
        function getExpectedHeading(index) {
            switch (index) {
                case 0: return 'Base'
                case 1: return 'Topic'
                case 2: return 'Friendly Name'
                case 3: return 'Description'
                case 4: return 'Actions'
                default: return ''
            }
        }
    })
    it('When use click on topic manage link, should navigate to topic manage page', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/manageTopics"]').click()
        cy.url().should('include', '/manageTopics')
        cy.get('h3').should('contain.text', 'ConnectTopicManage')
        cy.get('span:contains(btlcol / 2023 / )').should('be.visible').next('input[placeholder="Add New Topic"]').should('exist')
        cy.get('thead tr th').should('have.length', 8).each((th, index) => cy.wrap(th).should('have.text', ['Base', 'Topic', 'Handle', 'Friendly Name', 'Description', 'Role', 'Subscriptions', 'Actions'][index]))
    })
    it('When use click on websitelink, should navigate to website page', () => {
        cy.visit('/connect')
        cy.get('a[href="/connect/website"]').click()
        cy.url().should('include', '/website')
        cy.get('h3').should('contain.text', 'Website')
        cy.get('span:contains(Thoughts For The Day)').should('be.visible')
        cy.get('a:contains(Add Quote)').should('exist')
        cy.get('span:contains(News)').should('be.visible')
    })*/

})



