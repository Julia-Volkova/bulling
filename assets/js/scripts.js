"use strict";$(function(){function o(){}$(".js-modal-open").click(function(){$(".js-modal").show(),$("body").addClass("overflow"),$(document).height()>$(window).height()&&$(".js-billing").addClass("scroll")}),$(".js-close-modal").click(function(){$(".js-modal").hide(),$("body").removeClass("overflow"),$(document).height()>$(window).height()&&$(".js-billing").removeClass("scroll")}),$(".js-background").click(function(){$(".js-modal").hide(),$("body").removeClass("overflow"),$(document).height()>$(window).height()&&$(".js-billing").removeClass("scroll")}),$(".js-open-coupone-input").click(function(o){o.preventDefault(),$(".js-open-coupone-btn").toggleClass("btn-open")}),$(".js-raising").click(function(){o(1)}),$(".js-reduction").click(function(){o(-1)})});