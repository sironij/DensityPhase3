$(document).ready(function() {




  /*change stack img hover*/

  var i = 0;


  $(".rect").mouseenter(function() {
    i = i + 1;
    $(".rect").css({
      "z-index": i
    });
  });

});
