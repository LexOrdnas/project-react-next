<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "full_stack_eletro";

$con = mysqli_connect($host, $user, $pass, $dbname);

if ($con) {
        
    return true;

} else {

    die ("falha" .mysqli_errno($con));
}