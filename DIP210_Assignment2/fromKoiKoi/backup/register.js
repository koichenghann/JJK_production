var xmlhttp = new XMLHttpRequest();

var form_submit = document.getElementById("form_submit");
form_submit.setAttribute("type", "button");

var inUsername = document.getElementById("inUsername");
var inPassword = document.getElementById("inPassword");
var inRePassword = document.getElementById("inRePassword");
var inFirstName = document.getElementById("inFirstName");
var inLastName = document.getElementById("inLastName");
var inEmail = document.getElementById("inEmail");
var inMonthlyIncome = document.getElementById("inMonthlyIncome");

var usernameError = document.getElementById("usernameError");
var passwordError = document.getElementById("passwordError");
var fullnameError = document.getElementById("fullnameError");
var emailError = document.getElementById("emailError");
var monthlyincomeError = document.getElementById("monthlyincomeError");

var cond1 = /^[0-9a-zA-Z]+$/;
var cond2 = /^[a-zA-Z]*$/;
var cond3 = /^[0-9]*$/;
var cond4 = /^[A-Z]*$/;
var cond5 = /^[a-z]*$/;
//var value = "d1";



inUsername.addEventListener("blur", function(){validate("username", usernameError, inUsername.value);});
inPassword.addEventListener("blur", function(){validate("password1", passwordError, inPassword.value, inRePassword.value);});
inRePassword.addEventListener("blur", function(){validate("password2", passwordError, inPassword.value, inRePassword.value);});
inFirstName.addEventListener("blur", function(){validate("firstname", fullnameError, inFirstName.value);});
inLastName.addEventListener("blur", function(){validate("lastname", fullnameError, inLastName.value);});
inEmail.addEventListener("blur", function(){validate("email", emailError, inEmail.value);});
inMonthlyIncome.addEventListener("blur", function(){validate("monthlyIncome", monthlyincomeError, inMonthlyIncome.value);});



var response = function(responseText){};


function validate(key, display, value, value2){
  switch(key){
    case "username":
      display.innerHTML = "";
      if(value!=""){
        response = function(responseText){
          if(responseText==''){
            display.innerHTML = 'username taken';
          }
        };
        submit("key=username&username="+value);
      }
      break;


    case "password1":
      display.innerHTML = '';
      if (value!="") {
        if (!(value.match(cond1)&&!value.match(cond2)&&!value.match(cond3)/*&&!(value==value.toUpperCase())&&!(value==value.toLowerCase())*/)){
          display.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;  must be alphanumeric';
        }
        else if(value2!="" && value != value2){
          display.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;  password not equal';
        }
      }
      break;


    case "password2":
      display.innerHTML = '';
      if(value2!="" && value==""){
        display.innerHTML = "enter password";
      }
      else if (!(value.match(cond1)&&!value.match(cond2)&&!value.match(cond3))) {
        display.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;  must be alphanumeric';
      }
      else if(value2!="" && value != value2){
        display.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;  password not equal';
      }
      break;


    case "firstname":
      display.innerHTML = '';
      if(value!=""){
      }
      break;


    case "lastname":
      display.innerHTML = '';
      if(value!=""){
      }
      break;


    case "email":
      display.innerHTML = '';
      if(value!=""){
        response = function(responseText){
          if(responseText==''){
            display.innerHTML = 'another account with this email exist';
          }
        };
        submit("key=email&email="+value);
      }
      break;


    case "monthlyIncome":
      display.innerHTML = '';
      if(value!=""){
        if(isNaN(value)){
          display.innerHTML = 'please enter number value';
        }
      }
      break;

    default:
  }
}


function submit(message){
  xmlhttp.open("POST", "register.php");
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlhttp.send(message);
  xmlhttp.onload = function(){console.log(this.responseText);response(this.responseText);};
}


form_submit.addEventListener("click", function(){
  if(inUsername.value == ""){ usernameError.innerHTML = "Username is required*"; }
  if(inRePassword.value == ""){ passwordError.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;  Re-Password is required*"; }
  if(inPassword.value == ""){ passwordError.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;  Password is required*"; }
  if(inLastName.value == ""){ fullnameError.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;  LastName is required*"; }
  if(inFirstName.value == ""){ fullnameError.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;  FirstName is required*"; }
  if(inEmail.value == ""){ emailError.innerHTML = "Email is required*"; }
  if(inMonthlyIncome.value == ""){ monthlyincomeError.innerHTML = "Monthly Income is required*"; }

  response = function(responseText){
    if (responseText=="1") {
      inUsername.value = "";
      inRePassword.value = "";
      inPassword.value = "";
      inLastName.value = "";
      inFirstName.value = "";
      inEmail.value = "";
      inMonthlyIncome.value = "";

      alert("account registered. redirecting back to login page.");
      window.location.href = "login.html";
    }
  };

  if(!([inUsername.value, inRePassword.value, inPassword.value,
    inLastName.value, inFirstName.value, inEmail.value,
    inMonthlyIncome.value].includes("") && inPassword.value==inRePassword.value
    &&!isNaN(inMonthlyIncome.value)) &&(inPassword.value.match(cond1)
    &&!inPassword.value.match(cond2)&&!inPassword.value.match(cond3)
    /*&&!(inPassword.value==inPassword.value.toUpperCase())
    &&!(inPassword.value==inPassword.value.toLowerCase())*/)){
    console.log("ran");
    submit("key=submit&username="+inUsername.value+"&password="
    +inPassword.value+"&fullName="+inLastName.value+" "+inFirstName.value
    +"&email="+inEmail.value+"&monthlyIncome="+inMonthlyIncome.value);
  }
});
