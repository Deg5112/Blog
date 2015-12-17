<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
$newTitle = trim(addslashes($_POST['title']));
$newBlog = trim(addslashes($_POST['blog']));
$newSummary = trim(addslashes($_POST['summary']));
$newTags = trim(addslashes($_POST['tags']));
$newPublic = trim(addslashes($_POST['public']));
$newUser = trim(addslashes($_POST['user']));
$newBlogPost = trim(addslashes($_POST['blog_id']));
$token = $_POST('token');


$queryUser = "SELECT users.user_id FROM users JOIN blog ON users.id = blog.user_id WHERE users.username = '$newUser'";
$result = mysqli_query($conn, $queryUser);

if(mysqli_affected_rows($result)>0){
    while ($row = mysqli_fetch_assoc($result)){
        $userId[]=$row;
        print_r($userId);
    }

}
print_r($newInsert);
$queryToken = "SELECT auth_token.auth_token FROM auth_token WHERE auth_token.user_id = $newInsert";
if ($token == $queryToken){

$query = "UPDATE `blog` SET `title` = '$newTitle', `blog` = '$newBlog', `summary` = '$newSummary', `Tags` = '$newTags', `public` = '$newPublic', `edited` = NOW() WHERE `id` = '$newBlogPost'";
mysqli_query($conn, $query);
if(mysqli_affected_rows($conn)>0){

//    print_r($query);
}
}else{
print('error, Login is invalid, please login again');
}







?>