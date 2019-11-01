/*var allocation = [{allocationID:123, applicationID:123, residenceID:undefined, UnitID:undefined, fromDate:undefined, duration:undefined, endDate:undefined},
                  {allocationID:1, applicationID:1, residenceID:"A001", UnitID:1, fromDate:01-01-01, duration:undefined, endDate:undefined}];

var appl = [{no:1,applicationID:"A01",residenceID:"R01",unitAvailable:3,monthlyRental:780,applicationStatus:"Appeal Pending"}];

applicantList = new Array;

no.innerHTML   = applicantList[rowNum].no;
applicantID.innerHTML = applicantList[rowNum].applicantID;
residenceID.innerHTML  = applicantList[rowNum].residenceID;
unitAvailable.innerHTML = applicantList[rowNum].unitAvailable;
monthlyRental.innerHTML   = applicantList[rowNum].monthlyRental;
applicationStatus.innerHTML = applicantList[rowNum].applicationStatus;

function readFromLocalStorage(){
  if(localStorage.applicant != ""){
    applicantList = JSON.parse(localStorage.applicant);
  }
}

function populateTable(){
  readFromLocalStorage();
  for(var i=0; i<applicantList.length; i++){
    insertRowToTable(i);
  }
}

console.log(appl);

*/

//nota
/*
var applicantDetails = {no:1,second:"jeffffff",age:58};
document.getElementById("jeffTest1").innerHTML = applicantDetails["no"];
document.getElementById("jeffTest2").innerHTML = applicantDetails["second"];
*/

/*
var txt = "";
var firstAppl = {no: 1, applID:A01, redID:R01}

var dunno;

for(dunno in firstAppl){
  txt += firstAppl[dunno] + "";
}
document.getElementById("")
*/

/*
var table = document.getElementById("table1");

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);*/


var applicantDetails = {no:1,appID:"A01",redID:"R01",unitA:9999,monthlyRental:600,status:"Appeal Pending"};
document.getElementById("jeffTest1").innerHTML = applicantDetails["no"];
document.getElementById("jeffTest2").innerHTML = applicantDetails["appID"];
document.getElementById("jeffTest3").innerHTML = applicantDetails["redID"];
document.getElementById("jeffTest4").innerHTML = applicantDetails["unitA"];
document.getElementById("jeffTest5").innerHTML = applicantDetails["monthlyRental"];
document.getElementById("jeffTest6").innerHTML = applicantDetails["status"];




var dmApplication1 =[{applicationID:1, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
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


                                                var dummyList2 = [    {residenceID:"A001", residenceName:"jacky Villa", address:"No.911, Jalan Jalan, Kampung gantut, 54321 sini", unitCount:100, unitSize:3000, monthlyRental: 12000, amenities: undefined, units: new Array, staffID: "KOI001"},
                                                                      {residenceID:"A002", residenceName:"jeff Penthouse", address:"No.912, Jalan roads, Kampung madosa, 12312 sana", unitCount:320, unitSize:2400, monthlyRental: 14214, amenities: new Array, units: new Array, staffID: "KOI001"},
                                                                      {residenceID:"A003", residenceName:"Koi Resort", address:"No.817, Jalan nanan, Kampung sentos, 23552 mana", unitCount:761, unitSize:1500, monthlyRental: 23525, amenities: new Array, units: new Array, staffID: "KOI001"},


                                                                      {residenceID:"B210", residenceName:"no name", address:"No.889, Jalan kiri_, Kampung gotaas, 23523 mama", unitCount:561, unitSize:1111, monthlyRental: 34634, amenities: new Array, units: new Array, staffID: "KOI001"},
                                                                      {residenceID:"B201", residenceName:"undefined", address:"No.770, Jalan kanan, Kampung baboru, 23523 papa", unitCount:791, unitSize:8787, monthlyRental: 12444, amenities: new Array, units: new Array, staffID: "KOI001"},
                                                                      {residenceID:"B208", residenceName:"null", address:"No.001, Jalan left_, Kampung mamoru, 45774 poko", unitCount:781, unitSize:8888, monthlyRental: 37347, amenities: new Array, units: new Array, staffID: "KOI001"},
                                                                      {residenceID:"MPU4", residenceName:"not error", address:"No.003, Jalan right, Kampung kansai, 23423 piko", unitCount:087, unitSize:6666, monthlyRental: 28884, amenities: new Array, units: new Array, staffID: "KOI001"},
                                                                      {residenceID:"ELM2", residenceName:"empty", address:"No.023, Jalan mati_, Kampung kyoton, 74574 nono", unitCount:418, unitSize:1088, monthlyRental: 23574, amenities: new Array, units: new Array, staffID: "KOI001"}];
