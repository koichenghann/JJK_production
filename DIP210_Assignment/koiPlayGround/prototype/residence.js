var dummyResidence = [{residenceID:"A001", address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:"A002", address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:"A003", address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:"B210", address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:"B201", address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:"B208", address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:"MPU4", address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:"ELM2", address:"No.911, Jalan Jalan, Kampung madosa, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},];
var disMode;

//incomplete
function hideCol(){
  if(disMode == "hidden")
    disMode = "";
  else
    disMode = "hidden";

  document.getElementById("residenceNo_th").setAttribute("class", disMode);
  //populateTable(dummyResidence);
}


//incomplete
function deleteRow(row){
  //var table = document.getElementById("leftPane").getElementsByTagName("tbody")[0].deleteRow[row];

}


function populateTable(table){
  //var table = document.getElementById("leftPane").getElementsByTagName("tbody")[0];
  //table.innerHTML = "jeff";

  for(var i=0; i<table.length; i++){
    insertRow(i, dummyResidence);
  }
}


function insertRow(item, dataSource){
  var table = document.getElementById("leftPane").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);


  No            = newRow.insertCell(0);
  residenceID   = newRow.insertCell(1);
  address       = newRow.insertCell(2);
  unitSize      = newRow.insertCell(3);
  monthlyRental = newRow.insertCell(4);
  units         = newRow.insertCell(5);
                  newRow.setAttribute("onClick", "showForm(this)");


  No.innerHTML            = item;
  residenceID.innerHTML   = dataSource[item].residenceID;
  address.innerHTML       = dataSource[item].address;
  units.innerHTML         = dataSource[item].units;
  unitSize.innerHTML      = dataSource[item].unitSize;
  monthlyRental.innerHTML = dataSource[item].monthlyRental;


  No.setAttribute("class", disMode);
}


function showForm(selectedRow){
  document.getElementById("rightPane").innerHTML = `<form class="" action="index.html" method="post">
                                                      <div class="form-group">
                                                        <label for="residenceID_in">Residence ID</label>
                                                        <input type="text" class="form-control" name="" id="residenceID_in" value="" placeholder="Enter Residence ID">
                                                      </div>
                                                      <div class="form-group">
                                                        <label for="address_in">Address</label>
                                                        <input type="text" class="form-control" name="" id="address_in" value="" placeholder="Enter Address">
                                                      </div>
                                                      <div class="form-group">
                                                        <label for="units_in">Units</label>
                                                        <input type="text" class="form-control" name="" id="units" value="" placeholder="Enter Units">
                                                      </div>
                                                      <div class="form-group">
                                                        <label for="unitSize_in">Unit Size</label>
                                                        <input type="text" class="form-control" name="" id="unitSize_in" value="" placeholder="Enter Unit Size  (square feet)">
                                                      </div>
                                                      <div class="form-group">
                                                        <label for="monthlyRental_in">Monthly Rental</label>
                                                        <input type="text" class="form-control" name="" id="monthlyRental_in" value="" placeholder="Enter Monthly Rental (MYR)">
                                                      </div>
                                                    </form>`;

    document.getElementById("residenceID_in").value = selectedRow.cells[0].innerHTML;
}
