
function inWindow(s){
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var currentEls = $(s);
  var result = [];
  currentEls.each(function(){
    var el = $(this);
    var offset = el.offset();
    if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
      result.push(this);
  });
  return $(result);
}


function onScroll(){
  var boxesInWindow = inWindow("header#home");

  if (boxesInWindow.length>0){
    $('.up').hide();
  } else {
    $('.up').show();
  }
    // var scroll_top = $(document).scrollTop();
    // $(".navbar a").each(function(){
    //     var hash = $(this).attr("href");
    //     var target = $(hash);
    //
    //     if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
    //         $(".navbar a.active").removeClass("active");
    //         $(this).addClass("active");
    //     } else {
    //         $(this).removeClass("active");
    //     }
    // });


};



$(document).ready(function(){

  

  $(document).on("scroll", onScroll);

  $('.up a[href^="#"], .navbar a[href^="#"]').click(function(){

      var el = $(this).attr('href');

      //fix for firefox scroll: need use $('body, html') for correct scroll!!!
      $('body, html').animate({
              scrollTop: $(el).offset().top}, 1000);
          return false;
  });

})
