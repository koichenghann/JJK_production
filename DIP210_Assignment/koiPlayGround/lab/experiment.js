var textbox = document.getElementById("textbox");
var submitBtn = document.getElementById("submit");
var result = document.getElementById("result");


Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}


var residenceList = [{residenceID:"A001", address:"No.911, Jalan Jalan, Kampung gantut, 54321 sini", units:100, unitSize:3000, monthlyRental: 12000},
                      {residenceID:"A002", address:"No.912, Jalan roads, Kampung madosa, 12312 sana", units:320, unitSize:2400, monthlyRental: 14214},
                      {residenceID:"A003", address:"No.817, Jalan nanan, Kampung sentos, 23552 mana", units:761, unitSize:1500, monthlyRental: 23525},
                      {residenceID:"B210", address:"No.889, Jalan kiri_, Kampung gotaas, 23523 mama", units:561, unitSize:1111, monthlyRental: 34634},
                      {residenceID:"B201", address:"No.770, Jalan kanan, Kampung baboru, 23523 papa", units:791, unitSize:8787, monthlyRental: 12444},
                      {residenceID:"B208", address:"No.001, Jalan left_, Kampung mamoru, 45774 poko", units:781, unitSize:8888, monthlyRental: 37347},
                      {residenceID:"MPU4", address:"No.003, Jalan right, Kampung kansai, 23423 piko", units:087, unitSize:6666, monthlyRental: 28884},
                      {residenceID:"ELM2", address:"No.023, Jalan mati_, Kampung kyoton, 74574 nono", units:418, unitSize:1088, monthlyRental: 23574},];



localStorage.typeRanger = JSON.stringify(residenceList);






//localStorage.typeRanger = residenceList[1].residenceID;
//for(var i=0; i<residenceList.length; i++){

//}
result.innerHTML = JSON.parse(localStorage.residence).length;
