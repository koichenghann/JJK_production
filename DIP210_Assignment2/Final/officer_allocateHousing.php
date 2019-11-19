<?php
session_start();
$currentUser = "";
$currentUserType = "";
if(isset($_SESSION['currentUser']))     {$currentUser     = $_SESSION['currentUser'];}else{echo "";}
if(isset($_SESSION['currentUserType'])) {$currentUserType = $_SESSION['currentUserType'];}else{echo "";}
$conn = mysqli_connect('localhost', 'root', '', 'MHSMYsql');
$key = $_POST['key'];

$selectedAppplicationID = $_SESSION['selectedApplicationID'];

if(isset($_POST['applicationID'])){$applicationID=$_POST['applicationID'];}else {echo "";}
if(isset($_POST['residenceID'])){$residenceID=$_POST['residenceID'];}else {echo "";}
if(isset($_POST['unitID'])){$unitID=$_POST['unitID'];}else {echo "";}
if(isset($_POST['fromDate'])){$fromDate=$_POST['fromDate'];}else {echo "";}
if(isset($_POST['duration'])){$duration=$_POST['duration'];}else {echo "";}
if(isset($_POST['endDate'])){$endDate=$_POST['endDate'];}else {echo "";}


switch($key){
  case 'validate':
    echo validateUser($currentUser, $currentUserType);
    break;

  case 'getCurrentUser':
    echo json_encode($currentUser);
    break;

  case 'loadDataSet':
    echo loadDataSet($conn, $selectedAppplicationID);
    break;

  case 'addAllocation':
    echo addAllocation($conn, $applicationID,$residenceID,$unitID,$fromDate,$duration,$endDate);
    break;

  case 'rejectAllApplication':
    echo rejectAll($conn, $applicationID);
    break;

  case 'rejectApplication':
    echo reject($conn, $applicationID);
    break;

  case 'waitList':
    echo waitlist($conn, $applicationID);
    break;
}


function waitlist($conn, $applicationID){
  $getApplicationStatus = "SELECT status FROM Application WHERE applicationID='$applicationID'";
  if($getApplicationStatus=='waitlist'){
    $waitlistApplication = "UPDATE Application SET status='new' WHERE (status='new' OR status='waitlist') AND applicationID='$applicationID'";
  }
  else{
    $waitlistApplication = "UPDATE Application SET status='waitlist' WHERE (status='new' OR status='waitlist') AND applicationID='$applicationID'";
  }

  if($result=$conn->query($getApplicationStatus)){
    $applicationStatus = ($result->fetch_assoc())['status'];
    if ($conn->query($waitlistApplication)) {
      return strval(TRUE);
    }
    else {
      return 'database error';
    }
  }
  else {
    return 'database error';
  }


}

function reject($conn, $applicationID){
  $rejectApplication = "UPDATE Application SET status='rejected' WHERE (status='new' OR status='waitlist') AND applicationID='$applicationID'";
  $rejectApplication2 = "UPDATE Application SET status='closed' WHERE status='appealed' AND applicationID='$applicationID'";
  if ($conn->query($rejectApplication)&&$conn->query($rejectApplication2)) {
    return strval(TRUE);
  }
}

function rejectAll($conn, $applicationID){
  $getApplicantID = "SELECT applicantID FROM Application WHERE applicationID='$applicationID' ORDER BY applicantID DESC LIMIT 1";
  if ($result = $conn->query($getApplicantID)) {
    $applicantID = (int)(($result->fetch_assoc())['applicantID']);
    $rejectAllApplication = "UPDATE Application SET status='closed' WHERE (status='new' OR status='waitlist') AND applicantID='$applicantID'";
    if ($conn->query($rejectAllApplication)) {
      return strval(TRUE);
    }
    else {
      return 'database error';
    }
  }
}

function addAllocation($conn, $applicationID,$residenceID,$unitID,$fromDate,$duration,$endDate){
  $getLastAllocationID = "SELECT allocationID FROM Allocation ORDER BY allocationID DESC LIMIT 1";
  if($result=$conn->query($getLastAllocationID)){
    if($result->num_rows!=0){
      $nextAllocationID = ((int)(($result->fetch_assoc())['allocationID'])) + 1;
    }
    else {
      $nextAllocationID = 0;
    }
  }

  $addAllocation = "INSERT INTO Allocation VALUES
                    ('$nextAllocationID','$applicationID','$residenceID','$unitID','$fromDate','$duration','$endDate')";
  $acceptApplication = "UPDATE Application SET status='accepted' WHERE applicationID='$applicationID'";
  if ($conn->query($addAllocation)) {
    if(!$conn->query($acceptApplication)){return 'database error';}
    rejectAll($conn, $applicationID);
    return strval(TRUE);
  }
  else{
    return 'database error';
  }
}

function validateUser($currentUser, $currentUserType){
  return $currentUserType=="housingOfficer";
}

function loadDataSet($conn, $selectedAppplicationID){
  $message = array();
  $getApplicationList = "SELECT * FROM Application";
  $getAllocationList = "SELECT * FROM Allocation WHERE residenceID='R001'";
  $getApplicantList = "SELECT * FROM Applicant";
  $getResidenceList = "SELECT * FROM Residence";
  $getUnitList = "SELECT * FROM Unit";

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

  if($result  = $conn->query($getAllocationList)){
    $allocationList = array();
    while ($row = $result->fetch_assoc()) {
      array_push($allocationList, $row);
    }
    array_push($message, $allocationList);
  }
  else{
    array_push($message, 'database error');
  }

  if($result  = $conn->query($getUnitList)){
    $unitList = array();
    while ($row = $result->fetch_assoc()) {
      array_push($unitList, $row);
    }
    array_push($message, $unitList);
  }
  else{
    array_push($message, 'database error');
  }

  array_push($message, $selectedAppplicationID);
  return json_encode($message);

}

?>
