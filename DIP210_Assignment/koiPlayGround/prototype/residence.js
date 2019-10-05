var dummyResidence = [{residenceID:"A001", address:"No.911, Jalan Jalan, Kampung gantut, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:"A002", address:"No.912, Jalan roads, Kampung madosa, 12312 sana", units:320, unitSize:2400, monthlyRental: 14214},
                      {residenceID:"A003", address:"No.817, Jalan nanan, Kampung sentos, 23552 mana", units:761, unitSize:1500, monthlyRental: 23525},
                      {residenceID:"B210", address:"No.889, Jalan kiri_, Kampung gotaas, 23523 mama", units:561, unitSize:1111, monthlyRental: 34634},
                      {residenceID:"B201", address:"No.770, Jalan kanan, Kampung baboru, 23523 papa", units:791, unitSize:8787, monthlyRental: 12444},
                      {residenceID:"B208", address:"No.001, Jalan left_, Kampung mamoru, 45774 poko", units:781, unitSize:8888, monthlyRental: 37347},
                      {residenceID:"MPU4", address:"No.003, Jalan right, Kampung kansai, 23423 piko", units:087, unitSize:6666, monthlyRental: 28884},
                      {residenceID:"ELM2", address:"No.023, Jalan mati_, Kampung kyoton, 74574 nono", units:418, unitSize:1088, monthlyRental: 23574},];
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



//generic
function populateTable(dataSource){
  for(var i=0; i<dataSource.length; i++){
    insertRow(dataSource, i);
  }
}

//generic
function clearTable(table){
  var rowCount = document.getElementById(table).getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
  for(var i=rowCount-1; i=>0; i--){
    deleteRow(table, i);
  }
}

 //nonGeneric for residence table only
function insertRow(dataSource, item){
  var table = document.getElementById("residenceTable").getElementsByTagName("tbody")[0];
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

//generic
function deleteRow(table, row){
  document.getElementById(table).getElementsByTagName("tbody")[0].deleteRow(row);
}



//nonGeneric for showing residence form only
//but inteligent
function showForm(selectedRow){
   //element.setAttribute('style', element.getAttribute('style')+'; color: red');

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
                                                        <input type="text" class="form-control" name="" id="units_in" value="" placeholder="Enter Units">
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





    //document.getElementById("residenceID_in").value = selectedRow.cells[0].innerHTML;
    var rowNo = selectedRow.cells[0].innerHTML;
    var tempElement = document.getElementById("rightPane").getElementsByTagName("form")[0].getElementsByTagName("input")[2];


    var residenceID     = document.getElementById("residenceID_in");
    var address         = document.getElementById("address_in");
    var units           = document.getElementById("units_in");
    var unitSize        = document.getElementById("unitSize_in");
    var monthlyRental   = document.getElementById("monthlyRental_in");

    residenceID.value   = selectedRow.cells[1].innerHTML;
    address.value       = selectedRow.cells[2].innerHTML;
    units.value         = selectedRow.cells[3].innerHTML;
    unitSize.value      = selectedRow.cells[4].innerHTML;
    monthlyRental.value = selectedRow.cells[5].innerHTML;

    if(selectedRow != null){
      residenceID       .setAttribute("readonly", null);
      address           .setAttribute("readonly", null);
      units             .setAttribute("readonly", null);
      unitSize          .setAttribute("readonly", null);
      monthlyRental     .setAttribute("readonly", null);
    }

}
