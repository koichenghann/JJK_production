/*
var address= "No.911, Jalan Jalan, Kampung gantut, 54321 sini";

var searchTable = new Array;

var splitedAddress = address.split(",");
for(var i=0; i<splitedAddress.length; i++){
  searchTable.push({key:splitedAddress[i], residenceID:"A110"});
}

console.log(searchTable);
*/
/*
var jeff = "JeFf";
var jacky = "jeff";

console.log(jacky == jeff.toLowerCase());
*/

/*
outputDate = ("00".substring(0, (""+allocation.endDate.getDate()).length) + allocation.endDate.getDate());


var jeff = "1234";

var jacky = ("00".substring(0, jeff));
console.log(jacky);
*/

console.log(["me", "you"].includes("me"));

console.log(pad("5",6));

function pad(source, amount){
  var newSource = source;
  for (var i = 0; i < amount-source.length; i++) {newSource = "0"+newSource;}
  return newSource;
}
