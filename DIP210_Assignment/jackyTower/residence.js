var dummyList2 = [    {residenceID:"A001", residenceName:"Twins Residence", address:"2, Jalan Damanlela, Pusat Bandar Damansara, 50490 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur", unitCount:100, unitSize:3000, monthlyRental: 12000.00, amenities: undefined, units: new Array, staffID: "KOI001"},
                      {residenceID:"A002", residenceName:"jeff Penthouse", address:"No.912, Jalan roads, Kampung madosa, 12312 sana", unitCount:320, unitSize:2400, monthlyRental: 14214.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                      {residenceID:"A003", residenceName:"Koi Resort", address:"No.817, Jalan nanan, Kampung sentos, 23552 mana", unitCount:761, unitSize:1500, monthlyRental: 23525.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                      {residenceID:"A004", residenceName:"no name", address:"No.889, Jalan kiri_, Kampung gotaas, 23523 mama", unitCount:561, unitSize:1111, monthlyRental: 34634.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                      {residenceID:"B208", residenceName:"undefined", address:"No.770, Jalan kanan, Kampung baboru, 23523 papa", unitCount:791, unitSize:8787, monthlyRental: 12444.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                      {residenceID:"B210", residenceName:"null", address:"No.001, Jalan left_, Kampung mamoru, 45774 poko", unitCount:781, unitSize:8888, monthlyRental: 37347.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                      {residenceID:"MPU4", residenceName:"not error", address:"No.003, Jalan right, Kampung kansai, 23423 piko", unitCount:087, unitSize:6666, monthlyRental: 28884.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                      {residenceID:"B201", residenceName:"empty", address:"No.023, Jalan mati_, Kampung kyoton, 74574 nono", unitCount:418, unitSize:1088, monthlyRental: 23574.00, amenities: "ew Array", units: new Array, staffID: "KOI001"},
                      {residenceID:"K00B339", residenceName:"Tolong Jaya Condominium", address:"No. 15, Jalan Sri Semantan 1, Off, Jalan Semantan, Bukit Damansara, 50490 Kuala Lumpur,", unitCount:99, unitSize:735, monthlyRental: 850.00, amenities: "Walking distance to MRT", units: new Array, staffID: "KOI001"},
                      {residenceID:"A00B176", residenceName:"Bunga Jaya Apartment", address:"58, Jalan Kepong, Pekan Kepong, 52000 Kuala Lumpur,", unitCount:215, unitSize:505, monthlyRental: 680.00, amenities: "Walking distance to KTM", units: new Array, staffID: "KOI001"},];

//localStorage.residence = "";
if(localStorage.residence==""||localStorage.residence==undefined){
  localStorage.residence = JSON.stringify(dummyList2);
  //console.log("start 1 : "+localStorage.residence);
}

//Jaya Apartment
//Dummy data of residence object
var dummyResidence = [{residenceName:"Bunga Jaya Apartment", residenceID:"A00B176", address:"58, Jalan Kepong, Pekan Kepong, 52000 Kuala Lumpur,", unitSize:"505 Sqft", amenities:"Walking distance to KTM", UnitCount:"215", monthlyRental:"RM 680"},
                      {residenceName:"Tolong Jaya Condominium", residenceID:"K00B339", address:"No. 15, Jalan Sri Semantan 1, Off, Jalan Semantan, Bukit Damansara, 50490 Kuala Lumpur,", unitSize:"735 Sqft", amenities:"Walking distance to MRT", UnitCount:"99", monthlyRental:"RM 850"}];

//Array to store a collection of residence object
//ar residenceList =[residence1,residence2];
var residenceList = JSON.parse(localStorage.residence);


//paste search value into the input box
document.getElementById("inputSearch").value= localStorage.searchVal;
document.getElementById("inputArea").value = localStorage.searchArea;
document.getElementById("inputCity").value = localStorage.searchCity;

function searchResidence() {
    document.getElementById("btnSearch").setAttribute("type", "button");

    var searchVal = document.getElementById("inputSearch").value;
    localStorage.searchVal = searchVal;

    var searchArea = document.getElementById("inputArea").value;
    localStorage.searchArea = searchArea;

    var searchCity = document.getElementById("inputCity").value;
    localStorage.searchCity = searchCity;

    console.log("search criteria");
    console.log("val: " + searchVal);
    console.log("Area: " + searchArea);
    console.log("City: " + searchCity);
    var searchResult = searchEngine(residenceList,searchVal,searchArea,searchCity);
    //console.log(searchResult);
    //console.log("here");
    var residenceResult = [];
    for (var i = 0; i < searchResult.length; i++) {
      for (var x = 0; x < residenceList.length; x++) {
        console.log(searchResult[i]==residenceList[x].residenceID);
        if (searchResult[i]==residenceList[x].residenceID) {
          console.log(residenceList[x].residenceID);
          residenceResult.push(residenceList[x]);
        }
      }
    }
    console.log(residenceResult);

    //console.log("result:" + searchResult);
    for (var i = 0; i < residenceResult.length; i++) {
      console.log(residenceResult[i]);
    }
    //console.log("result:" + residenceResult);
    generateView(residenceResult);

}






//receive selected residence details
function selectedResidence(view){
  var selectedResidenceID = view.parentElement.parentElement.getElementsByTagName("p")[0].innerHTML;
  for (var i = 0; i < residenceList.length; i++) {
    if(selectedResidenceID == residenceList[i].residenceID){
      localStorage.selectedResidence = ``;
      localStorage.selectedResidence = JSON.stringify(residenceList[i]);
    }
  }

  //console.log(view.parentElement.parentElement.getElementsByTagName("p")[0].innerHTML);
  //console.log(localStorage.selectedResidence);
}


function generateView(source){
  var result_container = document.getElementById("result-container");
  result_container.innerHTML = ``;
  for (var i = 0; i < source.length; i++) {
    var node = document.createElement("li");
    node.setAttribute("class", "list-group-item");
    node.innerHTML = `
                        <div class="row box_shadow">


                          <div class="col-5 p-4">
                            <img src="pic/sample_housing.jpg" alt="sample_housing"
                            class="img-fluid rounded">
                          </div>


                          <div class="col-7 p-3">
                            <h4 class="font-weight-bold">` + source[i].residenceName + `</h4>
                            <table>
                              <tr>
                                <div class="font-weight-bold">Residence ID:</div>
                                <p class="text-justify">` + source[i].residenceID + `</p>
                              </tr>
                              <tr>
                                  <div class="font-weight-bold">Address:</div>
                                  <p >` + source[i].address + `</p>
                              </tr>
                              <tr>
                                <div class="font-weight-bold">Unit Size:</div>
                                <p class="text-justify" >` + source[i].unitSize + ` sqft</p>
                              </tr>
                              <tr>
                                <div class="font-weight-bold" >Amenities:</div>
                                <p class="text-justify" >` + source[i].ammenities + `</p>
                              </tr>
                              <tr>
                                <div class="font-weight-bold">Available Units:</div>
                                <p class="text-justify" >` + source[i].unitCount + `</p>
                              </tr>
                              <tr>
                                <div class="font-weight-bold">Monthly Rental:</div>
                                <p class="font-weight-bold text-danger" > RM` + source[i].monthlyRental + `</p>
                              </tr>
                            </table>
                            <div class="text-right">
                              <button type="button" class="btn btn-warning font-weight-bold" data-toggle="modal" data-target="#apply_MH" onclick="selectedResidence(this);">
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      `

    result_container.appendChild(node);
  }
  if(source.length<1){
    result_container.innerHTML = `<h3>No Result</h3>`;
  }
}


function requiredDateAndYear(){
  var sm = document.getElementById("inputMonth");
  var month = sm.options[sm.selectedIndex].value;
  //localStorage.requiredMonth = '';
  localStorage.requiredMonth = month;

  var sy = document.getElementById("inputYear");
  var year = sy.options[sy.selectedIndex].value;
  //localStorage.requiredYear = '';
  localStorage.requiredYear = year;
}









//          ___           ___           ___           ___           ___           ___
//         /  /\         /  /\         /  /\         /  /\         /  /\         /__/\
//        /  /:/_       /  /:/_       /  /::\       /  /::\       /  /:/         \  \:\
//       /  /:/ /\     /  /:/ /\     /  /:/\:\     /  /:/\:\     /  /:/           \__\:\
//      /  /:/ /::\   /  /:/ /:/_   /  /:/~/::\   /  /:/~/:/    /  /:/  ___   ___ /  /::\
//     /__/:/ /:/\:\ /__/:/ /:/ /\ /__/:/ /:/\:\ /__/:/ /:/___ /__/:/  /  /\ /__/\  /:/\:\
//     \  \:\/:/~/:/ \  \:\/:/ /:/ \  \:\/:/__\/ \  \:\/:::::/ \  \:\ /  /:/ \  \:\/:/__\/
//      \  \::/ /:/   \  \::/ /:/   \  \::/       \  \::/~~~~   \  \:\  /:/   \  \::/
//       \__\/ /:/     \  \:\/:/     \  \:\        \  \:\        \  \:\/:/     \  \:\
//         /__/:/       \  \::/       \  \:\        \  \:\        \  \::/       \  \:\
//         \__\/         \__\/         \__\/         \__\/         \__\/         \__\/
//magical custom search engine from Koi OPENSOURCE_COPYRIGHT@KOI2019
function searchEngine(source,criteria1,criteria2,criteria3){
  //console.log(source);
  var ignoreKey = ["jalan", "Jalan", "Bandar", "bandar", "Sungai", "sungai", "Kuala", "kuala"];
  var searchTable = [{index:null, location:""}];

  for(var i=0; i<source.length; i++){

    searchTable.push({key:source[i].residenceID, residenceID:source[i].residenceID});
    var splitedAddress2 = new Array;
    var splitedAddress = source[i].address.split(", ");
    for(var x=0; x<splitedAddress.length; x++){
      searchTable.push({key:splitedAddress[x], residenceID:source[i].residenceID});

      splitedAddress2 = splitedAddress[x].split(" ");
      for(var y=0; y<splitedAddress2.length; y++){
        if(!ignoreKey.includes(splitedAddress2[y])){
          searchTable.push({key:splitedAddress2[y], residenceID:source[i].residenceID});
        }
      }
    }
    //var splitedResidenceName2 = new Array;
    var splitedResidenceName = source[i].residenceName.split(", ");
    for(var x=0; x<splitedResidenceName.length; x++){
      searchTable.push({key:splitedResidenceName[x], residenceID:source[i].residenceID});

      splitedResidenceName2 = splitedResidenceName[x].split(" ");
      for(var y=0; y<splitedResidenceName2.length; y++){
        if(!ignoreKey.includes(splitedResidenceName2[y])){
          searchTable.push({key:splitedResidenceName2[y], residenceID:source[i].residenceID});
        }
      }
    }
  }
  console.log(searchTable);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var searchCriteria;
  searchCriteria = [criteria1,criteria2,criteria3]; //<--enter search criteria here!!!

  var result = new Array;

  for (var x = 0; x < searchCriteria.length; x++) {
    for(var i=1; i<searchTable.length; i++){
      if(searchTable[i].key.toLowerCase() == searchCriteria[x].toLowerCase()){
        result.push(searchTable[i]);
      }
    }
  }
  console.log(result);
  if(result.length>0){
    var refinedResult = [result[0].residenceID];
    var lastItem = result[0].residenceID;
    for (var i = 0; i < result.length; i++) {
      if(result[i].residenceID != lastItem){
        lastItem = result[i].residenceID;
        refinedResult.push(result[i].residenceID);
      }
    }
    //console.log("SEARCH ENGINE - result[" + result.length + "]: " + result);;
    //console.log("SEARCH ENGINE - refined result: " +refinedResult);
    console.log(refinedResult);
    return(refinedResult);
  }
  console.log("SEARCH ENGINE - result[" + result.length + "]: empty");
  return("empty");
}
//          ___           ___           ___           ___           ___           ___
//         /  /\         /  /\         /  /\         /  /\         /  /\         /__/\
//        /  /:/_       /  /:/_       /  /::\       /  /::\       /  /:/         \  \:\
//       /  /:/ /\     /  /:/ /\     /  /:/\:\     /  /:/\:\     /  /:/           \__\:\
//      /  /:/ /::\   /  /:/ /:/_   /  /:/~/::\   /  /:/~/:/    /  /:/  ___   ___ /  /::\
//     /__/:/ /:/\:\ /__/:/ /:/ /\ /__/:/ /:/\:\ /__/:/ /:/___ /__/:/  /  /\ /__/\  /:/\:\
//     \  \:\/:/~/:/ \  \:\/:/ /:/ \  \:\/:/__\/ \  \:\/:::::/ \  \:\ /  /:/ \  \:\/:/__\/
//      \  \::/ /:/   \  \::/ /:/   \  \::/       \  \::/~~~~   \  \:\  /:/   \  \::/
//       \__\/ /:/     \  \:\/:/     \  \:\        \  \:\        \  \:\/:/     \  \:\
//         /__/:/       \  \::/       \  \:\        \  \:\        \  \::/       \  \:\
//         \__\/         \__\/         \__\/         \__\/         \__\/         \__\/












//old js code

//alert(document.getElementById("inputArea").getElementsByTagName("option")[1].value);
/*
for(var i=0; i<document.getElementById("inputArea").getElementsByTagName("option").length; i++){
  (document.getElementById("inputArea").getElementsByTagName("option")
  if(document.getElementById("inputArea").getElementsByTagName("option")[i].value == searchArea){
    document.getElementById("inputArea").getElementsByTagName("option")[i].setAttribute("selected", "");
  }
}
console.log(searchArea);
*/










/*
//Jaya Apartment
//Dummy data of residence object
var residence1 = {residenceName:"Bunga Jaya Apartment", residenceID:"A00B176", address:"58, Jalan Kepong, Pekan Kepong, 52000 Kuala Lumpur,", unitSize:"505 Sqft", amenities:"Walking distance to KTM", availableUnit:"215", monthlyRental:"RM 680"};
var residence2 = {residenceName:"Tolong Jaya Condominium", residenceID:"K00B339", address:"No. 15, Jalan Sri Semantan 1, Off, Jalan Semantan, Bukit Damansara, 50490 Kuala Lumpur,", unitSize:"735 Sqft", amenities:"Walking distance to MRT", availableUnit:"99", monthlyRental:"RM 850"};

//Array to store a collection of residence object
var residenceList =[residence1,residence2];

//set each details of residence into the hthml
document.getElementById("residenceName").innerHTML = "Bunga Jaya Apartment";


//paste search value into the input box
var searchResidence = localStorage.searchVal;
document.getElementById("inputSearch").value= searchResidence;

var searchArea = localStorage.searchArea;
document.getElementById("inputArea").value = searchArea;

var searchCity = localStorage.searchCity;
document.getElementById("inputCity").value = searchCity;

function searchResidence() {
    var searchVal = document.getElementById("inputSearch").value;
    localStorage.searchVal = searchVal;

    var searchArea = document.getElementById("inputArea").value;
    localStorage.searchArea = searchArea;

    var searchCity = document.getElementById("inputCity").value;
    localStorage.searchCity = searchCity;
}






//receive selected residence details
function selectedResidence(){
  var residenceName = document.getElementById("residenceName").innerHTML;
  localStorage.residenceName = residenceName;

  var residenceID = document.getElementById("residenceID").innerHTML;
  localStorage.residenceID = residenceID;

  var address = document.getElementById("address").innerHTML;
  localStorage.address = address;

  var unitSize = document.getElementById("unitSize").innerHTML;
  localStorage.unitSize = unitSize;

  var amenities = document.getElementById("amenities").innerHTML;
  localStorage.amenities = amenities;

  var availableUnit = document.getElementById("availableUnit").innerHTML;
  localStorage.availableUnit = availableUnit;

  var monthlyRental = document.getElementById("monthlyRental").innerHTML;
  localStorage.monthlyRental = monthlyRental;
}

function selectedResidence1(){
  var residenceName1 = document.getElementById("residenceName1").innerHTML;
  localStorage.residenceName = residenceName1;

  var residenceID1 = document.getElementById("residenceID1").innerHTML;
  localStorage.residenceID = residenceID1;

  var address1 = document.getElementById("address1").innerHTML;
  localStorage.address = address1;

  var unitSize1 = document.getElementById("unitSize1").innerHTML;
  localStorage.unitSize = unitSize1;

  var amenities1 = document.getElementById("amenities1").innerHTML;
  localStorage.amenities = amenities1;

  var availableUnit1 = document.getElementById("availableUnit1").innerHTML;
  localStorage.availableUnit = availableUnit1;

  var monthlyRental1 = document.getElementById("monthlyRental1").innerHTML;
  localStorage.monthlyRental = monthlyRental1;
}


function requiredDateAndYear(){
  var sm = document.getElementById("inputMonth");
  var month = sm.options[sm.selectedIndex].value;
  localStorage.requiredMonth = month;

  var sy = document.getElementById("inputYear");
  var year = sy.options[sy.selectedIndex].value;
  localStorage.requiredYear = year;
}

console.log(localStorage.requiredMonth);
console.log(localStorage.requiredYear);
//alert(document.getElementById("inputArea").getElementsByTagName("option")[1].value);
/*
for(var i=0; i<document.getElementById("inputArea").getElementsByTagName("option").length; i++){
  (document.getElementById("inputArea").getElementsByTagName("option")
  if(document.getElementById("inputArea").getElementsByTagName("option")[i].value == searchArea){
    document.getElementById("inputArea").getElementsByTagName("option")[i].setAttribute("selected", "");
  }
}
console.log(searchArea);
*/
