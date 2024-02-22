import { drawMap, initSetting, resetContainer, part } from './draw_map_recommand.js';

let map;

window.onpageshow = function (event) {
    localStorage.setItem('page', 'map_recommand');
    if (event.persisted) {
        //사파이에서 뒤돌아갔을 떄
    } else if (window.performance && window.performance.navigation.type == 2) {
        // 크롬에서 뒤돌아갔을 때
        map = drawMap(true);
    } else {
        map = drawMap(false);
    }
    if (window.matchMedia('(max-width: 768px)').matches) {
        map.setLevel(10);
    } else {
        map.setLevel(9);
    }
};

window.onresize = function (event) {
    var innerWidth = window.innerWidth;
    innerWidth <= '768' ? mapSizeSmall() : mapSizeBig();
};

$('.reset-map').click(function () {
    $('.page-numbering').addClass('hide');
    $('.content-container').addClass('hide');
    resetContainer();

    setTimeout(() => {
        $('.content-container').removeClass('hide');
        $('.page-numbering').empty();
        initSetting();
        $('.page-numbering').removeClass('hide');
    }, 100);
});

$('.content-container').click(function () {
    const contentName = $(this).children('div:last').children('.content-preview-header').text();
    localStorage.setItem('name', contentName);
    localStorage.setItem('page', 'map_recommand');
    localStorage.setItem('part', part);
    window.location.href = '/map/content';
});

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
