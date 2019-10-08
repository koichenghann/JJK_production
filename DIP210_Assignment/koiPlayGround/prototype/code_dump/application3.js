var dummyApplication = [{applicationID:1, applicantID:3, residenceID:"A001", officerID:1},
                        {applicationID:5, applicantID:4, residenceID:"A002", officerID:1},
                        {applicationID:4, applicantID:1, residenceID:"A003", officerID:1},
                        {applicationID:3, applicantID:1, residenceID:"B210", officerID:1},
                        {applicationID:2, applicantID:1, residenceID:"MPU4", officerID:1},
                        {applicationID:6, applicantID:1, residenceID:"B201", officerID:2},
                        {applicationID:7, applicantID:1, residenceID:"B208", officerID:2},
                        {applicationID:8, applicantID:1, residenceID:"1", officerID:2},
                        {applicationID:9, applicantID:1, residenceID:"1", officerID:2},
                        {applicationID:10, applicantID:1, residenceID:"1", officerID:2},
                        {applicationID:11, applicantID:1, residenceID:"1", officerID:2},
                        {applicationID:12, applicantID:1, residenceID:"1", officerID:2},
                        {applicationID:13, applicantID:1, residenceID:"1", officerID:2},
                        {applicationID:14, applicantID:1, residenceID:"1", officerID:2},
                        {applicationID:15, applicantID:1, residenceID:"1", officerID:2},
                        {applicationID:16, applicantID:1, residenceID:"1", officerID:2},
                        {applicationID:17, applicantID:1, residenceID:"1", officerID:2},
                        {applicationID:18, applicantID:1, residenceID:"1", officerID:2}];

var dummyApplicant   = [{applicantID:3, username:"jeff", td:0},
                        {applicantID:4, username:"jacky",td:0},
                        {applicantID:1, username:"koi", td:0}];

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
      applicantName = applicantList[i].username;
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

  var application;
  for(var i=0; i<applicationList.length; i++){
    if(applicationList[i].applicationID == applicationID){
      application = applicationList[i];
      break;
    }
  }

  var residence;
  for(var i=0; i<residenceList.length; i++){
    if(residenceList[i].residenceID == application.residenceID){
      residence = residenceList[i];
      break;
    }
  }

  var applicant;
  for(var i=0; i<applicantList.length; i++){
    if(applicantList[i].applicantID == application.applicantID){
      applicant = applicantList[i];
      break;
    }
  }

  document.getElementById("formPane").innerHTML   = `application:` + application.applicationID
                                                + `<br>applicant:` + applicant.username
                                                + `<br>residence:` + residence.residenceID;
}
