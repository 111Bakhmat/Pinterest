import { generateCards } from './genCards';
import { searchPin } from './searchPinterest';
import { downloadOnScreen } from './download';
import { eventt } from './ut-modal';
import { reportshow } from './ut-modal';
import { dropshow } from './ut-modal';
import { addshow } from './ut-modal';


const searchForm = document.querySelector('.search-bar');


let imgNum = 0;
let InitImg = 0;
let jSmall = 0;
let jMedium = 0;
let jLarge = 0;
let cardSmall = document.querySelectorAll('.card_small');
let cardMedium = document.querySelectorAll('.card_medium');
let cardLarge = document.querySelectorAll('.card_large');
let download = document.querySelectorAll('.bottom-bar__link-download');
let AllCards = document.querySelectorAll('.card');


async function showPicture() {

    cardSmall = document.querySelectorAll('.card_small');
    cardMedium = document.querySelectorAll('.card_medium');
    cardLarge = document.querySelectorAll('.card_large');

    let response = await fetch('https://63c6e145d307b7696743082f.mockapi.io/pic');

    let picture = await response.json();


    // отображаем фотографии
    for(let i = imgNum; i < imgNum + 5; i++){
        cardSmall[jSmall].style.backgroundImage = `url('${picture[i].image} + ?random=${i}')`;
        cardSmall[jSmall].id = picture[i].id;
        cardSmall[jSmall].querySelector('.bottom-bar__link-download').id = picture[i].id;
        cardSmall[jSmall].querySelector('.bottom-bar__link-web').textContent = picture[i].hashTag;
        cardSmall[jSmall].querySelector('.bottom-bar__avatar').src = picture[i].avatar;
        InitImg = i;
        jSmall++;
    };

    imgNum = InitImg + 1;
    
    for(let i = imgNum; i < imgNum + 7; i++){
        cardMedium[jMedium].style.backgroundImage = `url('${picture[i].image} + ?random=${i}')`;
        cardMedium[jMedium].id = picture[i].id;
        cardMedium[jMedium].querySelector('.bottom-bar__link-download').id = picture[i].id;
        cardMedium[jMedium].querySelector('.bottom-bar__link-web').textContent = picture[i].hashTag;
        cardMedium[jMedium].querySelector('.bottom-bar__avatar').src = picture[i].avatar;
        InitImg = i;
        jMedium++;
    };

    imgNum = InitImg + 1;

    for(let i = imgNum; i < imgNum + 4; i++){
        cardLarge[jLarge].style.backgroundImage = `url('${picture[i].image} + ?random=${i}')`;
        cardLarge[jLarge].id = picture[i].id;
        cardLarge[jLarge].querySelector('.bottom-bar__link-download').id = picture[i].id;
        cardLarge[jLarge].querySelector('.bottom-bar__link-web').textContent = picture[i].hashTag;
        cardLarge[jLarge].querySelector('.bottom-bar__avatar').src = picture[i].avatar;
        InitImg = i;
        jLarge++;
    };

    imgNum = InitImg + 1;

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
        setTimeout(() => {wasUsedScroll = true}, 1000);
        generateCards();
        showPicture()
    };
}


document.addEventListener('scroll', scrollWindow);
searchForm.addEventListener('input', () => searchPin(searchForm, cardSmall, cardMedium, cardLarge));
document.addEventListener('click', (e) => downloadOnScreen(e)(download, AllCards));