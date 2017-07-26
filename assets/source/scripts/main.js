var btn_open_modal = document.querySelectorAll('.js-modal-open');
var modal = document.querySelector('.js-modal');
var background = document.querySelector('.js-background');
var open_coupone_input = document.querySelector('.js-open-coupone-input');
var coupone_number = document.querySelector('.js-coupone-number');
var close_modal = document.querySelector('.js-close-modal');
var open_new_card = document.querySelector('.js-open-form');
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
    });
});

open_coupone_input.addEventListener('click', function (e) {
    e.preventDefault();
    coupone_number.classList.toggle('show');
});

close_modal.addEventListener('click', function () {
    modal.classList.remove('open');
});

open_new_card.addEventListener('click', function (e) {
    new_card.classList.add('show');
});


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
