$(function () {
   $('.collapse').on('show.bs.collapse', function () {
         $(this).prev().find('a').text('-');})
    });
$(function () {
   $('.collapse').on('hide.bs.collapse', function () {
         $(this).prev().find('a').text('+');})
    });