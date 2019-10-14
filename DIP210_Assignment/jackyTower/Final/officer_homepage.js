validateUser("officer");



function scrollToMain(){
  document.getElementById("form_main").scrollIntoView();
}
document.getElementById("form_main").addEventListener("mouseover", function(){scrollToMain(); console.log("scrolled");});



document.getElementById("form_username").innerHTML = JSON.parse(localStorage.currentUser).username;
document.getElementById("form_staffID").innerHTML = "Staff ID: " + JSON.parse(localStorage.currentUser).staffID;
document.getElementById("form_totalApplicant").innerHTML = "Total: " + JSON.parse(localStorage.applicant).length;
document.getElementById("form_totalApplication").innerHTML = "Total: " + JSON.parse(localStorage.application).length;
document.getElementById("form_totalResidence").innerHTML = "Total: " + JSON.parse(localStorage.residence).length;
