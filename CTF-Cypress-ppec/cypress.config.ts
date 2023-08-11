import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Campus Track Test Reporter',
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
  },
  e2e: {
    'baseUrl': 'https://ppec.campustrack.net',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on),
        on('task', verifyDownloadTasks);
    },
    env: {
      "USERNAME": "****",
      "PASSWORD": "****",
      "COURSE_NAME": "X",
      "AFFILIATION": "state",
      "course_Name": "I",
      "TermName": "Annual",
      "name":"Aadvik H A",
      "CourseSelect": "I B (Annual)",
      "Recepiet": "5/PPECPS",
      "studentName": "Aadvik H A", //  Aditya K S
      "value": "500.00",
      "pending_Fee": "Tuition Fee August 2020 ",
      "Report":"Student_details.st.st",

      "INCORRECT": "12568",
      "TRACKING ID": "1111",
      "TITLE": "Test",
      "AUTHOR": "arksodara",
      "PUBLISHER": "Bitloka",
      "ISBN": "123",
      "LOCATION": "library",
      "BRANCH": "MECHNICAL",
      "instName": "BITLOKA",
      "instShortName": "BTL",
      "DateFrom": "01-06-2022",
      "DateTo": "29-07-2023",
      "course": "BA",
      "courseName": "B.Tech E&C",
      "COURSE": "B.Com 1",
      "SOHRTNAME": "BTL",
      "REPORT_NAME": "sectionwise_report.st",
      "custName": "Varun",
      "custAddress": "Bengalore",
      "custContact": "9756274615",
      "message": "Your ward is absent today",
      "Name": "vinay", // hr
      "Gender": "Male", // hr
      "Number": "9756274615",// hr
      "Template": "The exam will start from ______",
      "By": "cash",
      "To": "electricity",
      "amount": "3000",
      "Ref_No": "2",
      "Description": "Electricity bill",
      "voucher": "BTL/10",
      "Student_Id": "20P074",
      "id": "20P050",
      "title":"Staff Meet"
    },
  },
});
