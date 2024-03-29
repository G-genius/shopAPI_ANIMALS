"use strict";

$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    //adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/slaider/arrows/left-solid.jpg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/slaider/arrows/right-solid.jpg"></button>',

    /*fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,*/
    responsive: [{
      breakpoint: 992,
      settings: {
        dots: true,
        arrows: false
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  }); //Скрипт для табов

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this).addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active').closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  /*$('.catalog-item__link').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })    
  });*/

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  ;
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back'); //Модальные окна

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });
  /*$('.button_mini').on('click', function() {
    $('.overlay, #order').fadeIn('slow');
  });*/

  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });
  $('#consultation-form').validate();
  $('#consultation form').validate({
    rules: {
      // simple rule, converted to {required:true}
      name: {
        required: true,
        minlength: 2
      },
      // compound rule
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Введите ваше имя",
        minlength: jQuery.validator.format("Минимальное имя {0} символа!")
      },
      phone: "Введите свой номер телефона",
      email: {
        required: "Введите свой email",
        email: "Your email address must be in the format of name@domain.com"
      }
    }
  });
  $('#order form').validate();
});