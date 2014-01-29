/**
 * Created by Stoil on 1/28/14.
 */
$(function(){
    var offsetTop = $('#main-navigation').offset().top;
    console.log(offsetTop);
    $(window).on('scroll', function(e){
        var scrollOffset = $(this).scrollTop();
        console.log(scrollOffset);
        if(scrollOffset > offsetTop){
            $('#main-header').addClass('fixed');
        }else{
            $('#main-header').removeClass('fixed');
        }

    });

});