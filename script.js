function sliderVal(rate) {
    document.getElementById("sliderValue").innerHTML = rate + "%"; 
}

function compute()
{
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");
    var endYear = new Date().getFullYear() + Number(years.options[years.selectedIndex].value);
    var interest = principal.value * rate.value * years.value / 100;

    function validate() {
        if(principal.value.match(/^[0-9]+$/) && principal.value > 0) {
            return true;
        } else {
            alert('Please enter a valid Amount with positive numbers only.');
            principal.focus();
            return false;
        }
    }

    if (validate() == true) {
        var p1 = "If you deposit " + principal.value + ",";
        var p2 = "at an interest rate of " + rate.value + "%.";
        var p3 = "You will receive an amount of " + interest + ",";
        var p4 = "in the year " + endYear + ".";
        
        document.getElementById("p1").innerHTML = p1;
        document.getElementById("p2").innerHTML = p2;
        document.getElementById("p3").innerHTML = p3;
        document.getElementById("p4").innerHTML = p4;
    } else {
        window.stop();
    }
}