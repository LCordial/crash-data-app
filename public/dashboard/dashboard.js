var chart;
var timechart;
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

$(document).ready(function(){
    $.ajax({
        type: "POST",
        url: "./dashboard/worstmonth.php",
        dataType: 'json',
        success: function(data){
            console.log("Months: ", data);
            for(var i=0; i < data.length; i++){
                
            }
        },
        error: function(error){
            console.log(error.responseText);
        }
    })
})

function updateTotalCas(){
        $.ajax({
            type: "POST",
            url: "./dashboard/totalcas.php",
            dataType: 'json',
            success: function(result){
                console.log(result);
                for(var i = 0; i < result.length; i++){
                    switch (result[i][0]){
                        case 'Friday':
                            chart.series[0].data[4].y = parseInt(result[i][1]);
                            break;
                        case 'Monday':
                            chart.series[0].data[0].y = parseInt(result[i][1]);
                            break;
                        case 'Saturday':
                            chart.series[0].data[5].y = parseInt(result[i][1]);
                            break;
                        case 'Sunday':
                            chart.series[0].data[6].y = parseInt(result[i][1]); 
                            break;
                        case 'Thursday':
                            chart.series[0].data[3].y = parseInt(result[i][1]);
                            break;
                        case 'Tuesday':
                            chart.series[0].data[1].y = parseInt(result[i][1]);
                            break;
                        case 'Wednesday':
                            chart.series[0].data[2].y = parseInt(result[i][1]);
                            break;
                        default:
                            console.log("Finished switch case statement or there is an error")
                    }
                    chart.redraw();
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

$(document).ready(function () {
    console.log("Loading Chart")
    timechart = new Highcharts.Chart({
        chart: {
        renderTo: "timecontainer",
        type: "line",
        events: {
            
        },
        },
        title: {
            text: "Cas over time",
        },
        xAxis: {
            
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
               
            }
        ]
    });
});