/**
 * Created by Jesion on 2015-10-01.
 */

$(function(){

    initSlider();

});

function initSlider() {

    var documentWidth = $(document).width();
    $('#wrapper').css({width: documentWidth});

    window.navigate = function(command) {
        if (command == 'nextSlide') {
            $('#innerContainer').slick('slickNext');
        } else if (command == 'nextProject') {

        } else if (command == 'prevSlide') {
            $('#innerContainer').slick('slickPrev');
        } else if (command == 'prevProject') {

        }
    }

    $('#openApp').on('click', function (e) {
        e.preventDefault();
        window.open('http://www.bushidowallet.com', '_blank');
    });

    $('#openUtimaco').on('click', function (e) {
        e.preventDefault();
        window.open('https://hsm.utimaco.com/cryptoserver/', '_blank');
    });

    $('#innerContainer').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    var ch = $(window).height();
    console.log('ch: ' + ch);
    var tx = (ch - 500 - 103 ) / 2;
    $('#innerContainer').css({'top': tx});
}


