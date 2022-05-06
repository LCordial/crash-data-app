<?php

include("connect.php");

// Requests the loc_id from the ajax post action
$loc_id = $_POST['loc_id'];

// If the loc_id is not empty then run the function
if($loc_id !== ""){

    // Grabs the corresponding suburb and stuff with the loc_id
    $sql = "select * from task3_location where LocID = '$loc_id'";

    $result = mysqli_query($conn, $sql);

    $row = mysqli_fetch_array($result);

    // Grabs each row
    $lga = $row["LGA"];
    $suburb = $row["Suburb"];
    $postcode = $row["PostCode"];
    $statsarea = $row["StatsArea"];

}

// Puts each row into an array
$result = array("$lga", "$suburb", "$postcode", "$statsarea");

// Submits the result as a json so it is readable for ajax
$myJSON = json_encode($result);
echo $myJSON;

?>