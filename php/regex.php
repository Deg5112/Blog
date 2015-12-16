<?php
function isValidPassword($password){
    //Solution 1
//        $grade = (int)$grade;
//        return ($grade >= 0 && $grade <= 100);
    //Solution 2
    $regex = '/^100$|^[1-9]?[0-9]$/';
    return preg_match($regex,$password);
}
function isValidName($name)
{
    $regex = '/[A-Za-z\- ]*/';
    return preg_match($regex, $name);
}
function isValidEmail($email){
    $regex = '/[ A-Za-z\-0-9]*/';
    return preg_match($regex,$email);
}
?>