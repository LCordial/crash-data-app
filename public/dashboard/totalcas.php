<?php

include('../connect.php');

$days = array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
$array = array();

foreach($days as $values){

    $sql1 = "SELECT Day, Sum(TotalCas) AS 'count' FROM task3_crashes WHERE Day = '$values' GROUP BY Day";
    $result = mysqli_query($conn, $sql1);
    if(mysqli_num_rows($result) > 0){
        $myJSON = json_encode(mysqli_fetch_object($result));
        array_push($array, $myJSON);

    }

}

$str = json_encode($array);
echo $str;


?>