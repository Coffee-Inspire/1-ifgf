<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, X-Auth-Token');
header("Access-Control-Allow-Methods: GET, POST");

if(getimagesize($_FILES['myFile']['tmp_name']) == FALSE )
{
    echo "Please select an Image..";
}
else
{   
    $image = addslashes($_FILES['id_proof']['tmp_name']);
    // $name = addslashes($_FILES['id_proof']['name']);
    $image = file_get_contents($image);
    //echo $image;
    $image = base64_encode($image);
    //echo $image;
    $json = $image;
}

/* Output header */
header('Content-type: application/json');
echo json_encode($json);

?>