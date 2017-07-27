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
    6: 10,
    9: 15,
    12: 25,
    24: 40
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
var input_month = document.querySelector('.js-input-month');

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

background.addEventListener('click', function () {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
});


// License's Counter
license_reduction.addEventListener('click', function () {
    if (initial_state.license > 3) {
        changeCount(-1);
    }
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
    var sale_cur;
    var arr_sale = [];

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

    discount.forEach(function (el) {
        var months = el.dataset.time;
        sale_cur = Math.ceil(lisence_count * sale[months]);
        el.innerHTML = '$' + sale_cur + ' off';
    });

    discount_total.forEach(function (el) {
        var result;

        if (lisence_count >= 3) {
            result = Math.ceil(lisence_count * sale[time]);
        } else {
            result = +'0';
        }
        el.innerHTML = '$' + result + ' off';
    });

    total.forEach(function (element, i) {
        if (time == 1) {
            element.innerHTML = '$' + '0';
        } else {
            element.innerHTML = '$' + (time * lisence_count * initial_state.cost - sale[time] * lisence_count).toFixed(2);
        }
    });
}

calculate();
// End License's Counter


// Validation form
input_number.forEach(function (el) {
    el.onkeypress = function (e) {
        e = e || event;

        if (e.ctrlKey || e.altKey || e.metaKey) return;

        var chr = getChar(e);

        if (chr == null) return;

        if (chr < '0' || chr > '9') {
            return false;
        }
    };
});

input_month.onkeypress = function (e) {
    e = e || event;

    if (e.ctrlKey || e.altKey || e.metaKey) return;

    var chr = getCharBelow13(e);

    if (chr == null) return;

    var result = chr.match([1 - 9]);

    console.log(result);
    if (result) {
        addZero(chr, 2);
    }

    if (chr < '0' || chr > '9') {
        return false;
    }
};


// Number credit-card
input_number_new_card.addEventListener('keypress', formatCardCode, false);

function formatCardCode() {
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0, 16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}

function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode);
    }

    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which);
    }

    return null;
}

function addZero(n, needLength) {
    needLength = needLength || 2;
    n = String(n);
    while (n.length < needLength) {
        n = "0" + n;
    }
    return n
}