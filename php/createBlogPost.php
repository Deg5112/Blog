<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
require('connect.php');
//TODO need to do form validation and data clensing on this as well

//regex for everything up to the last space but not including that last space
//     (.+)?[ ]

$pattern = '/(.+)?[ ]/';
$blogPost= 'lkajhs df    lkhdfklhsdf';
$subPost = substr($pattern ,0,7);
preg_match($pattern, $subPost, $match);
// $match will be our summary, $string will be the blog post in full
//print_r($match);
$summary = $match;
$blogTitle = null;
//first we check if the user has sent a correct authentication token.. if yes..
//grab the user id associated with the authentication token
$userId = null;  //andrew is sending over the user id

//insert user_id, title, blog post, summary,
$insertBlogPostQuery = "INSERT INTO `blog`(`user_id`, `title`, `blog`, `summary`, `public`, `timestamp`) VALUES ($userId, '$blogTitle', '$blogPost', '$summary', true, NOW())";

$result = mysqli_query($conn, $insertBlogPostQuery);

if(mysqli_affected_rows($conn)>0){
    print_r($result);
}else{
    print_r('no dice');
}

?>