//event pada saat link di klik

$('.page-scroll').on('click', function(e){
    
    var tujuan = $(this).attr('href');
    
    var elemenTujuan = $(tujuan);
    
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
        
    }, 1000, 'swing');
    
    e.preventDefault();
});



//parallax 

    //abaout

    $(window).on('load', function(){
        $('.pKiri').addClass('pMuncul');
        $('.pKanan').addClass('pMuncul');
    });



$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    
    //jumbotron
    
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+wScroll/4 +'%)'
    });

        $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+wScroll/2 +'%)'
    });
    
        $('.jumbotron p').css({
        'transform' : 'translate(0px, '+wScroll +'%)'
    });
    
    
    //portfolio
    if( wScroll > $('.portfolio').offset().top -450 ){
        $('.portfolio .thumbnail').addClass('muncul');
    }
});