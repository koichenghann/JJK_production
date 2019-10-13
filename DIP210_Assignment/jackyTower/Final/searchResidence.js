
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

//bring search value to viewResidence page
function searchResidence() {
    var searchVal = document.getElementById("inputSearch").value;
    localStorage.searchVal = searchVal;

    var searchArea = document.getElementById("inputArea").value;
    localStorage.searchArea = searchArea;

    var searchCity = document.getElementById("inputCity").value;
    localStorage.searchCity = searchCity;

}
