<?php
include('connect.php');

// Grabbing all the data from across the tables to be transformed into a table
$sql = "SELECT task3_crashes.CrashID, task3_crashes.Year, task3_crashes.Month, task3_crashes.Day, task3_crashes.Time, task3_crashes.AreaSpeed, task3_crashes.TotalUnits, task3_crashes.TotalCas, task3_crashes.TotalSI, task3_crashes.TotalMI, task3_location.Suburb, task3_location.LGA, task3_location.PostCode, task3_location.StatsArea, task3_crashtype.CrashTypeName, task3_csefsev.SeverityType FROM task3_crashes INNER JOIN task3_location ON task3_crashes.LocID = task3_location.LocID INNER JOIN task3_crashtype ON task3_crashes.CrashTypeID = task3_crashtype.CrashTypeID INNER JOIN task3_csefsev ON task3_crashes.CrashSeverityID = task3_csefsev.SeverityID";

$result = mysqli_query($conn, $sql);

echo json_encode(mysqli_fetch_all($result));

?>