
var dummyApplication = [{applicationID:1, applicantID:3, residenceID:5, officerID:1},
                        {applicationID:5, applicantID:4, residenceID:8, officerID:1},
                        {applicationID:4, applicantID:1, residenceID:1, officerID:1},
                        {applicationID:3, applicantID:1, residenceID:1, officerID:1},
                        {applicationID:2, applicantID:1, residenceID:1, officerID:1},
                        {applicationID:6, applicantID:1, residenceID:1, officerID:2},
                        {applicationID:7, applicantID:1, residenceID:1, officerID:2},
                        {applicationID:8, applicantID:1, residenceID:1, officerID:2},
                        {applicationID:9, applicantID:1, residenceID:1, officerID:2},
                        {applicationID:10, applicantID:1, residenceID:1, officerID:2},
                        {applicationID:11, applicantID:1, residenceID:1, officerID:2},
                        {applicationID:12, applicantID:1, residenceID:1, officerID:2},
                        {applicationID:13, applicantID:1, residenceID:1, officerID:2},
                        {applicationID:14, applicantID:1, residenceID:1, officerID:2},
                        {applicationID:15, applicantID:1, residenceID:1, officerID:2},
                        {applicationID:16, applicantID:1, residenceID:1, officerID:2},
                        {applicationID:17, applicantID:1, residenceID:1, officerID:2},
                        {applicationID:18, applicantID:1, residenceID:1, officerID:2}];
var dummyApplicant = [{applicantID:3, applicantName}]
var applicationList = dummyApplication;
var residenceList = JSON.parse(localStorage.residence);



function populateTable(){
  for (var i=0; i<applicationList.length; i++){
    applicationID = applicationList[i].applicationID;
    applicantID   = applicationList[i].applicantID;
    residenceID   = applicationList[i].residenceID;
    insertRow(applicationID, applicantID, residenceID);
  }
}



function insertRow(inNo, inCell1, inCell2){
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

  applicantName =
  residenceID = inCell2
  cell3.getElementsByTagName("div")[0].innerHTML = inCell1;
  cell3.getElementsByTagName("div")[1].innerHTML = inCell2;

}



function displayForm(row){
  var applicationID = row.cells[1].innerHTML;
  var applicationObject;
  //alert(applicationID);
  for(var i=0; i<applicationList.length; i++){
    if(applicationList[i].applicationID == applicationID){
      //alert("found: " + i);
      break;
    }
  }
  var residenceObject;
  for(var i=0; i>residenceList.length; i++){

  }

  document.getElementById("rightPane")
}
