//declaration of AJAX object
var xmlhttp = new XMLHttpRequest();
var response =  function(){};
var currentUser; //currentUser declaration
var newApplication; //new application object

var applicantID; //attritube of application object
var residenceID; //attritube of application object
var applicationDate; //attritube of application object
var getRequiredMonth; //attritube of application object
var getRequiredYear; //attritube of application object
var status; //attritube of application object

//function to validate user
function validateUser(){
  response = function(responseText){
    if (responseText=="1") {
      getCurrentUser(); //call function to get currentUser
    }
    else {
      //window.location.href="login.html";
      console.log(responseText);
    }
  };
  submit("key=validate&userType=applicant");
}

//function to get currentUser
function getCurrentUser(){
  response = function(responseText){
    if (responseText!="") {
      currentUser = JSON.parse(responseText);
      console.log(currentUser);
      //getSelectedResidence();

      var selectedResidence  = JSON.parse(localStorage.selectedResidence);
      //user's profile details
      document.getElementById("inputFullName").value = currentUser.fullName;
      console.log("here " + currentUser.email);
      document.getElementById("inputEmail").value = currentUser.email;
      document.getElementById("inputIncome").value = currentUser.monthlyIncome;
      document.getElementById("inputIncome").addEventListener("change", function(){
      currentUser.monthlyIncome = document.getElementById("inputIncome").value;

      });

      //var residenceName = localStorage.residenceName;
      document.getElementById("inputResidenceName") .value = selectedResidence.residenceName;
      document.getElementById("inputResidenceID")   .value = selectedResidence.residenceID;
      document.getElementById("inputAddress")       .value = selectedResidence.address;
      document.getElementById("inputAmenities")     .value = selectedResidence.amenities;
      document.getElementById("inputUnitSize")      .value = selectedResidence.unitSize;
      document.getElementById("inputMonthlyRental") .value = selectedResidence.monthlyRental;

      //Required Month and Year info
      var requiredYear = document.getElementById("inputYear");
      var requiredMonth = document.getElementById("inputMonth");
      requiredYear.value = localStorage.requiredYear;
      requiredMonth.value = localStorage.requiredMonth;


      applicantID      = currentUser.applicantID;
      residenceID      = selectedResidence.residenceID;
      applicationDate  = new Date().getFullYear() + "-" + new Date().getMonth()+ "-"+ new Date().getDate();
      getRequiredMonth = localStorage.requiredMonth;
      getRequiredYear  = localStorage.requiredYear;
      status = "new";

      //create new application object
      newApplication = {applicantID      :currentUser.applicantID,
                        residenceID      :selectedResidence.residenceID,
                        applicationDate  :new Date().getFullYear() + "-" + new Date().getMonth()+ "-"+ new Date().getDate(),
                        requiredMonth    :localStorage.requiredMonth,
                        requiredYear     :localStorage.requiredYear,
                        status           : "new",
                        attachment       :new Array
                      };



    }
  };
  submit("key=getCurrentUser");
}

validateUser();//initiate function


function submit(message){
  xmlhttp.open("POST", "submission.php");
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlhttp.send(message);
  xmlhttp.onload = function(){
                      console.log(this.responseText);
                      response(this.responseText);
                    };
}

function submitApplication(){
  console.log(JSON.stringify(newApplication));
  console.log(applicantID);
  console.log(residenceID);
  console.log(applicationDate);
  console.log(getRequiredMonth);
  console.log(getRequiredYear);
  console.log(status);

  //submit application data to php via AJAX
  submit("key=submitApplication&applicantID="+applicantID
                              +"&residenceID="+residenceID
                              +"&applicationDate="+applicationDate
                              +"&requiredMonth="+getRequiredMonth
                              +"&requiredYear="+getRequiredYear
                              +"&status="+status);
  //direct to viewApplication_user page after submitted application                            
  window.location.href = "viewApplication_user.html";
}

//Cancel Button onclick action
function cancel() {
  window.history.back();
}
