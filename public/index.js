// I'm using jquery for these functions

// Gets the last 20 years and runs when the document is ready
$(document).ready(function(){
    var max = new Date().getFullYear(); // Get the current year
    var min = max - 20; // Get the min year I want
    var years = [] // Creating an empty array

    for(var i = max; i >= min; i--){ 
        years.push(i) // Pushing all years created into array
    }

    // Looping through the array and creating an <option> in the HTML
    for(var i=0; i<years.length; i++){
        // console.log("Years:", years[i])
        $("#year").append('<option value =' + years[i] + '>' + years[i] + "</option>") 
    }
})

// Runs when the document is ready
$(document).ready(function(){
    // Creating an array for all area speeds
    var areaspeed = ["5", "10", "15", "20", "30", "40", "50", "60", "70", "80", "90", "100", "110"]
    // Looping through each value and creating an <option> tag in the HTML
    for(var i=0;i<areaspeed.length; i++){
        // console.log("Areaspeed:", areaspeed[i])
        $("#areaspeed").append('<option value =' + areaspeed[i] + '>' + areaspeed[i] + "</option>")
    }
})

