$(document).on('ready', function () {
    $(".slide").slick({
        dots: true,
        // vertical: true,
        // centerMode: true,
        slidesToShow: 1,    
        //몇장씩 보여줄껀지
        slidesToScroll: 1,
        //몇개의 배너를 이동할껀지
        autoplay: true,
        //자동으로 움직일껀지
        autoplaySpeed: 3000,
        //얼마나 빠르게 움직일껀지
        pauseOnHover:true,
        //마우스 올리면 멈출껀지
        easing:'linear',
        //움직임    
        
    });
});
