<?php

include("../connect.php");

// Grabs the sum of Total Cas only for the current day
$sql = "SELECT Day, SUM(TotalCas) AS 'TotalCas' from task3_crashes GROUP BY Day ORDER BY TotalCas DESC LIMIT 1";

$result = mysqli_query($conn, $sql);

$myJSON = json_encode(mysqli_fetch_all($result));
echo $myJSON;
    
?>
