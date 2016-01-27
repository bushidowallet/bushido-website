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
    fillCanvas(canvas);
    fillCanvas(canvas2);
}

function fitToContainer(canvas) {
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

function fillCanvas(canvas) {
    var context = canvas.getContext('2d');
    fitToContainer(canvas);
    var topgrad = context.createLinearGradient(0, canvas.width, canvas.height, 0);
    topgrad.addColorStop(0, 'rgba(153,218,255,1)');
    topgrad.addColorStop(1, 'rgba(9,120,184,1)');
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
}

function open(id) {

    var position = $('#'+id).position();
    $('body, html').stop(true, false).animate({scrollTop: position.top}, 750, function() {

    });
}

