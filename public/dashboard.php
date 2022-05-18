<?php

include("connect.php");

$dayname = $_POST['dayname'];

if($dayname !== ""){
    global $result;
    
    $sql = "SELECT Day, Count(*) AS 'count', TotalCas from task3_crashes where (Day = '$dayname' AND TotalCas > '0') GROUP BY Day";

    $result = mysqli_query($conn, $sql);
}

$myJSON = json_encode(mysqli_fetch_object($result));
echo $myJSON;


?>
