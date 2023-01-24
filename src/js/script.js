import { generateCards } from './genCards';

// let cardSmall = document.querySelectorAll('.card_small');
// let cardMedium = document.querySelectorAll('.card_medium');
// let cardLarge = document.querySelectorAll('.card_large');
let imgNum = 0;
let InitImg = 0;
let jSmall = 0;
let jMedium = 0;
let jLarge = 0;

async function showPicture() {

    let cardSmall = document.querySelectorAll('.card_small');
    let cardMedium = document.querySelectorAll('.card_medium');
    let cardLarge = document.querySelectorAll('.card_large');

    let response = await fetch('https://63c6e145d307b7696743082f.mockapi.io/pic');

    let picture = await response.json();


    // отображаем фотографии
    for(let i = imgNum; i < imgNum + 5; i++){
        // ava.src = picture[i].avatar;
        cardSmall[jSmall].style.backgroundImage = `url('${picture[i].image} + ?random=${i}')`;

        InitImg = i;
        jSmall++;
    };

    imgNum = InitImg;
    
    for(let i = imgNum; i < imgNum + 7; i++){
        cardMedium[jMedium].style.backgroundImage = `url('${picture[i].image} + ?random=${i}')`;
        InitImg = i;
        jMedium++;
    };

    imgNum = InitImg;

    for(let i = imgNum; i < imgNum + 4; i++){
        cardLarge[jLarge].style.backgroundImage = `url('${picture[i].image} + ?random=${i}')`;
        InitImg = i;
        jLarge++;
    };
};
showPicture();
let wasUsedScroll = true;
let wasUsedScrollNumber = 1;
async function scrollWindow() {
    if (wasUsedScroll){
        wasUsedScroll = false;
        wasUsedScrollNumber++;
        if(wasUsedScrollNumber > 6) {
            return
        }
        setTimeout(() => {wasUsedScroll = true}, 2000);
        generateCards();
        showPicture()
    };
}
document.addEventListener('scroll', scrollWindow);