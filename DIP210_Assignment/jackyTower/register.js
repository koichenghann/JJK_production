var  applicantList  = [{userID:1, username:"jeff", password:"jeff", fullName:"Jeff Yeoh", email:"jeffyeoh@help.com", monthlyIncome:"2300", attachment: new Array},
                  {userID:2, username:"jacky", password:"jacky", fullName:"Jacky Voon", email:"jv77@gmail.com", monthlyIncome:"3200", attachment: new Array},
                  {userID:3, username:"koi", password:"koi", fullName:"Koi Cheng Hann", email:"koi666@gmail.com", monthlyIncome:"3000", attachment: new Array}];


function registerInput(){
var inUsername = document.getElementById("inUsername").value;
localStorage.inUsername = inUsername;

var inPassword = document.getElementById("inPassword").value;
localStorage.inPassword = inPassword;

var inRePassword = document.getElementById("inRePassword").value;
localStorage.inRePassword = inRePassword;

var inFirstName = document.getElementById("inFirstName").value;
localStorage.inFirstName = inFirstName;

var inLastName = document.getElementById("inLastName").value;
localStorage.inLastName = inLastName;

var inEmail = document.getElementById("inEmail").value;
localStorage.inEmail = inEmail;

var inMonthlyIncome = document.getElementById("inMonthlyIncome").value;
localStorage.inMonthlyIncome = inMonthlyIncome;
}

console.log(localStorage.inUsername);
console.log(localStorage.inPassword);
console.log(localStorage.inRePassword);
console.log(localStorage.inFirstName);
console.log(localStorage.inLastName);
console.log(localStorage.inEmail);
console.log(localStorage.inMonthlyIncome);


//var applicant = {userID:2, username:inUsername, password:inPassword, fullName:infullName, email:inEmail, monthlyIncome:inMonthlyIncome, attachment: new Array};
//applicantList.push(applicant);

localStorage.applicantList = JSON.stringify(applicantList);


var applicantList2 = JSON.parse(localStorage.applicantList);
console.log(applicantList2);
