var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", "login.php");
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xmlhttp.send();
//declaring variable for html element
var form_username = document.getElementById("form_username");
var form_password = document.getElementById("form_password");
var form_submit = document.getElementById("form_submit");
var messageBox = document.getElementById("messageBox");

//temporary set the submit button type to button so that it won't refresh the page
form_submit.setAttribute("type", "button");


//validate login user, find user in applicant table, if found go to user_main_page,
//if not then find user in officer table, if found gor to view application page,
//if not show error message invalid password or usernmae
form_submit.addEventListener("click", function(){
  xmlhttp.open("POST", "login.php");
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlhttp.send("username="+form_username.value+"&password="+form_password.value);
  xmlhttp.onload = function(){
    console.log(this.responseText);
    if(this.responseText == "success-applicant"){
      window.location.href='user_homepage.html';
    }
    else if(this.responseText == "success-housingOfficer"){
      window.location.href = 'officer_homepage.html';
    }
    else{
      messageBox.innerHTML = this.responseText;
    }

  };
});
