var btn_open_modal = document.querySelectorAll('.js-modal-open');
var modal = document.querySelector('.js-modal');
var modal_wrap = document.querySelector('.js-modal-wrap');
var background = document.querySelector('.js-background');
var open_coupone_input = document.querySelector('.js-open-coupone-input');
var open_coupone_btn = document.querySelector('.js-open-coupone-btn');
var coupone_number = document.querySelector('.js-coupone-number');
var close_modal = document.querySelector('.js-close-modal');
var open_new_card = document.querySelector('.js-open-form');
var close_new_card = document.querySelector('.js-close-form');
var new_card = document.querySelector('.js-form');
var payment = document.querySelector('#payment');
var initial_state = {
    license: 3,
    cost: 5.99
};
var time = document.querySelectorAll('.js-time');
var discount = document.querySelectorAll('.js-sale');
var total = document.querySelectorAll('.js-total-price');
var license = document.querySelector('.js-license-count');
var lisence_count;
var license_reduction = document.querySelector('.js-reduction');
var license_raising = document.querySelector('.js-raising');
var time_price = document.querySelectorAll('.js-time-price');
var radio = document.querySelectorAll('.js-time-change');

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

console.log(modal.classList.contains('open'));





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

    time_price.forEach(function (el, i) {
        el.innerHTML = '$' + (el.dataset.time * lisence_count * initial_state.cost).toFixed(2);
    });

    total.forEach(function (element, i) {
        var result = (time * lisence_count * initial_state.cost).toFixed(2);
        element.innerHTML = '$' + result;
    });
}

calculate();
