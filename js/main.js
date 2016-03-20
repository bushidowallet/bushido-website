$(function() {
    init();
});

function init() {
    drawCanvas();
    initNav();
    setupSliderNav();
    setupScroll();
};

var scrollingOn = true;

function setupScroll() {
    $('body').on({
        'mousewheel': function(e) {
            if (e.target.id == 'el') return;
            if (scrollingOn === false) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    })
}

function drawCanvas() {
    var canvas = document.getElementById('canvas');
    var canvas2 = document.getElementById('canvas2');
    var canvas3 = document.getElementById('canvas3');
    fillCanvas(canvas, 'rgba(153,218,255,1)', 'rgba(9,120,184,1)');
    fillCanvas(canvas2, 'rgba(153,218,255,1)', 'rgba(9,120,184,1)');
    fillCanvas(canvas3, 'rgba(153,218,255,1)', 'rgba(9,120,184,1)');
}

function fitToContainer(canvas) {
    canvas.style.width='100%';
    canvas.style.height='100%';
}

function fillCanvas(canvas, c1, c2) {
    var context = canvas.getContext('2d');
    fitToContainer(canvas);
    var topgrad = context.createLinearGradient(0, canvas.width, canvas.height, 0);
    topgrad.addColorStop(0, c1);
    topgrad.addColorStop(1, c2);
    context.fillStyle = topgrad;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function initNav() {
    $('#homeBtn').on('click', function(e) {
        open('home');
    });
    $('#netBtn').on('click', function(e) {
        open('diagram');
    });
    $('#stackBtn').on('click', function(e) {
        open('stacks');
    });
    $('#galleryBtn').on('click', function(e) {
        openGallery();
    });
    $('#creditsBtn').on('click', function(e) {
        open('credits');
    });
    $('#contributeBtn').on('click', function(e) {
        open('contribute');
    });
    $('#contactBtn').on('click', function(e) {
        open('contact');
    });
    $('#hsmBtn').on('click', function(e) {
        open('hsm');
    });
    $('#signupBtn').on('click', function(e) {
        window.location = "https://app.bushidowallet.com/register.html";
    });
    $('#signinBtn').on('click', function(e) {
        window.location = "https://app.bushidowallet.com/login.html";
    });
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000
    });
}

function open(id) {

    var position = $('#'+id).position();
    $('body, html').stop(true, false).animate({scrollTop: position.top}, 750, function() {

    });
}

function openGallery() {
    scrollingOn = false;
    var h = $(window).height();
    var w = $(window).width();
    var navSpace = $('#header').height();
    var site = 'gallery.html';
    var position = $(window).scrollTop();
    $("<div id='sliderFullContainer'><iframe id='sliderFrame' width='" + w + "' height='" + h + "' src='" + site + "' style='border: none'><iframe></div>").css({
        position: "absolute",
        width: w,
        height: h - navSpace,
        top: navSpace + position,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0
    }).appendTo($('#container')).animate({opacity: 1});
    $('.topNavBar').css({display: 'none'});
    $('.sliderNavBar').css({display: 'inline-block'});
}

function setupSliderNav() {
    $('#closeSliderBtn').on('click', function(e) {
        closeGallery(true);
    });
    $('#prevSlideBtn').on('click', function(e) {
        prevSlide();
    });
    $('#nextSlideBtn').on('click', function(e) {
        nextSlide();
    });
}

function nextSlide() {
    $('#sliderFrame')[0].contentWindow.navigate('nextSlide');
}

function prevSlide() {
    var iframe = document.getElementById('sliderFrame');
    iframe.contentWindow.navigate('prevSlide');
}

function closeGallery(fade) {
    if (fade === true) {
        $("#sliderFullContainer").fadeOut("slow", function() {
            $("#sliderFullContainer").remove();
            scrollingOn = true;
        });
    }
    $('.topNavBar').css({display: 'table-cell'});
    $('.sliderNavBar').css({display: 'none'});
}

