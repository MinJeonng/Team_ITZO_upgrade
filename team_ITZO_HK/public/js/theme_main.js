$(window).bind('pageshow', function () {
    localStorage.setItem('page', 'theme_recommand');
});

$('img').hover(function () {
    $(this).toggleClass('zoom_img');
});
// $('.text').hover(function () {
//     $(this).toggleClass('zoom_text');
// });
// $('.text_list').hover(function () {
//     $(this).toggleClass('zoom_text');
// });
