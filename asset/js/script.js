$(window).scroll(function () {
    if ($(this).scrollTop() == 0) {
        $('.to-top').fadeIn();
    } else {
        $('.to-top').fadeOut();
    }
});

$('.to-top').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 500);
    return false;
});



$("a[href='#aboutUs']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});


$("a[href='#ourProjects']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});

$("a[href='#ourTeams']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});
$("a[href='#ourEvents']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});

$("a[href='#ourPartners']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});

$("a[href='#bigFoot']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});







var menuTop = $('#menu').position();


$(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    //$('#scrollPosition').html(x);
    if(scrollPosition > menuTop.top){
        $('#menu').css({
            'position' : 'fixed',
            'top' : '0px',
            'width' : '100%',
            'z-index' : '99',
            'background-color' : 'white',
        });
    }
    else {
        $('#menu').css({
            'position' : 'static',
            'background-color' : 'transparent'
        });
    }
});


var menuTop2 = $('#cssmenu').position();


$(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    //$('#scrollPosition').html(x);
    if(scrollPosition > menuTop2.top){
        $('#cssmenu').css({
            'position' : 'fixed',
            'top' : '0px',
            'width' : '100%',
            'z-index' : '99',
            'background-color' : 'white',
        });
    }
    else {
        $('#cssmenu').css({
            'position' : 'static',
            'background-color' : 'white'
        });
    }
});

// jQuery( document ).ready(function() {
//     jQuery('.navbar-collapse a').click(function(){
//         jQuery('.navbar-collapse').css('height', '0');
//         // jQuery('.navbar-collapse .check-menu').hide();
//         jQuery('.navbar-collapse').removeClass('in');
//         // jQuery('.navbar-collapse .check-menu').removeClass('in');
//     });
// });


function toggle(IDS) {
    var sel = document.getElementById('pg').getElementsByTagName('div');
    for (var i=0; i<sel.length; i++) {
        if (sel[i].id != IDS) { sel[i].style.display = 'none'; }
    }
    var status = document.getElementById(IDS).style.display;
    if (status == 'block') { document.getElementById(IDS).style.display = 'none'; }
    else { document.getElementById(IDS).style.display = 'block'; }

    return false;
}








