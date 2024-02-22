//함수를 전역객체에 직접 할당
//html에서 src가 module이므로.
window.goRelation2 = function () {
    let selectElement = document.getElementById('relation2');
    let selectedOption = selectElement.value;

    if (selectedOption) {
        window.open(selectedOption, '_blank');
    }
    console.log(selectedOption);
};
window.goRelation = function () {
    let selectElement = document.getElementById('relation');
    let selectedOption = selectElement.value;

    if (selectedOption) {
        window.open(selectedOption, '_blank');
    }
};

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.btn_top_move').fadeIn();
    } else {
        $('.btn_top_move').fadeOut();
    }
});
