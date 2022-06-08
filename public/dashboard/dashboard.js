var daychart;
var dynamicchart;
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
            console.log("Worst Month: ", data);
            $("#highestmonth").append("<p>" + data[0][0] + ", " + data[0][1] + " CAS" + "</p>");
        },
        error: function(error){
            console.log(error.responseText);
        }
    })
})

$(document).ready(function(){
    $.ajax({
        type: "POST",
        url: "./dashboard/worstday.php",
        dataType: 'json',
        success: function(data){
            console.log("Worst Day: ", data);
            $("#highestday").append("<p>" + data[0][0] + ", " + data[0][1] + " CAS" + "</p>");
        }
    })
})

$(document).ready(function(){
    $("#submit").click(function(){
        var charttype = $("#charttype").val();
        var xaxisval = $("#xaxis").val();
        var yaxisval = $("#yaxis").val();

        console.log("Chart type:", charttype);
        console.log("X-Axis: ", xaxisval);
        console.log("Y-Axis: ", yaxisval);

        dynamicchart.types = charttype;
        dynamicchart.xAxis[0].setTitle({
            text: xaxisval
        });
        dynamicchart.yAxis[0].setTitle({
            text: yaxisval
        });
        dynamicchart.setTitle({
            text: yaxisval + ' versus ' + xaxisval
        });
        dynamicchart.redraw();

        var array = [xaxisval, yaxisval];

        var jsonArray = JSON.stringify(array);
        console.log(jsonArray);

        $.ajax({
            type: "POST",
            url: "./dashboard/updategraph.php",
            // data: {
            //     "arg": xaxis
            // },
            dataType: 'json',
            sucess: function(data){
                console.log("Epic Data", data);
                // dynamicchart.redraw();
            },
            error: function(data){
                console.log("ERROR!: ", data.responseText);
            }
        })
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
                            daychart.series[0].data[4].y = parseInt(result[i][1]);
                            break;
                        case 'Monday':
                            daychart.series[0].data[0].y = parseInt(result[i][1]);
                            break;
                        case 'Saturday':
                            daychart.series[0].data[5].y = parseInt(result[i][1]);
                            break;
                        case 'Sunday':
                            daychart.series[0].data[6].y = parseInt(result[i][1]); 
                            break;
                        case 'Thursday':
                            daychart.series[0].data[3].y = parseInt(result[i][1]);
                            break;
                        case 'Tuesday':
                            daychart.series[0].data[1].y = parseInt(result[i][1]);
                            break;
                        case 'Wednesday':
                            daychart.series[0].data[2].y = parseInt(result[i][1]);
                            break;
                        default:
                            console.log("Finished switch case statement or there is an error")
                    }
                }
            daychart.redraw();
            console.log("Finished loop");
        },
            error: function(data){
                console.log("ERROR!:", data.responseText);
            }
        });
}
$(document).ready(function () {
    console.log("Loading Column Chart 1")
    daychart = new Highcharts.Chart({
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
    console.log("Loading Line Chart 1")
    dynamicchart = new Highcharts.Chart({
        chart: {
        renderTo: "timecontainer",
        type: "",
        events: {
            
        },
        },
        title: {
            text: "",
        },
        xAxis: {
            title: {
                text: '',
            },
        },
        yAxis: {
            title: {
                text: '',
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