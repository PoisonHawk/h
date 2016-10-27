
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

  $('.up a[href^="#"], .nav-menu a[href^="#"]').click(function(){

      var el = $(this).attr('href');

      //fix for firefox scroll: need use $('body, html') for correct scroll!!!
      $('body, html').animate({
              scrollTop: $(el).offset().top}, 1000);
          return false;
  });


   $("#form").submit(function() {
    //устанавливаем событие отправки для формы с id=form
            var form_data = $(this).serialize(); //собераем все данные из формы

            $.ajax({
              type: "POST",
              url: "process.php", 
              data: form_data,
              dataType: 'json',
              error: function(){
                  alert('Невозможно отправить сообщение');
              },
              success: function(data) {

                  if (data.status === 'success') {

                    alert(data.text);
                    $('#email').val('');
                    $('#textarea').val('');

                  } else {
                    alert(data.text);
                  }
              },
            });
    });


})
