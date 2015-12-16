<?php
require('connect.php');

$username = addslashes(trim($_POST['username']));
$email = addslashes(trim($_POST['email']));
$password = addslashes($_POST['password']);
//$query = "INSERT INTO `SGT_3`( `name`, `course`, `grade`) VALUES ('$name', '$course', '$grade')";
//mysqli_query($conn, $query);
//
//
//if(mysqli_affected_rows($conn)>0) {
//    $output['success'] = true;
//    $newID = mysqli_insert_id($conn);
//    $output['newID'] = $newID;
//}

if(isValidGrade($username)==true && isValidCourse($email)==true && isValidName($password)==true){
    $query = "INSERT INTO `users`( `username`, `email`, `password`) VALUES ('$username', '$email', '$password')";
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
