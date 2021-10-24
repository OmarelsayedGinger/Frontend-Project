$(document).ready(function () {
    $("#button1").click(function (e) {
        e.preventDefault();
        $("#secondaccor").hide();
        $("#thirdaccor").hide();
        $("#fourthaccor").hide();
        $("#fifthaccor").hide();
        $("#sixthaccor").hide();
        $("#button2 , #button3 , #button4 , #button5 , #button6").css("color", "#465675");
        $("#button2 , #button3 , #button4 , #button5 , #button6").css("border-color", "#e7e8ff");
        $("#firstaccor").show();
        $(this).css("color", "#2a81ea");
        $(this).css("border-color", "#2a81ea");
    });
    $("#button2").click(function (e) {
        e.preventDefault();
        $("#firstaccor").hide();
        $("#thirdaccor").hide();
        $("#fourthaccor").hide();
        $("#fifthaccor").hide();
        $("#sixthaccor").hide();
        $("#button1 , #button3 , #button4 , #button5 , #button6").css("color", "#465675");
        $("#button1 , #button3 , #button4 , #button5 , #button6").css("border-color", "#e7e8ff");
        $("#secondaccor").show();
        $(this).css("color", "#2a81ea");
        $(this).css("border-color", "#2a81ea");
    });
    $("#button3").click(function (e) {
        e.preventDefault();
        $("#firstaccor").hide();
        $("#secondaccor").hide();
        $("#fourthaccor").hide();
        $("#fifthaccor").hide();
        $("#sixthaccor").hide();
        $("#button1 , #button2 , #button4 , #button5 , #button6").css("color", "#465675");
        $("#button1 , #button2 , #button4 , #button5 , #button6").css("border-color", "#e7e8ff");
        $("#thirdaccor").show();
        $(this).css("color", "#2a81ea");
        $(this).css("border-color", "#2a81ea");
    });
    $("#button4").click(function (e) {
        e.preventDefault();
        $("#firstaccor").hide();
        $("#secondaccor").hide();
        $("#thirdaccor").hide();
        $("#fifthaccor").hide();
        $("#sixthaccor").hide();
        $("#button1 , #button2 , #button3 , #button5 , #button6").css("color", "#465675");
        $("#button1 , #button2 , #button3 , #button5 , #button6").css("border-color", "#e7e8ff");
        $("#fourthaccor").show();
        $(this).css("color", "#2a81ea");
        $(this).css("border-color", "#2a81ea");
    });
    $("#button5").click(function (e) {
        e.preventDefault();
        $("#firstaccor").hide();
        $("#secondaccor").hide();
        $("#thirdaccor").hide();
        $("#fourthaccor").hide();
        $("#sixthaccor").hide();
        $("#button1 , #button2 , #button3 , #button4 , #button6").css("color", "#465675");
        $("#button1 , #button2 , #button3 , #button4 , #button6").css("border-color", "#e7e8ff");
        $("#fifthaccor").show();
        $(this).css("color", "#2a81ea");
        $(this).css("border-color", "#2a81ea");
    });
    $("#button6").click(function (e) {
        e.preventDefault();
        $("#firstaccor").hide();
        $("#secondaccor").hide();
        $("#thirdaccor").hide();
        $("#fourthaccor").hide();
        $("#fifthaccor").hide();
        $("#button1 , #button2 , #button3 , #button4 , #button5").css("color", "#465675");
        $("#button1 , #button2 , #button3 , #button4 , #button5").css("border-color", "#e7e8ff");
        $("#sixthaccor").show();
        $(this).css("color", "#2a81ea");
        $(this).css("border-color", "#2a81ea");
    });
    // icon toggle
    $("a.toggle-icon").click(function (e) {
        e.preventDefault();
        $(this).find("i.plus-icon").toggleClass("fa-minus fa-plus");
    });
    // accordion color change
    $("div.accordion-item").click(function (e) {
        e.preventDefault();
        $(this).find("div.accordion-color").toggleClass("change-style-onclick change-style");
    });
    // accordion text color change
    $("div.accordion-item").click(function (e) {
        e.preventDefault();
        $(this).find("a.accordion-text").toggleClass("accordion-text2 accordion-text1");
    });
    // navbar color change onscroll
    var position1 = 0;
    $(document).scroll(function () {
        position1 = $(this).scrollTop();
        if (position1 > 0) {
            $("nav").removeClass("bg-transparent", function () {
                $("nav").addClass("bg-white", 1000);
                $("nav").addClass("shadow");
            });
        }
        if (position1 == 0) {
            $("nav").addClass("bg-transparent", 1000);
            $("nav").removeClass("bg-white");
            $("nav").removeClass("shadow");
        }
    });
    // fixed button fadding 
    var button_pos = 0;
    $(document).scroll(function () {
        button_pos = $(this).scrollTop();
        if (button_pos > 0) {
            $("#fixbutton").fadeIn(500)
        }
        if (button_pos == 0) {
            $("#fixbutton").fadeOut(500);
        }
    })
    // navbar active titles
    var position1 = $("#home").position();
    var top = position1.top;
    var position2 = $("#about").position();
    var top2 = position2.top;
    var position3 = $("#symptoms").position();
    var top3 = position3.top;
    var position4 = $("#prevention").position();
    var top4 = position4.top;
    var position5 = $("#treatment").position();
    var top5 = position5.top;
    var position6 = $("#dodont").position();
    var top6 = position6.top;
    var position7 = $("#faq").position();
    var top7 = position7.top;
    var position8 = $("#news").position();
    var top8 = position8.top;
    var position9 = $("#footer").position();
    var top9 = position9.top;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos < top) {
            $("#div1").css("color", "#2a81ea");
        }
        else {
            $("#div1").css("color", "#50658e");
        }

        if (scroll_pos >= top && scroll_pos < top2) {
            $("#div2").css("color", "#2a81ea");
        }
        else {
            $("#div2").css("color", "#50658e");
        }

        if (scroll_pos >= top3 && scroll_pos < top4) {
            $("#div3").css("color", "#2a81ea");
        }
        else {
            $("#div3").css("color", "#50658e");
        }

        if (scroll_pos >= top4 && scroll_pos < top5) {
            $("#div4").css("color", "#2a81ea");
        }
        else {
            $("#div4").css("color", "#50658e");
        }

        if (scroll_pos >= top5 && scroll_pos < top6) {
            $("#div5").css("color", "#2a81ea");
        }
        else {
            $("#div5").css("color", "#50658e");
        }

        if (scroll_pos >= top7 && scroll_pos < top8) {
            $("#div6").css("color", "#2a81ea");
        }
        else {
            $("#div6").css("color", "#50658e");
        }

        if (scroll_pos >= top8 && scroll_pos < top9) {
            $("#div7").css("color", "#2a81ea");
        }
        else {
            $("#div7").css("color", "#50658e");
        }


    });
});