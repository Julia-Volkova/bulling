var btn_open_modal = document.querySelectorAll('.js-modal-open');
var modal = document.querySelector('.js-modal');
var modal_wrap = document.querySelector('.js-modal-wrap');
var background = document.querySelector('.js-background');
var open_coupone_input = document.querySelector('.js-open-coupone-input');
var open_coupone_btn = document.querySelector('.js-open-coupone-btn');
var close_modal = document.querySelector('.js-close-modal');
var open_new_card = document.querySelector('.js-open-form');
var close_new_card = document.querySelector('.js-close-form');
var new_card = document.querySelector('.js-form');
var initial_state = {
    license: 3,
    cost: 5.99
};
var sale = {
    1: 0,
    6: 3.33,
    9: 5,
    12: 8.33,
    24: 13.33
};
var discount = document.querySelectorAll('.js-sale');
var discount_total = document.querySelectorAll('.js-total-sale');
var total = document.querySelectorAll('.js-total-price');
var license = document.querySelector('.js-license-count');
var lisence_count;
var license_reduction = document.querySelector('.js-reduction');
var license_raising = document.querySelector('.js-raising');
var time_price = document.querySelectorAll('.js-time-price');
var radio = document.querySelectorAll('.js-time-change');

var input_number = document.querySelectorAll('.js-number');
var input_number_new_card = document.querySelector('.js-number-new-card');
var license_count_value = document.querySelectorAll('.js-license-count-value');

license.innerHTML = initial_state.license;

btn_open_modal.forEach(function (element) {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

open_coupone_input.addEventListener('click', function (e) {
    e.preventDefault();
    open_coupone_btn.classList.toggle('btn-open');
});

close_modal.addEventListener('click', function () {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
});

open_new_card.addEventListener('click', function () {
    new_card.classList.add('show');
    modal_wrap.style.marginTop = '-295px';
});

close_new_card.addEventListener('click', function () {
    new_card.classList.remove('show');
    modal_wrap.style.marginTop = '-172px';
});

background.addEventListener('click', function () {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
});


// License's Counter
license_reduction.addEventListener('click', function () {
    changeCount(-1);
});

license_raising.addEventListener('click', function () {
    changeCount(1);
});

radio.forEach(function (el) {
    el.addEventListener('change', calculate);
});

function changeCount(val) {
    initial_state.license += val;
    if (initial_state.license < 0) initial_state.license = 0;
    license.innerHTML = initial_state.license;
    calculate();
}

function calculate() {
    const time = document.querySelector('.js-time-change:checked').dataset.time;
    lisence_count = initial_state.license;

    license_count_value.forEach(function (el) {
        el.innerHTML = lisence_count;
    });

    time_price.forEach(function (el, i) {
        if (el.dataset.time == 1) {
            el.innerHTML = '$' + '0';
        } else {
            el.innerHTML = '$' + (el.dataset.time * lisence_count * initial_state.cost).toFixed(2);
        }
    });

    total.forEach(function (element, i) {
        var result;
        if (time == 1) {
            result = +'0';
        }
        else {
            result = (time * lisence_count * initial_state.cost).toFixed(2);
            result = result;
        }

        discount.forEach(function (el) {
            var current_sale;
            var months = el.dataset.time;
            if(lisence_count >= 3) {
                current_sale = Math.ceil(lisence_count * sale[months]);
            } else {
                // current_sale = +'0';
            }
            el.innerHTML = '$' + current_sale + ' off';
            result = (result - current_sale).toFixed(2);
            element.innerHTML = '$' + result;
        });
    });

    discount_total.forEach(function (el) {
        var result;
        var months =  document.querySelector('.js-time-change:checked').dataset.time;
        if(lisence_count >= 3) {
            result = Math.ceil(lisence_count * sale[months]);
        } else {
            result = +'0';
        }
        el.innerHTML = '$' + result + ' off';
    });
}

calculate();


// Validation form
input_number.forEach(function (el) {
    el.onkeypress = function(e) {
        e = e || event;

        if (e.ctrlKey || e.altKey || e.metaKey) return;

        var chr = getChar(e);

        if (chr == null) return;

        if (chr < '0' || chr > '9') {
            return false;
        }
    };

    function getChar(event) {
        if (event.which == null) {
            if (event.keyCode < 32) return null;
            return String.fromCharCode(event.keyCode)
        }

        if (event.which != 0 && event.charCode != 0) {
            if (event.which < 32) return null;
            return String.fromCharCode(event.which)
        }

        return null;
    }
});

// Number credit-card
input_number_new_card.addEventListener('keypress', formatCardCode, false);

function formatCardCode() {
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}
