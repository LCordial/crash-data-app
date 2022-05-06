$(document).ready(function(){
    // Run function when the submit button is clicked
    $("#submit").click(function(){

        // Get all values from the form
        var time = $("#time").val();
        var day = $("#day").val();
        var month = $("#month").val();
        var year = $("#year").val();
        
        var locID = $("#suburb").val();

        var crashtype = $("#crashtype").val();
        var speed = $("#areaspeed").val();
        var csef = $("#csef").val();

        var totalunits = $("#totalunits").val();
        var totalcas = $("#totalcas").val();
        var totalsi = $("#totalsi").val();
        var totalmi = $("#totalmi").val();


        // Slap it into an array
        var array = [year, month, day, time, locID, speed, totalunits, totalcas, totalsi, totalmi, crashtype, csef];
        // Turn the array into a json
        var jsonArray = JSON.stringify(array);
        console.log(jsonArray);
        // Posting the data to the php file to be processed into the database
        $.ajax({
            type: "POST",
            url: "submit.php",
            data: {
                'crashdata': jsonArray
            },
            success: function(result){
                alert("Recorded correctly!");
            },
            error: function(error) {
                console.log(error.responseText);
            }
        })

    })
})