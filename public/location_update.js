// Triggers when user selects are suburb
$("#suburb").change(function(){
    // Gets the value from the suburb dropdown
    var loc_id = $("#suburb").val();
    // Run a post action to the process.php file
    $.ajax({
        type: "POST",
        url: "location_update.php",
        // Submit the loc_id so php knows which suburb to select 
        data: {
            "loc_id": loc_id
        },
        dataType: 'json',
        success: function(location){
            console.log("Location Data:", location);
            // Updates the input text for lga, postcode and statsarea accordingly
            $("#lga").val(location[0]);
            $("#postcode").val(location[2]);
            $("#statsarea").val(location[3]);
        },
        error: function(error) {
            console.log(error.responseText);
        }
    })
})