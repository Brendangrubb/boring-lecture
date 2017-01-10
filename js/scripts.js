$(function(){

  $("#introp").click(function(){
    $("p").removeClass();
    $("#introp").addClass("highlight");
  });

  $("#body").click(function(){
    $("p").removeClass();
    $("#body").addClass("highlight");
  });

  $("#conclusion").click(function(){
    $("p").removeClass();
    $("#conclusion").addClass("highlight");
  });

});
