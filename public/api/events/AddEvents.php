<?php

include_once($_SERVER['DOCUMENT_ROOT'] . '/api/settings/database.php');

$title = $_POST['title'];
$category = $_POST['category'];
$file = $_FILES['image'];
$date = $_POST['date'];
$description = $_POST['description'];

$sqlCategory = "SELECT name_category FROM category WHERE id_category =" . $category;

$resultCategory = $conn->query($sqlCategory);

$targetDir = $_SERVER['DOCUMENT_ROOT'] . '/Data/Events';

if (!is_dir($targetDir)) {
    mkdir($targetDir,0777,true);
}

$fileName = $_FILES['image']['name'];
$targetFilePath = $targetDir . $fileName;
$imagePath = $fileName;

$sql = "INSERT INTO ifgfevents(name_event,path_picture,date_event,description_event,id_category_event) VALUES ('" . $title . "','" . $imagePath . "','" . $date . "','" . $description . "','" . $category . "')";

$result = new stdClass();

if(move_uploaded_file($file['tmp_name'],$targetFilePath)){
    if($conn->query($sql)){
        $result->status = "Done";
        echo json_encode($result);
    }else{
        $result->status = "Error";
        $result->message = $conn -> error;
        echo json_encode($result);
    }
}else{
    $result->status = "Error";
    $result->message = "Data Failed to Save";
    echo json_encode($result);
}
?>