$(document).ready(function(){

  $('.navbar a[href^="#"]').click(function(){

      var el = $(this).attr('href');

      //fix for firefox scroll: need use $('body, html') for correct scroll!!!
      $('body, html').animate({
              scrollTop: $(el).offset().top}, 1000);
          return false;
  });

})
