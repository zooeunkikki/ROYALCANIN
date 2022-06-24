//scroll
const btnA = document.querySelectorAll('.brand-btn a');
const asideBtn = document.querySelectorAll('.aside-btn a');
let brandBox = document.querySelectorAll('.brand-history');

function pageFun(){
let i = 0;
let oxo = 0;
btnA.forEach(function(btn,v){
    btnA[v].addEventListener('click',function(){
            event.preventDefault();
            btnA[i].classList.remove('active');
            btnA[v].classList.add('active');
            i=v;
            brandBox[v].scrollIntoView({behavior:'smooth'})
        });
        
    asideBtn[v].addEventListener('click',function(){
        event.preventDefault();
        asideBtn[oxo].classList.remove('active');
        asideBtn[v].classList.add('active');
        oxo=v;
        brandBox[v].scrollIntoView({behavior:'smooth'})
    });
    });
};

pageFun();

//asidebtn ++




    //Jquery
    // $('.brand-btn a').on('click',pageFun);
    
    // let i=0;
    // function pageFun(){
    //     let idx = $(this).index();
    //     event.preventDefault();
    //     $('.brand-btn a').eq(i).removeClass('active');
    //     $('.brand-btn a').eq(idx).addClass('active');
    //     let brandBox = $('.brand-history').eq(idx).offset().top;
    //     $('html').animate({   scrollTop:brandBox },700);
    
    //     i=idx;
    // };


