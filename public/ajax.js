// These ajax functions call to the server to grab data (PHP, SQL), it waits for a reply and creates <option> tag in the HTML dynamically though the front end (JS)

// This one gets CSEF Sev
$(document).ready(function(){
    $.ajax({
        url: './php/csef.php',
        method: 'POST',
        dataType: 'JSON',
        success:function(data){
            for(var i=0; i<data.length; i++){
                console.log("CSEF:", data[i][0]);
                $("#csef").append('<option value =' + data[i][0] + '>' + data[i][1] + "</option>") 
            }
        }
    });
});

// This one gets CrashType
$(document).ready(function(){
    $.ajax({
        url: './php/crashtype.php',
        method: 'POST',
        dataType: 'JSON',
        success:function(data){
            for(var i=0; i<data.length; i++){
                console.log("Crashtype:", data[i][1]);
                $("#crashtype").append('<option value =' + data[i][0] + '>' + data[i][1] + "</option>") 
            }
        }
    });
});

// This one gets the location
$(document).ready(function(){
    $.ajax({
        url: './php/suburb.php',
        method: 'POST',
        dataType: 'JSON',
        success:function(data){
            for(var i=0; i<data.length; i++){
                console.log("Location:", data[i][0], data[i][1], data[i][2], data[i][3], data[i][4]);
                $("#suburb").append('<option value =' + data[i][0] + '>' + data[i][2] + "</option>")
            }
        }
    })
})