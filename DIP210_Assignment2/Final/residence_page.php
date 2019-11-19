<?php
  //start session
  session_start();

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

    case 'getAllResidences':
      echo getAllResidences($conn, $currentUser);
      break;

    case 'getSelectedResidence':
      echo getSelectedResidence();
  }

  //function to validate user and return currectUserType
  function validateUser($currentUser, $currentUserType){
    return $currentUserType=="applicant";
  }

  function getAllResidences($conn, $currentUser){
    $message= array();

    //get data from database
    $sql = "SELECT * FROM residence;";
    $results = $conn->query($sql);
  //  $resultCheck = mysqli_num_rows($result); /*the number of row of the result*/
    if ( $results->num_rows > 0) {

    //loop the get each
      while ( $row = $results->fetch_assoc()){

        array_push($message, $row);
      }
    }
    return json_encode($message);
  }

  //get search criteria data from user input and set variable
  //$districtArea = $_POST['inputArea'];
  //$userSearch = $_POST['inputSearch'];






  //$result = mysqli_query($conn, $sql); /*database connection , database sql query code*/

  //run this statement if the num of row is bigger than 0

  //if failed to connect to database
  if ( $conn->connect_error)
  {
	   die (" Connection failure" );
  }
?>
