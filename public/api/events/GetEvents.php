<?php

include_once($_SERVER['DOCUMENT_ROOT'] .  'api/settings/database.php');

$sql = "SELECT * FROM ifgfevents";

$result = $conn->query($sql);

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}

print(json_encode($rows));


?>