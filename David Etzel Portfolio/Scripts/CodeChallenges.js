//Code Challenges

$(function () {
    $(".codeStuff").hide();

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
        if ($(this).text() === "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    });

    //Calculations for Factorals
    $("#factCalc").click(function () {
        var value = +$("#factIn").val();
        var temp = 1;
        var eq = [];
        for (i = value; i > 0; i--) {
            temp = temp * i;
            eq.push("<span class='blue shared'>" + i +"</span>");
        }
        //$("#factOut").text("The Factoral of " + value + " is " + temp + ".");
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
        if ($(this).text() === "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    });

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
        if ($(this).text() === "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    });

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
        if ($(this).text() === "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    });

    //Calculations for Sum Of All Fears
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

    //Clearing Sum Of All Fears Input and Output Fields
    $("#kClear").click(function () {
        $(".input").val("");
        $(".output").text("");
    });

    // SOAF "Show/Hide Code" Button Operations
    $("#toggle5").click(function () {
        $("#code5").toggle();
        if ($(this).text() === "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    });
});

