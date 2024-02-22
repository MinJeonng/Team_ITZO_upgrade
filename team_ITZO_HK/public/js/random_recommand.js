import { places } from './content_object.js';

let innerWidth = window.innerWidth;
if (innerWidth <= '768') {
    setImgHorizon();
} else {
    setImgVertical();
}
window.onresize = function (event) {
    let innerWidth = window.innerWidth;
    if (innerWidth <= '768') {
        setImgHorizon();
    } else {
        setImgVertical();
    }
};

function setImgVertical() {
    $('.random-img').attr('src', '../public/img/random/random-vertical.jpg');
    $('.random-map-img').attr('src', '../public/img/random/map-vertical.jpg');
    $('.random-keyword-img').attr('src', '../public/img/random/keyword-vertical.jpg');
}
function setImgHorizon() {
    $('.random-img').attr('src', '../public/img/random/random-horizontal.jpg');
    $('.random-map-img').attr('src', '../public/img/random/map-horizontal.jpg');
    $('.random-keyword-img').attr('src', '../public/img/random/keyword-horizontal.jpg');
}

$('.click').click(function () {
    if ($(this).text() === '랜덤추천') {
        const rand = Math.floor(Math.random() * 52);
        const contentName = places[Object.keys(places)[rand]].name;
        localStorage.setItem('name', contentName);
        localStorage.setItem('page', 'random_recommand');
        window.location.href = '/random/content';
    } else if ($(this).text() === '지역별 랜덤추천') {
        localStorage.setItem('random', $(this).text());
        window.location.href = 'random/map';
    } else if ($(this).text() === '키워드별 랜덤추천') {
        localStorage.setItem('random', $(this).text());
        window.location.href = 'random/keyword';
    }
});
$(window).bind('pageshow', function () {
    localStorage.setItem('page', 'random_recommand');
});
