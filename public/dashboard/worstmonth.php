<?php

include("../connect.php");

// Grabs the sum of Total Cas only for the current day
$sql = "SELECT Month, SUM(TotalCas) AS 'count' from task3_crashes ORDER BY TotalCas DESC GROUP BY Month LIMIT 1";

$result = mysqli_query($conn, $sql);

$myJSON = json_encode(mysqli_fetch_all($result));
echo $myJSON;
    
?>
