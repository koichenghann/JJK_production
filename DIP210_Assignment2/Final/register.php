<?php
$conn = mysqli_connect('localhost', 'root', '', 'MHSMYsql');

if (isset($_POST['key']))            { $key=$_POST['key']; }
if (isset($_POST['username']))       { $username=$_POST['username']; }
if (isset($_POST['password']))       { $password=$_POST['password']; }
if (isset($_POST['fullName']))       { $fullName=$_POST['fullName']; }
if (isset($_POST['email']))          { $email=$_POST['email']; }
if (isset($_POST['monthlyIncome']))  { $monthlyIncome=$_POST['monthlyIncome']; }


$jeff = 1;
switch ($key){
  case 'username':
    echo strval(validateUsername($conn, $username));
    break;
  case 'email':
    echo strval(validateEmail($conn, $email));
    break;
  case 'submit':
    echo strval(validateSubmission($conn, $username, $password, $fullName, $email, $monthlyIncome));
    break;
}
function validateUsername($conn, $username){
  $query = "SELECT username FROM Applicant WHERE username='$username' UNION SELECT username FROM HousingOfficer WHERE username='$username'";
  if($result=$conn->query($query)){
    if($result->num_rows == 0){
      return TRUE;
    }
    else{
      return FALSE;
    }
  }
  else{
    return 'sorry, database error';
  }
}

function validateEmail($conn, $email){
  $query = "SELECT * FROM Applicant WHERE email='$email'";
  if($result=$conn->query($query)){
    if($result->num_rows == 0){
      return TRUE;
    }
    else{
      return FALSE;
    }
  }
  else{
    return 'sorry, database error';
  }
}

function validateSubmission($conn, $username, $password, $fullName, $email, $monthlyIncome){
  if (validateUsername($conn, $username) && validateEmail($conn, $email)) {
    $monthlyIncome = (int)$monthlyIncome;
    $getLastApplicantID = "SELECT applicantID FROM Applicant ORDER BY applicantID DESC LIMIT 1";
    if($result = $conn->query($getLastApplicantID)){
      $nextApplicantID = ((int)(($result->fetch_assoc())['applicantID'])) + 1;
      $query = "INSERT INTO Applicant VALUES('$nextApplicantID','$username','$password','$fullName','$email','$monthlyIncome')";
      if($conn->query($query)){
        return TRUE;
      }
      else {
        return 'sorry, database error';
      }
    }
    else {
      return 'sorry, databse error';
    }
  }
  else {
    return 'FALSE';
  }
}
?>
