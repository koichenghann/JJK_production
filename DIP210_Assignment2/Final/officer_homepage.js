var xmlhttp = new XMLHttpRequest();
var response =  function(){};
var currentUser;
validateUser();



function scrollToMain(){
  //document.getElementById("form_main").scrollIntoView();
}
document.getElementById("form_main").addEventListener("mouseover", function(){scrollToMain(); console.log("scrolled");});



function validateUser(){
  response = function(responseText){
    if (responseText=="1") {
      getCurrentUser();
      //getStatistic();
    }
    else {
      window.location.href="login.html";
    }
  };
  submit("key=validate&userType=housingOffcier");
}

function getCurrentUser(){
  response = function(responseText){
    if (responseText!="") {
      currentUser = JSON.parse(responseText);
      console.log(currentUser);
      document.getElementById("form_username").innerHTML = currentUser.username;
      document.getElementById("form_staffID").innerHTML = currentUser.staffID;
      getStatistic();
    }
  };
  submit("key=getCurrentUser");
}

function getStatistic(){
  response = function(responseText){
    if (responseText!="") {
      var statistic = JSON.parse(responseText);
      document.getElementById("form_totalApplicant").innerHTML    = "Total: " + statistic.totalApplicant;
      document.getElementById("form_totalApplication").innerHTML  = "Total: " + statistic.totalApplication;
      document.getElementById("form_totalResidence").innerHTML    = "Total: " + statistic.totalResidence;
    }
  };
  submit("key=getStatistic");
}

function submit(message){
  xmlhttp.open("POST", "officer_homepage.php");
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlhttp.send(message);
  xmlhttp.onload = function(){console.log(this.responseText+"jeff");response(this.responseText);};
}
