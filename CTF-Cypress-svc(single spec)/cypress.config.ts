import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require("cy-verify-downloads");

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: false,

  reporterOptions: {
    charts: true,
    reportPageTitle: "Campus Track Test Reporter-svc",
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
  },

  e2e: {
    baseUrl: "https://svc.campustrack.net/ctng4",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on),
        on("task", verifyDownloadTasks);
    },
    env: {
      USERNAME: "naveen.naik@bitloka.com",
      PASSWORD: "Naveen@1947",
      course_add: "PUC I", // admin
      BRANCH_add: "Commerce", // admin
      AFFILIATION_add: "state", //admin
      course_Name: "B.Com 2 ", //admin
      courseName: "B.Tech", // admin for disable
      BRANCH: "MECHNICAL", // admin for disable
      AFFILIATION: "VTU", // admin for disable
      course: "MBA FInance", // admin course term
      TermName: "First term", // admin term add
      DateFrom: "01-06-2023", // admin term add
      DateTo: "30-11-2023", // admin term add
      "DATE": "01-07-2023", //Fee
      REPORT_NAME: "adjustment_transaction.st", // admin report
      reportname: "student report", // admin report
      description: "students details", // admin report
      "file extension": "student report.st", // admin report
      title: "Staff Meet", // accademics calender
      instName: "New English School",
      instShortName: "NES",
      "Report":"Test Report.st",

      INCORRECT: "12568",
      "TRACKING ID": "1111",
      TITLE: "Test",
      AUTHOR: "arksodara",
      PUBLISHER: "Bitloka",
      ISBN: "123",
      LOCATION: "library",
      COURSE_NAME: "BE",
      COURSE: "B.Com 1",
      SOHRTNAME: "BTL",
      custName: "Varun",
      custAddress: "Bengalore",
      custContact: "9756274615",
      CourseSelect: "PUC II PCMB A (Annual)",
      Recepiet: "1/BTLCOL",
      message: "Your ward is absent today",
      Name: "vinay", // hr
      Gender: "Male", // hr
      Number: "9756274615", // hr
      Template: "The exam will start from ______",
      studentName: "Chirag Jagadish", //  Aditya K S
      value: "100.00",
      pending_Fee: "Tuition Fee August 2020 ", //"Tuition Fee August 2020 "
      By: "cash",
      To: "electricity",
      amount: "3000",
      Ref_No: "2",
      Description: "Electricity bill",
      voucher: "5/PPEC",
      Student_Id: "20P074",
      id: "20P050",
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
