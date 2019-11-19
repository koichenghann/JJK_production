<?php


//----------------------- start of initialisation -----------------------
//generate unit for harcoded residence
$conn = mysqli_connect('localhost', 'root', '', 'MHSMYsql');
$getResidenceList = "SELECT * FROM Residence";
$residenceList = array();
$result = $conn->query($getResidenceList);
while ($row=$result->fetch_assoc()) {
  array_push($residenceList, $row);
}
for ($i=0; $i < count($residenceList); $i++) {
  $residenceID = $residenceList[$i]['residenceID'];
  $query3 = "SELECT * FROM Unit WHERE residenceID='$residenceID'";
  $result5 = $conn->query($query3);
  $residence = $residenceList[$i];
  if($result5->num_rows == 0){
    for ($x=0; $x < $residence['unitCount']; $x++) {
      $residenceID = $residence['residenceID'];
      $query2 = "INSERT INTO Unit VALUES('$x', True, '$residenceID')";
      $conn->query($query2);
    }
  }
}
//------------------------ end of initialisation ------------------------





session_start();
$_SESSION['currentUser'] = "";
$_SESSION['currentUserType'] = "";

$conn = mysqli_connect('localhost', 'root', '', 'MHSMYsql');

$username = $_POST['username'];
$password = $_POST['password'];

if($username=="" && $password=="")  { echo '! enter username and password';}
else if ($username=="")             { echo '! enter username'; }
else if ($password=="")             { echo '! enter password'; }

//if user enter username and password
if ($username!="" && $password!=""){
  $query1 = "SELECT * FROM Applicant WHERE username='$username' AND password='$password'";
  $query2 = "SELECT * FROM HousingOfficer WHERE username='$username' AND password='$password'";

  //query on Applicant table
  if($result = $conn->query($query1)){
    //if only 1 entry is found based on entered username and password
    if($result->num_rows == 1){
      $_SESSION['currentUser'] = $result->fetch_assoc();
      $_SESSION['currentUserType'] = "applicant";

      echo 'success-applicant';
    }

    //if there is less than or more than 1 entry found based on the enterd username and password
    else{
      //query on HousingOfficer table
      if($result = $conn->query($query2)){
        if($result->num_rows == 1){
          $_SESSION['currentUser'] = $result->fetch_assoc();
          $_SESSION['currentUserType'] = "housingOfficer";
          echo 'success-housingOfficer';
        }
        else{ echo '! invalid username and password combination'; }
      }
      else{echo 'sorry, database error'; }
    }
  }
  else{  echo 'sorry, database error' ; }
}
?>
