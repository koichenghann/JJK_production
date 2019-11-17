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

  case 'getStatistic':
    echo json_encode(getStatistic($conn, $currentUser));
    break;
}

function validateUser($currentUser, $currentUserType){
  return $currentUserType=="housingOfficer";
}

function getStatistic($conn, $currentUser){
  $message=NEW \stdClass();
  $staffID = $currentUser['staffID'];
  $totalResidence = 0;
  $getTotalApplicant    = "SELECT * FROM Applicant";
  $getTotalApplication  = " SELECT applicationID FROM Application, Residence, HousingOfficer
                            WHERE Application.residenceID = Residence.residenceID
                            AND Residence.staffID = HousingOfficer.staffID
                            AND HousingOfficer.staffID = '$staffID';";
  $getTotalResidence    = "SELECT * FROM Residence WHERE staffID='$staffID'";


  if($result=$conn->query($getTotalResidence)) {$message->totalResidence = $result->num_rows;}
  if($result=$conn->query($getTotalApplicant)) {$message->totalApplicant = $result->num_rows;}
  if($result=$conn->query($getTotalApplication)) {$message->totalApplication = $result->num_rows;}
  return $message;
}
?>
