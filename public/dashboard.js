$(document).ready(function(){
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var dateObj = new Date();
    var d = dateObj.getDay();
    var dayname = days[d];
    var daystring = dayname.toString();
    console.log(daystring);
    
    $.ajax({
        type: "POST",
        url: "dashboard.php",
        data: {
            dayname: daystring
        },
        dataType: 'json',
        success: function(data){
            console.log("Data1: ", data.count);
            $("#totalcastoday").append("<p>" + data.count + "</p>")
        },
        error: function(error){
            console.log(error.responseText);
        }
    });
});

// function requestdata(){
//     $.ajax({

//     })
// }

// $(document).ready(function(){
//     Highcharts.chart('container', {
//         chart: {
//             type: ""
//         },
//         title: {
//             text: "Chart"
//         },
//         yAxis: {
//             title: {
//                 text: "Test"
//             }
//         },
//         xAxis: {
//             title: {
//                 text: "Test 2"
//             }
//         },
//         series: [{
//             name: "1",
//             data: [1,2,3,4,5,6,7,8,9]
//         }]
//     });
// })

