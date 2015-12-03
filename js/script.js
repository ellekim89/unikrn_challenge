$(function(){
  var scroll = function(where){
    $('html, body').animate({
      scrollTop: where.offset().top
    }, 500);
  };

   $('.homelink').on('click', function(){
        scroll($("#main"));
    });

   $('.reasonlink').on('click', function(){
        scroll($("#reasonDiv"));
    });

    $('.skillsetlink').on('click', function(){
        scroll($("#skillDiv"));
    });

  });

