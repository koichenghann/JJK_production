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
