var one = $("#about").offset();
var two = $("#portfolio").offset();
var three = $("#contact").offset();

$(document).ready(function() {
    $(window).scroll(function(){
      
        var screenPosition = $(document).scrollTop();
        if (screenPosition < two.top) {
            $( ".one" ).addClass( "active" );
            $(".two").removeClass("active");
            $(".three").removeClass("active");
        }
        if (screenPosition >= two.top) {
            $( ".two" ).addClass( "active" );
            $(".one").removeClass("active");
            $(".three").removeClass("active");
        }
       if (screenPosition >= three.top) {
            $( ".three" ).addClass( "active" );
            $(".one").removeClass("active");
            $(".two").removeClass("active");
        }
    }); 
  
    $(window).scroll();
});