$(function () {
    var initial_state = {
        license: 3,
        cost: 5.99
    };
    var license_count;
    var sale = {
        1: 0,
        6: 10,
        9: 15,
        12: 25,
        24: 40
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


    // License's Counter
    $('.js-raising').click(function () {
        if (initial_state.license >= 3) {
            changeCount(1);
        }
    });
    $('.js-reduction').click(function () {
        if (initial_state.license > 3) {
            changeCount(-1);
        }
    });

    $('.js-license-count').text(initial_state.license);

    function changeCount(val) {
        initial_state.license += val;
        console.log(initial_state.license);
        $('.js-license-count').text(initial_state.license);
        calculate();
    }


    function calculate() {
        const time = $('.js-time-change:checked').attr('data-time');
        license_count = initial_state.license;
        var sale_cur;

        if (time != 1) {
            $('.js-period-in-day').text(time * 30);
        }
        else {
            $('.js-period-in-day').text(0);
        }

        if (time == 12) {
            $('.js-period-in-day').text(365);
        }

        if (time == 24) {
            $('.js-period-in-day').text(365 * 2);
        }

        $('.js-license-count-value').each(function (i, elem) {
            $(elem).text(license_count);
        });

        $('.js-time-price').each(function (i, elem) {
            var tariff = $(elem).attr('data-time');
            $(elem).text(('$' + (tariff * license_count * initial_state.cost).toFixed(2)).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        });

        $('.js-sale').each(function (i, elem) {
            var months = $(elem).attr('data-time');
            sale_cur = Math.ceil(license_count * sale[months]);
            $(elem).text('$' + sale_cur + ' off');
        });

        $('.js-total-sale').each(function (i, elem) {
            var result;

            if (license_count >= 3) {
                result = Math.ceil(license_count * sale[time]);
            } else {
                result = +'0';
            }
            $(elem).text('$' + result + ' off');
        });

        $('.js-total-price').each(function (i, elem) {
            if (time == 1) {
                $(elem).text('$' + '0');
            } else {
                $(elem).text('$' + ((time * license_count * initial_state.cost - sale[time] * license_count).toFixed(2)).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            }
        });
    }

    calculate();

    $('.js-time-change').each(function (i, elem) {
        $(elem).change(calculate);
    });

    //End License's Counter


    // Form Validation
    // Month
    var input_month = $('.js-input-month');
    var arr = [];
    input_month.change(function () {
        // var value = input_month.val();
        // var result = value.match(/\b([0-9]|1[0-2])\b/g);
        // console.log(result);
        if(input_month.val() > 12) {
            input_month.attr('disabled');
        }
    });

// Number credit-card
    var input_number_new_card = document.querySelector('.js-number-new-card');
    input_number_new_card.addEventListener('keypress', formatCardCode, false);

    function formatCardCode() {
        var cardCode = this.value.replace(/[^\d]/g, '').substring(0, 16);
        cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
        this.value = cardCode;
    }
});

