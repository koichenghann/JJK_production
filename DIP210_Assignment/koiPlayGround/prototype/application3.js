var dummyApplication =[{applicationID:1, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
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


var dummyApplicant2   = [{applicantID:3, username:"jeff"},
                        {applicantID:2, username:"jacky",td:0},
                        {applicantID:1, username:"koi", td:0}];

var dummyApplicant   = [{applicantID:1, username:"jeff", password:"jeff", fullName:"jeffa marumaya", email:"", monthlyIncome:"999999", attachment: new Array},
                        {applicantID:2, username:"jacky", password:"jacky", fullName:"jackyru kurohime", monthlyIncome:"666666", attachment: new Array},
                        {applicantID:4, username:"jackyjacky", password:"jackyjacky", fullName:"black pepper bbq jacky", monthlyIncome:"12345678", attachment: new Array},
                        {applicantID:3, username:"koi", password:"koi", fullName:"just koi . because reason", monthlyIncome:"infinite", attachment: new Array}];

var applicationList  = dummyApplication;
var applicantList     = dummyApplicant;

var residenceList    = JSON.parse(localStorage.residence);



function populateTable(){
  for (var i=0; i<applicationList.length; i++){
    applicationID = applicationList[i].applicationID;
    applicantID   = applicationList[i].applicantID;
    residenceID   = applicationList[i].residenceID;
    insertRow(applicationID, applicantID, residenceID);
  }
}



function insertRow(inNo, inApplicantID, inResidenceID){
  var table = document.getElementById("applicationListTable").getElementsByTagName("tbody")[0];
  newRow = table.insertRow(table.length);


  cell1           = newRow.insertCell(0);
  cell2           = newRow.insertCell(1);
  cell3           = newRow.insertCell(2);
  cell4           = newRow.insertCell(3);
                    newRow.setAttribute("onClick", "displayForm(this)");



  cell2.innerHTML = inNo;
  cell3.innerHTML = ` <div class="p-0 m-0"></div>
                      <div class="p-0 m-0"></div>`;
  cell4.innerHTML = "new";

  cell1.setAttribute("class", "hidden");
  cell4.setAttribute("class", "statusNew");

  for(var i=0; i<applicantList.length; i++){
    if(applicantList[i].applicantID == inApplicantID){
      applicantName = applicantList[i].fullName;
      break;
    }
  }

  /*
  for(var i=0; i<residenceList.length; i++){
    if(residenceList[i].residenceID == inResidenceID){
      residenceID = residenceList[i].residenceID;
    }
  }*/

  cell3.getElementsByTagName("div")[0].innerHTML = applicantName;
  cell3.getElementsByTagName("div")[1].innerHTML = inResidenceID;

}



function displayForm(row){
  //document.getElementById("formPane").innerHTML =  row.cells[1].innerHTML;
  var applicationID = row.cells[1].innerHTML;

  //var application;
  for(var i=0; i<applicationList.length; i++){
    if(applicationList[i].applicationID == applicationID){
      application = applicationList[i];
      break;
    }
  }

  //var residence;
  for(var i=0; i<residenceList.length; i++){
    if(residenceList[i].residenceID == application.residenceID){
      residence = residenceList[i];
      break;
    }
  }

  //var applicant;
  for(var i=0; i<applicantList.length; i++){
    if(applicantList[i].applicantID == application.applicantID){
      applicant = applicantList[i];
      break;
    }
  }


  document.getElementById("formPane").innerHTML   = `residenceID          : ` + residence.residenceID
                                                  + `<br>unit Available     : ` + residence.unitCount
                                                  + `<br>applicant username : ` + applicant.username
                                                  + `<br>amenities          : ` + residence.amenities
                                                  + `<br>monthlyIncome      : ` + applicant.monthlyIncome
                                                  + `<br>monthRequired      : ` + application.requiredMonth
                                                  + `<br>yearRequired       : ` + application.requiredYear;

  //document.getElementById("formPane").innerHTML


}
