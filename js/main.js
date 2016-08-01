$(document).ready(function(){
  console.log('ready');

  //respnsive menu
  $('#pull').click(function(e){
     e.preventDefault();
     $('.navbar-right').slideToggle();
  })

})
