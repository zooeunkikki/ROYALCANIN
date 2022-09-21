//pink-btn-slide

const PinkBox = document.querySelector('.right-review');
const RiviBox = document.querySelectorAll('.right-review .ri-vi-box li');
const pink_slide = document.querySelector('.silde-box label>span');
let CheckSlide2 = document.querySelector('.check-slide2');
CheckSlide2.classList.add('active');
let H4;
let H3;
let hLine;

function h4_change(){
    let H4 = document.querySelector('.slide-h4');
    let H3 = document.querySelectorAll('.silde-box>hgroup>h3');
    let hLine = document.querySelector('.right-review label');

    H4.innerHTML = `집사님과 댕냥이들의
    100% 리얼한 후기들을
    만나보세요!
    `;
    H4.style = "color:#06337C";
    PinkBox.classList.add('bgcolor');
    pink_slide.style  = "background-color:#699CFF;";
    hLine.style = "border:1px solid #699CFF; ";
    H3.forEach(function(aa,bb){
        H3[0].style = "color:#06337C";
        H3[1].style = "color:#FFF";
    });
};

function h4_before(){
    let H4 = document.querySelector('.slide-h4');
    let H3 = document.querySelectorAll('.silde-box>hgroup>h3');
    let hLine = document.querySelector('.silde-box label');
    H4.innerHTML = `집사님들의 많은 리뷰들과
                            구매하신 제품들부터
                            댕냥이님들이 만족한 최애템까지 보려면?`;
    H4.style = "color:#5F0D0D";
    PinkBox.classList.remove('bgcolor');
    pink_slide.style  = "background-color:#FF9290;";
    hLine.style = "border:1px solid #FF9290;";
    H3.forEach(function(aa,bb){
        H3[0].style = "color:#5F0D0D";
        H3[1].style = "color:#987272";
    });
}


let slideBtn;

//버튼이 먼저 움직이는거 방지 -> 클릭문 안에 넣기!!
pink_slide.addEventListener('click', function () {
        slideBtn = setTimeout(function () {
        clearTimeout(slideBtn);
        //slide-box txt change
        let RiSlide2 = document.querySelector('.ri-slide2');
        if (!RiSlide2.classList.contains('active')) {
            CheckSlide2.classList.remove('active');
            RiSlide2.classList.add('active');

            // bg & txt
            h4_change();

        } else {
            RiSlide2.classList.remove('active');
            CheckSlide2.classList.add('active');

            //bg & txt
            h4_before();   
        }
        //console.log(!RiSlide2.classList.contains('active'))
    },50)
    });















