<?php
session_start();
$currentUser = "";
$currentUserType = "";
if(isset($_SESSION['currentUser']))     {$currentUser     = $_SESSION['currentUser'];}else{echo "";}
if(isset($_SESSION['currentUserType'])) {$currentUserType = $_SESSION['currentUserType'];}else{echo "";}

$conn = mysqli_connect('localhost', 'root', '', 'MHSMYsql');

$key = $_POST['key'];

$_SESSION['selectedApplicationID'] = "";
if (isset($_POST['selectedApplicationID'])) { $selectedAppplicationID = $_POST['selectedApplicationID'];}

switch($key){
  case 'validate':
    echo validateUser($currentUser, $currentUserType);
    break;

  case 'getCurrentUser':
    echo json_encode($currentUser);
    break;

  case 'loadDataSet':
    echo loadDataSet($conn);
    break;

  case 'selectApplication':
    $_SESSION['selectedApplicationID'] = $selectedAppplicationID;
    echo "1";
    break;
}

function validateUser($currentUser, $currentUserType){
  return $currentUserType=="housingOfficer";
}

function loadDataSet($conn){
  $message = array();
  $getApplicationList = "SELECT * FROM Application";
  $getApplicantList = "SELECT * FROM Applicant";
  $getResidenceList = "SELECT * FROM Residence";

  if($result  = $conn->query($getApplicationList)){
    $applicationList = array();
    while ($row = $result->fetch_assoc()) {
      array_push($applicationList, $row);
    }
    array_push($message, $applicationList);
  }

  if($result  = $conn->query($getApplicantList)){
    $applicantList = array();
    while ($row = $result->fetch_assoc()) {
      array_push($applicantList, $row);
    }
    array_push($message, $applicantList);
  }

  if($result  = $conn->query($getResidenceList)){
    $residenceList = array();
    while ($row = $result->fetch_assoc()) {
      array_push($residenceList, $row);
    }
    array_push($message, $residenceList);
  }

  return json_encode($message);

}

?>
