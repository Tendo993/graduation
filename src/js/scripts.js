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
    variableWidth: true,
    arrows: false,
    dots: true,
    autoplay: true,
    // slide: 4,
    speed: 2000
    // centerMode: true,
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
  // Инициализация WOW.js
  new WOW().init();
});