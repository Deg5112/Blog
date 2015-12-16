<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
require('connect.php');
$id = (int)$_POST['blog_id'];
$sql = "DELETE FROM blog WHERE id='$id'";

if (mysqli_query($conn, $sql)){
    print("Record deleted successfully");
}else {
    $error[]='error deleting your post';
    print("Error deleting").mysqli_error($conn);

}


?>