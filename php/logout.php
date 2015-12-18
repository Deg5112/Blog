<?php
require('connect.php');
//$token = $_POST['token'];
$token = 'hello';
$logOutQuery = "DELETE FROM  `auth_token` WHERE  `auth_token = '$token'";
$logOutResult = mysqli_query($conn, $logOutQuery);
print_r($logOutResult);
if(mysqli_affected_rows($conn)>0){
    $responseArray = [
      'success'=> true,
        'data' => 'loggedOut!'
    ];
    print(json_encode($responseArray));
}else{
    $responseArray = [
        'success'=> false,
        'data' => 'logout failed!'
    ];
}


?>