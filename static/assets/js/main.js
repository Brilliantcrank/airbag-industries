/*! airbag-industries v1.0.0 | (c) 2021  | ISC License | git+https://stephencaver@github.com/Brilliantcrank/airbag-industries.git */
$((function () {
  $('.js-arrow').each((function () {
    var arrow = $(this);
    var prev = arrow.prevAll('p:first');
    arrow.appendTo(prev).before('<span class="mr-2"></span> ');
  }));
}));
