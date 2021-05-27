<?php
// header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, X-Auth-Token');
// header("Access-Control-Allow-Methods: GET, POST");

//Upload folder
$target_dir = "../uploads/";
$target_file = $target_dir . basename($_FILES["image"]["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
  $check = getimagesize($_FILES["image"]["tmp_name"]);
  if($check !== false) {
  //Move File To Uploads Folder
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
    $message = "The file ". basename( $_FILES["image"]["name"]). " has been uploaded.";
    $url = $target_file;
    $response = array('message' => $message, 'url' => $url);
    echo json_encode($response);
    } else {
    echo "Sorry, there was an error uploading your file.";
    }
    
  } else {
    echo "File is not an image.";
    
  }

?>