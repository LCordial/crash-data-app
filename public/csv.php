<?php
include('connect.php');

//check to see if form sent

if(isset($_POST["submit"])){
  if($_FILES['file']['name']){
  	echo($_FILES['file']['name']);
  	$filename = explode(".",$_FILES['file']['name']);

  	//check to see if file name has a csv extension_loaded

  	if($filename[1] =='csv'){

   	//create a handler to read through file

  	$handle =fopen($_FILES['file']['tmp_name'],"r");

 	//read through the document and grab each cell and store in a local variable

  	while($data =fgetcsv($handle)){

    $year = mysqli_real_escape_string($conn, $data[0]);
    $month = mysqli_real_escape_string($conn, $data[1]);
    $day = mysqli_real_escape_string($conn, $data[2]);
    $time = mysqli_real_escape_string($conn, $data[3]);
    $locid = mysqli_real_escape_string($conn, $data[4]);
    $areaspeed = mysqli_real_escape_string($conn, $data[5]);
    $totalunits = mysqli_real_escape_string($conn, $data[6]);
    $totalcas = mysqli_real_escape_string($conn, $data[7]);
    $totalsi = mysqli_real_escape_string($conn, $data[8]);
    $totalmi = mysqli_real_escape_string($conn, $data[9]);
    $crashtypeid = mysqli_real_escape_string($conn, $data[10]);
    $crashseverityid = mysqli_real_escape_string($conn, $data[11]);

    //create a sql statement with variables for insert

    $sql = "INSERT INTO task3_crashes(Year, Month, Day, Time, LocID, AreaSpeed, TotalUnits, TotalCas, TotalSI, TotalMI, CrashTypeID, CrashSeverityID) VALUES ('$year', '$month', '$day', '$time', '$locid', '$areaspeed', '$totalunits', '$totalcas', '$totalsi', '$totalmi', '$crashtypeid', '$crashseverityid')";

    if($conn->query($sql) === true){

     	echo("New record added");

    }else{

    }

   }

   fclose($handle);

   echo("<script>alert('import done')</script>");

  }
 }
}

?>



