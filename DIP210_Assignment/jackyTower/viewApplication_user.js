var applicationList = JSON.parse(localStorage.application);
var currentUser = JSON.parse(localStorage.currentUser);
var residenceList = JSON.parse(localStorage.residence);

var table = document.getElementById("applicationTable").getElementsByTagName("tbody")[0];

//table.setAttribute("class", "bg-dark");


function populateTable(){
  for (var i = 0; i < applicationList.length; i++) {
    insertRowToTable(i);
  }
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


  cell1.innerHTML = i;
  cell2.innerHTML = applicationList[i].applicationID;
  cell3.innerHTML = applicationList[i].residenceID;
  cell4.innerHTML = residence.unitCount;
  cell5.innerHTML = residence.monthlyRental;
  cell6.innerHTML = applicationList[i].status;
  cell7.innerHTML = "";
}
