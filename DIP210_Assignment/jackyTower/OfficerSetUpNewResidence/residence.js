function scrollToMain(){
  document.getElementById("rightPane").scrollIntoView();
  console.log("ran");
}

residenceList = new Array;

responsibleOfficer = JSON.parse(localStorage.currentUser);


displayForm();





function writeToLocalStorage(){
  localStorage.residence = JSON.stringify(residenceList);
}
function readFromLocalStorage(){
  if(localStorage.residence != ""){
    residenceList = JSON.parse(localStorage.residence);
  }
}
function clearLocalStorage(){
  document.getElementById("rightPane").innerHTML = (residenceList == "");
  localStorage.residence = "";
}


function populateTable(){
  readFromLocalStorage();
  for(var i=0; i<residenceList.length; i++){
    insertRowToTable(i);
  }
}

function insertRowToTable(rowNum){
  table = document.getElementById("residenceTable").getElementsByTagName("tbody")[0];
  newRow = table.insertRow(table.length)

  //No                      = newRow.insertCell(0);
  residenceID             = newRow.insertCell(0);
  residenceName           = newRow.insertCell(1);
  //address                 = newRow.insertCell(3);
  //unitSize                = newRow.insertCell(4);
  monthlyRental           = newRow.insertCell(2);
  unit                    = newRow.insertCell(3);
  staffID                 = newRow.insertCell(4)
                            newRow.setAttribute("onClick", "displayForm(this)");
                            //No.setAttribute("class", "hidden");

  if(residenceList.staffID == responsibleOfficer.staffID){

  }
  //No.innerHTML            = 0;
  residenceID.innerHTML   = residenceList[rowNum].residenceID;
  residenceName.innerHTML = residenceList[rowNum].residenceName;
  //address.innerHTML       = residenceList[rowNum].address;
  unit.innerHTML          = residenceList[rowNum].unitCount;
  //unitSize.innerHTML      = residenceList[rowNum].unitSize;
  monthlyRental.innerHTML = residenceList[rowNum].monthlyRental;
  staffID.innerHTML       = residenceList[rowNum].staffID;
}

function resetTable(){
  document.getElementById("residenceTable").getElementsByTagName("tbody")[0].innerHTML = ``;
}


function displayForm(inRow){


  //console.log("display form");
  formStyle1 = `<form class="pt-3 pr-3" action="index.html" method="post">
                                                     <div class="form-group">
                                                       <label for="residenceID_in">Residence ID</label>
                                                       <input type="text" class="form-control" name="" id="residenceID_in" value="" placeholder="Enter Residence ID">
                                                     </div>
                                                     <div class="form-group">
                                                       <label for="residenceName_in">Residence Name</label>
                                                       <input type="text" class="form-control" name="" id="residenceName_in" value="" placeholder="Enter Residence Name">
                                                     </div>
                                                     <div class="form-group">
                                                       <label for="address_in">Address</label>
                                                       <input type="text" class="form-control" name="" id="address_in" value="" placeholder="Enter Address">
                                                     </div>
                                                     <div class="form-group">
                                                       <label for="units_in">Unit</label>
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
                                                     <div class="form-group">
                                                       <label for="amenities_in">Amenity</label>
                                                       <input type="text" class="form-control" name="" id="amenities_in" value="" placeholder="Enter Amenity">
                                                     </div>
                                                     <div class="form-group">
                                                       <label for="staffID_in">Responsible Officer</label>
                                                       <input type="text" class="form-control" name="" id="staffID_in" value="">
                                                     </div>


                                                     <div id="formOptionList"></div>

                                                     <div>
                                                       <input type="hidden" id="unit_in" value=""></input>
                                                     </div>
                                                   </form>`;
  document.getElementById("rightPane").innerHTML = `<form id="mainForm" class="pt-3 pr-3" action="index.html" method="post">
                                                     <div class="row pb-3">
                                                      <div class="col-4">
                                                       <label for="residenceID_in">Residence ID</label>
                                                       <input type="text" class="form-control" name="" id="residenceID_in" value="" placeholder="Enter Residence ID">
                                                      </div>
                                                      <div class="col-8">
                                                        <label for="residenceName_in">Residence Name</label>
                                                        <input type="text" class="form-control" name="" id="residenceName_in" value="" placeholder="Enter Residence Name">
                                                      </div>
                                                     </div>

                                                     <!--<div class="form-group">
                                                       <label for="residenceName_in">Residence Name</label>
                                                       <input type="text" class="form-control" name="" id="residenceName_in" value="" placeholder="Enter Residence Name">
                                                     </div>-->

                                                     <div class="row pb-3">
                                                       <div class="col-12">
                                                         <label for="address_in">Address</label>
                                                         <input type="text" class="form-control" name="" id="address_in" value="" placeholder="Enter Address">
                                                       </div>
                                                     </div>

                                                     <div class="row pb-3">
                                                       <div class="col-4">
                                                         <label for="unitCount_in">Unit</label>
                                                         <input type="text" class="form-control" name="" id="unitCount_in" value="" placeholder="Enter Units">
                                                       </div>
                                                       <div class="col-8">
                                                         <label for="unitSize_in">Unit Size</label>
                                                         <input type="text" class="form-control" name="" id="unitSize_in" value="" placeholder="Enter Unit Size  (square feet)">
                                                       </div>
                                                     </div>

                                                     <div class="row pb-3">
                                                       <div class="col-12">
                                                         <label for="monthlyRental_in">Monthly Rental</label>
                                                         <input type="text" class="form-control" name="" id="monthlyRental_in" value="" placeholder="Enter Monthly Rental (MYR)">
                                                        </div>
                                                     </div>

                                                     <div class="row pb-3">
                                                       <div class="col-12">
                                                         <label for="amenities_in">Amenity</label>
                                                         <input type="text" class="form-control" name="" id="amenities_in" value="" placeholder="Enter Amenity">
                                                       </div>
                                                    </div>
                                                     <div class="row pb-3">
                                                       <div class="col-12">
                                                         <label for="staffID_in">Responsible Officer</label>
                                                         <input type="text" class="form-control" name="" id="staffID_in" value="">
                                                       </div>
                                                    </div>

                                                    <div class="row pb-3 pt-4">
                                                      <div class="col-12" id="formOptionList"></div>
                                                    </div>

                                                    <!--<div>
                                                      <input type="hidden" id="unit_in" value=""></input>
                                                    </div>-->
                                                   </form>`;

  document.getElementById("staffID_in").value = responsibleOfficer.staffID;


  if(inRow == undefined){
    //console.log("form - inRow undefined")
    getFormElement();
    formOptionList.innerHTML = `<button onclick="addToArray();" class="btn btn-success" type="button" name="button">Add Residence</button>
                                <button onclick="resetForm();" class="btn" type="button" name="button">Cancel</button>`;
  }
  else{
    //console.log("form - inRow defined");
    var residenceID = inRow.cells[0].innerHTML;
    for(var i=0; i<residenceList.length; i++){
      if(residenceList[i].residenceID == residenceID){
        residence = residenceList[i];
        break;
      }
    }

    getFormElement();

    form_residenceID.value   = residence.residenceID;
    form_residenceName.value = residence.residenceName;
    form_address.value       = residence.address;
    form_unitCount.value     = residence.unitCount;
    form_unitSize.value      = residence.unitSize;
    form_monthlyRental.value = residence.monthlyRental;
    form_amenities.value     = residence.amenities;
    form_staffID.value       = residence.staffID;

    form_residenceID         .setAttribute("readonly", null);
    form_residenceName       .setAttribute("readonly", null);
    form_address             .setAttribute("readonly", null);
    form_unitCount           .setAttribute("readonly", null);
    form_unitSize            .setAttribute("readonly", null);
    form_monthlyRental       .setAttribute("readonly", null);
    form_amenities           .setAttribute("readonly", null);
    form_staffID             .setAttribute("readonly", null);

    formOptionList.innerHTML = `<button onclick="modifyArray(residence); scrollToMain();"class="btn btn-success" type="button" name="button">Edit</button>`;

    afterEnableEdit = `<button onclick="deleteRowFromArray(rowNo); showForm();"class="btn btn-danger" type="button" name="button">Del</button>
                                <button onclick="addFormDataToArray(rowNo); showForm(document.getElementById('residenceTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[rowNo]);"class="btn btn-success" type="button" name="button">Save Changes</button>
                                <button onclick="showForm(document.getElementById('residenceTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[rowNo]);"class="btn" type="button" name="button">Cancel</button>`;
  }
  document.getElementById("mainForm").scrollIntoView();
}



function modifyArray(residence){
  if(residence.staffID == responsibleOfficer.staffID){
    if(confirm("Making changes to the residence table will affect all related data. \n\n    PROCEED?")){

      //get inRow to execute resetForm function
      tableRow = document.getElementById("residenceTable").getElementsByTagName("tbody")[0].getElementsByTagName("tr");
      for(var i=0; i<tableRow.length; i++){
        if(tableRow[i].cells[0].innerHTML == residence.residenceID){
          inRow = tableRow[i];
        }
      }

      formOptionList.innerHTML = `<button onclick="delFromArray(residence); closeForm();"class="btn btn-danger" type="button" name="button">Del</button>
                                  <button onclick="editInArray(residence); resetForm(inRow);"class="btn btn-success" type="button" name="button">Save Changes</button>
                                  <button onclick="resetForm(inRow);"class="btn" type="button" name="button">Cancel</button>`;

      //form_residenceID         .removeAttribute("readonly", null);
      form_residenceName       .removeAttribute("readonly", null);
      form_address             .removeAttribute("readonly", null);
      //form_unitCount           .removeAttribute("readonly", null);
      form_unitSize            .removeAttribute("readonly", null);
      form_monthlyRental       .removeAttribute("readonly", null);
      form_amenities           .removeAttribute("readonly", null);
      form_staffID             .removeAttribute("readonly", null);
    }
  } else {
    alert("[Access Denied]\n" + responsibleOfficer.staffID + ":" + responsibleOfficer.fullName + " doesn't have the required permission for editing this record");
  }

}


function validateResidenceID(residenceID){
  //alert(form_residenceID.value == null);
  for(var i=0; i<residenceList.length; i++){
    readFromLocalStorage();
    if(residenceList[i].residenceID.toLowerCase() == form_residenceID.value.toLowerCase() || form_residenceID.value == null || form_residenceID.value == undefined || form_residenceID.value == ""){
      alert("residenceID must be unique and not empty.");
      return false;
    }
  }
  return true;
}
function validateUnitCount(unitCount){

  if(unitCount == null || unitCount == "" || unitCount == undefined || isNaN(unitCount)){
    alert("Unit Available must be a number and not empty");
    return false;
  }
  //alert('valie = ' + unitCount);
  return true;
}


function addToArray(){
  if(validateResidenceID(form_residenceID.innerHTML) && validateUnitCount(form_unitCount.value)){
    units = new Array;

    //alert(validateResidenceID("A001"));
    for(var i=0; i<form_unitCount.value; i++){
      units.push({unitNo:i, availability:"available"});
    }
    //console.log("here");
    //console.log("tgis" + form_unitCount.value + " " + units.length + " " + units[5].availability);
    residenceList.push({residenceID   : form_residenceID.value,
                        residenceName : form_residenceName.value,
                        address       : form_address.value,
                        unitCount     : form_unitCount.value,
                        unitSize      : form_unitSize.value,
                        monthlyRental : form_monthlyRental.value,
                        amenities     : form_amenities.value,
                        units         : units,
                        staffID       : form_staffID.value});

    writeToLocalStorage();
    //console.log("in add to array " + inRow);
    //resetForm(inRow);

    tableRow = document.getElementById('residenceTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr');



    resetTable();
    populateTable();
    //resetForm(document.getElementById('residenceTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[1]);
    //alert(form_residenceID.value + " " + tableRow[i].cells[0].innerHTML)

    for(var i=0; i<tableRow.length; i++){
      if(tableRow[i].cells[0].innerHTML == form_residenceID.value){
        resetForm(document.getElementById('residenceTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[i]);
      }
    }
  }
}

function editInArray(residence){
  /*
  This function parse in the seleceted residence object and retrives its
  residenceID. The residenceID retrieved is then compared to residenceID in the
  residenceList and the residence List item that match will be updated with
  the form value
  */
  for(var i=0; i<residenceList.length; i++){
    if(residenceList[i].residenceID == residence.residenceID){
      residenceList[i] = {residenceID   : form_residenceID.value,
                          residenceName : form_residenceName.value,
                          address       : form_address.value,
                          unitCount     : form_unitCount.value,
                          unitSize      : form_unitSize.value,
                          monthlyRental : form_monthlyRental.value,
                          amenities     : form_amenities.value,
                          units         : residenceList[i].units,
                          staffID       : form_staffID.value};
    }
  }
  //console.log("ran" + residence.residenceName);
  writeToLocalStorage();
  resetTable();
  populateTable();
}


function delFromArray(residence){
  for(var i=0; i<residenceList.length; i++){
    if(residence.residenceID == residenceList[i].residenceID){
      residenceList.splice(i, 1);
    }
  }
  resetTable();
  writeToLocalStorage();
  populateTable()
  closeForm();
}

function getFormElement(){
  form_residenceID          = document.getElementById("residenceID_in");
  form_residenceName        = document.getElementById("residenceName_in");
  form_address              = document.getElementById("address_in");
  form_unitCount            = document.getElementById("unitCount_in");
  form_unitSize             = document.getElementById("unitSize_in");
  form_monthlyRental        = document.getElementById("monthlyRental_in");
  form_amenities            = document.getElementById("amenities_in");
  form_staffID              = document.getElementById("staffID_in");
  form_ormOptionList        = document.getElementById("formOptionList");
}


function resetForm(inRow){
  //console.log("in reset form " + inRow);
  getFormElement();
  if(inRow==undefined){
    //console.log("clear form");
    /*
    form_residenceID.value   = null;
    form_residenceName.value = null;
    form_address.value       = null;
    form_unitCount.value     = null;
    form_unitSize.value      = null;
    form_monthlyRental.value = null;
    form_amenities.value     = null;
    form_staffID.value       = null;
    */
    displayForm();
  }

  else{
    //console.log("reset form with row");
    displayForm(inRow);
  }
}

function closeForm(){
  document.getElementById("rightPane").innerHTML = ``;
  //console.log("close form");
}
