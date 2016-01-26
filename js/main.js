$(function() {

    init();

});

function init() {

    drawCanvas();
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