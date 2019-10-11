var dummyApplicant   = [{applicantID:1, username:"jeff", password:"jeff", fullName:"jeffa marumaya", email:"", monthlyIncome:"999999", attachment: new Array},
                        {applicantID:2, username:"jacky", password:"jacky", fullName:"jackyru kurohime", email:"", monthlyIncome:"666666", attachment: new Array},
                        {applicantID:3, username:"jackyjacky", password:"jackyjacky", fullName:"black pepper bbq jacky", email:"", monthlyIncome:"12345678", attachment: new Array},
                        {applicantID:4, username:"koi", password:"koi", fullName:"just koi . because reason", email:"", monthlyIncome:"infinite", attachment: new Array}];
console.log(localStorage.applicant);
//populate local storage with dummyApplicant fi localStorage applicant is empty
//localStorage.applicant = '';
if(localStorage.applicant=="" || localStorage.applicant==undefined){localStorage.applicant=JSON.stringify(dummyApplicant);console.log(localStorage.applicant);}


//var applicantList = new Array;

//var  applicantList  = JSON.parse(localStorage.applicant);
var form_submit = document.getElementById("form_submit");
//form_submit.setAttribute("type", "button");


var form_submit = document.getElementById("form_submit");
form_submit.addEventListener("click", function(){

  /*
  newApplicant.username =
  newApplicant.password =
  newApplicant.fullName       =
  newApplicant.email          =
  newApplicant.monthlyIncome  =
  */

  var inUsername = document.getElementById("inUsername").value;
  var inPassword = document.getElementById("inPassword").value;
  var inRePassword = document.getElementById("inRePassword").value;
  var inFirstName = document.getElementById("inFirstName").value;
  var inLastName = document.getElementById("inLastName").value;
  var inEmail = document.getElementById("inEmail").value;
  var inMonthlyIncome = document.getElementById("inMonthlyIncome").value;

  if(inUsername.toLowerCase() == "reset"){
    localStorage.applicant = '';
    window.location.href="register.html";
  }

  if(validateRegister(inUsername, inPassword, inRePassword, inFirstName, inLastName, inEmail, inMonthlyIncome)){
    form_submit.setAttribute("type", "button");
    applicantList = JSON.parse(localStorage.applicant);
    var nextApplicantID = applicantList[applicantList.length-1].applicantID+1;
    var newApplicant = {applicantID:undefined, username:undefined, password:undefined, fullName:undefined, email:undefined, monthlyIncome:undefined, attachment:undefined};
    newApplicant.applicantID    = nextApplicantID;
    newApplicant.username       = inUsername;
    newApplicant.password       = inPassword;
    newApplicant.fullName       = inLastName + " " + inFirstName;
    newApplicant.email          = inEmail;
    newApplicant.monthlyIncome  = inMonthlyIncome;


    //console.log("start");
    applicantList.push(newApplicant);
    //console.log(applicantList);
    localStorage.applicant = JSON.stringify(applicantList);
    //console.log(localStorage.applicant);
    window.location.href="login.html";
  }
  else {
    alert("username taken");
  }

  /*
  console.log(newApplicant.username);
  console.log(newApplicant.password);
  console.log(newApplicant.fullName);
  console.log(newApplicant.email);
  console.log(newApplicant.monthlyIncome);*/
  //form_submit.setAttribute("type", "button");

});

function validateRegister(username, password, passwordRe, firstName, lastName, email, monthlyIncome){
  var applicantList = JSON.parse(localStorage.applicant);
  for(var i=0; i<applicantList.length; i++){
    if(username.toLowerCase() == applicantList[i].username){
      return false;
    }
  }
  if(username==null||username==undefined||username==""||password==null||password==undefined||password==""||passwordRe==null||passwordRe==undefined||passwordRe==""||firstName==null||firstName==undefined||firstName==""||lastName==null||lastName==undefined||lastName==""||email==null||email==undefined||email==""||monthlyIncome==null||monthlyIncome==undefined||monthlyIncome==""){
    //console.log("empty");
    return false;
  }
  if(password!=passwordRe || password.length<8){
    alert("incorect password");
    return false;
  }
  if(!email.includes("@")){
    //console.log("email wrong");
    return false;
  }
  if(isNaN(monthlyIncome)){
    //console.log("income not number: " + monthlyIncome);
    return false;
  }

  return true;

}

/*
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
*/

//var applicant = {userID:2, username:inUsername, password:inPassword, fullName:infullName, email:inEmail, monthlyIncome:inMonthlyIncome, attachment: new Array};
//applicantList.push(applicant);

//localStorage.applicantList = JSON.stringify(applicantList);


//var applicantList2 = JSON.parse(localStorage.applicantList);
//console.log(applicantList2);
