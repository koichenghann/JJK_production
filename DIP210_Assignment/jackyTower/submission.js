
//call value of each Attribute in application form into the input textbox

localStorage.fullName = "Jason";
localStorage.email = "jason666@gmail.com";
localStorage.monthlyIncome = "RM3000";

//user's profile details
var fullName = localStorage.fullName;
document.getElementById("inputFullName").value = fullName;

var email = localStorage.email;
document.getElementById("inputEmail").value = email;

var monthlyIncome = localStorage.monthlyIncome;
document.getElementById("inputIncome").value = monthlyIncome;


//selected residence details
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

//Required Month and Year info
var requiredYear = localStorage.requiredYear;
document.getElementById("inputYear").value = requiredYear;

var requiredMonth = localStorage.requiredMonth;
document.getElementById("inputMonth").value = requiredMonth;

//Cancel Button onclick action
function cancel() {
  window.history.back();
}
console.log(residenceName);
console.log(residenceID);
console.log(address);
console.log(amenities);
console.log(unitSize);
console.log(monthlyRental);
console.log(requiredYear);
console.log(requiredMonth);
