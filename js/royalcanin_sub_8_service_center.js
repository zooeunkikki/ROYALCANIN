//팝업기능
const Pop_up = document.querySelectorAll('.rank-10');
let pop_box = document.querySelectorAll('.rank-pop');

Pop_up.forEach(function(p,k){
    Pop_up[k].addEventListener('click',function(){
        event.preventDefault();
        let pop = document.querySelector('.pop');
        pop.classList.add('active');
        let x_box = document.querySelector('.rank-pop li div a');
        x_box.addEventListener('click',function(){
            pop.classList.remove('active');
        });
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
