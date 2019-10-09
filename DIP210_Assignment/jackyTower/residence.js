
//paste search value into the input box
var searchResidence = localStorage.searchVal;
document.getElementById("inputSearch").value= searchResidence;

var searchArea = localStorage.searchArea;
document.getElementById("inputArea").value = searchArea;

var searchCity = localStorage.searchCity;
document.getElementById("inputCity").value = searchCity;


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
