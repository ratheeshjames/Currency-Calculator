function focusfn(){
    // Initaializing Values
    var n5 = document.getElementById("n5").value;
    var n10 = document.getElementById("n10").value;
    var n20 = document.getElementById("n20").value;
    var n50 = document.getElementById("n50").value;
    var n100 = document.getElementById("n100").value;
    var n200 = document.getElementById("n200").value;
    var n500 = document.getElementById("n500").value;
    var n1000 = document.getElementById("n1000").value;
    var n2000 = document.getElementById("n2000").value;

    // Calculate Rowwise result
    var n5row = n5 * 5;
    var n10row = n10 * 10;
    var n20row = n20 * 20;
    var n50row = n50 * 50;
    var n100row = n100 * 100;
    var n200row = n200 * 200;
    var n500row = n500 * 500;
    var n1000row = n1000 * 1000;
    var n2000row = n2000 * 2000;

    // Calcualte Total
    var total = n5row + n10row + n20row + n50row + n100row + n200row + n500row + n1000row + n2000row;
    console.log(total);
    
    // Display Results
    document.getElementById("n5res").innerHTML="₹"+n5row;
    document.getElementById("n10res").innerHTML="₹"+n10row;
    document.getElementById("n20res").innerHTML="₹"+n20row;
    document.getElementById("n50res").innerHTML="₹"+n50row;
    document.getElementById("n100res").innerHTML="₹"+n100row;
    document.getElementById("n200res").innerHTML="₹"+n200row;
    document.getElementById("n500res").innerHTML="₹"+n500row;
    document.getElementById("n1000res").innerHTML="₹"+n1000row;
    document.getElementById("n2000res").innerHTML="₹"+n2000row;
    document.getElementById("totalres").innerHTML="₹"+total;
}
function info(){
    document.getElementById("infodia").show();
}
function hideAlertDialog(){
    document.getElementById("infodia").hide();
}
