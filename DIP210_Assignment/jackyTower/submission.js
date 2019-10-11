var dummyApplication2 =[{applicationID:1, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:3, applicantID:2, residenceID:"A002", applicationDate:new Date("21 October 1991"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:2, applicantID:3, residenceID:"A003", applicationDate:new Date("22 October 2092"), requiredMonth: "Febuary", requiredYear: "1991", status: "rejected", attachment:new Array},
                        {applicationID:4, applicantID:1, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "appeal", attachment:new Array},
                        {applicationID:5, applicantID:2, residenceID:"A001", applicationDate:new Date("25 December 2097"), requiredMonth: "June", requiredYear: "2091", status: "waitlist", attachment:new Array},
                        {applicationID:6, applicantID:3, residenceID:"A003", applicationDate:new Date("26 December 1997"), requiredMonth: "July", requiredYear: "2033", status: "new", attachment:new Array},
                        {applicationID:7, applicantID:1, residenceID:"A003", applicationDate:new Date("27 December 2007"), requiredMonth: "April", requiredYear: "2022", status: "new", attachment:new Array},
                        {applicationID:8, applicantID:2, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "May", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:9, applicantID:3, residenceID:"A002", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:10, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:11, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:12, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:13, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:14, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:15, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:16, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:17, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:18, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:19, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:20, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:21, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:22, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:23, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:24, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:25, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:26, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array}];
var dummyApplication  =[{applicationID:1, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:3, applicantID:2, residenceID:"A002", applicationDate:new Date("21 October 1991"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:2, applicantID:3, residenceID:"A003", applicationDate:new Date("22 October 2092"), requiredMonth: "Febuary", requiredYear: "1991", status: "rejected", attachment:new Array},
                        {applicationID:4, applicantID:1, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "appeal", attachment:new Array}];

//localStorage.application = ``;
if(localStorage.application==""||localStorage.application==undefined){localStorage.application=JSON.stringify(dummyApplication);console.log("applicationList empty: populated with dummy data");}
if(localStorage.application!=""&&localStorage.application!=undefined){
  var applicationList    = JSON.parse(localStorage.application);
  var nextApplicationID  = applicationList[applicationList.length-1].applicationID + 1;
}
else {
  var applicationList    = new Array;
  var nextApplicationID  = 0;
}

console.log(applicationList);
console.log(nextApplicationID);
console.log(JSON.parse(localStorage.currentUser));


var currentUser        = JSON.parse(localStorage.currentUser);
console.log(currentUser);
var selectedResidence  = JSON.parse(localStorage.selectedResidence);
//user's profile details
document.getElementById("inputFullName")      .value = currentUser.fullName;
document.getElementById("inputEmail")         .value = currentUser.email;
document.getElementById("inputIncome")        .value = currentUser.monthlyIncome;
document.getElementById("inputIncome").addEventListener("change", function(){
currentUser.monthlyIncome = document.getElementById("inputIncome").value;

});

//var residenceName = localStorage.residenceName;
document.getElementById("inputResidenceName") .value = selectedResidence.residenceName;
document.getElementById("inputResidenceID")   .value = selectedResidence.residenceID;
document.getElementById("inputAddress")       .value = selectedResidence.address;
document.getElementById("inputAmenities")     .value = selectedResidence.ammenities;
document.getElementById("inputUnitSize")      .value = selectedResidence.unitSize;
document.getElementById("inputMonthlyRental") .value = selectedResidence.monthlyRental;

//Required Month and Year info
var requiredYear = document.getElementById("inputYear");
var requiredMonth = document.getElementById("inputMonth");
requiredYear          .value = localStorage.requiredYear;
requiredMonth         .value = localStorage.requiredMonth;

//create new application object
/*
var newApplication     = {applicationID:"nextApplicationID",
                          applicantID:"currentUser.applicantID",
                          residenceID:selectedResidence.residenceID,
                          applicationDate:new Date("21 October 1997"),
                          requiredMonth:localStorage.requiredMonth,
                          requiredYear:localStorage.requiredYear,
                          status:"new",
                          attachment:new Array};
                          */
var applicantID = currentUser.applicantID;

var newApplication = {applicationID:nextApplicationID, applicantID:currentUser.applicantID, residenceID:selectedResidence.residenceID, applicationDate:new Date(), requiredMonth:requiredMonth, requiredYear:requiredYear, status: "new", attachment:new Array};
function submitApplication(){
  applicationList.push(newApplication);
  localStorage.application = JSON.stringify(applicationList);
  window.location.href = "viewApplication_user.html";
}

//Cancel Button onclick action
function cancel() {window.history.back();}





/////////////////////////////////////////////////////////////////////////////


//call value of each Attribute in application form into the input textbox
/*
localStorage.fullName = "Jason";
localStorage.email = "jason666@gmail.com";
localStorage.monthlyIncome = "RM3000";

//user's profile details
var fullName = localStorage.fullName;
document.getElementById("inputFullName").value = fullName;

var email = localStorage.email;
document.getElementById("inputEmail").value = email;

var monthlyIncome = localStorage.monthlyIncome;
document.getElementById("inputIncome").value = monthlyIncome;


//selected residence details
var residenceName = localStorage.residenceName;
document.getElementById("inputResidenceName").value = residenceName;

var residenceID = localStorage.residenceID;
document.getElementById("inputResidenceID").value = residenceID;

var address = localStorage.address;
document.getElementById("inputAddress").value = address;

var amenities = localStorage.amenities;
document.getElementById("inputAmenities").value = amenities;

var unitSize = localStorage.unitSize;
document.getElementById("inputUnitSize").value = unitSize;

var monthlyRental = localStorage.monthlyRental;
document.getElementById("inputMonthlyRental").value = monthlyRental;

//Required Month and Year info
var requiredYear = localStorage.requiredYear;
document.getElementById("inputYear").value = requiredYear;

var requiredMonth = localStorage.requiredMonth;
document.getElementById("inputMonth").value = requiredMonth;

//Cancel Button onclick action
function cancel() {
  window.history.back();
}
console.log(residenceName);
console.log(residenceID);
console.log(address);
console.log(amenities);
console.log(unitSize);
console.log(monthlyRental);
console.log(requiredYear);
console.log(requiredMonth);
*/
