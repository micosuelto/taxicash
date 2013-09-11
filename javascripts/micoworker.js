$(document).ready(function(){

  $('#close-tutorial, #close-ok').click(function() {
    $('#tutorial').fadeOut('slow');
  });

  $(".inner-icon").click(function () {
    $(this).toggleClass("on");
  });

});
