//validateUser("applicant");
/*
function xx(){
  document.getElementById("login").innerHTML= ` <a href="login.html" class="nav-link font-weight-bold">
                                                <i class="fas fa-sign-in-alt"></i> Logout </a>`;

  console.log("ran");
  document.getElementById("login").setAttribute("onclick", "yy();")
}

function yy(){
  document.getElementById("login").innerHTML= ` <a href="login.html" class="nav-link font-weight-bold">
                                                <i class="fas fa-sign-in-alt"></i> Login </a>`;

  console.log("ran");
  document.getElementById("login").setAttribute("onclick", "xx();")
}
*/

var residenceList = JSON.parse(localStorage.residence);

document.getElementById("a1").innerHTML = residenceList[0].residenceName;
document.getElementById("a2").innerHTML = residenceList[0].residenceID;
document.getElementById("a3").innerHTML = "RM" + residenceList[0].monthlyRental;
document.getElementById("a4").addEventListener("click", function(){localStorage.searchArea=document.getElementById("inputArea").value;localStorage.searchCity=document.getElementById("inputCity").value; localStorage.searchVal = residenceList[0].residenceName; window.location.href = "residence_page.html";});


document.getElementById("b1").innerHTML = residenceList[1].residenceName;
document.getElementById("b2").innerHTML = residenceList[1].residenceID;
document.getElementById("b3").innerHTML = "RM" + residenceList[1].monthlyRental;
document.getElementById("b4").addEventListener("click", function(){localStorage.searchArea=document.getElementById("inputArea").value;localStorage.searchCity=document.getElementById("inputCity").value; localStorage.searchVal = residenceList[1].residenceName; window.location.href = "residence_page.html";});

document.getElementById("c1").innerHTML = residenceList[2].residenceName;
document.getElementById("c2").innerHTML = residenceList[2].residenceID;
document.getElementById("c3").innerHTML = "RM" + residenceList[2].monthlyRental;
document.getElementById("c4").addEventListener("click", function(){localStorage.searchArea=document.getElementById("inputArea").value;localStorage.searchCity=document.getElementById("inputCity").value; localStorage.searchVal = residenceList[2].residenceName; window.location.href = "residence_page.html";});


//bring search value to viewResidence page
function searchResidence() {
    var searchVal = document.getElementById("inputSearch").value;
    localStorage.searchVal = searchVal;

    var searchArea = document.getElementById("inputArea").value;
    localStorage.searchArea = searchArea;

    var searchCity = document.getElementById("inputCity").value;
    localStorage.searchCity = searchCity;

}
