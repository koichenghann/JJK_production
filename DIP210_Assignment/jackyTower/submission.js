
//call value of each Attribute in application form into the input textbox
var residenceName = localStorage.residenceName;
document.getElementById("inputResidenceName").value = residenceName;

var residenceID = localStorage.residenceID;
document.getElementById("inputResidenceID").value = residenceID;

var address = localStorage.address;
document.getElementById("inputAddress").value = address;

var amenities = localStorage.amenities;
document.getElementById("inputAmenities").value = amenities;

var unitSize = localStorage.unitSize;
document.getElementById("inputUnitSize").value = unitSize;

var monthlyRental = localStorage.monthlyRental;
document.getElementById("inputMonthlyRental").value = monthlyRental;


console.log(residenceName);
console.log(residenceID);
console.log(address);
console.log(amenities);
console.log(unitSize);
console.log(monthlyRental);
