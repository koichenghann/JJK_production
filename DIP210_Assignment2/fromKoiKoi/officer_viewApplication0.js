var xmlhttp = new XMLHttpRequest();
var response = function(responseText){};


var currentOfficer=new Array;// = JSON.parse(localStorage.currentUser);
var residenceList=new Array;// = JSON.parse(localStorage.residence);
var applicantList=new Array;// = JSON.parse(localStorage.applicant);
var allApplication=new Array;// = JSON.parse(localStorage.application);
var residenceList=new Array;// = JSON.parse(localStorage.residence);

var table = document.getElementById("form_table").getElementsByTagName("tbody")[0];

var check_new = document.getElementById("check_new");
var check_waitlist = document.getElementById("check_waitlist");
var check_appeal = document.getElementById("check_appeal");
var check_rejected = document.getElementById("check_rejected");
var check_accepted = document.getElementById("check_accepted");

check_new.addEventListener("click", function(){loadDataSet();});
check_waitlist.addEventListener("click", function(){loadDataSet();});
check_appeal.addEventListener("click", function(){loadDataSet();});
check_rejected.addEventListener("click", function(){loadDataSet();});
check_accepted.addEventListener("click", function(){loadDataSet();});
check_closed.addEventListener("click", function(){loadDataSet();});
var displayCritiria = new Array;
var applicationList = new Array;
//var form_btn_select = document.getElementByClass
validateUser();



function validateUser(){
  response = function(responseText){
    if (responseText=="1") {
      getCurrentUser();
    }
    else {
      window.location.href="login.html";
    }
  };
  submit("key=validate&userType=housingOffcier");
}

function getCurrentUser(){
  response = function(responseText){
    if (responseText!="") {
      currentOfficer = JSON.parse(responseText);
      loadDataSet();
    }
  };
  submit("key=getCurrentUser");
}

function loadDataSet(){
  response = function(responseText){
    var allApplication = JSON.parse(responseText)[0];
    console.log(allApplication);
    var applicantList = JSON.parse(responseText)[1];
    console.log(applicantList);
    var residenceList = JSON.parse(responseText)[2];
    console.log(residenceList);

    console.log(allApplication.length);
    console.log(residenceList.length);
    displayCritiria = new Array;
    if (check_new.checked==true) {displayCritiria.push("new");}
    if (check_waitlist.checked==true) {displayCritiria.push("waitlist");}
    if (check_appeal.checked==true) {displayCritiria.push("appealed");}
    if (check_rejected.checked==true) {displayCritiria.push("rejected");}
    if (check_accepted.checked==true) {displayCritiria.push("accepted");}
    if (check_closed.checked==true) {displayCritiria.push("closed");}

    //console.log(displayCritiria);
    applicationList = new Array;
    for (var i = 0; i < allApplication.length; i++) {
      for (var x = 0; x < residenceList.length; x++) {
        //console.log('outer ring: '  + allApplication[i].residenceID +" "+residenceList[x].residenceID);

        if(allApplication[i].residenceID == residenceList[x].residenceID && residenceList[x].staffID == currentOfficer.staffID){
          if (displayCritiria.includes(allApplication[i].status.toLowerCase())){
            applicationList.push(allApplication[i]);
          }
        }
      }
    }
    console.log(applicationList);
    populateTable(applicationList, applicantList, residenceList);

  }
  submit("key=loadDataSet");
}



function submit(message){
  xmlhttp.open("POST", "officer_viewApplication.php");
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlhttp.send(message);
  xmlhttp.onload = function(){console.log(this.responseText);response(this.responseText);};
}






function loadApplication(){
  console.log('ran here');
  console.log(allApplication.length);
  console.log(residenceList.length);
  /*
  displayCritiria = new Array;
  if (check_new.checked==true) {displayCritiria.push("new");}
  if (check_waitlist.checked==true) {displayCritiria.push("waitlist");}
  if (check_appeal.checked==true) {displayCritiria.push("appealed");}
  if (check_rejected.checked==true) {displayCritiria.push("rejected");}
  if (check_accepted.checked==true) {displayCritiria.push("accepted");}
  if (check_closed.checked==true) {displayCritiria.push("closed");}

  //console.log(displayCritiria);
  applicationList = new Array;
  for (var i = 0; i < allApplication.length; i++) {
    for (var x = 0; x < residenceList.length; x++) {
      console.log('outer ring: ' + i+x);

      if(allApplication[i].residenceID == residenceList[x].residenceID && residenceList[x].staffID == currentOfficer.staffID){
        if (displayCritiria.includes(allApplication[i].status.toLowerCase())){
          applicationList.push(allApplication[i]);
        }
      }
    }
  }*/
  console.log(applicationList);
  //console.log(applicationList);
  populateTable();
}


function populateTable(applicationList, applicantList, residenceList){
  table.innerHTML =  ``;
  console.log(applicationList);

  for (var i = 0; i < applicationList.length; i++) {
    console.log("ring");
    insertRowToTable(i, applicationList, applicantList, residenceList);
  }
}

function insertRowToTable(i, applicationList, applicantList, residenceList){
  console.log('ring 2');
  console.log(residenceList);
  var residence;
  for (var x = 0; x < residenceList.length; x++) {
    console.log('outer ring: '  + residenceList[x].residenceID +" "+applicationList[i].residenceID);

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
  console.log(applicationList[i].requiredMonth);
  cell8.innerHTML = applicationList[i].requiredMonth;
  cell9.innerHTML = applicationList[i].requiredYear;
  cell10.innerHTML = applicationList[i].status;
  if(["accepted", "rejected", "closed"].includes(applicationList[i].status)){
    cell11.innerHTML == ` `;
  }
  else{
    cell11.innerHTML = `<button onclick="selectApplication(this, applicationList);"class="form_btn_select btn btn-warning btn-sm w-100 m-0"type="button" name="button">select</button>`;
  }
}


function selectApplication(selectedRow, applicationList){
  var selectedApplicationID = parseInt( (selectedRow.parentElement.parentElement.getElementsByTagName("td")[0].innerHTML).substring(1,6)  ,10);
  response = function(responseText){
    window.location.href = "officer_allocateHousing.html"
  };
  submit('key=selectApplication&selectedApplicationID='+ selectedApplicationID);
}



function pad(source, amount){
  var newSource = source;
  //console.log(source.length);
  for (var i = 0; i < amount-source.length; i++) {newSource = "0"+newSource;}
  return newSource;
}
