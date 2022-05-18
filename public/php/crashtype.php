<?php
    include("../connect.php");

    // Getting the crashtype
    $sql = "select * from task3_crashtype";

    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0) {
        echo json_encode(mysqli_fetch_all($result));
    }
?>
