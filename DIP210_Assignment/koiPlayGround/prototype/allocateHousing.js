var dummyApplication = [{applicationID:1, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:3, applicantID:2, residenceID:"A002", applicationDate:new Date("21 October 1991"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:2, applicantID:3, residenceID:"A003", applicationDate:new Date("22 October 2092"), requiredMonth: "Febuary", requiredYear: "1991", status: "rejected", attachment:new Array},
                        {applicationID:4, applicantID:1, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "appeal", attachment:new Array},
                        {applicationID:5, applicantID:2, residenceID:"A001", applicationDate:new Date("25 December 2097"), requiredMonth: "June", requiredYear: "2091", status: "waitlist", attachment:new Array},
                        {applicationID:6, applicantID:3, residenceID:"A003", applicationDate:new Date("26 December 1997"), requiredMonth: "July", requiredYear: "2033", status: "new", attachment:new Array},
                        {applicationID:7, applicantID:1, residenceID:"A003", applicationDate:new Date("27 December 2007"), requiredMonth: "April", requiredYear: "2022", status: "new", attachment:new Array},
                        {applicationID:8, applicantID:2, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "May", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:9, applicantID:3, residenceID:"A002", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:10, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:11, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:12, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:13, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:14, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:15, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:16, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:17, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:18, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:19, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:20, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:21, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:22, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:23, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:24, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:25, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                        {applicationID:26, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array}];

var dummyApplicant   = [{applicantID:1, username:"jeff", password:"jeff", fullName:"jeffa marumaya", email:"", monthlyIncome:"999999", attachment: new Array},
                        {applicantID:2, username:"jacky", password:"jacky", fullName:"jackyru kurohime", monthlyIncome:"666666", attachment: new Array},
                        {applicantID:4, username:"jackyjacky", password:"jackyjacky", fullName:"black pepper bbq jacky", monthlyIncome:"12345678", attachment: new Array},
                        {applicantID:3, username:"koi", password:"koi", fullName:"just koi . because reason", monthlyIncome:"infinite", attachment: new Array}];



//will move to php in assignment 2
//list will be store locally for assignment 1
var applicationList = dummyApplication;
var applicantList   = dummyApplicant;
var residenceList = JSON.parse(localStorage.residence);

var allocation = {allocationID:undefined, applicationID:undefined, residenceID:undefined, UnitID:undefined, fromDate:undefined, duration:undefined, endDate:undefined};
applicationID = 1;
//pass in applicationID
var officer;



var application;
for(var i=0; i<applicationList.length; i++){
  if(applicationID == applicationList[i].applicationID){
    application = applicationList[i];
    break;
  }
}
var applicant;
for(var i=0; i<applicantList.length; i++){
  if(application.applicantID == applicantList[i].applicantID){
    applicant = applicantList[i];
    break;
  }
}
var residence;
for(var i=0; i<residenceList.length; i++){
  if(application.residenceID == residenceList[i].residenceID){
    residence = residenceList[i];
  }
}


var form_applicationID=document.getElementById("form-applicationID");
var form_username=document.getElementById("form-username");
var form_monthlyIncome=document.getElementById("form-monthlyIncome");
var form_residenceID=document.getElementById("form-residenceID");
var form_requiredMonth=document.getElementById("form-requiredMonth");
var form_requiredYear=document.getElementById("form-requiredYear");

var form_residenceID_in=document.getElementById("form-residenceID-in");
var form_unitAvailable=document.getElementById("form-unitAvailable");
var form_unit=document.getElementById("form-unit");

var form_startDate=document.getElementById("form-startDate");
//var form_duration=document.getElementById("form-duration").getElementsByTagName("input");
var form_duration_radio_1=document.getElementById("form-duration-radio-1");
var form_duration_radio_2=document.getElementById("form-duration-radio-2");
var form_endDate=document.getElementById("form-endDate");


//application form
form_applicationID.value=applicationID;
form_username.value=applicant.username;
form_monthlyIncome.value=applicant.monthlyIncome;
form_residenceID.value=application.residenceID;
form_requiredMonth.value=application.requiredMonth;
form_requiredYear.value=application.requiredYear;

//Residence form

//form_residenceID_in.setAttribute("onclick", "refreshResidence();")
//form_residenceID_in.value = application.residenceID;
form_unitAvailable.value = residence.unitCount;
//form_unit.value =;





form_residenceID_in.innerHTML = ``;
for(var i=0; i<residenceList.length; i++){
  var node = document.createElement("option");
  node.value= residenceList[i].residenceID;
  node.innerHTML= residenceList[i].residenceID + ": " + residenceList[i].residenceName;
  form_residenceID_in.appendChild(node);
}

var residenceID;
form_residenceID_in.addEventListener("change", function(){
  residenceID = form_residenceID_in.value;
  allocation.residenceID = form_residenceID_in.value;
  form_unit.removeAttribute("disabled");
  //to locate the residece object based on selected residenceID
  for(var i=0; i<residenceList.length; i++){
    if(residenceID == residenceList[i].residenceID){
      residence = residenceList[i];
    }
  }

  form_unitAvailable.value = residence.unitCount;
  form_unit.innerHTML = ``;
  for(var i=0; i<residence.units.length; i++){
    var node = document.createElement("option");
    node.value= residence.units[i].unitNo;
    node.innerHTML= "UnitID: " + residence.units[i].unitNo;
    form_unit.appendChild(node);
  }
});

form_startDate.addEventListener("change", function(){
  allocation.startDate = new Date(form_startDate.value);
  calDate();
});

form_duration_radio_1.addEventListener("click", function(){
  allocation.duration = form_duration_radio_1.value;
  calDate();
});
form_duration_radio_2.addEventListener("click", function(){
  allocation.duration = form_duration_radio_2.value;
  calDate();
});

function calDate(){
  if(allocation.startDate != undefined && allocation.duration!=undefined){
    allocation.endDate = new Date(allocation.startDate);//allocation.startDate.getMonth() + allocation.duration);
    allocation.endDate.setMonth(allocation.endDate.getMonth() + parseInt(allocation.duration, 10));

    var str = "" + 1
    var pad = "0000"
    var ans = pad.substring(0, pad.length - str.length) + str
    outputMonth = ("00".substring(0, (""+allocation.endDate.getMonth()).length) + allocation.endDate.getMonth());
    outputDate = ("00".substring(0, (""+allocation.endDate.getDate()).length) + allocation.endDate.getDate());

    console.log(allocation.startDate + " ||| " + allocation.duration + " ||| " + allocation.endDate);

    //form_endDate.value =
    console.log(allocation.endDate.getFullYear() + "-" + ("00".substring(0, (""+allocation.endDate.getMonth()).length) + allocation.endDate.getMonth()) + "-" + ("00".substring(0, allocation.endDate.getDate().toString(10).length) + allocation.endDate.getDate()));


  }
}

form_unit.addEventListener("change", function(){
  //update table;
});




//application, applicant, reisdence-unit, allocation
//4 button
