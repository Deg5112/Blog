<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
$newTitle = trim(addslashes($_POST['title']));
$newBlog = trim(addslashes($_POST['blog']));
$newSummary = trim(addslashes($_POST['summary']));
//$newTags = trim(addslashes($_POST['images']));
$newPublic = trim(addslashes($_POST['public']));
$newUser = trim(addslashes($_POST['user']));
$newBlogPost = trim(addslashes($_POST['blog_id']));
if (!isset($newPublic)) {
    $newPublic = true;
}
$queryUser = "SELECT users.id FROM users JOIN blog ON users.id = blog.user_id WHERE users.username = '$newUser'";
$result = mysqli_query($conn, $queryUser);
if (mysqli_affected_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $userId[] = $row;
        print_r($userId);
    }

}
$queryToken = "SELECT auth_token FROM auth_token WHERE user_id = $userId";
$resultToken = mysqli_query($conn, $queryToken);
if (mysqli_affected_rows($resultToken) > 0) {
    while ($row = mysqli_fetch_assoc($resultToken)) {
        $token[] = $row;
        print_r($token);
    }
}

if ($token == $_POST['auth_token']) {
//print_r($newInsert);
    $query = "UPDATE `blog` SET `title` = '$newTitle', `blog` = '$newBlog', `summary` = '$newSummary', `public` = '$newPublic', `edited` = NOW() WHERE `id` = '$newBlogPost'";
    mysqli_query($conn, $query);
    if (mysqli_affected_rows($conn) > 0) {
//    print_r($query);
    }
} else {
    $errors = ["I am sorry, please login again if you want to update your blog"];
}


?>