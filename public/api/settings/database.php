<?php

// $servername = "45.130.231.243";
// $dbname = "u1001964_tes";
// $username = "u1001964_tes";
// $password = "12345";

$servername = "localhost";
$username = "ifgf-user";
$password = "Test1234";
$dbname = "ifgf";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "CREATE TABLE ifgfevents
    (
        id_event INT(6) AUTO_INCREMENT PRIMARY KEY,
        name_event VARCHAR(255),
        path_picture VARCHAR(255),
        date_event date,
        description_event VARCHAR(255),
        id_category_event INT(6)
    )";
// -- FOREIGN KEY (id_category_event) REFERENCES category(id_category_event)

$conn->query($sql);

$sql = "CREATE TABLE category
    (
        id_category_event INT(6) AUTO_INCREMENT PRIMARY KEY,
        name_category_event VARCHAR(255)
    )";

$conn->query($sql);

?>