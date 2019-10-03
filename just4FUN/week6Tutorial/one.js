//question 6
var jeff = "jeff";
var jack = 10;
var john = false;
var jacky = BigInt(9999999999999999999999999999999999999999999999999808080342423424234723588235782758273598283592572582859858258283528358235827358725827358237582758275823557823463645251857128592845348075982375832465236597238567236573285623599999999999999999999999995999999999999927582735982835925766)

console.log(typeof jeff, jeff);
console.log(typeof jack, jack);
console.log(typeof john, john);
console.log(typeof jacky, jacky);
console.log(typeof jeff);

document.write(typeof jeff + " " + jeff + "<br>");
document.write(typeof jack + " " + jack + "<br>");
document.write(typeof john + " " + john + "<br>");
document.write(typeof jacky + " " + jacky);



//question 7
document.write("<br><br><h3>question7</h3>");

var two = "blinking";
for(var i=0; i<two.length;i++){
  document.write(two[i].replace("b","c") + "<br>");
}



//question 8
document.write("<br><br><h3>question8</h3>");

var nameList = new Array(6);
nameList = [1, "jecc  ", 2, "janet  ", 3, "joshua"];
nameList[1] = "jack  ";

document.write(nameList);



//question 9
var jsObj = new Object();
console.log(typeof jsObj);
jsObj.id = 13;
jsObj.name = "jeff";
jsObj.address = "KL";

for(var x in jsObj)
  console.log(x);


var jsObj2 = {id:12, name:jeff};
console.log(jsObj2.id);
console.log(jsObj2.name);
