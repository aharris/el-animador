$("#three-d").click(function(){
  event.preventDefault();
  var animationID = $(this).attr('id');
  $(".cube").toggleClass(animationID);
})

$(".button").click(function(){
  event.preventDefault();
  var animationID = $(this).attr('id');
  $(".cube").addClass(animationID);
  var removeClass = window.setTimeout( function(){
    $('.cube').removeClass(animationID)},
    3300
  );
})
