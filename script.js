$(document).ready(function() {
    $('.scroll-btn').click(function() {
      var target = $(this).data('target');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800);
    });
  });