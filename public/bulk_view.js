$(document).ready(function(){
    $.ajax({
        url: "bulk_view.php",
        type: "POST",
        dataType: 'JSON',
        success: function(result){
            console.log(result);
            for(var i=0; i<result.length; i++){
                // Finds the tbody in the table and appends a <tr> element for each sqltable entry with a class associated with it
                $("#bulkview").find('tbody').append($('<tr>').addClass('row'+[i]))
                for(var j=0; j < result[i].length; j++){
                    // Finds the class and then appends a <td> element with each result element
                    $("#bulkview").find('.row'+[i]).append($('<td>')
                    .text(result[i][j])                    
                    );
                }
            }
        },
        error: function(error){
            console.log(error.responseText)
        }
    })
})