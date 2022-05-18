<?php
    include("../connect.php");

    // Getting the csef
    $sql = "select * from task3_csefsev";

    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0) {
        echo json_encode(mysqli_fetch_all($result));
    }
?>
