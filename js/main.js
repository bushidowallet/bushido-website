$(function() {
    init();
});

function init() {
    drawCanvas();
    initNav();
};

function drawCanvas() {
    var canvas = document.getElementById('canvas');
    var canvas2 = document.getElementById('canvas2');
    var canvas3 = document.getElementById('canvas3');
    fillCanvas(canvas, 'rgba(153,218,255,1)', 'rgba(9,120,184,1)');
    fillCanvas(canvas2, 'rgba(153,218,255,1)', 'rgba(9,120,184,1)');
    fillCanvas(canvas3, 'rgba(142,166,4,1)', 'rgba(86,166,4,1)');
}

function fitToContainer(canvas) {
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
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
        open('gallery');
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

