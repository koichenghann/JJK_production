var residenceList = [ {residenceID:"A001", address:"No.911, Jalan Jalan, Taman Bahagia, Kampung gantut, 54321 sini", unitCount:100, unitSize:3000, monthlyRental: 12000, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"A002", address:"No.912, Jalan roads, Kampung madosa, 12312 sana", unitCount:320, unitSize:2400, monthlyRental: 14214, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"A003", address:"No.817, Jalan nanan, Taman Megah, Kampung sentos, 23552 mana", unitCount:761, unitSize:1500, monthlyRental: 23525, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"B210", address:"No.889, Jalan kiri_, USJ21, Kampung gotaas, 23523 mama", unitCount:561, unitSize:1111, monthlyRental: 34634, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"B201", address:"No.770, Jalan kanan, Sungai Buloh, Kampung baboru, 23523 papa", unitCount:791, unitSize:8787, monthlyRental: 12444, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"B208", address:"No.001, Jalan left_, Kampung mamoru, 45774 poko", unitCount:781, unitSize:8888, monthlyRental: 37347, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"MPU4", address:"No.003, Jalan right, Kampung kansai, 23423 piko", unitCount:87, unitSize:6666, monthlyRental: 28884, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"ELM2", address:"No.023, Jalan mati_, Kampung kyoton, 74574 nono", unitCount:418, unitSize:1088, monthlyRental: 23574, amenities: new Array, units: new Array, staffID: "KOI001"}];

//ADD RESIDENCE NAME TO ALL RESIDENCE TABLE, AND REDESIGN RESIDENCE PAGE

var ignoreKey = ["jalan", "Jalan"];
var searchTable = [{index:null, location:""}];

for(var i=0; i<residenceList.length; i++){

  //searchTable.push({key:residenceList[i].residenceID});
  var splitedAddress2 = new Array;
  var splitedAddress = residenceList[i].address.split(", ");
  for(var x=0; x<splitedAddress.length; x++){
    searchTable.push({level:1, key:splitedAddress[x], residenceID:residenceList[i].residenceID});

    splitedAddress2 = splitedAddress[x].split(" ");
    for(var y=0; y<splitedAddress2.length; y++){
      if(!ignoreKey.includes(splitedAddress2[y])){
        searchTable.push({key:splitedAddress2[y], residenceID:residenceList[i].residenceID});
      }
    }
  }
}
//console.log(searchTable);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var searchCriteria;
searchCriteria = "USj21";

var result = new Array;
for(var i=1; i<searchTable.length; i++){
  if(searchTable[i].key.toLowerCase() == searchCriteria.toLowerCase()){
    result.push(searchTable[i]);
  }
}
console.log(result);
