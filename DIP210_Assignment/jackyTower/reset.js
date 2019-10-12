localStorage.applicant="";
localStorage.residence="";
localStorage.application="";
localStorage.officer="";

console.log(localStorage.residence);
console.log(localStorage.applicant);
console.log(localStorage.application);
console.log(localStorage.officer);

var reset = document.getElementById("reset");


reset.addEventListener("click", function(){
  //console.log("commencing reset");
  
  var dummyApplicant   = [{applicantID:1, username:"jeff", password:"jeff", fullName:"jeffa marumaya", email:"jeff@mail.com", monthlyIncome:"999999", attachment: new Array},
                          {applicantID:2, username:"jacky", password:"jacky", fullName:"jackyru kurohime", email:"jacky@mail.com", monthlyIncome:"666666", attachment: new Array},
                          {applicantID:3, username:"jackyjacky", password:"jackyjacky", fullName:"black pepper bbq jacky", email:"jackyjacky@mail.com", monthlyIncome:"12345678", attachment: new Array},
                          {applicantID:4, username:"koi", password:"koi", fullName:"just koi . because reason", email:"koi@mail.com", monthlyIncome:"infinite", attachment: new Array}];
  if(localStorage.applicant=="" || localStorage.applicant==undefined){localStorage.applicant=JSON.stringify(dummyApplicant);console.log(localStorage.applicant);}



  var dummyList2 = [      {residenceID:"A001", residenceName:"Twins Residence", address:"2, Jalan Damanlela, Pusat Bandar Damansara, 50490 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur", unitCount:100, unitSize:3000, monthlyRental: 12000.00, amenities: undefined, units: new Array, staffID: "KOI001"},
                          {residenceID:"A002", residenceName:"jeff Penthouse", address:"No.912, Jalan roads, Kampung madosa, 12312 sana", unitCount:320, unitSize:2400, monthlyRental: 14214.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                          {residenceID:"A003", residenceName:"Koi Resort", address:"No.817, Jalan nanan, Kampung sentos, 23552 mana", unitCount:761, unitSize:1500, monthlyRental: 23525.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                          {residenceID:"A004", residenceName:"no name", address:"No.889, Jalan kiri_, Kampung gotaas, 23523 mama", unitCount:561, unitSize:1111, monthlyRental: 34634.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                          {residenceID:"B208", residenceName:"undefined", address:"No.770, Jalan kanan, Kampung baboru, 23523 papa", unitCount:791, unitSize:8787, monthlyRental: 12444.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                          {residenceID:"B210", residenceName:"null", address:"No.001, Jalan left_, Kampung mamoru, 45774 poko", unitCount:781, unitSize:8888, monthlyRental: 37347.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                          {residenceID:"MPU4", residenceName:"not error", address:"No.003, Jalan right, Kampung kansai, 23423 piko", unitCount:087, unitSize:6666, monthlyRental: 28884.00, amenities: "new Array", units: new Array, staffID: "KOI001"},
                          {residenceID:"B201", residenceName:"empty", address:"No.023, Jalan mati_, Kampung kyoton, 74574 nono", unitCount:418, unitSize:1088, monthlyRental: 23574.00, amenities: "ew Array", units: new Array, staffID: "KOI001"},
                          {residenceID:"K00B339", residenceName:"Tolong Jaya Condominium", address:"No. 15, Jalan Sri Semantan 1, Off, Jalan Semantan, Bukit Damansara, 50490 Kuala Lumpur,", unitCount:99, unitSize:735, monthlyRental: 850.00, amenities: "Walking distance to MRT", units: new Array, staffID: "KOI001"},
                          {residenceID:"A00B176", residenceName:"Bunga Jaya Apartment", address:"58, Jalan Kepong, Pekan Kepong, 52000 Kuala Lumpur,", unitCount:215, unitSize:505, monthlyRental: 680.00, amenities: "Walking distance to KTM", units: new Array, staffID: "KOI001"},];

  for (var i = 0; i < dummyList2.length; i++) {
    for (var x = 0; x < dummyList2[i].unitCount; x++) {
      dummyList2[i].units.push({unitNo:x, availability:"available"});
      //console.log(dummyList2[i].units);

    }
  }

  if(localStorage.residence==""||localStorage.residence==undefined){localStorage.residence = JSON.stringify(dummyList2);}



  var dummyApplication  =[{applicationID:1, applicantID:1, residenceID:"A001", applicationDate:new Date("21 October 1997"), requiredMonth: "January", requiredYear: "2090", status: "new", attachment:new Array},
                          {applicationID:2, applicantID:1, residenceID:"A002", applicationDate:new Date("21 October 1991"), requiredMonth: "January", requiredYear: "2090", status: "rejected", attachment:new Array},
                          {applicationID:3, applicantID:1, residenceID:"A003", applicationDate:new Date("22 October 2092"), requiredMonth: "Febuary", requiredYear: "1991", status: "rejected", attachment:new Array},
                          {applicationID:4, applicantID:1, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "rejected", attachment:new Array},
                          {applicationID:5, applicantID:1, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "closed", attachment:new Array},
                          {applicationID:6, applicantID:2, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "appealed", attachment:new Array},
                          {applicationID:7, applicantID:2, residenceID:"A002", applicationDate:new Date("23 October 1993"), requiredMonth: "March", requiredYear: "3092", status: "appealed", attachment:new Array}];
  if(localStorage.application==""||localStorage.application==undefined){localStorage.application=JSON.stringify(dummyApplication);console.log("applicationList empty: populated with dummy data");}

  //console.log(localStorage.residence);
  //console.log(localStorage.applicant);
  //console.log(localStorage.application);
  //console.log(localStorage.officer);



  console.log("reset concluded");
});
