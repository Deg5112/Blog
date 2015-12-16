<?php
//select from user table where username = username..
//if there's no username return a response doesn't exist
//if it does exist.. check if the password matches..if password doesn't match return username or password is invalid
//if both exist and match, create the authentication token
//Insert the authentication token into the data base.. upon success.. pass that back as a response and the front end will store that in a cookie

//TODO need to do form validation on this
require('connect.php');
$username = null;
$password = null;

$usernameQuery = "SELECT username FROM users WHERE username = '$username' ";  //username query to test
$userResult = mysqli_query($conn, $username);
if(mysqli_num_rows($userResult)>0){
    //if true.. then we have a match
}else{
    $responseArray = [
      'success'=>true,
        'data'=> 'username or password is not valid'
    ];
}

$passwordQuery = "SELECT * FROM users WHERE username = '$username' AND password = '$password' "; //password query to test



$data = getDate();
$string = $data['weekday'].$data['month'].$data['mday'].$data['hours'].$data['minutes'].$data['seconds'];
$id = md5($string);
echo $id;  //id is the authentication token

?>