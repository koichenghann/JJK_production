

var reset = document.getElementById("reset");


reset.addEventListener("click", function(){
  console.log("commencing reset");
  localStorage.applicant="";
  localStorage.residence="";
  localStorage.application="";
  localStorage.officer="";
  localStorage.allocation ="";

  console.log(localStorage.residence);
  console.log(localStorage.applicant);
  console.log(localStorage.application);
  console.log(localStorage.officer);
  console.log(localStorage.allocation);

  var dummyApplicant   = [{applicantID:1, username:"jeff", password:"jeff", fullName:"jeff rose", email:"jeff@JJK.com", monthlyIncome:"5000", attachment: new Array},
                          {applicantID:2, username:"jacky", password:"jacky", fullName:"jacky dan", email:"jacky@JJK.com", monthlyIncome:"5000", attachment: new Array},
                          {applicantID:3, username:"koi", password:"koi", fullName:"KoI Boba", email:"koi@JJK.com", monthlyIncome:"5000", attachment: new Array},
                          {applicantID:4, username:"bill", password:"bill", fullName:"Bill Door", email:"bill@ExtraHard.com", monthlyIncome:"1000", attachment: new Array},
                          {applicantID:5, username:"steve", password:"steve", fullName:"Steve Work", email:"bill@pineApple.com", monthlyIncome:"2000", attachment: new Array},
                          {applicantID:6, username:"tim", password:"tim", fullName:"tim Apple", email:"time@timeApple.com", monthlyIncome:"3000", attachment: new Array},
                          {applicantID:7, username:"lei", password:"lei", fullName:"Thunder Jun", email:"lei@smallRice.com", monthlyIncome:"800", attachment: new Array},
                          {applicantID:8, username:"ma", password:"ma", fullName:"Ma Cloud", email:"ma@aladin.com", monthlyIncome:"700", attachment: new Array},
                          {applicantID:9, username:"jane", password:"jane", fullName:"Jane Momo", email:"jane@momo.com", monthlyIncome:"1200", attachment: new Array},
                          {applicantID:10, username:"john", password:"john", fullName:"Babayaga", email:"john@hashashin.com", monthlyIncome:"3100", attachment: new Array},
                          {applicantID:11, username:"danny", password:"danny", fullName:"Gunslinger Danny", email:"danny@blackSand.com", monthlyIncome:"2500", attachment: new Array}]


  if(localStorage.applicant=="" || localStorage.applicant==undefined){localStorage.applicant=JSON.stringify(dummyApplicant);console.log("applicantList empty: populated with dummy data");}



  var dummyResidence = [  {residenceID:"A001", residenceName:"Twins Residence", address:"2, Jalan Damanlela, Pusat Bandar Damansara, 50490 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur", unitCount:10, unitSize:3000, monthlyRental: 12000.00, amenities: undefined, units: new Array, staffID: "KOI001"},
                          {residenceID:"A002", residenceName:"jeff Penthouse", address:"No.912, Jalan roads, Kampung madosa, 12312 sana", unitCount:30, unitSize:2400, monthlyRental: 14214.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                          {residenceID:"A003", residenceName:"Koi Resort", address:"No.817, Jalan nanan, Kampung sentos, 23552 mana", unitCount:70, unitSize:1500, monthlyRental: 23525.00, amenities: "new Array", units: new Array, staffID: "JEFF001"},
                          {residenceID:"A004", residenceName:"BRP Villa", address:"No.889, Jalan kiri_, Kampung gotaas, 23523 mama", unitCount:50, unitSize:1111, monthlyRental: 34634.00, amenities: "new Array", units: new Array, staffID: "JEFF001"},
                          {residenceID:"B208", residenceName:"POLO residence", address:"No.770, Jalan kanan, Kampung baboru, 23523 papa", unitCount:80, unitSize:8787, monthlyRental: 12444.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                          {residenceID:"B210", residenceName:"Saint John Residence", address:"No.001, Jalan left_, Kampung mamoru, 45774 poko", unitCount:781, unitSize:8888, monthlyRental: 37347.00, amenities: "new Array", units: new Array, staffID: "JEFF001"},
                          {residenceID:"MPU4", residenceName:"Semantan 10", address:"No.003, Jalan right, Kampung kansai, 23423 piko", unitCount:087, unitSize:6666, monthlyRental: 28884.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                          {residenceID:"B201", residenceName:"HELP Residence", address:"No.023, Jalan mati_, Kampung kyoton, 74574 nono", unitCount:418, unitSize:1088, monthlyRental: 23574.00, amenities: "ew Array", units: new Array, staffID: "KOI001"},
                          {residenceID:"K00B339", residenceName:"Tolong Jaya Condominium", address:"No. 15, Jalan Sri Semantan 1, Off, Jalan Semantan, Bukit Damansara, 50490 Kuala Lumpur,", unitCount:99, unitSize:735, monthlyRental: 850.00, amenities: "Walking distance to MRT", units: new Array, staffID: "KOI001"},
                          {residenceID:"A00B176", residenceName:"Bunga Jaya Apartment", address:"58, Jalan Kepong, Pekan Kepong, 52000 Kuala Lumpur,", unitCount:215, unitSize:505, monthlyRental: 680.00, amenities: "Walking distance to KTM", units: new Array, staffID: "KOI001"},];
  for (var i = 0; i < dummyResidence.length; i++) {
    for (var x = 0; x < dummyResidence[i].unitCount; x++) {
      dummyResidence[i].units.push({unitNo:x, availability:"available"});
    }
  }
  if(localStorage.residence==""||localStorage.residence==undefined){localStorage.residence = JSON.stringify(dummyResidence);console.log("residenceList empty: populated with dummy data");}



  var dummyApplication  =[{applicationID:1, applicantID:9, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "accepted", attachment:new Array},
                          {applicationID:2, applicantID:2, residenceID:"A002", applicationDate:new Date("21 October 1991"), requiredMonth: "January", requiredYear: "2090", status: "rejected", attachment:new Array},
                          {applicationID:3, applicantID:3, residenceID:"A003", applicationDate:new Date("22 October 2092"), requiredMonth: "Febuary", requiredYear: "1991", status: "rejected", attachment:new Array},
                          {applicationID:4, applicantID:4, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "rejected", attachment:new Array},
                          {applicationID:5, applicantID:5, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "closed", attachment:new Array},
                          {applicationID:6, applicantID:6, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "appealed", attachment:new Array},
                          {applicationID:7, applicantID:7, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "appealed", attachment:new Array},
                          {applicationID:8, applicantID:8, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                          {applicationID:9, applicantID:1, residenceID:"A002", applicationDate:new Date("21 October 1991"), requiredMonth: "January", requiredYear: "2090", status: "waitlist", attachment:new Array},
                          {applicationID:10, applicantID:1, residenceID:"A003", applicationDate:new Date("22 October 2092"), requiredMonth: "Febuary", requiredYear: "1991", status: "waitlist", attachment:new Array},
                          {applicationID:11, applicantID:1, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "waitlist", attachment:new Array},
                          {applicationID:12, applicantID:1, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "new", attachment:new Array},
                          {applicationID:13, applicantID:2, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "closed", attachment:new Array},
                          {applicationID:14, applicantID:2, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "closed", attachment:new Array}];
  if(localStorage.application==""||localStorage.application==undefined){localStorage.application=JSON.stringify(dummyApplication);console.log("applicationList empty: populated with dummy data");}

  var dummyAllocation = [{allocationID:1, applicationID:9, residenceID:"A001", unitID:0, fromDate:undefined, duration:12, endDate:undefined},
                        {allocationID:2, applicationID:2, residenceID:"A001", unitID:0, fromDate:undefined, duration:12, endDate:undefined},
                        {allocationID:3, applicationID:3, residenceID:"A001", unitID:0, fromDate:undefined, duration:12, endDate:undefined},
                        {allocationID:4, applicationID:4, residenceID:"A001", unitID:0, fromDate:undefined, duration:12, endDate:undefined},
                        {allocationID:5, applicationID:5, residenceID:"A001", unitID:1, fromDate:undefined, duration:12, endDate:undefined},
                        {allocationID:6, applicationID:6, residenceID:"A001", unitID:1, fromDate:undefined, duration:8, endDate:undefined},
                        {allocationID:7, applicationID:7, residenceID:"A001", unitID:0, fromDate:undefined, duration:8, endDate:undefined},
                        {allocationID:8, applicationID:8, residenceID:"A001", unitID:0, fromDate:undefined, duration:8, endDate:undefined}];
  //populate allocation list's date
  for (var i = 0; i < dummyAllocation.length; i++) {
    if(dummyAllocation[i].fromDate==undefined){
      dummyAllocation[i].fromDate = new Date();
      dummyAllocation[i].endDate = dummyAllocation[i].fromDate;
      dummyAllocation[i].endDate.setMonth(dummyAllocation[i].endDate.getMonth() + parseInt(dummyAllocation[i].duration, 10));
    }
  }
  if (localStorage.allocation == "" || localStorage.allocation == undefined) {localStorage.allocation = JSON.stringify(dummyAllocation);console.log("allocationList empty: populated with dummy data");}
  //console.log(localStorage.residence);
  //console.log(localStorage.applicant);
  console.log(localStorage.application);
  //console.log(localStorage.officer);



  console.log("reset concluded");
});
