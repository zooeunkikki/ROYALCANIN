//scroll
const btnA = document.querySelectorAll('.brand-btn a');
let asideMotion = document.querySelector('.aside-btn');
const asideBtn = document.querySelectorAll('.aside-btn a');
let brandBox = document.querySelectorAll('.brand-history');

// console.log(brandBox[2].offsetTop)
// console.log(window.scrollY)
// console.log(window.innerHeight)
//현재 보여지는 뷰 포인트 높이
//console.log(window.innerHeight)

function scrollFun(){
    window.addEventListener('scroll',function(){
        let maxScrollValue = document.body.offsetHeight - window.innerHeight;
        const scrollPer = (pageYOffset / maxScrollValue)* 100;
        // console.log(maxScrollValue)
        // console.log(scrollPer)
    
        if(scrollPer>=35.2){
            asideMotion.classList.add('active');
        }
        else{ asideMotion.classList.remove('active');}
        //console.log(scrollPer>=35.2)
    });


};

scrollFun();

function pageFun(){
let i = 0;
let oxo = 0;
btnA.forEach(function(btn,v){
    btnA[v].addEventListener('click',function(){
            event.preventDefault();
            btnA[i].classList.remove('active');
            btnA[v].classList.add('active');
            asideBtn[i].classList.remove('active');
            asideBtn[v].classList.add('active');
            brandBox[v].scrollIntoView({behavior:'smooth'})
            i=v;
            console.log(i==v)
        });
    
    asideBtn[v].addEventListener('click',function(){
        oxo = i;
        event.preventDefault();
        asideBtn[i].classList.remove('active');
        asideBtn[v].classList.add('active');
        btnA[i].classList.remove('active');
        btnA[v].classList.add('active');
        
        brandBox[v].scrollIntoView({behavior:'smooth'})
        i=v;
        console.log(i==v)
    });
    });
};

pageFun();






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


