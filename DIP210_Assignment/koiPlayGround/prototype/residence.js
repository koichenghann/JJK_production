var dummyResidence = [{residenceID:1, address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:2, address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:3, address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:4, address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:5, address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:6, address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:7, address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:8, address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},];


function populateTable(table){
  for(var i=0; i<table.length; i++){
    insertTableRow(i);
  }
}

function insertTableRow(item){
  var table = document.getElementById("residenceTable").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);

  No            = newRow.insertCell(0);
  residenceID   = newRow.insertCell(1);
  address       = newRow.insertCell(2);
  unitSize      = newRow.insertCell(3);
  monthlyRental = newRow.insertCell(4);
  units         = newRow.insertCell(5);

  No.innerHTML            = 001
  residenceID.innerHTML   = dummyResidence[item].residenceID;
  address.innerHTML       = dummyResidence[item].address;
  units.innerHTML         = dummyResidence[item].units;
  unitSize.innerHTML      = dummyResidence[item].unitSize;
  monthlyRental.innerHTML = dummyResidence[item].monthlyRental;
}




function ffinsertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
