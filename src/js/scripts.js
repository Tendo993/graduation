$(document).ready(function(e) {
  $('#burger-menu').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('burger-menu_active');
    $('#header-navbar').toggleClass('navbar_active')
  });
});