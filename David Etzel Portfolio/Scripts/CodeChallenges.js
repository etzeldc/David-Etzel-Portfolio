//Code Challenges

$(function () {
    $(".code").hide();

    //Calculations for Five Numbers
    var a, b, c, d, e;
    $("#fiveCalc").click(function () {
        a = +$("#five1").val();
        b = +$("#five2").val();
        c = +$("#five3").val();
        d = +$("#five4").val();
        e = +$("#five5").val();
        var small = Math.min(a, b, c, d, e);
        $("#smallNum").text("The SMALLEST number entered is " + small + ".");
        var big = Math.max(a, b, c, d, e);
        $("#largeNum").text("The GREATEST number entered is " + big + ".");
        var avg = (a + b + c + d + e) / 2;
        $("#avgNum").text("The AVERAGE of the numbers entered is " + avg + ".");
        var sum = a + b + c + d + e;
        $("#sumNum").text("The SUM of the numbers entered is " + sum + ".");
        var prod = a * b * c * d * e;
        $("#prodNum").text("The PRODUCT of the numbers entered is " + prod + ".");
    })

    //Clearing all Five Number Input and Output Fields
    $("#fiveClear").click(function () {
        $(".input").val("");
        $(".output").text("");
    })


    //Calculations for Factorals
    $("#factCalc").click(function () {
        var value = +$("#factIn").val();
        temp = 1;
        for (i = value; i > 0; i--) {
            temp = temp * i;
        }
        $("#factOut").text("The Factoral of " + value + " is " + temp + ".");
    })

    //Clearing Factoral Input and Output Fields
    $("#factClear").click(function () {
        $("#factIn").val("");
        $(".output").text("");
    })

    //Calculations for FizzBuzz
    $("#fbCalc").click(function () {
        var fizz = $("#fizz").val();
        var buzz = $("#buzz").val();
        var fizzBuzz = [];
        for (i = 1; i <= 100; i++) {
            if (i % fizz == 0 && i % buzz == 0) {
                fizzBuzz.push("<span class='fb shared'>FizzBuzz</span>");
            } else if (i % fizz == 0) {
                fizzBuzz.push("<span class='b shared'>Buzz</span>");
            } else if (i % buzz == 0) {
                fizzBuzz.push("<span class='f shared'>Fizz</span>");
            } else {
                fizzBuzz.push(i);
            }
        }
        $("#fbOut").html(fizzBuzz.join(', '));
    })


    //Clearing FizzBuzz Input and Output Fields
    $("#fbClear").click(function () {
        $("#fizz, #buzz").val("");
        $("#fbOut").text("");
    })

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
            $("#palOut").text("The reverse of \"" + word + "\" is \"" + word + "\".");
            $("#palResult").text("\"" + word + "\" is a palindrome.");
        }
    })

    //Clearing Palindrome input and output fields
    $("#palClear").click(function () {
        $("#palIn").val("");
        $("#palOut, #palResult").text("");
    })

    //Calculations for Sum Of All Fears
    $("#kCalc").click(function () {
        $(".output").text("");
        var fear = [+$("#fears1").val(), +$("#fears2").val(), +$("#fears3").val(), +$("#fears4").val(), +$("#fears5").val(), +$("#fears6").val()];
        var k = +$("#kValue").val();
        var kTrue = false;
        for (var i = 0; i < fear.length - 1; i++) {
            for (var j = i + 1; j <= fear.length - 1; j++) {
                if (fear[i] + fear[j] == k) {
                    kTrue = true;
                    $("#kResponse").text("K has been found!");
                    $("#kEquation").text(fear[i] + " + " + fear[j] + " = " + k);
                    break;
                }
            }
        }
        if (!kTrue) {
            $("#kResponse").text("K was not found in this array.");
        }
    })

    //Clearing Sum Of All Fears Input and Output Fields
    $("#kClear").click(function () {
        $(".input").val("");
        $(".output").text("");
    })

    //"Show/Hide Code" Button Operations
    $(".btnToggle").click(function () {
        $(".code").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    })
});

