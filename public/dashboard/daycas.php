<?php

include("../connect.php");

$dayname = $_POST['dayname'];

if($dayname !== ""){

    // Grabs the sum of Total Cas only for the current day
    $sql = "SELECT Day, SUM(TotalCas) AS 'count' from task3_crashes where (Day = '$dayname' AND TotalCas > '0') GROUP BY Day";

    $result = mysqli_query($conn, $sql);

    $myJSON = json_encode(mysqli_fetch_object($result));
    echo $myJSON;
    
};


?>
