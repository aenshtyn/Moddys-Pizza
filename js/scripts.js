$(document).ready(function() {
  $(".workdone").hover(function() {
    $(".workdone").css('opacity', '0.2');
    $("#work1").toggle();
    $("#workn").toggle();
    $(".workdone").css('opacity', '1')

  });
});
