$(window).on("load", function() {//when page is loading do this
    $(".loader .inner").fadeOut(500, function() {//icone desaparece antes do background
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',//all
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
});

$(document).ready(function() {

    $('#slides').superslides({//to activate slides
        animation: 'fade',
        play: 5000,
        pagination: false
    });
    // var typed = new Typed(".typed", {//similar to jquery but is plain js
    //     strings: ["Desenvolvimento Web", "Programação", "HTML CSS PHP JavaScript"],
    //     typeSpeed: 70,
    //     loop: true,
    //     startDelay: 1000,
    //     showCursor: false
    // });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });


    var skillsTopOffset = $(".skillsSection").offset().top;
    //console.log(skillsTopOffset);//posiçãp do skillsSection
    // var statsTopOffset = $(".statsSection").offset().top;
    // var countUpFinished = false;
    $(window).scroll(function() {//when window scrolls run function
        //console.log(window.pageYOffset) to see it
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 10) {
            //200 to adjust a little bit
            $('.chart').easyPieChart({
            //your options goes here
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
            });
        }
    //});
    //     if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            // $(".counter").each(function() {//para cada elemento c a classe counter run function
            //     var element = $(this);
            //     var endVal = parseInt(element.text());

            //     element.countup(endVal);
            // });
            // countUpFinished = true;
    //     }

    });

    $("[data-fancybox]").fancybox();



    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current"); //this refers to the button clicked

        var selector = $(this).attr("data-filter"); //gets the value

        $(".items").isotope({
        filter: selector,
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
    return false;
    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();//impede o compto esperado de a

        var targetElement = $(this).attr("href"); //this in this case is a anchor tag
        var targetPosition = $(targetElement).offset().top;//copy position of target element
        $("html, body").animate({ scrollTop: targetPosition - 100 }, "slow");//animate jquery function


    });

    var nav = $("#navigation");//variable never change use const
    var navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");

        if ($(window).scrollTop() >= navTop) { //scrollTop jquery function gets the position
            body.css("padding-top", nav.outerHeight() + "px");//adiciona padding da altura da barra do menu
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);//remove o padding adicionado anteriormente
            body.removeClass("fixedNav");
        }
    }

});
