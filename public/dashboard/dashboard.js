var chart;
var array = [];



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
                    if(result[i][0] === 'Friday'){
                        chart.series[0].data[4].y = parseInt(result[i][1]);
                        chart.redraw();
                    } else if (result[i][0] === 'Monday'){
                        chart.series[0].data[0].y = parseInt(result[i][1]);
                        chart.redraw();
                    } else if (result[i][0] === 'Saturday'){
                        chart.series[0].data[5].y = parseInt(result[i][1]);   
                        chart.redraw();               
                    } else if (result[i][0] === 'Sunday'){
                        chart.series[0].data[6].y = parseInt(result[i][1]);       
                        chart.redraw();            
                    } else if (result[i][0] === 'Thursday'){
                        chart.series[0].data[3].y = parseInt(result[i][1]); 
                        chart.redraw();
                    } else if (result[i][0] === 'Tuesday'){
                        chart.series[0].data[1].y = parseInt(result[i][1]);
                        chart.redraw();
                    } else if (result[i][0] === 'Wednesday'){
                        chart.series[0].data[2].y = parseInt(result[i][1]);
                        chart.redraw();
                    } else {
                        console.log("Cannot find array value");
                    }
            }
            console.log("Finished loop");
        },
            error: function(data){
                console.log("ERROR!:", data.responseText);
            }
        });
}
$(document).ready(function () {
    console.log("Loading Chart")
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
        },
        min: 0,
        max: 20,
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
            }
        },
        series: [
            {
                name: "Days",
                colorByPoint: true,
                data: [
                    {
                        name: "Monday",
                        y: 0,
                    },
                    {
                        name: "Tuesday",
                        y: 0,
                    },
                    {
                        name: "Wednesday",
                        y: 0,
                    },
                    {
                        name: "Thursday",
                        y: 0,
                    },
                    {
                        name: "Friday",
                        y: 0,
                    },
                    {
                        name: "Saturday",
                        y: 0,
                    },
                    {
                        name: "Sunday",
                        y: 0,
                    }
                ]
            }
        ]
    });
});