var residenceList1 = [ {residenceID:"A001", address:"No.911, Jalan Jalan, Damansara, Taman Bahagia, Kampung gantut, Kuala Lumpur, 54321 sini", unitCount:100, unitSize:3000, monthlyRental: 12000, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"A002", address:"No.912, Jalan roads, Seputeh, Kampung madosa, Kuala Lumpur, 12312 sana", unitCount:320, unitSize:2400, monthlyRental: 14214, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"A003", address:"No.817, Jalan nanan, Segambut, Taman Megah, Kuala Lumpur, Kampung sentos, 23552 mana", unitCount:761, unitSize:1500, monthlyRental: 23525, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"B210", address:"No.889, Jalan kiri_, Kepong, USJ21, Kampung gotaas, Kuala Lumpur, 23523 mama", unitCount:561, unitSize:1111, monthlyRental: 34634, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"B201", address:"No.770, Jalan kanan, KL City Centre USJ21 Sungai Buloh, Kuala Lumpur, Kampung baboru, 23523 papa", unitCount:791, unitSize:8787, monthlyRental: 12444, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"B208", address:"No.001, Jalan left_, Setia Wangsa Kampung mamoru, Kuala Lumpur, 45774 poko", unitCount:781, unitSize:8888, monthlyRental: 37347, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"MPU4", address:"No.003, Jalan right, Bandar Tun Razak Kampung kansai, Kuala Lumpur, 23423 piko", unitCount:87, unitSize:6666, monthlyRental: 28884, amenities: new Array, units: new Array, staffID: "KOI001"},
                      {residenceID:"ELM2", address:"No.023, Jalan mati_, Sungai Besi Kampung kyoton, Kuala Lumpur, 74574 nono", unitCount:418, unitSize:1088, monthlyRental: 23574, amenities: new Array, units: new Array, staffID: "KOI001"}];

var residenceList = [{residenceName:"Bunga Jaya Apartment", residenceID:"A00B176", address:"58, Jalan Kepong, Pekan Kepong, 52000 Kuala Lumpur,", unitSize:"505 Sqft", amenities:"Walking distance to KTM", availableUnit:"215", monthlyRental:"RM 680"},
                      {residenceName:"Tolong Jaya Condominium", residenceID:"K00B339", address:"No. 15, Jalan Sri Semantan 1, Off, Jalan Semantan, Bukit Damansara, 50490 Kuala Lumpur,", unitSize:"735 Sqft", amenities:"Walking distance to MRT", availableUnit:"99", monthlyRental:"RM 850"}];

//ADD RESIDENCE NAME TO ALL RESIDENCE TABLE, AND REDESIGN RESIDENCE PAGE

var ignoreKey = ["jalan", "Jalan", "Bandar", "bandar", "Sungai", "sungai", "Kuala", "kuala"];
var searchTable = [{index:null, location:""}];

for(var i=0; i<residenceList.length; i++){

  searchTable.push({key:residenceList[i].residenceID, residenceID:residenceList[i].residenceID});
  var splitedAddress2 = new Array;
  var splitedAddress = residenceList[i].address.split(", ");
  for(var x=0; x<splitedAddress.length; x++){
    searchTable.push({key:splitedAddress[x], residenceID:residenceList[i].residenceID});

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
searchCriteria = ["","",""]; //<--enter search criteria here!!!

var result = new Array;


for (var x = 0; x < searchCriteria.length; x++) {
  for(var i=1; i<searchTable.length; i++){
    if(searchTable[i].key.toLowerCase() == searchCriteria[x].toLowerCase()){
      result.push(searchTable[i]);
    }
  }
}

if(result.length>0){
  var refinedResult = [result[0].residenceID];
  var lastItem = result[0].residenceID;
  for (var i = 0; i < result.length; i++) {
    if(result[i].residenceID != lastItem){
      lastItem = result[i].residenceID;
      refinedResult.push(result[i].residenceID);
    }
  }
}


console.log(result);
console.log(refinedResult);
