var mode = 0;

function loadPane(){
  /*
  document.getElementById("content").innerHTML = "";
  var jack = document.getElementById("content").innerHTML;
  document.write(jack == "");
  */
  var content = document.getElementById("content").innerHTML;

  if(content == ""){
    document.getElementById("content").innerHTML= "jeff";
  }
  else {
    document.getElementById("content").innerHTML= "";
  }
}


function loadTable(){
  if(mode == 0){
    document.getElementById("table").innerHTML = `<table class="table border table-dark">
                                                    <tr>
                                                      <th>name</th>
                                                      <th>measurement</th>
                                                      <th>mode</th>
                                                    </tr>
                                                    <tr>
                                                      <td>jeff</td>
                                                      <td>20inch</td>
                                                      <td id="checker"></td>
                                                    </tr>
                                                  </table>
                                                  `;
      mode = 1;
      document.getElementById("checker").innerHTML = mode;
  }
  else if(mode == 1) {
    document.getElementById("table").innerHTML = `<table class="table border table-light">
                                                    <tr>
                                                      <th>student</th>
                                                      <th>CGPA</th>
                                                      <th>mode</th>
                                                    </tr>
                                                    <tr>
                                                      <td>jacky</td>
                                                      <td>19inch</td>
                                                      <td id="checker"></td>
                                                    </tr>
                                                  </table>
                                                  `;
      mode = 2;
      document.getElementById("checker").innerHTML = mode;

  }
  else if(mode == 2){
    document.getElementById("table").innerHTML = `    <table class="table table-dark">
                                                        <tr>
                                                            <td>
                                                                <form onsubmit="event.preventDefault();onFormSubmit();" autocomplete="off">
                                                                    <div>
                                                                        <label>Full Name*</label><label class="validation-error hide" id="fullNameValidationError">This field is required.</label>
                                                                        <input type="text" name="fullName" id="fullName">
                                                                    </div>
                                                                    <div>
                                                                        <label>EMP Code</label>
                                                                        <input type="text" name="empCode" id="empCode">
                                                                    </div>
                                                                    <div>
                                                                        <label>Salary</label>
                                                                        <input type="text" name="salary" id="salary">
                                                                    </div>
                                                                    <div>
                                                                        <label>City</label>
                                                                        <input type="text" name="city" id="city">
                                                                    </div>
                                                                    <div  class="form-action-buttons">
                                                                        <input type="submit" value="Submit">
                                                                    </div>
                                                                </form>
                                                            </td>
                                                            <td>
                                                                <table class="list table table-light" id="employeeList">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Full Name</th>
                                                                            <th>EMP Code</th>
                                                                            <th>Salary</th>
                                                                            <th>City</th>
                                                                            <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>

                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    `
      mode = 0;
  }


}






/*
function damn(){
  document.getElementById("koon").innerHTML = `<h1>K00N</h1>`;

  document.getElementById("div1").innerHTML = `<h1 id="ken">div1</h1>`;

  document.getElementById("div2").innerHTML = `<h1>div2</h1>`;
  document.getElementById("div3").innerHTML = `<h1>div3</h1>`;
  document.getElementById("div4").innerHTML = `<h1>div4</h1>`;
  document.getElementById("div5").innerHTML = `<h1>div5</h1>`;

  //logic meh?
  document.getElementById("ken").innerHTML = `<b>hh</b>`;


}

document.getElementById("content").innerHTML = "<h1>K00N</h1>";
*/
