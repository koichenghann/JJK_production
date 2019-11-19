<?php
  session_start();

  //$getSelectedResidence = $_POST['selectedResidence'];
  //echo $getSelectedResidence

  $currentUser = "";
  $currentUserType = "";

  //validate currentUser
  if(isset($_SESSION['currentUser'])){
    $currentUser = $_SESSION['currentUser'];
  }
  else{
    echo "";
  }

  //validate currentUserType
  if(isset($_SESSION['currentUserType'])){
    $currentUserType = $_SESSION['currentUserType'];
  }
  else{
    echo "";
  }

  if (isset($_POST['applicantID'])){
    $applicantID = $_POST['applicantID'];

  }

  if (isset($_POST['residenceID'])){
    $residenceID = $_POST['residenceID'];

  }

  if (isset($_POST['applicationDate'])){
    $applicationDate = $_POST['applicationDate'];

  }

  if (isset($_POST['requiredMonth'])){
    $requiredMonth = $_POST['requiredMonth'];

  }

  if (isset($_POST['requiredYear'])){
    $requiredYear = $_POST['requiredYear'];

  }

  if (isset($_POST['status'])){
    $status = $_POST['status'];

  }

  //connect to a database
  $dbServername = 'localhost'; /*default servername of XAMPP*/
  $dbUsername = 'root'; /*default username of XAMPP*/
  $dbPassword = ''; /*default password of XAMPP*/
  $dbName = 'mhsmysql'; /*this is the database name*/

  //establish connection to Databse
  $conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

  //key declaration, to get pointing value
  $key = $_POST['key'];

  //switch case statement to specific internal function to be triggered
  switch($key){

    //to validate user in view residence use case page
    case 'validate':
      echo validateUser($currentUser, $currentUserType);
      break;

    //to get the type of user (currentType), either "applicant" or "housingOfficer"
    case 'getCurrentUser':
      echo json_encode($currentUser);
      break;

    case 'submitApplication':
      echo submitApplication($conn, $applicantID, $residenceID, $applicationDate, $requiredMonth, $requiredYear, $status);

  }

  //function to validate user and return currectUserType
  function validateUser($currentUser, $currentUserType){
    return $currentUserType=="applicant";
  }

  //submit Application data into the database
  function submitApplication($conn, $applicantID, $residenceID, $applicationDate, $requiredMonth, $requiredYear, $status){

    //To change month into integer value
    $intRequiredMonth = 0;
    switch($requiredMonth){

      case 'January':
        $intRequiredMonth = 1;
        break;

      case 'February':
        $intRequiredMonth = 2;
        break;

      case 'March':
        $intRequiredMonth = 3;
        break;

      case 'April':
        $intRequiredMonth = 4;
        break;

      case 'May':
        $intRequiredMonth = 5;
        break;

      case 'June':
        $intRequiredMonth = 6;
        break;

      case 'July':
        $intRequiredMonth = 7;
        break;

      case 'August':
        $intRequiredMonth = 8;
        break;

      case 'September':
        $intRequiredMonth = 9;
        break;

      case 'October':
        $intRequiredMonth = 10;
        break;

      case 'November':
        $intRequiredMonth = 11;
        break;

      case 'December':
        $intRequiredMonth = 12;
        break;

      default:
        $intRequiredMonth = 0;
    }


    //get the last applicationID from database
    $getLastApplicationID = "SELECT applicationID FROM Application ORDER BY applicationID DESC LIMIT 1";
    if($result = $conn->query($getLastApplicationID)){
      $nextApplicationID = ((int)(($result->fetch_assoc())['applicationID'])) + 1; /*increment the new applicationID by 1*/

      //insert new application data into the database
      $query = "INSERT INTO Application VALUES('$nextApplicationID','$applicantID','$residenceID','$applicationDate','$intRequiredMonth','$requiredYear','$status')";
      if($conn->query($query)){
        return TRUE;
      }
  }
}

  //if failed to connect to database
  if ( $conn->connect_error)
  {
	   die (" Connection failure" );
  }

?>
