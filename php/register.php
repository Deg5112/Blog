<?php
//header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Methods: GET, POST');
require('connect.php');
require('regex.php');

$username = addslashes(trim($_POST['username']));
$email = addslashes(trim($_POST['email']));
$password = addslashes($_POST['password']);

//$username = $_POST['username'];
//$email = $_POST['email'];
//$password = $_POST['password'];
//print_r($conn);

if(isValidName($username)==true && isValidEmail($email)==true && isValidPassword($password)==true){
    $query = "INSERT INTO `users`(`username`, `email`, `password`, `TIMESTAMP` ) VALUES ('$username','$email','$password', NOW())";
    mysqli_query($conn, $query);


    if(mysqli_affected_rows($conn)>0) {
        $output['success'] = true;
        $newID = mysqli_insert_id($conn);
        $output['newID'] = $newID;
        print(json_encode($output));
    }
}
else{
    $output['success'] = false;
    $output['errors'] = "Error";
    print(json_encode($output));
}
?>
