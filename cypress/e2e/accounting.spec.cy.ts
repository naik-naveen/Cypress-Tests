let billAmount
let payAmount
describe('accounting feature Test', () => {
  const un = Cypress.env('USERNAME')
  const pwd = Cypress.env('PASSWORD')
  beforeEach(() => {
    cy.accounting_login(un, pwd)
  })
  it('When user click on accounting tab,should navigate to accounting page successfully ', () => {
    cy.visit('/accounting')
    cy.url().should('include', '/accounting')
    cy.get('li:contains(Action Links)').should('be.visible')
    cy.get('span:contains(Chart of Accounts)').should('be.visible').siblings().children().children('a[href="/ctng4/accounting/coa"]').should('exist')
    cy.get('span:contains(Voucher)').should('be.visible').siblings().children().children('a[href="/ctng4/accounting/manageVoucher"]').should('exist')
    cy.get('span:contains(Voucher)').should('be.visible').siblings().children().next().children('a[href="/ctng4/accounting/addVoucher"]').should('exist')
    cy.get('li:contains(Accounting Report)').should('be.visible').next().children('a:contains(Expense Report )').should('exist')
    cy.get('span:contains(Recent Reports)').should('be.visible')
    cy.get('span:contains(Notifications)').should('be.visible').parent().next().children().children().children().children().children('thead').children().find('th:contains(Date)').should('be.visible').next('th:contains(Description)').should('be.visible').next('th:contains(Action)').should('be.visible')
    cy.get('span:contains( Monthwise Expenses)').should('be.visible')
    cy.get('span:contains( Scheduled Jobs)').should('be.visible').parent().siblings().find('thead').within(() => {
      cy.get('th').eq(0).should('contain', '')
      cy.get('th').eq(1).should('contain', 'Date')
      cy.get('th').eq(2).should('contain', 'Job')
      cy.get('th').eq(3).should('contain', 'Action')
      cy.get('th').eq(4).should('contain', 'Status')
    })
    cy.get('span:contains(Monthwise Expenses Summary Chart across Institutes)').should('be.visible')
    cy.get('span:contains( Yearwise Expenses across Institutes)').should('be.visible')
    cy.get('span:contains(Monthwise  Departmental Expenses of an Institute)').should('be.visible')
    cy.get('span:contains( Status of Submitted and Pending Reports across Institutes )').should('be.visible')
    cy.get('span:contains( Assets and Liabilities of an Institute)').should('be.visible')
    cy.get('span:contains( Assets and Liabilities across Institutes)').should('be.visible')
    cy.get('span:contains( Outstanding Reimbursements across Institutes)').should('be.visible')
  })
  it('when user click on COA manage link should navigate to coa page', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/coa"]').click()
    cy.url().should('include', '/accounting/coa')
    cy.get('i[class="fa fa-angle-double-left"]').should('exist')
    cy.get('i[class="fa fa-close"]').should('exist')
    cy.get('span:contains(Add Title)').should('be.visible').next().children('button[title="Collapse All"]').should('exist').next('button[title="Expand All"]').should('exist')
  })
  it('when user click on Capital should navigate to capital details ', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/coa"]').click()
    cy.get('span:contains(Capital)').prev().children('i[class="fa fa-chevron-right fs-4 btn btn-xs py-7"]').click()
    cy.get('tabset').children('ul').find('span:contains(Capital)').should('exist').parents('ul').siblings().find('i[class="fa fa-print"]').should('exist')
    cy.get('span:contains(Capital)').should('be.visible').prev().children('i[class="fa fa-chevron-down fs-4 btn btn-xs"]').should('exist')
  })
  it('when user click on liabilities should navigate to liabilities details ', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/coa"]').click()
    cy.get('span:contains(Liabilities)').prev().children('i[class="fa fa-chevron-right fs-4 btn btn-xs py-7"]').click()
    cy.get('tabset').children('ul').find('span:contains(Liabilities)').should('exist').parents('ul').siblings().find('i[class="fa fa-print"]').should('exist')
    cy.get('span:contains(Liabilities)').should('be.visible').prev().children('i[class="fa fa-chevron-down fs-4 btn btn-xs"]').should('exist')
  })
  it('when user click on Expenses should navigate to Expenses details ', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/coa"]').click()
    cy.get('span:contains(Expenses)').prev().children('i[class="fa fa-chevron-right fs-4 btn btn-xs py-7"]').click()
    cy.get('tabset').children('ul').find('span:contains(Expenses)').should('exist').parents('ul').siblings().find('i[class="fa fa-print"]').should('exist')
    cy.get('span:contains(Expenses)').should('be.visible').prev().children('i[class="fa fa-chevron-down fs-4 btn btn-xs"]').should('exist')
  })
  it('when user click on Assets should navigate to Assetss details ', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/coa"]').click()
    cy.get('span:contains(Assets)').prev().children('i[class="fa fa-chevron-right fs-4 btn btn-xs py-7"]').click()
    cy.get('tabset').children('ul').find('span:contains(Assets)').should('exist').parents('ul').siblings().find('i[class="fa fa-print"]').should('exist')
    cy.get('span:contains(Assets)').should('be.visible').prev().children('i[class="fa fa-chevron-down fs-4 btn btn-xs"]').should('exist')
  })
  it('when user click on Revenue should navigate to Revenue details ', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/coa"]').click()
    cy.get('span:contains(Revenue)').prev().children('i[class="fa fa-chevron-right fs-4 btn btn-xs py-7"]').click()
    cy.get('tabset').children('ul').find('span:contains(Revenue)').should('exist').parents('ul').siblings().find('i[class="fa fa-print"]').should('exist')
    cy.get('span:contains(Revenue)').should('be.visible').prev().children('i[class="fa fa-chevron-down fs-4 btn btn-xs"]').should('exist')
  })
  it('when user click on Add folder icon in Chart Of Accounts, new folder should get added ', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/coa"]').click()
    cy.get('span:contains(Revenue)').next().find('button[title="Add Folder"]').click({ force: true })
    cy.get('span:contains(Revenue)').prev().children('i[class="fa fa-chevron-right fs-4 btn btn-xs py-7"]').click()
    cy.get('span:contains(New Node)').should('exist').prev().children('i[class="fa fa-chevron-right fs-4 btn btn-xs py-7"]').should('exist')
    cy.get('span:contains(New Node)').next().find('i[class="fa fa-trash-o"]').click({ force: true })
  })
  it('when user click on manage Voucher link should navigate to manage Voucher page', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/manageVoucher"]').click()
    cy.url().should('include', '/accounting/manageVoucher')
    cy.get('h3').should('have.length', 1).should('contain.text', 'Accounting').should('contain.text', 'Voucher').should('contain.text', 'Manage')
    cy.get('thead tr th').should('have.length', 8).each((th, index) => cy.wrap(th).should('have.text', ['', 'Date', 'Voucher No', 'Ref No', 'Type', 'Amount', 'Description', 'Actions'][index]))
    cy.get('input[placeholder="Search"]').should('exist').parent().next().children('i[class="fa fa-search"]').should('exist')
  })
  it('when user click on add Voucher link should navigate to voucher add page', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/addVoucher"]').click()
    cy.url().should('include', '/accounting/addVoucher')
    cy.get('h3').should('have.length', 1).should('contain.text', 'Accounting').should('contain.text', 'Voucher').should('contain.text', 'Add')
    cy.get('span:contains(Voucher)').should('be.visible')
    cy.get('select[name="voucherType"]').should('exist').find('option').should('have.length', 2).then((options) => {
      const optionValues = ['--Select--', 'Expense']
      options.each((i, option) => {
        expect(option.text).to.equal(optionValues[i])
      })
    })
    cy.get('input[placeholder="Ref No(optional)"]').should('exist')
    cy.get('button:contains(Generate)').should('exist')
    cy.get('i[class="glyphicon glyphicon-minus"]').should('exist').parents('span').next('input[name="receiptDate"]').should('exist').next().find('i[class="glyphicon glyphicon-plus"]').should('exist')
    // cy.get('input[placeholder="Amount"]').should('exist')
    cy.get('input[placeholder="Description"]').should('exist')
    cy.get('td:contains(To)').should('be.visible').next('td:contains(By)').should('be.visible')
    cy.get('table[class="table table-bordered"]').children('tbody').find('tr').eq(1).last().find('input[placeholder="ledger"]').should('exist').parent().prev().find('i[class="fa fa-minus-circle pull-left"]').should('exist').parents('td').next().next().children('input[placeholder="amount"]').should('exist').parent().next().find('i[class="fa fa-plus-circle"]').should('exist')
    cy.get('table[class="table table-bordered"]').children('tbody').find('tr').eq(1).first().find('input[placeholder="ledger"]').should('exist').parent().prev().find('i[class="fa fa-minus-circle pull-left"]').should('exist').parents('td').next().next().children('input[placeholder="amount"]').should('exist').parent().next().find('i[class="fa fa-plus-circle"]').should('exist')
    //cy.get('input[ng-reflect-typeahead="cash,cheque"]').should('exist').parent().prev().find('i[class="fa fa-minus-circle pull-left"]').should('exist').parents('td').next().next().children('input[placeholder="amount"]').should('exist').parent().next().find('i[class="fa fa-plus-circle"]').should('exist')
    //cy.get('input[ng-reflect-typeahead="bsnl,water,electricity,station"]').should('exist').parent().prev().find('i[class="fa fa-minus-circle pull-left"]').should('exist').parents('td').next().next().children('input[placeholder="amount"]').should('exist').parent().next().find('i[class="fa fa-plus-circle"]').should('exist')
    //cy.get('input[ng-reflect-typeahead="bsnl,water,electricity,station"]').should('exist').parents('td').next().children('input[placeholder="value"]').should('exist').next().children('i[class="fa fa-plus-circle"]').should('exist')
    cy.get('textarea[class="ace_text-input"]').should('exist')
    cy.get('textarea[class="ace_text-input"]').parent().parents('div').children('div[class="btn-group"]').should('exist')
    cy.get('button:contains(Clear)').should('be.enabled').should('exist')
  })
  it('verify the plus and minus circle icon in the To section', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/addVoucher"]').click()
    cy.get('table[class="table table-bordered"]').children('tbody').children('tr').eq(1).children('td').eq(0).find('input[placeholder="ledger"]').parent().next().next().find('i[class="fa fa-plus-circle"]').click().screenshot().parent().parent().parent().first().find('i[class="fa fa-minus-circle pull-left"]').click()
    cy.screenshot()
  })
  it('verify the plus and minus circle icon in the By section', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/addVoucher"]').click()
    cy.get('table[class="table table-bordered"]').children('tbody').children('tr').eq(1).children('td').eq(1).find('input[placeholder="ledger"]').parent().next().next().find('i[class="fa fa-plus-circle"]').click({ multiple: true }).screenshot().parent().parent().parent().first().find('i[class="fa fa-minus-circle pull-left"]').click({ multiple: true })
    cy.screenshot()
  })
  it('When the user click on the insert image button ,insert media popup should open', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/addVoucher"]').click()
    cy.get('button[title="Insert Image"]').click()
    cy.window().then((win) => { cy.stub(win, 'alert').as('popup') })
    cy.get('h4:contains(Insert Media)').should('be.visible')
    cy.get('ul').find('span:contains(Upload)').click()
    cy.get('p:contains(File size should not exceed 500KB)').should('be.visible').next('input[id="file"]').should('exist').next().children('button:contains(Upload To Vault)').should('be.enabled').should('exist')
    cy.get('input[placeholder="Search"]').should('exist').parent().next().children('i[class="fa fa-search"]').should('exist')
    cy.get('ul').find('span:contains(Draw)').click()
    cy.get('span:contains(Size : )').should('be.visible').prev().children('select').should('exist').find('option').should('have.length', 3).then((options) => {
      const optionValues = ['Small', 'Default', 'Large']
      options.each((i, option) => {
        expect(option.text).to.equal(optionValues[i]) // Verify that the option values match the expected values
      })
    })
    cy.get('button:contains(Save To Vault)').should('be.enabled').should('exist')
  })
  it('When the user click on the insert image button ,insert media popup should open', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/addVoucher"]').click()
    cy.get('button[title="Insert Formula"]').click()
    cy.window().then((win) => { cy.stub(win, 'alert').as('popup') })
    cy.get('h4:contains(Insert Formula)').should('be.visible')
    cy.get('button:contains(Insert)').should('be.enabled').should('exist')
    cy.get('span:contains(×)').should('exist')
  })/*
  it('When the user enter all valid inputs in all fields of voucher, Generate button get enabled', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/addVoucher"]').click()
    cy.get('input[placeholder="Ref No(optional)"]').type(Cypress.env('Ref_No'))
    //cy.get('input[placeholder="Amount"]').type(Cypress.env('amount'))
    cy.get('input[placeholder="Description"]').type(Cypress.env('Description'))
    cy.get('table[class="table table-bordered"]').children('tbody').children('tr').eq(1).children('td').eq(1).find('input[placeholder="ledger"]').type(Cypress.env('By')).parent().next().children('input[placeholder="amount"]').clear().type(Cypress.env('amount'))
    cy.get('table[class="table table-bordered"]').children('tbody').children('tr').eq(1).children('td').eq(0).find('input[placeholder="ledger"]').type(Cypress.env('To')).parent().next().children('input[placeholder="amount"]').clear().type(Cypress.env('amount'))
    //cy.get('div:contains( Voucher )').click()
    cy.get('i[class="glyphicon glyphicon-plus"]').click()
    cy.get('button:contains(Generate)').should('be.enabled').should('exist')
  })
  it('verify Generate button is enabled only when total amount in To section is equal to total amount in By section', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/addVoucher"]').click()
    cy.get('input[placeholder="Ref No(optional)"]').type(Cypress.env('Ref_No'))
    //cy.get('input[placeholder="Amount"]').type(Cypress.env('amount'))
    cy.get('input[placeholder="Description"]').type(Cypress.env('Description'))
    cy.get('table[class="table table-bordered"]').children('tbody').children('tr').eq(1).children('td').eq(1).find('input[placeholder="ledger"]').type(Cypress.env('By')).parent().next().children('input[placeholder="amount"]').should('be.enabled').type(Cypress.env('amount'))
    cy.get('table[class="table table-bordered"]').children('tbody').children('tr').eq(1).children('td').eq(0).find('input[placeholder="ledger"]').type(Cypress.env('To')).parent().next().children('input[placeholder="amount"]').should('be.enabled').clear().type(Cypress.env('amount'))
    cy.get('table[class="table table-bordered"]').children('tbody').children('tr').eq(1).children('td').eq(0).find('input[placeholder="ledger"]').parents('tr').next().last().invoke('text').then(total => {
      billAmount = total.replace(/[₹,]|Total/g, '')
    })
    cy.get('table[class="table table-bordered"]').children('tbody').children('tr').eq(1).children('td').eq(1).find('input[placeholder="ledger"]').parents('tr').next().last().invoke('text').then(total => {
      payAmount = total.replace(/[₹,]|Total:/g, '')
    })
    expect(billAmount).to.equal(payAmount)
    cy.log('both total are equal')
    //cy.get('div:contains( Voucher )').click()
    cy.get('i[class="glyphicon glyphicon-plus"]').click()
    cy.get('button:contains(Generate)').should('be.enabled').click()
  })*/
  it('When user click on category wise Expense Report ,should navigate to category wise Expense Report page and should able to download report', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/categorywiseExpenseReport"]').click()
    cy.url().should('include', '/categorywiseExpenseReport')
    cy.get('h4').should('contain.text', 'AccountingCategorywise Expense Report')
    cy.get('i[class="fa fa-print"]').click()
    //cy.get('i[class="fa fa-file-pdf-o"]').click()
    // cy.verifyDownload('Students Coursewise Breakup.pdf', { contains: true })
  })
  it('When user click on Datewise Expense Report  ,should navigate to Datewise Expense Report  page and should able to download report', () => {
    cy.visit('/accounting')
    cy.url().should('include', '/accounting')
    cy.get('a[href="/ctng4/accounting/datewiseExpenseReport"]').click()
    cy.url().should('include', '/datewiseExpenseReport')
    cy.get('h4').should('contain.text', 'Accounting Datewise Expense Report')
    cy.get('span[class="dropdown-down"]').click()
    cy.get('ul[class="item2"]').within(() => {
      cy.get('div:contains(Monthly)').prev('input[type="checkbox"]').check({ force: true })
    })
    cy.get('span:contains(--- Select Month ---)').next().children('span[class="dropdown-down"]').click({ force: true })
    cy.get('div:contains(May 2023)').prev('input[type="checkbox"]').check({ force: true })
    cy.get('i[class="fa fa-print"]').click()
    cy.get('i[class="fa fa-file-pdf-o"]').click()
    //cy.verifyDownload('Datewise expense report.pdf', { contains: true })
  })
  it('When user click on Yearwise Expense Report ,should navigate to Yearwise Expense Report page and should able to download report', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/yearwiseExpenseReport"]').click()
    cy.url().should('include', '/yearwiseExpenseReport')
    cy.get('h4').should('contain.text', 'AccountingYearwise Expense Report')
    cy.get('i[class="fa fa-print"]').click()
    //cy.get('i[class="fa fa-file-pdf-o"]').click()
    // cy.verifyDownload('Students Coursewise Breakup.pdf', { contains: true })
    cy.click_Back_Button()  
    cy.url().should('eq', Cypress.config().baseUrl + '/accounting') 
  })
  it('When user click on Tally / XML , voucher should download in xml format', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/manageVoucher"]').click()
    cy.get('td:contains(21/PPEC)').parent().last().find('button[type="button"]').click().next().find('li').contains('Tally / XML').click()
    cy.verifyDownload('Voucher', { contains: true })
    cy.click_Back_Button()  
    cy.url().should('eq', Cypress.config().baseUrl + '/accounting') 
  })
  it('When user click on Prime Tally / XML , voucher should download in Tally format', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/manageVoucher"]').click()
    cy.get('td:contains(21/PPEC)').parent().last().find('button[type="button"]').click().next().find('li:contains(Prime Tally / XML)').click()
    cy.verifyDownload('Voucher-TallyPrime', { contains: true })
    cy.click_Back_Button()  
    cy.url().should('eq', Cypress.config().baseUrl + '/accounting') 
  })
  it('when user click on schedule reminder icon, schedule reminder pop should open', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/coa"]').click()
    cy.get('span:contains(Expenses)').prev().children('i[class="fa fa-chevron-right fs-4 btn btn-xs py-7"]').click()
    cy.get('span:contains(Utils)').click().parent().next().children().children().children('ul').first().find('span:contains(Tel and Internet - BSNL)').click()
    cy.get('i[class="fa fa-clock-o"]').click()
    cy.window().then((win) => { cy.stub(win, 'alert').as('popup') })
    cy.get('strong:contains(Schedule Reminder)').should('be.visible')
    cy.get('label:contains(Title / Description)').should('be.visible').next('input[placeholder="Pay Reminder"]').should('exist')
    cy.get('label:contains(Schedule)').should('be.visible')
    cy.contains('label', 'Now').find('input[type="radio"]').should('exist')
    cy.contains('label', ' Later ').find('input[type="radio"]').should('exist')
    cy.get('label:contains(Publish to)').should('be.visible').next('input[placeholder="Topic Name: North-East"]').should('exist')
    cy.get('button:contains(Cancel)').should('exist').next('button:contains(Submit)').should('exist')
  })

  /* it('When the user click on clear button all inputs in textfield of add voucher page should get cleared', () => {
     cy.visit('/accounting')
     cy.get('a[href="/ctng4/accounting/addVoucher"]').click()
     cy.get('input[placeholder="Ref No(optional)"]').type(Cypress.env('Ref_No'))
     //cy.get('input[placeholder="Amount"]').type(Cypress.env('amount'))
     cy.get('input[placeholder="Description"]').type(Cypress.env('Description'))
     cy.get('table[class="table table-bordered"]').children('tbody').find('tr').eq(1).last().find('input[placeholder="ledger"]').type(Cypress.env('By')).parent().next().children('input[placeholder="amount"]').clear().type(Cypress.env('amount'))
     cy.get('table[class="table table-bordered"]').children('tbody').find('tr').eq(1).first().find('input[placeholder="ledger"]').type(Cypress.env('To')).parent().next().children('input[placeholder="amount"]').clear().type(Cypress.env('amount'))
     //cy.get('div:contains( Voucher )').click()
     cy.get('i[class="glyphicon glyphicon-plus"]').click()
     cy.get('button:contains(Clear)').should('be.enabled').should('exist').click()
   })*/
   it('Verify back button in Voucher feature', () => {
    cy.visit('/accounting')
    cy.get('a[href="/ctng4/accounting/addVoucher"]').click()    
    cy.url().should('eq', Cypress.config().baseUrl + '/accounting/addVoucher') 
    cy.click_Back_Button()
    cy.url().should('eq', Cypress.config().baseUrl + '/accounting')  
    cy.get('a[href="/ctng4/accounting/manageVoucher"]').click()    
    cy.url().should('eq', Cypress.config().baseUrl + '/accounting/manageVoucher') 
    cy.click_Back_Button()  
    cy.url().should('eq', Cypress.config().baseUrl + '/accounting')                
  })
  })
