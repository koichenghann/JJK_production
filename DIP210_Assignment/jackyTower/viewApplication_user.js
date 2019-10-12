console.log(localStorage.check);


var dummyApplication  =[{applicationID:1, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:2, applicantID:1, residenceID:"A002", applicationDate:new Date("21 October 1991"), requiredMonth: "January", requiredYear: "2090", status: "rejected", attachment:new Array},
                        {applicationID:3, applicantID:1, residenceID:"A003", applicationDate:new Date("22 October 2092"), requiredMonth: "Febuary", requiredYear: "1991", status: "rejected", attachment:new Array},
                        {applicationID:4, applicantID:1, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "rejected", attachment:new Array},
                        {applicationID:5, applicantID:1, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "closed", attachment:new Array},
                        {applicationID:6, applicantID:2, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "appealed", attachment:new Array},
                        {applicationID:7, applicantID:2, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "appealed", attachment:new Array}];

//  localStorage.application = ``; //to reset localStorage.application
if(localStorage.application==""||localStorage.application==undefined){localStorage.application=JSON.stringify(dummyApplication);console.log("applicationList empty: populated with dummy data");}


var currentUser = JSON.parse(localStorage.currentUser);
var residenceList = JSON.parse(localStorage.residence);

//filter out application that match the current applicant ID
var allApplication = JSON.parse(localStorage.application);
var applicationList = new Array;
for (var i = 0; i < allApplication.length; i++) {
  if(allApplication[i].applicantID.toString() == currentUser.applicantID.toString()){
    applicationList.push(allApplication[i]);
  }
}



var table = document.getElementById("applicationTable").getElementsByTagName("tbody")[0];

//table.setAttribute("class", "bg-dark");


function populateTable(){
  console.log(applicationList);
  for (var i = 0; i < applicationList.length; i++) {
    insertRowToTable(i);
  }
  //insert white space to the bottom of table
  table.insertRow(table.length).insertCell(0).innerHTML = `<br><br><br>`;
}

function insertRowToTable(i){

  var residence;
  for (var x = 0; x < residenceList.length; x++) {
    if (residenceList[x].residenceID == applicationList[i].residenceID) {
      residence = residenceList[x];
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



  cell1.innerHTML = pad((i+1).toString(), 2);
  cell2.innerHTML = "A" + pad(applicationList[i].applicationID.toString(), 5);
  cell3.innerHTML = applicationList[i].residenceID;
  cell4.innerHTML = residence.unitCount;
  cell5.innerHTML = residence.monthlyRental;


  cell6.innerHTML = applicationList[i].status;
  switch(applicationList[i].status){
    case "appealed":
      cell6.innerHTML = `<div class="">Appeal Pending</div>`;
      break;
    case "rejected":
      cell6.innerHTML = `<div class="text-danger">rejected</div>`;
      break;
    case "new":
      cell6.innerHTML = `<div class="">new</div>`;
      break;
    case "closed":
      cell6.innerHTML = `<div class="text-muted">closed</div>`;
      break;
    case "accepted":
      cell6.innerHTML = `<div class="text-success">Accepted</div>`;
      break;
  }

  if (applicationList[i].status=="rejected") {
    cell7.innerHTML = `<button type="button"
                        class="btn btn-sm btn-outline-danger font-weight-bold appeal_Button"
                        data-toggle="modal" data-target="#appeal_MH" onclick="appealRejection(this);">
                          Appeal Rejection
                        </button>`
  }
  else {
    cell7.innerHTML = " ";
  }

  /*else if (["waitlist", "new", "pending"].includes(applicationList[i].status)) {
    cell7.innerHTML = `<div class="text-warning text-center">pending</div>`
  }*/
  //cell7.innerHTML = "N/A";
}




var applicationID;
var applicationNum;
var inputIncome = document.getElementById("inputIncome");

function appealRejection(selectedCell){
  applicationID = parseInt(selectedCell.parentElement.parentElement.getElementsByTagName("td")[1].innerHTML.substring(1,6),10);

  for (var i = 0; i < applicationList.length; i++){
    console.log(i);
    if(applicationList[i].applicationID.toString() == applicationID.toString()){
      console.log("found");
      applicationNum = i;
    }
  }
  inputIncome.value = currentUser.monthlyIncome;
}


var button_appealRejection = document.getElementById("button_appealRejection");
var file_incomeSlip = document.getElementById("inputIncomePayslip");
//button_appealRejection.setAttribute("type", "button");


//find the position of currentUser in the applicant list and store it in currentUserNum
var currentUserNum;
var applicantList = JSON.parse(localStorage.applicant);
for (var i = 0; i < applicantList.length; i++) {
  if (currentUser.applicantID.toString()==applicantList[i].applicantID.toString()) {
    currentUserNum = i;
  }
}

//event handler for submit appeal button
button_appealRejection.addEventListener("click", function(){
  if(file_incomeSlip.value!=""){
    //store the revised income
    applicantList[currentUserNum].monthlyIncome = inputIncome.value;
    currentUser.monthlyIncome = inputIncome.value;


    //store the uploaded file
    if (applicationList[applicationNum].attachment!=undefined) {
      applicationList[applicationNum].attachment[0] = {name:"incomeSlip",item:file_incomeSlip.value}
    } else(
      applicationList[applicationNum].attachment.push({name:"incomeSlip",item:file_incomeSlip.value})
    )

    //update local storage

    //localStorage.application=JSON.stringify(applicationList);


    console.log("attachment: " + applicationList[applicationNum].attachment + " end.");
  }
  console.log(file_incomeSlip.value);
  applicationList[applicationNum].status = "appealed";

  localStorage.applicant=JSON.stringify(applicantList);
  localStorage.application = JSON.stringify(applicationList);
  localStorage.currentUser = JSON.stringify(currentUser);
})

console.log(applicationList);
//console.log(applicantList[applicationNum].attachment[0]);




function pad(source, amount){
  var newSource = source;
  //console.log(source.length);
  for (var i = 0; i < amount-source.length; i++) {newSource = "0"+newSource;}
  return newSource;
}
