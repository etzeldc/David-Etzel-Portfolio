//Code Challenges

$(function () {
    $("#code1").hide();

    //Calculations for Five Numbers
    $("#fiveCalc").click(function () {
        var a, b, c, d, e;
        a = +$("#five1").val();
        b = +$("#five2").val();
        c = +$("#five3").val();
        d = +$("#five4").val();
        e = +$("#five5").val();
        var small = Math.min(a, b, c, d, e);
        $("#smallNum").text("SMALLEST = " + small);
        var big = Math.max(a, b, c, d, e);
        $("#largeNum").text("GREATEST = " + big);
        var avg = (a + b + c + d + e) / 2;
        $("#avgNum").text("AVERAGE = " + avg);
        var sum = a + b + c + d + e;
        $("#sumNum").text("SUM = " + sum);
        var prod = a * b * c * d * e;
        $("#prodNum").text("PRODUCT = " + prod);
    });

    //Clearing all Five Number Input and Output Fields
    $("#fiveClear").click(function () {
        $(".input").val("");
        $(".output").text("");
    });

    //Five Number "Show/Hide Code" Button Operations
    $("#toggle1").click(function () {
        $("#code1").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    });
});

$(function () {
    $("#code2").hide();

    //Calculations for Factorals
    $("#factCalc").click(function () {
        var value = +$("#factIn").val();
        var temp = 1;
        var eq = [];
        for (i = value; i > 0; i--) {
            temp = temp * i;
            eq.push("<span class='blue shared'>" + i + "</span>");
        }
        $("#factOut").html("<span class='red shared'>" + value + "!</span>... " + eq.join(" x ") + " = " + "<span class='purple shared'>" + temp + "</span>");
    });


    //Clearing Factoral Input and Output Fields
    $("#factClear").click(function () {
        $("#factIn").val("");
        $(".output").text("");
    });

    //Factorial "Show/Hide Code" Button Operations
    $("#toggle2").click(function () {
        $("#code2").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    });
});

$(function () {
    $("#code3").hide();

    //Calculations for FizzBuzz
    $("#fbCalc").click(function () {
        var fizz = $("#fizz").val();
        var buzz = $("#buzz").val();
        var limit = $("#limit").val();
        var fizzBuzz = [];
        if (!limit) {
            limit = 100;
        }
        for (i = 1; i <= limit; i++) {
            if (i % fizz == 0 && i % buzz == 0) {
                fizzBuzz.push("<span class='purple shared'>FizzBuzz</span>");
            } else if (i % fizz == 0) {
                fizzBuzz.push("<span class='red shared'>Fizz</span>");
            } else if (i % buzz == 0) {
                fizzBuzz.push("<span class='blue shared'>Buzz</span>");
            } else {
                fizzBuzz.push(i);
            }
        }
        $("#fbOut").html(fizzBuzz.join(', '));
    });

    //Clearing FizzBuzz Input and Output Fields
    $("#fbClear").click(function () {
        $("#fizz, #buzz").val("");
        $("#fbOut").text("");
    });

    //FizzBuzz "Show/Hide Code" Button Operations
    $("#toggle3").click(function () {
        $("#code3").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    });
});

$(function () {
    $("#code4").hide();

    //Calculations for Palindrome
    $("#palCalc").click(function () {
        var word = $("#palIn").val();
        var reverse = "";
        var compare = word.toLowerCase().replace(/\s/g, "");
        var compare2 = compare.split("").reverse().join("");
        for (i = word.length - 1; i >= 0; i--) {
            reverse += word.substr(i, 1);
        }
        if (compare != compare2) {
            $("#palOut").text("The reverse of \"" + word + "\" is \"" + reverse + "\".");
            $("#palResult").text("\"" + word + "\" is not a palindrome.");
        } else {
            $("#palOut").text("\"" + word + "\" backwards is \"" + word + "\".");
            $("#palResult").text("\"" + word + "\" is a palindrome.");
        }
    });

    //Clearing Palindrome input and output fields
    $("#palClear").click(function () {
        $("#palIn").val("");
        $("#palOut, #palResult").text("");
    });

    //Palindrome "Show/Hide Code" Button Operations
    $("#toggle4").click(function () {
        $("#code4").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    });
});

$(function () {
    $("#code5").hide();

    //Calculations for SOAF
    $("#kCalc").click(function () {
        $(".output").text("");
        var fear = [+$("#fears1").val(), +$("#fears2").val(), +$("#fears3").val(), +$("#fears4").val(), +$("#fears5").val(), +$("#fears6").val()];
        var k = +$("#kValue").val();
        var kTrue = false;
        for (var i = 0; i < fear.length - 1; i++) {
            for (var j = i + 1; j <= fear.length - 1; j++) {
                if (fear[i] + fear[j] === k) {
                    kTrue = true;
                    $("#kResponse").text("K has been found!");
                    $("#kEquation").text(fear[i] + " + " + fear[j] + " = " + k);
                    break;
                }
            }
            if (kTrue) {
                break;
            }
        }
        if (!kTrue) {
            $("#kResponse").text("K was not found in this array.");
        }
    });

    //Clearing SOAF Input and Output Fields
    $("#kClear").click(function () {
        $(".input").val("");
        $(".output").text("");
    });

    // SOAF "Show/Hide Code" Button Operations
    $("#toggle5").click(function () {
        $("#code5").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    });
})

$(function () {
    $("#code6").hide();

    //Calculations for Leap Year
    $("#leapCalc").click(function () {
        var year = $("#leapIn").val();
        if (year % 4 == 0) {
            $("#leapOut").text(year + " is a leap year!");
        } else {
            $("#leapOut").text(year + " is not a leap year.");
        }
        if (year % 100 == 0 && year % 400 != 0) {
            $("#leapOut").text(year + " is not a leap year.");
        }
    });

    //Clearing Leap Year Input and Output Fields
    $("#leapClear").click(function () {
        $(".input").val("");
        $(".output").text("");
    });

    // Leap Year "Show/Hide Code" Button Operations
    $("#toggle6").click(function () {
        $("#code6").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    });
})

$(function () {
    $("#code7").hide();

    //Calculations for Pig Latin
    $("#pigCalc").click(function () {
        var toPig = $("#pigIn").val().toLowerCase();
        var english = toPig.split(" ");
        for (var i = 0; i < english.length; i++) {
            if (english[i].charAt(0) == "a" || english[i].charAt(0) == "e" || english[i].charAt(0) == "i" || english[i].charAt(0) == "o" || english[i].charAt(0) == "u") {
                english[i] = english[i] + "whay";
            } else {
                english[i] = english[i].slice(1, english[i].length) + english[i].charAt(0) + "ay";
            }
        }
        english[0] = english[0].toUpperCase().charAt(0) + english[0].slice(1, english[0].length);
        english = english.join(" ");
        $("#pigOut").text(english);
    });

    //Clearing Pig Latin input and output fields
    $("#pigClear").click(function () {
        $("#pigIn").val("");
        $("#pigOut").text("");
    })

    //Pig Latin "Show/Hide Code" Button Operations
    $("#toggle7").click(function () {
        $("#code7").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    });
});


////Weather API
//function adjustStationName(station) {
//    station = station.toLowerCase();
//    var stationName = station.split(" ");
//    return stationName[0].toUpperCase().charAt(0) + stationName[0].slice(1, stationName[0].length);
//}

//function whatIfNA(nawww) {
//    if (nawww === "n/a") {
//        return "Conditions not currently available";
//    }
//}

//function whichDir(direction) {
//    if (direction > 11.25 && direction <= 33.75) {
//        return "NNE";
//    } else if (direction > 33.75 && direction <= 56.25) {
//        return "NE";
//    } else if (direction > 56.25 && direction <= 78.75) {
//        return "ENE";
//    } else if (direction > 78.75 && direction <= 101.25) {
//        return "E";
//    } else if (direction > 101.25 && direction <= 123.75) {
//        return "ESE";
//    } else if (direction > 123.75 && direction <= 146.25) {
//        return "SE";
//    } else if (direction > 146.25 && direction <= 168.75) {
//        return "SSE";
//    } else if (direction > 168.75 && direction <= 191.25) {
//        return "S";
//    } else if (direction > 191.25 && direction <= 213.75) {
//        return "SSW";
//    } else if (direction > 213.75 && direction <= 236.25) {
//        return "SW";
//    } else if (direction > 236.25 && direction <= 258.75) {
//        return "WSW";
//    } else if (direction > 258.75 && direction <= 281.25) {
//        return "W";
//    } else if (direction > 281.25 && direction <= 303.75) {
//        return "WNW";
//    } else if (direction > 303.75 && direction <= 326.25) {
//        return "NW";
//    } else if (direction > 326.25 && direction <= 348.75) {
//        return "NNW";
//    } else if (direction > 348.75 && direction <= 360 || direction >= 0 && direction <= 11.25) {
//        return "N";
//    }
//}

//function getFahrenheit(celsius) {
//    celsius = (celsius * (9 / 5)) + 32;
//    return celsius.toFixed(1);
//}

//$("#boCoModal").on("shown.bs.modal", function () {
//    $.get("http://api.geonames.org/weatherJSON?north=41&south=39&east=-104&west=-106&username=ertyseidohl', function(res){ // this reach", function (res) {
//        $("#boCoOut1").append('<h1><span>Station</span>: ' + adjustStationName(res.weatherObservations[2].stationName) + '</h1>');
//        $("#boCoOut2").append('<p>Conditions: ' + whatIfNA(res.weatherObservations[2].weatherCondition) + '</p>');
//        $("#boCoOut3").append('<p>Wind Direction: ' + whichDir(res.weatherObservations[2].windDirection) + '</p>');
//        $("#boCoOut4").append('<p>Wind Speed: ' + res.weatherObservations[2].windSpeed + ' mph</p>');
//        $("#boCoOut5").append('<p>Dew Point: ' + res.weatherObservations[2].dewPoint + '&deg;F</p>');
//        $("#boCoOut6").append('<p>Humidity: ' + res.weatherObservations[2].humidity + '%</p>');
//        $("#boCoOut7").append('<p class="temp">Temp: ' + getFahrenheit(res.weatherObservations[2].temperature) + '&deg;F</p>');
//    });
//})