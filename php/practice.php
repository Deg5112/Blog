<?php


$pattern = '/(.+)?[ ]/';
$subPost = substr('lkas;dfjla;dfjsdlkfjads', 0, 7);
print_r($subPost);

preg_match($pattern, $subPost, $match);
// $match will be our summary, $string will be the blog post in full

$summary = $match;
print_r($summary);

?>