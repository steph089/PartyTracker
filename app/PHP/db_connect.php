<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$mysqli = new mysqli("localhost", "web_page", "nuGs2TMdtW", "partytracker");

if ($mysqli->connect_errno) {
		printf("Connect failed: %s\n", $mysqli->connect_error);
		exit();
		}

?>