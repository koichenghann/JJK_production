<?php
session_start();
$currentUser = "";
$currentUserType = "";
if(isset($_SESSION['currentUser']))     {$currentUser     = $_SESSION['currentUser'];}else{echo "";}
if(isset($_SESSION['currentUserType'])) {$currentUserType = $_SESSION['currentUserType'];}else{echo "";}

$conn = mysqli_connect('localhost', 'root', '', 'MHSMYsql');

$key = $_POST['key'];

$newResidence = NEW \stdClass();
if(isset($_POST['residenceID'])){$newResidence->residenceID =$_POST['residenceID'];}
if(isset($_POST['residenceName'])){$newResidence->residenceName =$_POST['residenceName'];}
if(isset($_POST['address'])){$newResidence->address =$_POST['address'];}
if(isset($_POST['unitCount'])){(int)$newResidence->unitCount =$_POST['unitCount'];}
if(isset($_POST['unitSize'])){(double)$newResidence->unitSize =$_POST['unitSize'];}
if(isset($_POST['monthlyRental'])){(double)$newResidence->monthlyRental =$_POST['monthlyRental'];}
if(isset($_POST['amenities'])){$newResidence->amenities =$_POST['amenities'];}
if(isset($_POST['staffID'])){$newResidence->staffID =$_POST['staffID'];}



switch($key){
  case 'validate':
    echo validateUser($currentUser, $currentUserType);
    break;

  case 'getCurrentUser':
    echo json_encode($currentUser);
    break;

  case 'getResidence':
    echo getResidence($conn, $currentUser);
    break;

  case 'addResidence':
    echo addResidence($conn, $newResidence);
    break;

  case 'updateResidence':
    echo updateResidence($conn, $newResidence);
    break;

  case 'deleteResidence':
    echo deleteResidence($conn, $newResidence);
    break;
}


function deleteResidence($conn, $newResidence){
  $query = "DELETE FROM Residence WHERE residenceID='$newResidence->residenceID'";
  $query2 = "DELETE FROM Application WHERE residenceID='$newResidence->residenceID'";
  $query3 = "DELETE FROM Unit WHERE residenceID='$newResidence->residenceID'";

  if($conn->query($query) && $conn->query($query) && $conn->query($query)){
    return strval(TRUE);
  }
  else {
    return 'database error';
  }
}


function updateResidence($conn, $newResidence){
  $query = "UPDATE Residence SET
          residenceName  =   '$newResidence->residenceName',
                address  =   '$newResidence->address',
               unitSize  =   '$newResidence->unitSize',
          monthlyRental  =   '$newResidence->monthlyRental',
              amenities  =   '$newResidence->amenities',
                staffID  =   '$newResidence->staffID'
      WHERE residenceID  =   '$newResidence->residenceID'";
  if($conn->query($query)){
    return strval(TRUE);
  }
  else {
    return 'database error';
  }
}


function addResidence($conn, $newResidence){
  $query = "INSERT INTO Residence VALUES
            ( '$newResidence->residenceID',
              '$newResidence->residenceName',
              '$newResidence->address',
              '$newResidence->unitCount',
              '$newResidence->unitSize',
              '$newResidence->monthlyRental',
              '$newResidence->amenities',
              '$newResidence->staffID')";

  if($conn->query($query)){
    for ($i=0; $i < $newResidence->unitCount; $i++) {
      $query2 = "INSERT INTO Unit VALUES('$i', True, '$newResidence->residenceID')";
      $conn->query($query2);
    }
    return strval(TRUE);
  }
  else {
    return 'database error';
  }
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

?>
