$(function () {
    var initial_state = {
        license: 3,
        cost: 5.99
    };


    $('.js-modal-open').click(function () {
        $('.js-modal').show();
        $('body').addClass('overflow');
        if ($(document).height() > $(window).height()) {
            $('.js-billing').addClass('scroll');
        }
    });

    $('.js-close-modal').click(function () {
        $('.js-modal').hide();
        $('body').removeClass('overflow');
        if ($(document).height() > $(window).height()) {
            $('.js-billing').removeClass('scroll');
        }
    });

    $('.js-background').click(function () {
        $('.js-modal').hide();
        $('body').removeClass('overflow');
        if ($(document).height() > $(window).height()) {
            $('.js-billing').removeClass('scroll');
        }
    });

    $('.js-open-coupone-input').click(function (event) {
        event.preventDefault();
        $('.js-open-coupone-btn').toggleClass('btn-open');
    });


    //License's Counter
    $('.js-raising').click(function () {
        calculate(1);
    });
    $('.js-reduction').click(function () {
        calculate(-1);
    });
    
    function calculate() {

    }
});

