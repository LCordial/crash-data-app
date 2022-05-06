<?php
    include("connect.php");

    // Getting the suburb
    $sql = "select * from task3_location";

    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0) {
        echo json_encode(mysqli_fetch_all($result));
    }
?>
