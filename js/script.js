$(function(){
  var scroll = function(where){
    $('html, body').animate({
      scrollTop: where.offset().top
    }, 500);
  };

   $('#Zero').on('click', function(){
        scroll($("#main"));
    });

   $('.reason').on('click', function(){
        scroll($("#reason" + this.id));
    });
  });

