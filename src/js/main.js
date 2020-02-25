$(function () {
  $('.js-arrow').each(function () {
    var arrow = $(this);
    var prev = arrow.prevAll('p:first');
    arrow.appendTo(prev).before('<span class="mr-2"></span> ');
  });
});
