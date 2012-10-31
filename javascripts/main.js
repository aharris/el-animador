$(document).ready(function(){

  $("#scale").click(function(){
    $(".cube").addClass('scale transition');
  })

  $("#zoomOut").click(function(){
    $(".cube").addClass('zoom-out transition');
  })

});
