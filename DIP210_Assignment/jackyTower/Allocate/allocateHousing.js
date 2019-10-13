var dummyApplication  = [{applicationID:1, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
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

var dummyApplicant      = [{applicantID:1, username:"jeff", password:"jeff", fullName:"jeffa marumaya", email:"", monthlyIncome:"999999", attachment: new Array},
                        {applicantID:2, username:"jacky", password:"jacky", fullName:"jackyru kurohime", monthlyIncome:"666666", attachment: new Array},
                        {applicantID:4, username:"jackyjacky", password:"jackyjacky", fullName:"black pepper bbq jacky", monthlyIncome:"12345678", attachment: new Array},
                        {applicantID:3, username:"koi", password:"koi", fullName:"just koi . because reason", monthlyIncome:"infinite", attachment: new Array}];

//will add current officer later
var currentOfficer    = {staffID:"KOI001", username:"koich", password:"koich"};

//will move to php in assignment 2
//list will be store locally for assignment 1
var applicationList = JSON.parse(localStorage.application);
//console.log(localStorage.application);
var applicantList   = JSON.parse(localStorage.applicant);
var allResidence    = JSON.parse(localStorage.residence);

//get the residence that the login officer is responsible for
var residenceList   = new Array;
for (var i = 0; i < allResidence.length; i++) {
  if(allResidence[i].staffID.toString() == currentOfficer.staffID.toString()){
    residenceList.push(allResidence[i]);
  }
}

/*
var dummyAllocation = [{allocationID:1, applicationID:1, residenceID:"A001", unitID:0, fromDate:undefined, duration:12, endDate:undefined},
                      {allocationID:2, applicationID:2, residenceID:"A001", unitID:0, fromDate:undefined, duration:12, endDate:undefined},
                      {allocationID:3, applicationID:3, residenceID:"A001", unitID:0, fromDate:undefined, duration:12, endDate:undefined},
                      {allocationID:4, applicationID:4, residenceID:"A001", unitID:0, fromDate:undefined, duration:12, endDate:undefined},
                      {allocationID:5, applicationID:5, residenceID:"A001", unitID:1, fromDate:undefined, duration:12, endDate:undefined},
                      {allocationID:6, applicationID:6, residenceID:"A001", unitID:1, fromDate:undefined, duration:8, endDate:undefined},
                      {allocationID:7, applicationID:7, residenceID:"A001", unitID:0, fromDate:undefined, duration:8, endDate:undefined},
                      {allocationID:8, applicationID:8, residenceID:"A001", unitID:0, fromDate:undefined, duration:8, endDate:undefined}];
//populate allocation list's date
for (var i = 0; i < dummyAllocation.length; i++) {
  if(dummyAllocation[i].startDate==undefined){
    dummyAllocation[i].startDate = new Date();
    dummyAllocation[i].endDate = dummyAllocation[i].startDate;
    dummyAllocation[i].endDate.setMonth(dummyAllocation[i].endDate.getMonth() + parseInt(dummyAllocation[i].duration, 10));
  }
}
if (localStorage.allocation == "" || localStorage.allocation == undefined) {localStorage.allocation = JSON.stringify(dummyAllocation);console.log("allocation empty: populated with dummy data");}
*/

var allocationList            = JSON.parse(localStorage.allocation);
var allocationOfSelectedUnit  = new Array;
var  applicationID             = 12;
var allocation                = {allocationID:undefined, applicationID:applicationID, residenceID:undefined, unitID:undefined, fromDate:undefined, duration:undefined, endDate:undefined};

allocation.allocationID = allocationList[allocationList.length-1].allocationID+1;

var officer;


//get the selected application
var application;
for(var i=0; i<applicationList.length; i++){
  if(applicationID == applicationList[i].applicationID){
    application = applicationList[i];
    break;
  }
}

//get the applicant
var applicant;
for(var i=0; i<applicantList.length; i++){
  if(application.applicantID == applicantList[i].applicantID){
    applicant = applicantList[i];
    break;
  }
}

var allocatable = false;
//get the residence in the application
var residence;
for(var i=0; i<residenceList.length; i++){
  if(application.residenceID == residenceList[i].residenceID){
    residence = residenceList[i];
  }
}


var form_applicationID    = document.getElementById("form-applicationID");
var form_username         = document.getElementById("form-username");
var form_monthlyIncome    = document.getElementById("form-monthlyIncome");
var form_residenceID      = document.getElementById("form-residenceID");
var form_requiredMonth    = document.getElementById("form-requiredMonth");
var form_requiredYear     = document.getElementById("form-requiredYear");

var form_residenceID_in   = document.getElementById("form-residenceID-in");
var form_unitAvailable    = document.getElementById("form-unitAvailable");
var form_unit             = document.getElementById("form-unit");

var form_startDate        = document.getElementById("form-startDate");
//var form_duration=document.getElementById("form-duration").getElementsByTagName("input");
var form_duration_radio_1 = document.getElementById("form-duration-radio-1");
var form_duration_radio_2 = document.getElementById("form-duration-radio-2");
var form_endDate          = document.getElementById("form-endDate");

var form_btn_approve      = document.getElementById("form_btn_approve");
var form_btn_reject       = document.getElementById("form_btn_reject");
var form_btn_rejectAll    = document.getElementById("form_btn_rejectAll");
var form_btn_cancel       = document.getElementById("form_btn_cancel");
var form_btn_allocate     = document.getElementById("form_btn_allocate");
var form_btn_addToWaitlist= document.getElementById("form_btn_addToWaitlist");

var form_table = document.getElementById("form_table");

//application form
form_applicationID.value=applicationID;
form_username.value=applicant.username;
form_monthlyIncome.value=applicant.monthlyIncome;
form_residenceID.value=application.residenceID;
form_requiredMonth.value=application.requiredMonth;
form_requiredYear.value=application.requiredYear;
form_unitAvailable.value = residence.unitCount;

checkAllocate();

//load all residence into select residence field
form_residenceID_in.innerHTML = ``;
for(var i=0; i<residenceList.length; i++){
  var node = document.createElement("option");
  node.value= residenceList[i].residenceID;
  node.innerHTML= residenceList[i].residenceID + ": " + residenceList[i].residenceName;
  form_residenceID_in.appendChild(node);
}

var residenceID;
form_residenceID_in.addEventListener("change", function(){generateUnit()});
generateUnit();
function generateUnit(){
  residenceID = form_residenceID_in.value;
  allocation.residenceID = form_residenceID_in.value;
  form_unit.removeAttribute("disabled");
  //to locate the residece object based on selected residenceID
  for(var i=0; i<residenceList.length; i++){
    if(residenceID == residenceList[i].residenceID){
      residence = residenceList[i];
    }

  }
  loadAllocation(form_unit.value);
  form_unitAvailable.value = residence.unitCount;
  form_unit.innerHTML = ``;
  for(var i=0; i<residence.units.length; i++){
    var node = document.createElement("option");
    node.value= residence.units[i].unitNo;
    node.innerHTML= "UnitID: " + residence.units[i].unitNo;
    form_unit.appendChild(node);
  }
}

form_startDate.addEventListener("change", function(){
  allocation.fromDate = new Date(form_startDate.value);
  calDate();
  //checkAllocate()
});

form_duration_radio_1.addEventListener("click", function(){
  allocation.duration = form_duration_radio_1.value;
  calDate();
  //checkAllocate()
});
form_duration_radio_2.addEventListener("click", function(){
  allocation.duration = form_duration_radio_2.value;
  calDate();
  //checkAllocate()
});


function calDate(){
  if(allocation.fromDate != undefined && allocation.duration!=undefined){
    allocation.endDate = new Date(allocation.fromDate);//allocation.fromDate.getMonth() + allocation.duration);
    allocation.endDate.setMonth(allocation.endDate.getMonth() + parseInt(allocation.duration, 10));
    form_endDate.value = allocation.endDate.getFullYear() + "-" + pad(allocation.endDate.getMonth(),2) + "-" + pad(allocation.endDate.getDate(),2);
  }
  checkAllocate()
}

function pad(string, size){
  while(string.toString(10).length<size){string="0"+string;}
  return string;
}

//console.log(form_unit.value==allocationList[0].unitID);
loadAllocation(form_unit.value);

form_unit.addEventListener("change", function(event){
  loadAllocation(event.target.value);
})

function loadAllocation(selectedUnitID){
  allocationOfSelectedUnit = [];
  for (var i = 0; i < allocationList.length; i++) {
    if(allocationList[i].unitID.toString() == selectedUnitID && allocationList[i].residenceID.toString()==form_residenceID_in.value.toString()){
      allocationOfSelectedUnit.push(allocationList[i]);
    }
  }
  //console.log(allocationOfSelectedUnit);
  allocation.unitID = parseInt(selectedUnitID,10);
  populateTable();
}
function populateTable(){
  form_table.getElementsByTagName("tbody")[0].innerHTML="";
  //console.log(allocationOfSelectedUnit);
  for (var i = 0; i < allocationOfSelectedUnit.length; i++) {
    insertTableRow(i);

    for (var z = 0; z < applicationList.length; z++) {
      if(applicationList[z].applicationID == allocationOfSelectedUnit[i].applicationID){
        //console.log("application found: " + applicationList[z].applicationID);
        break;
      }
      if(applicationList[z].applicationID==8){console.log("the eight" + applicationList[z].applicationID);}
      //console.log("not found: " + allocationOfSelectedUnit[allocationOfSelectedUnit.length-1].applicationID);
    }

  }

  //console.log(applicationList);
}
function insertTableRow(i){

  var unitApplicant;
  for (var x = 0; x < applicationList.length; x++) {
    if(applicationList[x].applicationID.toString()==allocationOfSelectedUnit[i].applicationID.toString()){
      //console.log(" ");
      //console.log("x: "+x + "  " + applicationList[x].applicationID + " " + allocationOfSelectedUnit[i].applicationID);
      for(var y=0; y<applicantList.length; y++){
        //console.log("per allpication " +x + " " + y + "  applicantListLength:" + applicantList.length);
        if(applicantList[y].applicantID.toString()==applicationList[x].applicantID.toString()){
          unitApplicant = applicantList[y];
          break;
        }
      }
    }
  }
  //console.log(i + " end of loop: " + unitApplicant + " " + allocationOfSelectedUnit[i].applicationID);

  console.log(allocationOfSelectedUnit);



  var table = form_table.getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);

  cell1.innerHTML = pad(allocationOfSelectedUnit[i].allocationID,3);//pad(i + 1,3);
  cell2.innerHTML = allocationOfSelectedUnit[i].residenceID;
  cell3.innerHTML = allocationOfSelectedUnit[i].unitID;
  //console.log(typeof allocationOfSelectedUnit[i].unitID);
  cell4.innerHTML = allocationOfSelectedUnit[i].applicationID;
  //console.log(unitApplicant);
  cell5.innerHTML = unitApplicant.username;
  var unitStartDate = new Date(allocationOfSelectedUnit[i].fromDate);
  var unitEndDate =  new Date(allocationOfSelectedUnit[i].endDate);
  cell6.innerHTML = unitStartDate.getFullYear() + "-" + pad(unitStartDate.getMonth(),2) + "-" + pad(unitStartDate.getDate(),2);
  cell7.innerHTML = unitEndDate.getFullYear() + "-" + pad(unitEndDate.getMonth(),2) + "-" + pad(unitEndDate.getDate(),2);


}
//application, applicant, reisdence-unit, allocation
//4 button


function checkAllocate(){
  console.log(allocation);
  if(allocation.duration == undefined || allocation.endDate==undefined || allocation.fromDate==undefined){
    allocatable = false;
    form_btn_allocate.setAttribute("class", "w-100  btn  btn-secondary text-dark");
    form_btn_allocate.innerHTML = "complete form to allocate"
    //console.log("is false: " + (allocation.duration==undefined) + (allocation.endDate==undefined) +(allocation.fromDate==undefined));
  }else {
    allocatable = true;
    form_btn_allocate.setAttribute("class", "w-100  btn btn-warning box_shadow");
    form_btn_allocate.innerHTML = "Allocate"
    //console.log("true");
  }
}

////////////////////////////////////////////////////////////////
var applicant;
//var allocation                = {allocationID:undefined, applicationID:undefined, residenceID:undefined, UnitID:undefined, fromDate:undefined, duration:undefined, endDate:undefined};
var application;

//var form_btn_approve      = document.getElementById("form_btn_approve");
//var form_btn_reject       = document.getElementById("form_btn_reject");
var form_btn_rejectAll    = document.getElementById("form_btn_rejectAll");
//var form_btn_addToWaitlist= document.getElementById("form_btn_addToWaitlist");

//var form_btn_cancel       = document.getElementById("form_btn_cancel");
var form_btn_allocate     = document.getElementById("form_btn_allocate");


//waitlist
form_btn_addToWaitlist.addEventListener("click", function(){
  for (var i = 0; i < applicationList.length; i++) {
    if(applicationList[i].applicationID == application.applicationID){
      applicationList[i].status = "waitlist";
      localStorage.application = JSON.stringify(applicationList);
      // note
      window.location.href = "https://www.google.com";
      break;
    }
  }
});

form_btn_reject.addEventListener("click", function(){
  for (var i = 0; i < applicationList.length; i++) {
    if(applicationList[i].applicationID == application.applicationID){
      applicationList[i].status = "rejected";
      localStorage.application = JSON.stringify(applicationList);
      // note
      window.location.href = "https://www.google.com";
      break;
    }
  }
});

form_btn_allocate.addEventListener("click", function(){
  if (allocatable == true) {
    console.log(allocation);
    allocationList.push(allocation);
    localStorage.allocation = JSON.stringify(allocationList);
    for (var i = 0; i < applicationList.length; i++) {
      if(applicationList[i].applicationID == application.applicationID){
        applicationList[i].status = "accepted";
        localStorage.application = JSON.stringify(applicationList);
        // note
        window.location.href = "https://www.google.com";
        break;
      }
    }
  }

})
