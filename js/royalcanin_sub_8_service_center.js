//팝업기능
const Pop_up = document.querySelectorAll('.rank-box');
const Pop_box = document.querySelectorAll('.rank-pop li'); 

Pop_up.forEach(function(p,k){
    Pop_up[k].addEventListener('click',function(){
        event.preventDefault();

            let pop = document.querySelector('.pop');
            pop.classList.add('active')
            Pop_box[k].classList.add('active');



        const x_box = document.querySelectorAll('.rank-pop li div a');
        x_box.forEach(function(xb,key){
            x_box[key].addEventListener('click',function(){
                pop.classList.remove('active');
                Pop_box[k].classList.remove('active');
            });
        });
        

    });
});


//Fna-btn
const  fna_btn = document.querySelectorAll('.fna-select-box ul li');
const suject =document.querySelectorAll('.fna-subject');
let oxo =0;
fna_btn.forEach(function(btn,b){
    console.log(fna_btn[b])
    fna_btn[b].addEventListener('click',function(){
        event.preventDefault();
        suject[oxo].classList.remove('active');
        suject[b].classList.add('active');
        oxo=b;
    });
});







//FAQ
const Qna_box = document.querySelectorAll('.qna .qna-box li');
let idx = 0;

Qna_box.forEach(function(el,i){
    Qna_box[i].addEventListener('click',function(){
        Qna_box[idx].classList.remove('active');
        Qna_box[i].classList.add('active');
        idx=i;
    });
});
