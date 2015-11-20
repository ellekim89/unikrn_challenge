$(function(){
  var scroll = function(where){
    $('html, body').animate({
      scrollTop: where.offset().top
    }, 500);
  };

   $('.Zero').on('click', function(){
        scroll($("#main"));
    });

   $('.One').on('click', function(){
        scroll($("#reasonOne"));
    });

    $('.Two').on('click', function(){
        scroll($("#reasonTwo"));
    });

    $('.Three').on('click', function(){
      scroll($("#reasonThree"));
    });
  });

