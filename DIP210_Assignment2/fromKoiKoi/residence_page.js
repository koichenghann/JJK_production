var xmlhttp = new XMLHttpRequest();
var response =  function(){};
var currentUser;
var residenceList;

//function to validate user
function validateUser(){
  response = function(responseText){
    if (responseText=="1") {
      getCurrentUser(); //call function to get currentUser
    }
    else {
      window.location.href="login.html";
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
      getAllResidences();
      //document.getElementById("form_username").innerHTML = currentUser.username;
      //document.getElementById("form_staffID").innerHTML = currentUser.staffID;
      //getStatistic();
    }
  };
  submit("key=getCurrentUser");
}

validateUser();


function getAllResidences(){

  response = function(responseText){
    residenceList  = JSON.parse(responseText);
    //console.log('jeff gg: ' + responseText);
    searchResidence();
  };
  submit('key=getAllResidences');
}


function submit(message){
  xmlhttp.open("POST", "residence_page.php");
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlhttp.send(message);
  xmlhttp.onload = function(){
                      console.log(this.responseText);
                      response(this.responseText);
                    };
}




//paste search value into the input box
document.getElementById("inputSearch").value= localStorage.searchVal;
document.getElementById("inputArea").value = localStorage.searchArea;
document.getElementById("inputCity").value = localStorage.searchCity;

function searchResidence() {
    document.getElementById("btnSearch").setAttribute("type", "button");

    var searchVal = document.getElementById("inputSearch").value;
    localStorage.searchVal = searchVal;

    var searchArea = document.getElementById("inputArea").value;
    localStorage.searchArea = searchArea;

    var searchCity = document.getElementById("inputCity").value;
    localStorage.searchCity = searchCity;

    console.log("search criteria");
    console.log("val: " + searchVal);
    console.log("Area: " + searchArea);
    console.log("City: " + searchCity);
    var searchResult = searchEngine(residenceList,searchVal,searchArea,searchCity);
    //console.log(searchResult);
    //console.log("here");
    var residenceResult = [];
    for (var i = 0; i < searchResult.length; i++) {
      for (var x = 0; x < residenceList.length; x++) {
        console.log(searchResult[i]==residenceList[x].residenceID);
        if (searchResult[i]==residenceList[x].residenceID) {
          console.log(residenceList[x].residenceID);
          residenceResult.push(residenceList[x]);
        }
      }
    }
    console.log(residenceResult);

    //console.log("result:" + searchResult);
    for (var i = 0; i < residenceResult.length; i++) {
      console.log(residenceResult[i]);
    }
    //console.log("result:" + residenceResult);
    generateView(residenceResult);

}






//receive selected residence details
function selectedResidence(view){
  var selectedResidenceID = view.parentElement.parentElement.getElementsByTagName("p")[0].innerHTML;
  for (var i = 0; i < residenceList.length; i++) {
    if(selectedResidenceID == residenceList[i].residenceID){
      localStorage.selectedResidence = ``;
      localStorage.selectedResidence = JSON.stringify(residenceList[i]);
    }
  }

  //console.log(view.parentElement.parentElement.getElementsByTagName("p")[0].innerHTML);
  //console.log(localStorage.selectedResidence);
}


function generateView(source){
  var result_container = document.getElementById("result-container");
  result_container.innerHTML = ``;
  for (var i = 0; i < source.length; i++) {
    var node = document.createElement("li");
    node.setAttribute("class", "list-group-item");
    node.innerHTML = `
                        <div class="row box_shadow">


                          <div class="col-5 p-4">
                            <img src="pic/sample_housing.jpg" alt="sample_housing"
                            class="img-fluid rounded">
                          </div>


                          <div class="col-7 p-3">
                            <h4 class="font-weight-bold">` + source[i].residenceName + `</h4>
                            <table>
                              <tr>
                                <div class="font-weight-bold">Residence ID:</div>
                                <p class="text-justify">` + source[i].residenceID + `</p>
                              </tr>
                              <tr>
                                  <div class="font-weight-bold">Address:</div>
                                  <p >` + source[i].address + `</p>
                              </tr>
                              <tr>
                                <div class="font-weight-bold">Unit Size:</div>
                                <p class="text-justify" >` + source[i].unitSize + ` sqft</p>
                              </tr>
                              <tr>
                                <div class="font-weight-bold" >Amenities:</div>
                                <p class="text-justify" >` + source[i].ammenities + `</p>
                              </tr>
                              <tr>
                                <div class="font-weight-bold">Available Units:</div>
                                <p class="text-justify" >` + source[i].unitCount + `</p>
                              </tr>
                              <tr>
                                <div class="font-weight-bold">Monthly Rental:</div>
                                <p class="font-weight-bold text-danger" > RM` + source[i].monthlyRental + `</p>
                              </tr>
                            </table>
                            <div class="text-right">
                              <button type="button" class="btn btn-warning font-weight-bold" data-toggle="modal" data-target="#apply_MH" onclick="selectedResidence(this);">
                                <i class="fas fa-angle-right"></i> Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      `

    result_container.appendChild(node);
  }
  if(source.length<1){
    result_container.innerHTML = `<h3>No Result</h3>`;
  }
}


function requiredDateAndYear(){
  var sm = document.getElementById("inputMonth");
  var month = sm.options[sm.selectedIndex].value;
  //localStorage.requiredMonth = '';
  localStorage.requiredMonth = month;

  var sy = document.getElementById("inputYear");
  var year = sy.options[sy.selectedIndex].value;
  //localStorage.requiredYear = '';
  localStorage.requiredYear = year;
}



//          ___           ___           ___           ___           ___           ___
//         /  /\         /  /\         /  /\         /  /\         /  /\         /__/\
//        /  /:/_       /  /:/_       /  /::\       /  /::\       /  /:/         \  \:\
//       /  /:/ /\     /  /:/ /\     /  /:/\:\     /  /:/\:\     /  /:/           \__\:\
//      /  /:/ /::\   /  /:/ /:/_   /  /:/~/::\   /  /:/~/:/    /  /:/  ___   ___ /  /::\
//     /__/:/ /:/\:\ /__/:/ /:/ /\ /__/:/ /:/\:\ /__/:/ /:/___ /__/:/  /  /\ /__/\  /:/\:\
//     \  \:\/:/~/:/ \  \:\/:/ /:/ \  \:\/:/__\/ \  \:\/:::::/ \  \:\ /  /:/ \  \:\/:/__\/
//      \  \::/ /:/   \  \::/ /:/   \  \::/       \  \::/~~~~   \  \:\  /:/   \  \::/
//       \__\/ /:/     \  \:\/:/     \  \:\        \  \:\        \  \:\/:/     \  \:\
//         /__/:/       \  \::/       \  \:\        \  \:\        \  \::/       \  \:\
//         \__\/         \__\/         \__\/         \__\/         \__\/         \__\/
//
function searchEngine(source,criteria1,criteria2,criteria3){
  //return all residence in source if user enter all
  if (criteria1.toLowerCase()=="all") {
    var all = new Array;
    for (var i = 0; i < source.length; i++) {
      all.push(source[i].residenceID);
    }
    return all;
  }
  var ignoreKey = ["jalan", "Jalan", "Bandar", "bandar", "Sungai", "sungai", "Kuala", "kuala"];
  var searchTable = [{index:null, location:""}];

  for(var i=0; i<source.length; i++){

    searchTable.push({key:source[i].residenceID, residenceID:source[i].residenceID});
    var splitedAddress2 = new Array;
    var splitedAddress = source[i].address.split(", ");
    for(var x=0; x<splitedAddress.length; x++){
      searchTable.push({key:splitedAddress[x], residenceID:source[i].residenceID});

      splitedAddress2 = splitedAddress[x].split(" ");
      for(var y=0; y<splitedAddress2.length; y++){
        if(!ignoreKey.includes(splitedAddress2[y])){
          searchTable.push({key:splitedAddress2[y], residenceID:source[i].residenceID});
        }
      }
    }
    //var splitedResidenceName2 = new Array;
    var splitedResidenceName = source[i].residenceName.split(", ");
    for(var x=0; x<splitedResidenceName.length; x++){
      searchTable.push({key:splitedResidenceName[x], residenceID:source[i].residenceID});

      splitedResidenceName2 = splitedResidenceName[x].split(" ");
      for(var y=0; y<splitedResidenceName2.length; y++){
        if(!ignoreKey.includes(splitedResidenceName2[y])){
          searchTable.push({key:splitedResidenceName2[y], residenceID:source[i].residenceID});
        }
      }
    }
  }
  console.log(searchTable);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var searchCriteria;
  searchCriteria = [criteria1,criteria2,criteria3]; //<--enter search criteria here!!!

  var result = new Array;

  for (var x = 0; x < searchCriteria.length; x++) {
    for(var i=1; i<searchTable.length; i++){
      if(searchTable[i].key.toLowerCase() == searchCriteria[x].toLowerCase()){
        result.push(searchTable[i]);
      }
    }
  }
  console.log(result);
  if(result.length>0){
    var refinedResult = [result[0].residenceID];
    var lastItem = result[0].residenceID;
    for (var i = 0; i < result.length; i++) {
      if(result[i].residenceID != lastItem){
        lastItem = result[i].residenceID;
        refinedResult.push(result[i].residenceID);
      }
    }
    //console.log("SEARCH ENGINE - result[" + result.length + "]: " + result);;
    //console.log("SEARCH ENGINE - refined result: " +refinedResult);
    console.log(refinedResult);
    return(refinedResult);
  }
  console.log("SEARCH ENGINE - result[" + result.length + "]: empty");
  return("empty");
}
//          ___           ___           ___           ___           ___           ___
//         /  /\         /  /\         /  /\         /  /\         /  /\         /__/\
//        /  /:/_       /  /:/_       /  /::\       /  /::\       /  /:/         \  \:\
//       /  /:/ /\     /  /:/ /\     /  /:/\:\     /  /:/\:\     /  /:/           \__\:\
//      /  /:/ /::\   /  /:/ /:/_   /  /:/~/::\   /  /:/~/:/    /  /:/  ___   ___ /  /::\
//     /__/:/ /:/\:\ /__/:/ /:/ /\ /__/:/ /:/\:\ /__/:/ /:/___ /__/:/  /  /\ /__/\  /:/\:\
//     \  \:\/:/~/:/ \  \:\/:/ /:/ \  \:\/:/__\/ \  \:\/:::::/ \  \:\ /  /:/ \  \:\/:/__\/
//      \  \::/ /:/   \  \::/ /:/   \  \::/       \  \::/~~~~   \  \:\  /:/   \  \::/
//       \__\/ /:/     \  \:\/:/     \  \:\        \  \:\        \  \:\/:/     \  \:\
//         /__/:/       \  \::/       \  \:\        \  \:\        \  \::/       \  \:\
//         \__\/         \__\/         \__\/         \__\/         \__\/         \__\/
