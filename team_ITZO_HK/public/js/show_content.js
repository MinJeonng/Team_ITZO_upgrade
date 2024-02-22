import { places } from './content_object.js';
import { latLngs } from './latlng.js';

let innerWidth = window.innerWidth;
let savedMap, savedKey;

if (innerWidth <= '768') {
    $('.detail-explanation-more-btn').removeClass('hidden');
    $('#map').addClass('hidden');
} else {
    $('.detail-explanation-more-btn').addClass('hidden');
    $('#map').removeClass('hidden');
}

window.onresize = function (event) {
    let innerWidth = window.innerWidth;
    if (innerWidth <= '768') {
        $('.detail-explanation-more-btn').removeClass('hidden');
        $('#map').addClass('hidden');
        // savedMap.relayout();
        // savedMap.setCenter(latLngs[savedKey].latlng);
    } else {
        $('.detail-explanation-more-btn').addClass('hidden');
        $('#map').removeClass('hidden');
        savedMap.relayout();
        savedMap.setCenter(latLngs[savedKey].latlng);
    }
};

$(document).ready(function () {
    if (localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
        for (let key in places) {
            if (places[key].name === name) {
                $('.title').text(places[key].name);
                $('.title-address').text(places[key].address);
                $('.img-section').children().attr('src', places[key].img);
                $('.detail-explanation').text(places[key].detail);
                $('.homepage').text(places[key].homepage);
                $('.tel').text(places[key].tel);
                $('.address').text(places[key].address);
                $('.op-time').text(places[key].opTime);
                $('.parking').text(places[key].parking);
                $('.price').text(places[key].price);
                $('copyright').text(`이미지 출처 : ${places[key].copyright}`);
                drawMap(key);
            }
        }
    }
});
function drawMap(key) {
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: latLngs[key].latlng, // 지도의 중심좌표
            level: 6, // 지도의 확대 레벨
        };
    let map = new kakao.maps.Map(mapContainer, mapOption);
    savedMap = map;
    savedKey = key;
    //let imageSrc = '../img/icon/location-dot-solid.svg';
    //let imageSize = new kakao.maps.Size(15, 20);

    // 마커 이미지를 생성합니다
    //let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: latLngs[key].latlng, // 마커를 표시할 위치
        // image: markerImage, // 마커 이미지
    });
    marker.setClickable(false);
    map.setDraggable(false); //지도 이동 막기
    map.setZoomable(false); //지도 확대축소 막기
    map.setKeyboardShortcuts(false); // 키보드 방향키(+,-)로 확대 축소 막기
}
