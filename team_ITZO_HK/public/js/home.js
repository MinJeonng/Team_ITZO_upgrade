// 상세정보 페이지
import { places } from './content_object.js';

// 메인슬라이드
$(document).ready(function () {
    let currentIndex = 0;
    let imageSlides = $('.main-slide');
    let textSlides = $('.main-text'); // 텍스트 슬라이드를 위한 jQuery 객체
    let slideCount = imageSlides.length;

    imageSlides.eq(0).addClass('active');
    textSlides.eq(0).addClass('active'); // 첫 번째 이미지 슬라이드와 텍스트 슬라이드 활성화

    function slideShow() {
        imageSlides.eq(currentIndex).removeClass('active');
        textSlides.eq(currentIndex).removeClass('active'); // 현재 이미지와 텍스트 슬라이드 비활성화
        currentIndex = (currentIndex + 1) % slideCount;
        imageSlides.eq(currentIndex).addClass('active');
        textSlides.eq(currentIndex).addClass('active'); // 다음 이미지와 텍스트 슬라이드 활성화
    }
    setInterval(slideShow, 3000); // 3000 = 3초마다 슬라이드가 변경
});

$(window).bind('pageshow', function () {
    localStorage.setItem('page', 'home_recommand');
});
// 함께 떠나는 힐링 테마여행 버튼
//document.addEventListener('DOMContentLoaded', (event) => {
let currentSlideGroup = 0;
let slideGroups = document.getElementsByClassName('theme-slide-group');
if (window.matchMedia('(max-width: 600px)').matches) {
    mobileVer();
} else {
    pcVer();
}

$(window).resize(function () {
    var innerWidth = window.innerWidth;
    if (innerWidth <= '600') {
        mobileVer();
    } else {
        pcVer();
    }
});
function mobileVer() {
    $('#prev').addClass('hidden');
    $('#next').addClass('hidden');
    $('#theme-slide-group2').removeClass('hidden');
}
function pcVer() {
    $('#theme-slide-group2').addClass('hidden');
    $('#prev').addClass('hidden');
    $('#next').removeClass('hidden');
}

const name = document.querySelector('.page-button page-button1');
$('#next').click(function () {
    $('#theme-slide-group1').addClass('hidden');
    $('#theme-slide-group2').removeClass('hidden');
    $('#prev').removeClass('hidden');
    $('#next').addClass('hidden');
});
$('#prev').click(function () {
    $('#theme-slide-group2').addClass('hidden');
    $('#theme-slide-group1').removeClass('hidden');
    $('#next').removeClass('hidden');
    $('#prev').addClass('hidden');
});

// function next1() {

// }

//});
// 테마 슬라이드
// document.addEventListener('DOMContentLoaded', (event) => {
//     let currentSlideGroup = 0;
//     let slideGroups = document.getElementsByClassName('theme-slide-group');
//     let startX, endX;
//     let isDragging = false;

//     // 모든 그룹을 보이지 않게 설정
//     for (let i = 0; i < slideGroups.length; i++) {
//         slideGroups[i].style.display = 'none';
//     }

//     // 첫 번째 그룹만 보이게 설정
//     slideGroups[currentSlideGroup].style.display = 'flex';

//     function start(e) {
//         isDragging = true;
//         e = 'changedTouches' in e ? e.changedTouches[0] : e;
//         startX = e.pageX;
//     }

//     function end(e) {
//         isDragging = false;
//         e = 'changedTouches' in e ? e.changedTouches[0] : e;
//         endX = e.pageX;
//         if (startX - endX > 50) {
//             changeSlide('next');
//         } else if (startX - endX < -50) {
//             changeSlide('prev');
//         }
//     }

//     window.changeSlide = function (direction) {
//         // 현재 그룹을 보이지 않게 설정
//         slideGroups[currentSlideGroup].style.display = 'none';

//         if (direction === 'next') {
//             currentSlideGroup++;
//             if (currentSlideGroup >= slideGroups.length) {
//                 currentSlideGroup = 0;
//             }
//         } else if (direction === 'prev') {
//             currentSlideGroup--;
//             if (currentSlideGroup < 0) {
//                 currentSlideGroup = slideGroups.length - 1;
//             }
//         }

//         // 다음 그룹을 보이게 설정
//         slideGroups[currentSlideGroup].style.display = 'flex';
//     };

//     for (let i = 0; i < slideGroups.length; i++) {
//         slideGroups[i].addEventListener('mousedown', start);
//         slideGroups[i].addEventListener('mouseup', end);
//         slideGroups[i].addEventListener('touchstart', start);
//         slideGroups[i].addEventListener('touchend', end);
//     }
// });

$('.page-move').click(function () {
    const contentName = $('.active').children('p').text();
    console.log(contentName);
    localStorage.setItem('name', contentName);
    window.location.href = '/';
});

$('.theme-slide').click(function () {
    const contentName = $(this).find('img').attr('alt');
    console.log(contentName);
    localStorage.setItem('name', contentName);
    window.location.href = '/theme';
});

$('.main-slide').click(function () {
    const contentName = $(this).find('img').attr('alt');
    console.log(contentName);
    localStorage.setItem('name', contentName);
    window.location.href = '/content';
});
$('.map-cover').click(function () {
    localStorage.setItem('page', 'map_recommand');
    window.location.href = '/map';
});
