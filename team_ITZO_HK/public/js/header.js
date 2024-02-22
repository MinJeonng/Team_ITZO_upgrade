$('.nav')
    .children('div')
    .children()
    .click(function () {
        if ($(this).text() === '홈') {
            localStorage.setItem('page', 'home_recommand');
        } else if ($(this).text() === '테마별 추천') {
            localStorage.setItem('page', 'theme_recommand');
        } else if ($(this).text() === '지역별 추천') {
            localStorage.setItem('page', 'map_recommand');
        } else if ($(this).text() === '랜덤추천') {
            localStorage.setItem('page', 'random_recommand');
        }
    });
$('.logo-click').click(function () {
    localStorage.setItem('page', 'home_recommand');
});

$(document).ready(function () {
    $('.nav').children().removeClass('seledted');
    if (localStorage.getItem('page') === 'map_recommand') {
        $('.nav').children('div:eq(2)').children().addClass('seledted');
    } else if (localStorage.getItem('page') === 'random_recommand') {
        $('.nav').children('div:eq(3)').children().addClass('seledted');
    } else if (localStorage.getItem('page') === 'theme_recommand') {
        $('.nav').children('div:eq(1)').children().addClass('seledted');
    } else if (localStorage.getItem('page') === 'home_recommand') {
        $('.nav').children('div:eq(0)').children().addClass('seledted');
    }
});
