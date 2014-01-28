/**
 * Created by Stoil on 1/28/14.
 */
$(function(){
    var navbarHeight = $('#main-header').outerHeight(true);
    $(window).on('scroll', function(e){
        var offset = $(this).scrollTop();
        if(offset > navbarHeight){
            $('#main-header').addClass('fixed');
        }else{
            $('#main-header').removeClass('fixed');
        }

    });

});