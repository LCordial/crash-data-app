<?php

include('../connect.php');

$days = array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
$array = array();

$sql = "SELECT Day, Sum(TotalCas) AS 'count' FROM task3_crashes GROUP BY Day";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0){
    $myJSON = json_encode(mysqli_fetch_all($result));
    echo $myJSON;
}

?>