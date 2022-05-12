import $ from "jquery"
import 'react-maskedinput'
import 'react-slick'

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
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
      //Скрипт для табов
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      /*$('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })    
      });*/
      function toggleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })    
        });
      };
      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');

      //Модальные окна

      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
      });
      $('[data-modal=log]').on('click', function() {
        $('.overlay, #log').fadeIn('slow');
      });
      $('[data-modal=reg]').on('click', function() {
        $('.overlay, #reg').fadeIn('slow');
      });
      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks, #log, #reg').fadeOut('slow');
      });
      /*$('.button_mini').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
      });*/
      $('.button_mini').each(function(i) {
        $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        });
      });
     /* function changeMenu() {
        let first = document.getElementsByClassName('modal');
        first.style.display = "none"
      }*/
      /*$('#reg').on('click', function() {
        $('.overlay, #log').fadeOut('slow');
      });*/


      function validateForms(form) {
        $(form).validate({
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
              },
            login: {
              required: true,
              minlength: 5
            },   
            },
          messages: {
            name: {
                  required: false,
                  /*minlength: jQuery.validator.format("Минимальное имя {0} символа!")*/
            },
            phone: "Введите свой номер телефона",
            email: {
              required: false,
              email: "Your email address must be in the format of name@domain.com"
            },
            login: {
              required: false,
              /*inlength: jQuery.validator.format("Минимальный логин {0} символов!")*/
            }
          }
        });
      };
      validateForms('#consultation-form');
      validateForms('#consultation form');
      validateForms('#order form');
      validateForms('#log form');
      validateForms('#reg form');

      $('input[name=phone]').mask('7 (999) 999-99-99');

      $(window).scroll(function() {
        if($(this).scrollTop() > 1200) {
          $('.pageup').fadeIn();
        }
        else {
          $('.pageup').fadeOut();
        }
      });
      $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });
  });