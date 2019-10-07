
var dummyList = [{residenceID:"A001", address:"No.911, Jalan Jalan, Kampung gantut, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:"A002", address:"No.912, Jalan roads, Kampung madosa, 12312 sana", units:320, unitSize:2400, monthlyRental: 14214},
                      {residenceID:"A003", address:"No.817, Jalan nanan, Kampung sentos, 23552 mana", units:761, unitSize:1500, monthlyRental: 23525},
                      {residenceID:"B210", address:"No.889, Jalan kiri_, Kampung gotaas, 23523 mama", units:561, unitSize:1111, monthlyRental: 34634},
                      {residenceID:"B201", address:"No.770, Jalan kanan, Kampung baboru, 23523 papa", units:791, unitSize:8787, monthlyRental: 12444},
                      {residenceID:"B208", address:"No.001, Jalan left_, Kampung mamoru, 45774 poko", units:781, unitSize:8888, monthlyRental: 37347},
                      {residenceID:"MPU4", address:"No.003, Jalan right, Kampung kansai, 23423 piko", units:087, unitSize:6666, monthlyRental: 28884},
                      {residenceID:"ELM2", address:"No.023, Jalan mati_, Kampung kyoton, 74574 nono", units:418, unitSize:1088, monthlyRental: 23574},];
var residenceList = new Array;


function loadDummyData(){
  //readFromLocalStorage();
  //alert(typeof residenceList);
  //alert(localStorage.residence=="");
  //residenceList = JSON.parse(localStorage.residence);
  //alert("didnt run");
  if(localStorage.residence==""){
    alert("localStorage is empty, populated with dummy data");
    console.log("its empty");
    localStorage.residence = JSON.stringify(dummyList);
    readFromLocalStorage();
  }

}

//readFromLocalStorage();


function writeToLocalStorage(){
  localStorage.residence = JSON.stringify(residenceList);
}
function readFromLocalStorage(){
  residenceList = JSON.parse(localStorage.residence);
}
function clearLocalStorage(){
  document.getElementById("rightPane").innerHTML = (residenceList == "");
  localStorage.residence = "";

}


var disMode;
//var jeff = "notJeff";
var formData = new Array;
var formElement = new Array;
var genNo = 0;
//var rowNo;

var residenceID       = document.getElementById("residenceID_in");
var address           = document.getElementById("address_in");
var units             = document.getElementById("units_in");
var unitSize          = document.getElementById("unitSize_in");
var monthlyRental     = document.getElementById("monthlyRental_in");

//incomplete useless
function hideCol(){
  if(disMode == "hidden")
    disMode = "";
  else
    disMode = "hidden";

  document.getElementById("residenceNo_th").setAttribute("class", disMode);
  //populateTable(residenceList);
}



//generic
function populateTable(){
  readFromLocalStorage();
  //writeToLocalStorage();
  genNo = 0;
  if(residenceList!= null){
    for(var i=0; i<residenceList.length; i++){
      insertRow(residenceList, i);
    }
  }
}

//generic
function clearTable(table){
  var rowCount = document.getElementById(table).getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
  for(var i=rowCount-1; i>=0; i--){
    deleteRow(table, i);
  }
}

 //nonGeneric for residence table only
function insertRow(dataSource, item, position){
  var table = document.getElementById("residenceTable").getElementsByTagName("tbody")[0];
  var selectedRow;

  selectedRow = table.insertRow(table.length);

  No                      = selectedRow.insertCell(0);
  residenceID             = selectedRow.insertCell(1);
  address                 = selectedRow.insertCell(2);
  unitSize                = selectedRow.insertCell(3);
  monthlyRental           = selectedRow.insertCell(4);
  units                   = selectedRow.insertCell(5);
                            selectedRow.setAttribute("onClick", "showForm(this)");


  No.innerHTML            = genNo; genNo++;
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
   //var testResidence = [{residenceID:"A001", address:"No.911, Jalan Jalan, Kampung gantut, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000}];

   document.getElementById("rightPane").innerHTML = `<form class="pt-3 pr-3" action="index.html" method="post">
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
                                                      <div id="formOptionList">
                                                      </div>
                                                    </form>`;



    var residenceID       = document.getElementById("residenceID_in");
    var address           = document.getElementById("address_in");
    var units             = document.getElementById("units_in");
    var unitSize          = document.getElementById("unitSize_in");
    var monthlyRental     = document.getElementById("monthlyRental_in");

    formElement       = {residenceID:residenceID, address:address, units:units, unitSize:unitSize, monthlyRental:monthlyRental};
    //formData       = [{residenceID:residenceID.value, address:address.value, units:units.value, unitSize:unitSize.value, monthlyRental:monthlyRental.value}];

    if(selectedRow == undefined){
      //jeff = "jeffrey";
      document.getElementById("formOptionList").innerHTML = ` <button onclick="addFormDataToArray();" class="btn btn-success" type="button" name="button">Add Residence</button>
                                                              <button onclick="resetForm();" class="btn" type="button" name="button">Cancel</button>`;
    }
    else{
      rowNo               = selectedRow.cells[0].innerHTML;

      residenceID.value   = selectedRow.cells[1].innerHTML;
      address.value       = selectedRow.cells[2].innerHTML;
      unitSize.value      = selectedRow.cells[3].innerHTML;
      monthlyRental.value = selectedRow.cells[4].innerHTML;
      units.value         = selectedRow.cells[5].innerHTML;

      residenceID         .setAttribute("readonly", null);
      address             .setAttribute("readonly", null);
      units               .setAttribute("readonly", null);
      unitSize            .setAttribute("readonly", null);
      monthlyRental       .setAttribute("readonly", null);

      //residenceID         .setAttribute("class", "form-control-plaintext");
      //address             .setAttribute("class", "form-control-plaintext");
      //units               .setAttribute("class", "form-control-plaintext");
      //unitSize            .setAttribute("class", "form-control-plaintext");
      //monthlyRental       .setAttribute("class", "form-control-plaintext");

      document.getElementById("formOptionList").innerHTML = ` <button onclick="modifyArray(rowNo);"class="btn btn-success" type="button" name="button">Edit</button>
                                                              `;

    }
}


function modifyArray(rowNo){
  if(confirm("Making changes to the table will affect all existing data related to Residence, Proceed?")){


    //rowNo = inRowNo;
    //selectedRow = inSelectedRow;

    var residenceID       = document.getElementById("residenceID_in");
    var address           = document.getElementById("address_in");
    var units             = document.getElementById("units_in");
    var unitSize          = document.getElementById("unitSize_in");
    var monthlyRental     = document.getElementById("monthlyRental_in");

    residenceID           .removeAttribute("readonly");
    address               .removeAttribute("readonly");
    units                 .removeAttribute("readonly");
    unitSize              .removeAttribute("readonly");
    monthlyRental         .removeAttribute("readonly");

    document.getElementById("formOptionList").innerHTML = ` <button onclick="deleteRowFromArray(rowNo); showForm();"class="btn btn-danger" type="button" name="button">Del</button>
                                                            <button onclick="addFormDataToArray(rowNo); showForm(document.getElementById('residenceTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[rowNo]);"class="btn btn-success" type="button" name="button">Save Changes</button>
                                                            <button onclick="showForm(document.getElementById('residenceTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[rowNo]);"class="btn" type="button" name="button">Cancel</button>`;
  }
}


function addFormDataToArray(position){
  var residenceID       = document.getElementById("residenceID_in").value;
  var address           = document.getElementById("address_in").value;
  var units             = document.getElementById("units_in").value;
  var unitSize          = document.getElementById("unitSize_in").value;
  var monthlyRental     = document.getElementById("monthlyRental_in").value;

  formData = {residenceID:residenceID, address:address, units:units, unitSize:unitSize, monthlyRental:monthlyRental};

  if(position == undefined){
    residenceList.push(formData);
  }
  else{
    residenceList[position] = formData;
  }

  writeToLocalStorage();

   resetForm();
   clearTable('residenceTable');
   populateTable();

}


function deleteRowFromArray(position){

  residenceList.splice(position, 1);
  writeToLocalStorage();
  resetForm();
  clearTable("residenceTable");
  populateTable();


  alert("deleted");
}


//currently unused
function addFormDataToTable(){
  var residenceID       = document.getElementById("residenceID_in").value;
  var address           = document.getElementById("address_in").value;
  var units             = document.getElementById("units_in").value;
  var unitSize          = document.getElementById("unitSize_in").value;
  var monthlyRental     = document.getElementById("monthlyRental_in").value;

  formData = [{residenceID:residenceID, address:address, units:units, unitSize:unitSize, monthlyRental:monthlyRental}];
  insertRow(formData, 0);
  resetForm(formElement);
}

function resetForm(){
  var residenceID       = document.getElementById("residenceID_in");
  var address           = document.getElementById("address_in");
  var units             = document.getElementById("units_in");
  var unitSize          = document.getElementById("unitSize_in");
  var monthlyRental     = document.getElementById("monthlyRental_in");

  //var formElement       = {residenceID:residenceID, address:address, units:units, unitSize:unitSize, monthlyRental:monthlyRental};

  residenceID.value     = null;
  address.value         = null;
  units.value           = null;
  unitSize.value        = null;
  monthlyRental.value   = null;
}

//document.getElementById("bd1").addEventListerner("load", populateTable(residenceList));

/*
funtion generateUnit(unitCount){
  for(var i=0; i<unitCount; i++){

  }
}
*/
