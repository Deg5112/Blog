<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
$newTitle = $_POST['title'];
$newBlog = $_POST['blog'];
$newSummary = $_POST['summary'];
$newTags = $_POST['tags'];
$newPublic = $_POST['public'];
$newUser = $_POST['user'];
$queryUser = "SELECT users.user_id FROM users JOIN blog ON users.id = blog.user_id WHERE users.username = '$newUser'";
$result = mysqli_query($conn, $queryUser);
if(mysqli_affected_rows($result)>0){
    while ($row = mysqli_fetch_assoc($result)){
        $userId[]=$row;
        print_r($userId);
    }

}
//print_r($newInsert);
$query = "UPDATE `blog` SET `title` = '$newTitle', `blog` = '$newBlog', `summary` = '$newSummary', `Tags` = '$newTags', `public` = '$newPublic', `edited` = NOW() WHERE `user_id` = '$userId'";
mysqli_query($conn, $query);
if(mysqli_affected_rows($conn)>0){

//    print_r($query);
}







?>