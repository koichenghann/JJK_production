<?php
session_start();
$currentUser = "";
$currentUserType = "";
if(isset($_SESSION['currentUser']))     {$currentUser     = $_SESSION['currentUser'];}else{echo "";}
if(isset($_SESSION['currentUserType'])) {$currentUserType = $_SESSION['currentUserType'];}else{echo "";}

$conn = mysqli_connect('localhost', 'root', '', 'MHSMYsql');

$key = $_POST['key'];



switch($key){
  case 'validate':
    echo validateUser($currentUser, $currentUserType);
    break;

  case 'getCurrentUser':
    echo json_encode($currentUser);
    break;

  case 'getResidence':
    echo getResidence($conn, $currentUser);

}

function validateUser($currentUser, $currentUserType){
  return $currentUserType=="housingOfficer";
}

function getResidence($conn, $currentUser){
  $message= array();
  $staffID = $currentUser['staffID'];
  $query = "SELECT * FROM Residence WHERE staffID='$staffID'";
  if($result = $conn->query($query)){
    while($row = $result->fetch_assoc()){
      array_push($message, $row);
    }
  }
  return json_encode($message);
}

/*
//if user enter username and password
if ($username!="" && $password!=""){
  $query1 = "SELECT * FROM Applicant WHERE username='$username' AND password='$password'";
  $query2 = "SELECT * FROM HousingOfficer WHERE username='$username' AND password='$password'";

  //query on Applicant table
  if($result = $conn->query($query1)){
    //if only 1 entry is found based on entered username and password
    if($result->num_rows == 1){
      $_SESSION['currentUser'] = json_encode($result->fetch_assoc());
      $_SESSION['currentUserType'] = "applicant";

      echo 'success-applicant';
    }

    //if there is less than or more than 1 entry found based on the enterd username and password
    else{
      //query on HousingOfficer table
      if($result = $conn->query($query2)){
        if($result->num_rows == 1){
          $_SESSION['currentUser'] = json_encode($result->fetch_assoc());
          $_SESSION['currentUserType'] = "housingOfficer";
          echo 'success-housingOfficer';
        }
        else{ echo '! invalid username and password combination'; }
      }
      else{echo 'sorry, database error'; }
    }
  }
  else{  echo 'sorry, database error' ; }
}*/
?>
