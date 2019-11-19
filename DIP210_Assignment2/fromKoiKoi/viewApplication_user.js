var xmlhttp = new XMLHttpRequest();
var response = function(responseText){};
var applicationNum;
function appealRejection(selectedCell){
  console.log('clicked');
  applicationNum = parseInt(selectedCell.parentElement.parentElement.getElementsByTagName("td")[1].innerHTML.substring(1,6),10);
  console.log(applicationNum);
  button_appealRejection.addEventListener("click", function(){
    response = function(responseText){
      console.log(responseText);
    };
    submit('key=appeal&applicationID='+applicationNum);
  });
}

//var currentUser = JSON.parse(localStorage.currentUser);
//var residenceList = JSON.parse(localStorage.residence);
//filter out application that match the current applicant ID

//var currentOfficer=new Array;// = JSON.parse(localStorage.currentUser);
var residenceList=new Array;// = JSON.parse(localStorage.residence);
//var applicantList=new Array;// = JSON.parse(localStorage.applicant);
var allApplication=new Array;// = JSON.parse(localStorage.application);
var residenceList=new Array;


validateUser();



function validateUser(){
  response = function(responseText){
    if (responseText=="1") {
      getCurrentUser();
    }
    else {
      console.log('fuck'+responseText);
      //window.location.href="login.html";
    }
  };
  submit("key=validate&userType=housingOffcier");
}

function getCurrentUser(){
  response = function(responseText){
    if (responseText!="") {
      currentUser = JSON.parse(responseText);
      loadDataSet(currentUser);
    }
  };
  submit("key=getCurrentUser");
}

function loadDataSet(currentUser){
  response = function(responseText){
    var allApplication = JSON.parse(responseText)[0];
    console.log(allApplication);
    var applicantList = JSON.parse(responseText)[1];
    console.log(applicantList);
    var residenceList = JSON.parse(responseText)[2];
    console.log(residenceList);




    var applicationList = new Array;
    for (var i = 0; i < allApplication.length; i++) {
      if(allApplication[i].applicantID.toString() == currentUser.applicantID.toString()){
        applicationList.push(allApplication[i]);
      }
    }



    var table = document.getElementById("applicationTable").getElementsByTagName("tbody")[0];

    //table.setAttribute("class", "bg-dark");
    populateTable();

    function populateTable(){
      console.log(applicationList);
      for (var i = 0; i < applicationList.length; i++) {
        insertRowToTable(i);
      }
      //insert white space to the bottom of table
      table.insertRow(table.length).insertCell(0).innerHTML = `<br><br><br>`;
    }

    function appealRejection(selectedCell){
      applicationNum = parseInt(selectedCell.parentElement.parentElement.getElementsByTagName("td")[1].innerHTML.substring(1,6),10);
      inputIncome.value = currentUser.monthlyIncome;
    }

    function insertRowToTable(i){
      function appealRejection(selectedCell){
        applicationNum = parseInt(selectedCell.parentElement.parentElement.getElementsByTagName("td")[1].innerHTML.substring(1,6),10);
        inputIncome.value = currentUser.monthlyIncome;
      }
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
        case "waitlist":
          cell6.innerHTML = `<div class="">new</div>`;
          break;
        case "closed":
          cell6.innerHTML = `<div class="text-muted">rejected</div>`;
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


  };
  submit('key=loadDataSet');





}












function pad(source, amount){
  var newSource = source;
  //console.log(source.length);
  for (var i = 0; i < amount-source.length; i++) {newSource = "0"+newSource;}
  return newSource;
}

function submit(message){
  xmlhttp.open("POST", "viewApplication_user.php");
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlhttp.send(message);
  xmlhttp.onload = function(){console.log(this.responseText);response(this.responseText);};
}
