var xmlhttp = new XMLHttpRequest();
var response = function(responseText){};
console.log('start');
var allocationList; //= JSON.parse(localStorage.allocation);
var applicationID;  //= parseInt(currentApplication.applicationID,10);
var applicationList;
var residenceList;
var applicantList;
var unitList;


var allocationOfSelectedUnit  = new Array;

function validateUser(){
  response = function(responseText){
    if (responseText=="1") {
      getCurrentUser();
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
      currentOfficer = JSON.parse(responseText);
    }
  };
  submit("key=getCurrentUser");
}

var form_applicationID    = document.getElementById("form-applicationID");
var form_username         = document.getElementById("form-username");
var form_monthlyIncome    = document.getElementById("form-monthlyIncome");
var form_residenceID      = document.getElementById("form-residenceID");
var form_requiredMonth    = document.getElementById("form-requiredMonth");
var form_requiredYear     = document.getElementById("form-requiredYear");

var form_residenceID_in   = document.getElementById("form-residenceID-in");
var form_unitAvailable    = document.getElementById("form-unitAvailable");
var form_unit             = document.getElementById("form-unit");

var form_startDate        = document.getElementById("form-startDate");
//var form_duration=document.getElementById("form-duration").getElementsByTagName("input");
var form_duration_radio_1 = document.getElementById("form-duration-radio-1");
var form_duration_radio_2 = document.getElementById("form-duration-radio-2");
var form_endDate          = document.getElementById("form-endDate");

var form_btn_approve      = document.getElementById("form_btn_approve");
var form_btn_reject       = document.getElementById("form_btn_reject");
var form_btn_rejectAll    = document.getElementById("form_btn_rejectAll");
var form_btn_cancel       = document.getElementById("form_btn_cancel");
var form_btn_allocate     = document.getElementById("form_btn_allocate");
var form_btn_addToWaitlist= document.getElementById("form_btn_addToWaitlist");

var form_table = document.getElementById("form_table");

loadDataSet()

function loadDataSet(){


  response = function(responseText){
    var applicationList = JSON.parse(responseText)[0];
    var applicantList   = JSON.parse(responseText)[1];
    var residenceList   = JSON.parse(responseText)[2];
    var allocationList  = JSON.parse(responseText)[3];
    var unitList        = JSON.parse(responseText)[4];
    var applicationID   = JSON.parse(responseText)[5];
    console.log(JSON.parse(responseText)[3]);
    console.log('here');

    console.log('ran');
    var allocation                = {allocationID:undefined, applicationID:applicationID, residenceID:undefined, unitID:undefined, fromDate:undefined, duration:undefined, endDate:undefined};
    allocation.allocationID = allocationList[allocationList.length-1];

    //get the selected application
    var application;
    for(var i=0; i<applicationList.length; i++){
      console.log(applicationList);
      console.log(applicationList.length);
      console.log(applicationID);
      if(applicationID == applicationList[i].applicationID){

        application = applicationList[i];
        break;
      }
    }

    //get the applicant
    var applicant;
    for(var i=0; i<applicantList.length; i++){
      if(application.applicantID == applicantList[i].applicantID){
        applicant = applicantList[i];
        console.log(applicant);
        break;
      }
    }

    var allocatable = false;
    //get the residence in the application
    var residence;
    for(var i=0; i<residenceList.length; i++){
      if(application.residenceID == residenceList[i].residenceID){
        residence = residenceList[i];
      }
    }

    var form_applicationID    = document.getElementById("form-applicationID");
    var form_username         = document.getElementById("form-username");
    var form_monthlyIncome    = document.getElementById("form-monthlyIncome");
    var form_residenceID      = document.getElementById("form-residenceID");
    var form_requiredMonth    = document.getElementById("form-requiredMonth");
    var form_requiredYear     = document.getElementById("form-requiredYear");

    var form_residenceID_in   = document.getElementById("form-residenceID-in");
    var form_unitAvailable    = document.getElementById("form-unitAvailable");
    var form_unit             = document.getElementById("form-unit");

    var form_startDate        = document.getElementById("form-startDate");
    //var form_duration=document.getElementById("form-duration").getElementsByTagName("input");
    var form_duration_radio_1 = document.getElementById("form-duration-radio-1");
    var form_duration_radio_2 = document.getElementById("form-duration-radio-2");
    var form_endDate          = document.getElementById("form-endDate");

    var form_btn_approve      = document.getElementById("form_btn_approve");
    var form_btn_reject       = document.getElementById("form_btn_reject");
    var form_btn_rejectAll    = document.getElementById("form_btn_rejectAll");
    var form_btn_cancel       = document.getElementById("form_btn_cancel");
    var form_btn_allocate     = document.getElementById("form_btn_allocate");
    var form_btn_addToWaitlist= document.getElementById("form_btn_addToWaitlist");

    var form_table = document.getElementById("form_table");

    //application form
    form_applicationID.value=applicationID;
    form_username.value=applicant.username;
    form_monthlyIncome.value=applicant.monthlyIncome;
    form_residenceID.value=application.residenceID;
    form_requiredMonth.value=application.requiredMonth;
    form_requiredYear.value=application.requiredYear;
    form_unitAvailable.value = residence.unitCount;

    checkAllocate();
    checkWitList();

    //load all residence into select residence field
    form_residenceID_in.innerHTML = ``;
    for(var i=0; i<residenceList.length; i++){
      var node = document.createElement("option");
      node.value= residenceList[i].residenceID;
      node.innerHTML= residenceList[i].residenceID + ": " + residenceList[i].residenceName;
      form_residenceID_in.appendChild(node);
    }

    var residenceID;
    var unit = new Array;
    form_residenceID_in.addEventListener("change", function(){generateUnit()});
    generateUnit();
    function generateUnit(){
      residenceID = form_residenceID_in.value;
      allocation.residenceID = form_residenceID_in.value;
      form_unit.removeAttribute("disabled");
      //to locate the residece object based on selected residenceID
      for(var i=0; i<residenceList.length; i++){
        if(residenceID == residenceList[i].residenceID){
          residence = residenceList[i];
        }
      }

      for (var i = 0; i < unitList.length; i++) {
          if(unitList[i].residenceID == residence.residenceID){
            unit.push(unitList[i]);
          }
      }

      loadAllocation(form_unit.value);
      form_unitAvailable.value = residence.unitCount;
      form_unit.innerHTML = ``;
      for(var i=0; i<unit.length; i++){
        var node = document.createElement("option");
        node.value= unit[i].unitID;
        node.innerHTML= "UnitID: " + unit[i].unitID;
        form_unit.appendChild(node);
      }
    }

    form_startDate.addEventListener("change", function(){
      allocation.fromDate = new Date(form_startDate.value);
      console.log('the date: ' + allocation.fromDate);
      calDate();
      //checkAllocate()
    });

    form_duration_radio_1.addEventListener("click", function(){
      allocation.duration = form_duration_radio_1.value;
      calDate();
      //checkAllocate()
    });
    form_duration_radio_2.addEventListener("click", function(){
      allocation.duration = form_duration_radio_2.value;
      calDate();
      //checkAllocate()
    });


    function calDate(){
      if(allocation.fromDate != undefined && allocation.duration!=undefined){
        allocation.endDate = new Date(allocation.fromDate);//allocation.fromDate.getMonth() + allocation.duration);
        allocation.endDate.setMonth(allocation.endDate.getMonth() + parseInt(allocation.duration, 10));
        form_endDate.value = allocation.endDate.getFullYear() + "-" + pad(allocation.endDate.getMonth(),2) + "-" + pad(allocation.endDate.getDate(),2);
      }
      checkAllocate()
    }

    function pad(string, size){
      while(string.toString(10).length<size){string="0"+string;}
      return string;
    }

    //console.log(form_unit.value==allocationList[0].unitID);
    loadAllocation(form_unit.value);

    form_unit.addEventListener("change", function(event){
      loadAllocation(event.target.value);
    })

    function loadAllocation(selectedUnitID){
      allocationOfSelectedUnit = [];
      for (var i = 0; i < allocationList.length; i++) {
        if(allocationList[i].unitID.toString() == selectedUnitID && allocationList[i].residenceID.toString()==form_residenceID_in.value.toString()){
          allocationOfSelectedUnit.push(allocationList[i]);
        }
      }
      //console.log(allocationOfSelectedUnit);
      allocation.unitID = parseInt(selectedUnitID,10);
      populateTable();
    }
    function populateTable(){
      form_table.getElementsByTagName("tbody")[0].innerHTML="";
      //console.log(allocationOfSelectedUnit);
      for (var i = 0; i < allocationOfSelectedUnit.length; i++) {
        insertTableRow(i);

        for (var z = 0; z < applicationList.length; z++) {
          if(applicationList[z].applicationID == allocationOfSelectedUnit[i].applicationID){
            //console.log("application found: " + applicationList[z].applicationID);
            break;
          }
          if(applicationList[z].applicationID==8){console.log("the eight" + applicationList[z].applicationID);}
          //console.log("not found: " + allocationOfSelectedUnit[allocationOfSelectedUnit.length-1].applicationID);
        }

      }

      //console.log(applicationList);
    }
    function insertTableRow(i){

      var unitApplicant;
      for (var x = 0; x < applicationList.length; x++) {
        if(applicationList[x].applicationID.toString()==allocationOfSelectedUnit[i].applicationID.toString()){
          //console.log(" ");
          //console.log("x: "+x + "  " + applicationList[x].applicationID + " " + allocationOfSelectedUnit[i].applicationID);
          for(var y=0; y<applicantList.length; y++){
            //console.log("per allpication " +x + " " + y + "  applicantListLength:" + applicantList.length);
            if(applicantList[y].applicantID.toString()==applicationList[x].applicantID.toString()){
              unitApplicant = applicantList[y];
              break;
            }
          }
        }
      }
      //console.log(i + " end of loop: " + unitApplicant + " " + allocationOfSelectedUnit[i].applicationID);

      console.log(allocationOfSelectedUnit);



      var table = form_table.getElementsByTagName("tbody")[0];
      var newRow = table.insertRow(table.length);

      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);
      var cell5 = newRow.insertCell(4);
      var cell6 = newRow.insertCell(5);
      var cell7 = newRow.insertCell(6);

      cell1.innerHTML = pad(allocationOfSelectedUnit[i].allocationID,3);//pad(i + 1,3);
      cell2.innerHTML = allocationOfSelectedUnit[i].residenceID;
      cell3.innerHTML = allocationOfSelectedUnit[i].unitID;
      //console.log(typeof allocationOfSelectedUnit[i].unitID);
      cell4.innerHTML = allocationOfSelectedUnit[i].applicationID;
      //console.log(unitApplicant);
      cell5.innerHTML = unitApplicant.username;
      var unitStartDate = new Date(allocationOfSelectedUnit[i].fromDate);
      var unitEndDate =  new Date(allocationOfSelectedUnit[i].endDate);
      cell6.innerHTML = unitStartDate.getFullYear() + "-" + pad(unitStartDate.getMonth(),2) + "-" + pad(unitStartDate.getDate(),2);
      cell7.innerHTML = unitEndDate.getFullYear() + "-" + pad(unitEndDate.getMonth(),2) + "-" + pad(unitEndDate.getDate(),2);


    }
    //application, applicant, reisdence-unit, allocation
    //4 button


    function checkAllocate(){
      console.log(allocation);
      if(allocation.duration == undefined || allocation.endDate==undefined || allocation.fromDate==undefined){
        allocatable = false;
        form_btn_allocate.setAttribute("class", "w-100  btn  btn-secondary text-dark");
        form_btn_allocate.innerHTML = "complete form to allocate"
        //console.log("is false: " + (allocation.duration==undefined) + (allocation.endDate==undefined) +(allocation.fromDate==undefined));
      }else {
        allocatable = true;
        form_btn_allocate.setAttribute("class", "w-100  btn btn-warning box_shadow");
        form_btn_allocate.innerHTML = "Allocate"
        //console.log("true");
      }
    }

    ////////////////////////////////////////////////////////////////
    var applicant;
    //var allocation                = {allocationID:undefined, applicationID:undefined, residenceID:undefined, UnitID:undefined, fromDate:undefined, duration:undefined, endDate:undefined};
    var application;

    //var form_btn_approve      = document.getElementById("form_btn_approve");
    //var form_btn_reject       = document.getElementById("form_btn_reject");
    var form_btn_rejectAll    = document.getElementById("form_btn_rejectAll");
    //var form_btn_addToWaitlist= document.getElementById("form_btn_addToWaitlist");

    //var form_btn_cancel       = document.getElementById("form_btn_cancel");
    var form_btn_allocate     = document.getElementById("form_btn_allocate");


    //waitlist
    function checkWitList(){
      console.log('ran');
      if(application.status == "waitlist"){
        form_btn_addToWaitlist.innerHTML = `waitlist <i class="fas fa-toggle-on"></i>`;
        form_btn_addToWaitlist.setAttribute("class", "btn btn-primary btn-sm mt-2 mb-2 font-weight-bold")
      }
      else if (application.status == "new"){
        form_btn_addToWaitlist.innerHTML = `waitlist <i class="fas fa-toggle-off"></i>`;
        form_btn_addToWaitlist.setAttribute("class", "btn btn-secondary btn-sm mt-2 mb-2 font-weight-bold")
      }
    }
    form_btn_addToWaitlist.addEventListener("click", function(){
      response = function(responseText){
        if (responseText=="1") {
          //window.location.href = "officer_viewApplication.html";
          if (application.status=="waitlist") {
            application.status="new";
          }
          else if (application.status=="new") {
            application.status="waitlist";
          }
          checkWitList();
        }
        else {
          console.log(responseText);
        }
      };
      submit('key=waitList'+"&applicationID="  + allocation.applicationID);
    });

    form_btn_reject.addEventListener("click", function(){
      response = function(responseText){
        if (responseText=="1") {
          window.location.href = "officer_viewApplication.html";
        }
        else {
          console.log(responseText);
        }
      };
      submit('key=rejectApplication'+"&applicationID="  + allocation.applicationID);
      /*
      for (var i = 0; i < applicationList.length; i++) {
        if(applicationList[i].applicationID == application.applicationID){
          if(applicationList[i].status == "appealed"){
            applicationList[i].status = "closed";
          }
          else {
            applicationList[i].status = "rejected";
          }
          localStorage.application = JSON.stringify(applicationList);
          window.location.href = "officer_viewApplication.html";
          break;
        }
      }*/
    });


    function rejectAll(){
      response = function(responseText){
        if (responseText=="1") {
          window.location.href = "officer_viewApplication.html";
        }
        else {
          console.log(responseText);
        }
      };
      submit('key=rejectAllApplication'+"&applicationID="  + allocation.applicationID);
    }

    form_btn_rejectAll.addEventListener("click", function(){
      rejectAll();
    })


    form_btn_allocate.addEventListener("click", function(){
      if (allocatable == true) {
        console.log(allocation);
        response = function(responseText){
          if(responseText=="1"){
            window.location.href = "officer_viewApplication.html";
          }
          else {
            console.log(responseText);
          }
        };
        submit('key=addAllocation'
                +"&applicationID="  + allocation.applicationID
                +"&residenceID="     + allocation.residenceID
                +"&unitID="          + allocation.unitID
                +"&fromDate="        + allocation.fromDate.getFullYear()+"-"+allocation.fromDate.getMonth()+"-"+allocation.fromDate.getDate()
                +"&duration="        + allocation.duration
                +"&endDate="         + allocation.endDate.getFullYear()+"-"+allocation.endDate.getMonth()+"-"+allocation.endDate.getDate());

        //allocationList.push(allocation);
        //localStorage.allocation = JSON.stringify(allocationList);
        /*
        for (var i = 0; i < applicationList.length; i++) {
          if(applicationList[i].applicationID == application.applicationID){
            applicationList[i].status = "accepted";
            localStorage.application = JSON.stringify(applicationList);
            rejectAll();
          }
        }*/
      }

    })

  };
  submit('key=loadDataSet');
}


function submit(message){
  xmlhttp.open("POST", "officer_allocateHousing.php");
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlhttp.send(message);
  xmlhttp.onload = function(){console.log(this.responseText);response(this.responseText);};
}
