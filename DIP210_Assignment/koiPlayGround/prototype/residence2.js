var dummyList2 = [    {residenceID:"A001", address:"No.911, Jalan Jalan, Kampung gantut, 54321 sini", unitCount:100, unitSize:3000, monthlyRental: 12000, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"A002", address:"No.912, Jalan roads, Kampung madosa, 12312 sana", unitCount:320, unitSize:2400, monthlyRental: 14214, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"A003", address:"No.817, Jalan nanan, Kampung sentos, 23552 mana", unitCount:761, unitSize:1500, monthlyRental: 23525, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"B210", address:"No.889, Jalan kiri_, Kampung gotaas, 23523 mama", unitCount:561, unitSize:1111, monthlyRental: 34634, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"B201", address:"No.770, Jalan kanan, Kampung baboru, 23523 papa", unitCount:791, unitSize:8787, monthlyRental: 12444, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"B208", address:"No.001, Jalan left_, Kampung mamoru, 45774 poko", unitCount:781, unitSize:8888, monthlyRental: 37347, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"MPU4", address:"No.003, Jalan right, Kampung kansai, 23423 piko", unitCount:087, unitSize:6666, monthlyRental: 28884, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"ELM2", address:"No.023, Jalan mati_, Kampung kyoton, 74574 nono", unitCount:418, unitSize:1088, monthlyRental: 23574, amenities: new Array, units: new Array, staffID: "KOI001"}];

var dummyList = [     {residenceID:"A001", address:"No.911, Jalan Jalan, Kampung gantut, 54321 sini", unitCount:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:"A002", address:"No.912, Jalan roads, Kampung madosa, 12312 sana", unitCount:320, unitSize:2400, monthlyRental: 14214},
                      {residenceID:"A003", address:"No.817, Jalan nanan, Kampung sentos, 23552 mana", unitCount:761, unitSize:1500, monthlyRental: 23525},
                      {residenceID:"B210", address:"No.889, Jalan kiri_, Kampung gotaas, 23523 mama", unitCount:561, unitSize:1111, monthlyRental: 34634},
                      {residenceID:"B201", address:"No.770, Jalan kanan, Kampung baboru, 23523 papa", unitCount:791, unitSize:8787, monthlyRental: 12444},
                      {residenceID:"B208", address:"No.001, Jalan left_, Kampung mamoru, 45774 poko", unitCount:781, unitSize:8888, monthlyRental: 37347},
                      {residenceID:"MPU4", address:"No.003, Jalan right, Kampung kansai, 23423 piko", unitCount:087, unitSize:6666, monthlyRental: 28884},
                      {residenceID:"ELM2", address:"No.023, Jalan mati_, Kampung kyoton, 74574 nono", unitCount:418, unitSize:1088, monthlyRental: 23574},];

residenceList = dummyList2;
responsibleOfficer = {staffID:"KOI001", fullName:"koiKoi"};
/*
function loadDummyData(){
  if(localStorage.residence==""){
    alert("localStorage is empty, populated with dummy data");
    console.log("its empty");
    localStorage.residence = JSON.stringify(dummyList2);
    readFromLocalStorage();
  }
}
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
*/

function populateTable(){
  for(var i=0; i<residenceList.length; i++){
    insertRow(i);
  }
}

function insertRow(rowNum){
  table = document.getElementById("residenceTable").getElementsByTagName("tbody")[0];
  newRow = table.insertRow(table.length)

  No                      = newRow.insertCell(0);
  residenceID             = newRow.insertCell(1);
  address                 = newRow.insertCell(2);
  unitSize                = newRow.insertCell(3);
  monthlyRental           = newRow.insertCell(4);
  unit                   = newRow.insertCell(5);
                            newRow.setAttribute("onClick", "showForm(this)");
                                //No.setAttribute("class", "hidden");

  if(residenceList.staffID == responsibleOfficer.staffID){

  }
  No.innerHTML            = 0;
  residenceID.innerHTML   = residenceList[rowNum].residenceID;
  address.innerHTML       = residenceList[rowNum].address;
  unit.innerHTML          = residenceList[rowNum].unit;
  unitSize.innerHTML      = residenceList[rowNum].unitSize;
  monthlyRental.innerHTML = residenceList[rowNum].monthlyRental;
}

function showForm(inRow){



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
                                                       <input type="text" class="form-control" name="" id="amenity_in" value="" placeholder="Enter Amenity">
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





  document.getElementById("staffID_in").value = responsibleOfficer.officerID;
  if(inRow != undefined){
    var residenceID = inRow.cells[1].innerHTML;
    //document.getElementById("rightPane").innerHTML = residenceID;
    var residence;
    for(var i=0; i<residenceList.length; i++){
      if(residenceList[i].residenceID == residenceID){
        residence = residenceList[i];
        break;
      }
    }
  }

}
