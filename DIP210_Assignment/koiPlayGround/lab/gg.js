

var container = document.getElementById("container");
for (var i = 0; i < 10; i++) {
  var node = document.createElement("div");
  var jeff = "jeff";
  node.innerHTML=`<div class="card" style="width: 18rem;">
                   <img src="..." class="card-img-top" alt="...">
                   <div class="card-body">
                     <h5 class="card-title">` + jeff + `</h5>
                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="#" class="btn btn-primary">Go somewhere</a>
                   </div>
                  </div>
                  `;

  container.appendChild(node);


}

/*
form_residenceID_in.innerHTML = ``;
for(var i=0; i<residenceList.length; i++){
  var node = document.createElement("option");
  node.value= residenceList[i].residenceID;
  node.innerHTML= residenceList[i].residenceID + ": " + residenceList[i].residenceName;
  form_residenceID_in.appendChild(node);
}
*/
