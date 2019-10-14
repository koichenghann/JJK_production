logOut();



var dummyApplicant   = [{applicantID:1, username:"jeff", password:"jeff", fullName:"jeffa marumaya", email:"", monthlyIncome:"999999", attachment: new Array},
                        {applicantID:2, username:"jacky", password:"jacky", fullName:"jackyru kurohime", monthlyIncome:"666666", attachment: new Array},
                        {applicantID:4, username:"jackyjacky", password:"jackyjacky", fullName:"black pepper bbq jacky", monthlyIncome:"12345678", attachment: new Array},
                        {applicantID:3, username:"koi", password:"koi", fullName:"just koi . because reason", monthlyIncome:"infinite", attachment: new Array}];
var dummyOfficer     = [{staffID:1, username:"admin", password:"admin", fullName:"Administrator"},
                        {staffID:2, username:"officer", password:"officer", fullName:"MHS Officer"}];


//console.log(localStorage.applicant);
//this combined the dummyApplicant/dummyOfficer array with localStorage array
var applicantList;
var officerList;
applicantList = JSON.parse(localStorage.applicant);//dummyApplicant.concat(function(){if(localStorage.applicant!=undefined){return JSON.parse(localStorage.applicant)}else{return [];}});
officerList   = JSON.parse(localStorage.officer);//dummyOfficer.concat(function(){if(localStorage.officer!=undefined){return JSON.parse(localStorage.officer);}else{return[]}});
console.log(applicantList);

//declaring variable for html element
var form_username = document.getElementById("form_username");
var form_password = document.getElementById("form_password");
var form_submit = document.getElementById("form_submit");


//temporary set the submit button type to button so that it won't refresh the page
form_submit.setAttribute("type", "button");


//validate login user, find user in applicant table, if found go to user_main_page,
//if not then find user in officer table, if found gor to view application page,
//if not show error message invalid password or usernmae
form_submit.addEventListener("click", function(){
  for(var i=0; i<applicantList.length; i++){
    //validate and redirect applicant user
    if(form_username.value == applicantList[i].username && form_password.value == applicantList[i].password){
      //store the loged in user into localStorage as a whole object with all applicant detail
      localStorage.currentUser, localStorage.currentUserType = "";
      localStorage.currentUser = JSON.stringify(applicantList[i]);
      //remove this alert before submision
      //alert("user found: " + JSON.parse(localStorage.currentUser).fullName);
      //console.log(JSON.parse(localStorage.currentUser));
      //console.log(applicantList[i]);
      window.location.href = "user_homepage.html";
      break;
    }
    else {
      localStorage.currentUser = "";
    }
  }
  if(localStorage.currentUser==""){
    for(var i=0; i<officerList.length; i++){
      //validate and redirect applicant user
      console.log("ran");
      if(form_username.value == officerList[i].username && form_password.value == officerList[i].password){
        //store the loged in user into localStorage as a whole object with all applicant detail
        localStorage.currentUser, localStorage.currentUserType = "";
        localStorage.currentUser = JSON.stringify(officerList[i]);
        //remove this alert before submision
        //alert("officer found: " + JSON.parse(localStorage.currentUser).fullName);
        window.location.href = "officer_homepage.html";
        break;
      }
    }
  }
  if(localStorage.currentUser==""){
    localStorage.currentUser="";
    alert("invalid username and password combination");
  }
});
