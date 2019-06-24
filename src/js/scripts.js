$(document).ready(function(e) {
  // Бургер-меню
  $('#burger-menu').on('click', function(e){
    event.preventDefault();
    $(this).toggleClass('burger-menu_active');
    $('#header-navbar').toggleClass('navbar_active')
  });
  // Слайдер
  $('#hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true,
    arrows: false,
    dots: true,
    dotsClass: "hero-dots",
    autoplay: true,
    speed: 2000
  });
  // Карточки услуг
  // Первая карточка
  $('#service-btn_1').on('click', function(e){
    event.preventDefault();
    $('#service-btn_1').css("display", "none"),
    $('#service-title_1').css("display", "none"),
    $('#service-description_1').css("display", "inline-block"),
    $('#service-price-btn_1').css("display", "inline-block");
  });
  $('#service-price-btn_1').on('click', function(e){
    event.preventDefault();
    $('#service-btn_1').css("display", "inline-block"),
    $('#service-title_1').css("display", "block"),
    $('#service-description_1').css("display", "none"),
    $('#service-price-btn_1').css("display", "none");
  });
  // Вторая карточка
  $('#service-btn_2').on('click', function(e){
    event.preventDefault();
    $('#service-btn_2').css("display", "none"),
    $('#service-title_2').css("display", "none"),
    $('#service-description_2').css("display", "inline-block"),
    $('#service-price-btn_2').css("display", "inline-block");
  });
  $('#service-price-btn_2').on('click', function(e){
    event.preventDefault();
    $('#service-btn_2').css("display", "inline-block"),
    $('#service-title_2').css("display", "block"),
    $('#service-description_2').css("display", "none"),
    $('#service-price-btn_2').css("display", "none");
  });
  // Третья карточка
  $('#service-btn_3').on('click', function(e){
    event.preventDefault();
    $('#service-btn_3').css("display", "none"),
    $('#service-title_3').css("display", "none"),
    $('#service-description_3').css("display", "inline-block"),
    $('#service-price-btn_3').css("display", "inline-block");
  });
  $('#service-price-btn_3').on('click', function(e){
    event.preventDefault();
    $('#service-btn_3').css("display", "inline-block"),
    $('#service-title_3').css("display", "block"),
    $('#service-description_3').css("display", "none"),
    $('#service-price-btn_3').css("display", "none");
  });
  // Четвертая карточка
  $('#service-btn_4').on('click', function(e){
    event.preventDefault();
    $('#service-btn_4').css("display", "none"),
    $('#service-title_4').css("display", "none"),
    $('#service-description_4').css("display", "inline-block"),
    $('#service-price-btn_4').css("display", "inline-block");
  });
  $('#service-price-btn_4').on('click', function(e){
    event.preventDefault();
    $('#service-btn_4').css("display", "inline-block"),
    $('#service-title_4').css("display", "block"),
    $('#service-description_4').css("display", "none"),
    $('#service-price-btn_4').css("display", "none");
  });
  // Пятая карточка
  $('#service-btn_5').on('click', function(e){
    event.preventDefault();
    $('#service-btn_5').css("display", "none"),
    $('#service-title_5').css("display", "none"),
    $('#service-description_5').css("display", "inline-block"),
    $('#service-price-btn_5').css("display", "inline-block");
  });
  $('#service-price-btn_5').on('click', function(e){
    event.preventDefault();
    $('#service-btn_5').css("display", "inline-block"),
    $('#service-title_5').css("display", "block"),
    $('#service-description_5').css("display", "none"),
    $('#service-price-btn_5').css("display", "none");
  });
  // Шестая карточка
  $('#service-btn_6').on('click', function(e){
    event.preventDefault();
    $('#service-btn_6').css("display", "none"),
    $('#service-title_6').css("display", "none"),
    $('#service-description_6').css("display", "inline-block"),
    $('#service-price-btn_6').css("display", "inline-block");
  });
  $('#service-price-btn_6').on('click', function(e){
    event.preventDefault();
    $('#service-btn_6').css("display", "inline-block"),
    $('#service-title_6').css("display", "block"),
    $('#service-description_6').css("display", "none"),
    $('#service-price-btn_6').css("display", "none");
  });
  // reviews-slider
  $('#reviews-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    dots: true,
    dotsClass: "reviews-slider-dots",
    responsive: [
      {
        breakpoint: 1200,
        // variableWidth: false,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
        }
      }],
  });
  // Инициализация WOW.js
  new WOW().init();
  // Карта
  var client = $('.map');
  var clientTop = client.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop > clientTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad898f036de8b914820a38c6f07359468827d5cff95ba1fbe277a74f332623d4e&amp;width=100%25&amp;height=666&amp;lang=ru_UA&amp;scroll=false"></script>');
      console.log('докрутили');
      $(window).unbind('scroll');
    }
  });
  // Валидация формы
  $('.phone').mask('+7 (999) 999-99-99');
  $('#map-form').validate({
    rules: {
      user_name: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      user_phone: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      user_name: {
        required: "Введите Ваше имя",
        minlength: jQuery.validator.format("Минимум 2 символа"),
        maxlength: jQuery.validator.format("Максимум 15 символов")
      },
      user_phone:{
        required: "Введите Ваш телефон",
        minlength: jQuery.validator.format("Минимум 10 символов")
      }
    },
  });
});