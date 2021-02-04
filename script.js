'use strict';
        /*jshint esversion:6,node:true*/
        /*'globals','window','console','document'*/

const images = ["images/home-bg.jpg", "images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg", "images/slide4.jpg", "images/slide5.jpg"];

let count = 0;/* countを0とする */
const slideimage = ()=>{
    if(count >= images.length){/* slideimageを定数として、countが画像の枚数よりも多ければ */
        count = 0;/* countを0に戻す */
    }else {/* そうでなければ */
        document.getElementById('slideshow').src = images[count];/* 定数imagesのcount番目の画像を表示させる */
        count++;/* countに+1していく */
    }
}

//背景画像をスライド
let slideid = 0;
const startstop = () => {
    if(slideid === 0){
        slideid = setInterval(slideimage, 1200);
    }else{
        clearInterval(slideid);
        slideid = 0;
    }
}
document.getElementById('start-stop-btn').onclick = startstop;