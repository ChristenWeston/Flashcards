$(document).ready(function() {
  $(".clickable").click(function(){
    $("#functions-hidden").slideToggle();
    $("#functions-showing").slideToggle();
  });

  $(".clickable2").click(function(){
    $("#methods-hidden").slideToggle();
    $("#methods-showing").slideToggle();
  });

  $(".clickable3").click(function(){
    $("#arguments-hidden").slideToggle();
    $("#arguments-showing").slideToggle();
  });
});

/*Functions
Methods
Arguments
Parameters
Return
Chaining methods */