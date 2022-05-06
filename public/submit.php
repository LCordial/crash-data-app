<?php

include("connect.php");

// Decode the json into an array
$crashdata = json_decode(stripslashes($_POST['crashdata']));
print_r($crashdata);

// Insert the data into the database
$sql = "INSERT INTO task3_crashes (Year, Month, Day, Time, LocID, AreaSpeed, TotalUnits, TotalCas, TotalSI, TotalMI, CrashTypeID, CrashSeverityID) VALUES ('$crashdata[0]', '$crashdata[1]', '$crashdata[2]', '$crashdata[3]', '$crashdata[4]', '$crashdata[5]', '$crashdata[6]', '$crashdata[7]', '$crashdata[8]', '$crashdata[9]', '$crashdata[10]', '$crashdata[11]')";

if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: " . mysqli_error($conn);
}

mysqli_close($conn);
?>