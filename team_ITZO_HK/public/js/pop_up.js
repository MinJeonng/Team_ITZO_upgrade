import { places } from './content_object.js';
import { drawMap } from './draw_map.js';

let part = 0;
let keyword = '';
let map;
let selectedPolygon;

window.onpageshow = function (event) {
    $('#spinner').addClass('hidden');
    let random = localStorage.getItem('random');
    if (random === '지역별 랜덤추천') {
        $('.content_top').text(random);
        $('.keyword-wrap').addClass('hidden');
        $('.map-wrap').removeClass('hidden');
        showMap();
    } else if (random === '키워드별 랜덤추천') {
        $('.content_top').text(random);
        $('.map-wrap').addClass('hidden');
        $('.keyword-wrap').removeClass('hidden');
    }
    secondButtonSetting();
};
window.onbeforeunload = function () {
    $('#spinner').addClass('hidden');
};

window.addEventListener('pagehide', (event) => {
    $('#spinner').addClass('hidden');
});

window.onresize = function (event) {
    secondButtonSetting();
};

function secondButtonSetting() {
    var innerWidth = window.innerWidth;
    if (innerWidth <= '768' && $('.content_top').text() === '키워드별 랜덤추천') {
        setImgHorizon();
    } else if (innerWidth <= '768' && $('.content_top').text() === '지역별 랜덤추천') {
        mapSizeSmall();
    } else if (innerWidth > '768' && $('.content_top').text() === '키워드별 랜덤추천') {
        setImgVertical();
    } else if (innerWidth > '768' && $('.content_top').text() === '지역별 랜덤추천') {
        mapSizeBig();
    }
}
function setImgVertical() {
    $('.click:eq(1)').text('박물관\n미술관\n기념관');
    $('.random-palace-img').attr('src', '../public/img/random/palace:temple-vertical.jpg');
    $('.random-museum-img').attr('src', '../public/img/random/museum-vertical.jpg');
    $('.random-historical-img').attr('src', '../public/img/random/historical_landmark-vertical.jpg');
    $('.random-park-img').attr('src', '../public/img/random/park-vertical.jpg');
}
function setImgHorizon() {
    $('.click:eq(1)').text(`박물관/미술관/기념관`);
    $('.random-palace-img').attr('src', '../public/img/random/palace:temple-horizontal.jpg');
    $('.random-museum-img').attr('src', '../public/img/random/museum-horizontal.jpg');
    $('.random-historical-img').attr('src', '../public/img/random/historical_landmark-horizontal.jpg');
    $('.random-park-img').attr('src', '../public/img/random/park-horizontal.jpg');
}
$('.click').click(function () {
    keyword = $(this).text().replaceAll('\n', '/');
    $('#spinner').removeClass('hidden');
    setTimeout(() => {
        $('#spinner').addClass('hidden');
        showKeywords();
    }, 1500);
});

function showMap() {
    map = drawMap();
}
export function settingEvent(area, map, polygon, customOverlay, polygons) {
    kakao.maps.event.addListener(polygon, 'mouseover', function (mouseEvent) {
        if (selectedPolygon !== polygon) {
            polygon.setOptions({ fillColor: '#09f' });
        }
    });

    kakao.maps.event.addListener(polygon, 'mouseout', function (mouseEvent) {
        if (selectedPolygon !== polygon) {
            polygon.setOptions({ fillColor: '#fff' });
        }
    });

    kakao.maps.event.addListener(polygon, 'mousedown', function (mouseEvent) {
        for (let i = 0; i < polygons.length; i++) {
            polygons[i].setOptions({ fillColor: '#fff' });
        }
    });
    kakao.maps.event.addListener(polygon, 'mouseup', function (mouseEvent) {
        polygon.setOptions({ fillColor: '#09f' });
        selectedPolygon = polygon;
        $('#spinner').removeClass('hidden');
        setTimeout(() => {
            $('#spinner').addClass('hidden');
            clickEvent(area);
        }, 1500);
    });
    kakao.maps.event.addListener(polygon, 'touchend', function (mouseEvent) {
        polygon.setOptions({ fillColor: '#09f' });
        polygon.setMap(map);

        $('#spinner').removeClass('hidden');
        setTimeout(() => {
            clickEvent(area);
        }, 1500);
    });

    kakao.maps.event.addListener(polygon, 'touchstart', function (mouseEvent) {
        for (let i = 0; i < polygons.length; i++) {
            polygons[i].setOptions({ fillColor: '#fff' });
        }
    });
}
function clickEvent(area) {
    console.log(area.name);
    if (area.name === 'part1') {
        part = 1;
    } else if (area.name === 'part2') {
        part = 2;
    } else if (area.name === 'part3') {
        part = 3;
    } else if (area.name === 'part4') {
        part = 4;
    }

    const partObject = Object.values(places).filter((e) => e.part === part);
    const rand = Math.floor(Math.random() * partObject.length);

    const contentName = partObject[rand].name;
    localStorage.setItem('name', contentName);
    window.location.href = '/random/content';
}
function showKeywords() {
    const tagObject = Object.values(places).filter((e) => e.tag.includes(keyword));
    const rand = Math.floor(Math.random() * tagObject.length);

    const contentName = tagObject[rand].name;
    localStorage.setItem('name', contentName);
    localStorage.setItem('page', 'random_recommand');
    window.location.href = '/random/content';

    console.log($('keyword-wrap').children('button:eq(1)'));
}

function mapSizeSmall() {
    map.relayout();
    map.setCenter(new kakao.maps.LatLng(37.566826, 126.9786567));
    map.setLevel(10, { animate: true });
}
function mapSizeBig() {
    map.relayout();
    map.setCenter(new kakao.maps.LatLng(37.566826, 126.9786567));
    map.setLevel(9, { animate: true });
}
