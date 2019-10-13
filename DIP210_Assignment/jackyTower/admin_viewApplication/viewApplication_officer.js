
/*
var dummyApplication  =[{applicationID:1, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:2, applicantID:1, residenceID:"A002", applicationDate:new Date("21 October 1991"), requiredMonth: "January", requiredYear: "2090", status: "rejected", attachment:new Array},
                        {applicationID:3, applicantID:1, residenceID:"A003", applicationDate:new Date("22 October 2092"), requiredMonth: "Febuary", requiredYear: "1991", status: "rejected", attachment:new Array},
                        {applicationID:4, applicantID:1, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "rejected", attachment:new Array},
                        {applicationID:5, applicantID:1, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "closed", attachment:new Array},
                        {applicationID:6, applicantID:2, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "appealed", attachment:new Array},
                        {applicationID:7, applicantID:2, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "appealed", attachment:new Array}];

//  localStorage.application = ``; //to reset localStorage.application
if(localStorage.application==""||localStorage.application==undefined){localStorage.application=JSON.stringify(dummyApplication);console.log("applicationList empty: populated with dummy data");}
*/


var currentOfficer = {staffID:"KOI001", username:"koich", password:"koich"};
//var currentUser = JSON.parse(localStorage.currentUser);
var residenceList = JSON.parse(localStorage.residence);

//filter out application that match the current applicant ID

//console.log(JSON.parse(localStorage.application));

var applicantList = JSON.parse(localStorage.applicant);
var allApplication = JSON.parse(localStorage.application);
var residenceList = JSON.parse(localStorage.residence);

var table = document.getElementById("form_table").getElementsByTagName("tbody")[0];

var check_new = document.getElementById("check_new");
var check_waitlist = document.getElementById("check_waitlist");
var check_appeal = document.getElementById("check_appeal");
var check_rejected = document.getElementById("check_rejected");
var check_accepted = document.getElementById("check_accepted");

check_new.addEventListener("click", function(){loadApplication();});
check_waitlist.addEventListener("click", function(){loadApplication();});
check_appeal.addEventListener("click", function(){loadApplication();});
check_rejected.addEventListener("click", function(){loadApplication();});
check_accepted.addEventListener("click", function(){loadApplication();});

var displayCritiria = new Array;




var applicationList = new Array;
var form_btn_select = document.getElementByClass
//locate application with residenceID that matches the officer that is responsible for
loadApplication();
function loadApplication(){
  displayCritiria = new Array;
  if (check_new.checked==true) {displayCritiria.push("new");}
  if (check_waitlist.checked==true) {displayCritiria.push("waitlist");}
  if (check_appeal.checked==true) {displayCritiria.push("appealed");}
  if (check_rejected.checked==true) {displayCritiria.push("rejected");}
  if (check_accepted.checked==true) {displayCritiria.push("accepted");}

  //console.log(displayCritiria);
  applicationList = new Array;
  for (var i = 0; i < allApplication.length; i++) {
    for (var x = 0; x < residenceList.length; x++) {
      if(allApplication[i].residenceID == residenceList[x].residenceID && residenceList[x].staffID == currentOfficer.staffID){
        if (displayCritiria.includes(allApplication[i].status.toLowerCase())){
          applicationList.push(allApplication[i]);
        }
      }
    }
  }
  //console.log(applicationList);
  populateTable();
}





//table.setAttribute("class", "bg-dark");


function populateTable(){
  //console.log(applicationList);
  table.innerHTML =  ``;
  for (var i = 0; i < applicationList.length; i++) {
    insertRowToTable(i);
  }
  //insert white space to the bottom of table
  //table.insertRow(table.length).insertCell(0).innerHTML = `<br><br><br>`;
}

function insertRowToTable(i){

  var residence;
  for (var x = 0; x < residenceList.length; x++) {
    if (residenceList[x].residenceID == applicationList[i].residenceID) {
      residence = residenceList[x];
      break;
    }
  }
  var applicant;
  for (var y = 0; y < applicantList.length; y++) {
    if(applicantList[y].applicantID == applicationList[i].applicantID){
      applicant = applicantList[y];
      break;
    }
  }

  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  var cell8 = newRow.insertCell(7);
  var cell9 = newRow.insertCell(8);
  var cell10 = newRow.insertCell(9);
  var cell11 = newRow.insertCell(10);

  cell1.innerHTML = "A" + pad(applicationList[i].applicationID.toString(),5);
  cell2.innerHTML = applicationList[i].residenceID;
  cell3.innerHTML = residence.unitCount;
  cell4.innerHTML = residence.monthlyRental;
  cell5.innerHTML = applicant.username;
  cell6.innerHTML = residence.amenities;
  cell7.innerHTML = applicant.monthlyIncome;
  cell8.innerHTML = applicationList[i].requiredMonth;
  cell9.innerHTML = applicationList[i].requiredYear;
  cell10.innerHTML = applicationList[i].status;
  if(["accepted", "rejected", "closed"].includes(applicationList[i].status)){
    cell11.innerHTML == ` `;
  }
  else{
    cell11.innerHTML = `<button onclick="selectApplication(this);"class="form_btn_select btn btn-warning btn-sm w-100 m-0"type="button" name="button">select</button>`;
  }
}


function selectApplication(selectedRow){
  var selectedApplicationID = parseInt( (selectedRow.parentElement.parentElement.getElementsByTagName("td")[0].innerHTML).substring(1,6)  ,10);
  //var selectedApplication;
  localStorage.selectedApplication = ` `;
  for (var i = 0; i < applicationList.length; i++) {
    if (applicationList[i].applicationID.toString() == selectedApplicationID.toString()) {
      localStorage.selectedApplication = JSON.stringify(applicationList[i]);
      console.log(localStorage.selectedApplication);
      window.location.href = "../Allocate/allocateHousing.html"
      break;
    }
  }
}
















function pad(source, amount){
  var newSource = source;
  //console.log(source.length);
  for (var i = 0; i < amount-source.length; i++) {newSource = "0"+newSource;}
  return newSource;
}
