<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
$newTitle = $_POST['title'];
$newBlog = $_POST['blog'];
$newSummary = $_POST['summary'];
$newTags = $_POST['tags'];
$newPublic = $_POST['public'];


//print_r($newInsert);
$query = "UPDATE `blog` SET `title` = '$newTitle', `blog` = '$newBlog', `summary` = '$newSummary', `Tags` = '$newTags', `public` = '$newPublic', `edited` = NOW()";
mysqli_query($conn, $query);
if(mysqli_affected_rows($conn)>0){

//    print_r($query);
}







?>