$(document).on('ready', function () {
    $(".right-slide").slick({
        dots: true,
        slidesToShow: 1,    
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:true,
        easing:'linear'

    });
});
        //슬라이드 같은데 모바일에 넣어봄
        // slidesToScroll:1,
        // slidesToShow:1