var chart;

$(document).ready(function(){
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var dateObj = new Date();
    // Gets the day from 0-6
    var d = dateObj.getDay();
    // Gets the current day according to the array
    var dayname = days[d];
    // Turns it into a string (Don't know why I did this, theres no point)
    var daystring = dayname.toString();
    console.log(daystring);
    
    $.ajax({
        type: "POST",
        url: "./dashboard/daycas.php",
        data: {
            dayname: daystring
        },
        dataType: 'json',
        success: function(data){
            console.log("Data1: ", data);
            $("#totalcastoday").append("<p>" + data.count + "</p>")
        },
        error: function(error){
            console.log(error.responseText);
        }
    });
});

function updateTotalCas(){
        $.ajax({
            type: "POST",
            url: "./dashboard/totalcas.php",
            dataType: 'json',
            success: function(result){
                console.log(result);
                for(var i = 0; i < result.length; i++){
                    let data = result[i].replace(/\\/g, "");
                    console.log(data);
                }
            },
            error: function(data){
                console.log("ERROR!:", data.responseText);
            }
        });
}

$(document).ready(function () {
    chart = new Highcharts.Chart({
        chart: {
        renderTo: "container",
        type: "column",
        events: {
            load: updateTotalCas(),
        },
        },
        title: {
            text: "Total Cas",
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
            ]
        },
        yAxis: {
        title: {
            text: 'Total Cas'
        }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                }
            }
        },
        series: [
            
            {
                name: "Monday",
                data: [],
            },
            {
                name: "Tuesday",
                data: [],
            },
            {
                name: "Wednesday",
                data: [],
            },
            {
                name: "Thursday",
                data: [],
            },
            {
                name: "Friday",
                data: [],
            },
            {
                name: "Saturday",
                data: [],
            },
            {
                name: "Sunday",
                data: [],
            }
                
        
        ],
        
    });
});


