//Variables
// var btn_open_modal = qsAll('.js-modal-open');
// var modal = document.querySelector('.js-modal');
// var modal_wrap = document.querySelector('.js-modal-wrap');
// var background = document.querySelector('.js-background');
// var open_coupone_input = document.querySelector('.js-open-coupone-input');
// var open_coupone_btn = document.querySelector('.js-open-coupone-btn');
// var close_modal = document.querySelector('.js-close-modal');
// var open_new_card = document.querySelector('.js-open-form');
// var close_new_card = document.querySelector('.js-close-form');
// var new_card = document.querySelector('.js-form');
// var initial_state = {
//     license: 3,
//     cost: 5.99
// };
// var sale = {
//     1: 0,
//     6: 10,
//     9: 15,
//     12: 25,
//     24: 40
// };
// var discount = qsAll('.js-sale');
// var discount_total = qsAll('.js-total-sale');
// var total = qsAll('.js-total-price');
// var license = document.querySelector('.js-license-count');
// var license_count;
// var license_reduction = document.querySelector('.js-reduction');
// var license_raising = document.querySelector('.js-raising');
// var time_price = qsAll('.js-time-price');
// var radio = qsAll('.js-time-change');
//
// var input_number = qsAll('.js-number');
// var input_number_new_card = document.querySelector('.js-number-new-card');
// var license_count_value = qsAll('.js-license-count-value');
// var input_month = document.querySelector('.js-input-month');
// var billing = document.querySelector('.js-billing');
//
//
// //Functions
// function formatCardCode() {
//     var cardCode = this.value.replace(/[^\d]/g, '').substring(0, 16);
//     cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
//     this.value = cardCode;
// }
//
// function getChar(event) {
//     if (event.which == null) {
//         if (event.keyCode < 32) return null;
//         return String.fromCharCode(event.keyCode);
//     }
//
//     if (event.which != 0 && event.charCode != 0) {
//         if (event.which < 32) return null;
//         return String.fromCharCode(event.which);
//     }
//
//     return null;
// }
//
// function qsAll(query) {
//     return [].slice.call(document.querySelectorAll(query));
// }
//
// function changeCount(val) {
//     initial_state.license += val;
//     // if (initial_state.license < 0) initial_state.license = 0;
//     license.innerHTML = initial_state.license;
//     calculate();
// }
//
// function calculate() {
//     const time = document.querySelector('.js-time-change:checked').dataset.time;
//     license_count = initial_state.license;
//     var sale_cur;
//     var arr_sale = [];
//
//     license_count_value.forEach(function (el) {
//         el.innerHTML = license_count;
//     });
//
//     time_price.forEach(function (el, i) {
//         if (el.dataset.time == 1) {
//             el.innerHTML = '$' + '0';
//         } else {
//             el.innerHTML = '$' + (el.dataset.time * license_count * initial_state.cost).toFixed(2);
//         }
//     });
//
//     discount.forEach(function (el) {
//         var months = el.dataset.time;
//         sale_cur = Math.ceil(license-count * sale[months]);
//         el.innerHTML = '$' + sale_cur + ' off';
//     });
//
//     discount_total.forEach(function (el) {
//         var result;
//
//         if (license_count >= 3) {
//             result = Math.ceil(license_count * sale[time]);
//         } else {
//             result = +'0';
//         }
//         el.innerHTML = '$' + result + ' off';
//     });
//
//     total.forEach(function (element, i) {
//         if (time == 1) {
//             element.innerHTML = '$' + '0';
//         } else {
//             element.innerHTML = '$' + (time * license_count * initial_state.cost - sale[time] * license_count).toFixed(2);
//         }
//     });
// }
//
//
// license.innerHTML = initial_state.license;
//
// btn_open_modal.forEach(function (element) {
//     element.addEventListener('click', function (e) {
//         e.preventDefault();
//         modal.classList.add('open');
//         document.body.style.overflow = 'hidden';
//         console.log(document.body.height);
//         billing.classList.add('scroll');
//     });
// });
//
// open_coupone_input.addEventListener('click', function (e) {
//     e.preventDefault();
//     open_coupone_btn.classList.toggle('btn-open');
// });
//
// close_modal.addEventListener('click', function () {
//     modal.classList.remove('open');
//     document.body.style.overflow = 'auto';
//     billing.classList.remove('scroll');
// });
//
// background.addEventListener('click', function () {
//     modal.classList.remove('open');
//     document.body.style.overflow = 'auto';
//     billing.classList.remove('scroll');
// });
//
//
// // License's Counter
// license_reduction.addEventListener('click', function () {
//     if (initial_state.license > 3) {
//         changeCount(-1);
//     }
// });
//
// license_raising.addEventListener('click', function () {
//     changeCount(1);
// });
//
// radio.forEach(function (el) {
//     el.addEventListener('change', calculate);
// });
//
//
// calculate();
// // End License's Counter
//
//
// // Validation form
// input_number.forEach(function (el) {
//     el.onkeypress = function (e) {
//         e = e || event;
//
//         if (e.ctrlKey || e.altKey || e.metaKey) return;
//
//         var chr = getChar(e);
//
//         if (chr == null) return;
//
//         if (chr < '0' || chr > '9') {
//             return false;
//         }
//     };
// });
//
// // Month on card
// input_month.onkeyup = function (e) {
//     var value = input_month.value;
//     var result = value.match(/\b([0-9]|1[0-2])\b/g);
//     if (result == null) {
//         input_month.value = '';
//     }
// };
//
// // Number credit-card
// input_number_new_card.addEventListener('keypress', formatCardCode, false);
//
// changeSizeWindow();
