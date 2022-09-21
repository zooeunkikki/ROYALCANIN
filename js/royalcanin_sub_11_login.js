
const images = [
    "./image/vanner/login_vanner.jpg",
    "./image/vanner/login_vanner_02.png",
    "./image/vanner/login_vanner_03.png",
];

    let IMG =  images[Math.floor(Math.random() * images.length )];
    let bgIMG = document.querySelector('.vanner a img');
    bgIMG.src = IMG;