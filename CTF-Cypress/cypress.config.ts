import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  pageLoadTimeout: 100000,
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Campus Track Test Reporter',
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
  },
  e2e: {
    'baseUrl': 'https://prod.campustrack.net',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on),
        on('task', verifyDownloadTasks);
    },
    env: {
      "USERNAME": "****",
      "PASSWORD": "*****",
      "INCORRECT": "12568",
      "TRACKING ID": "1111",
      "TITLE": "Test",
      "AUTHOR": "arksodara",
      "PUBLISHER": "Bitloka",
      "ISBN": "123",
      "LOCATION": "library",
      "COURSE_NAME": "BE",
      "BRANCH": "MECHNICAL",
      "AFFILIATION": "VTU",
      "instName": "BITLOKA",
      "instShortName": "BTL",
      "DateFrom": "01-06-2022",
      "DateTo": "01-03-2023",
      "TermName": "accounts",
      "course": "BA",
      "course_Name": "B.Com 2",
      "courseName": "B.Tech E&C",
      "COURSE": "B.Com 1",
      "SOHRTNAME": "BTL",
      "REPORT_NAME": "sectionwise_report.st",
      "custName": "Varun",
      "custAddress": "Bengalore",
      "custContact": "9756274615",
      "CourseSelect": "PUC II PCMB A (Annual)",
      "Recepiet": "1/BTLCOL",
      "message": "Your ward is absent today",
      "Name": "vinay", // hr
      "Gender": "Male", // hr
      "Number": "9756274615",// hr
      "Template": "The exam will start from ______",
      "studentName": "Sai Sharan", //  Aditya K S
      "value": "100.00",
      "pending_Fee": "Tuition Fee August 2020 ", //"Tuition Fee August 2020 "
      "By": "cash",
      "To": "electricity",
      "amount": "3000",
      "Ref_No": "2",
      "Description": "Electricity bill",
      "voucher": "BTL/10",
      "Student_Id": "20P074",
      "id": "20P050",
      "title":"Staff Meet",
      "student":"Aditya K S",
      "Report":"college_details.st.st"
    },
  },
});
