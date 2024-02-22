exports.main = (req, res) => {
    res.render('home');
};
exports.map = (req, res) => {
    res.render('map_recommand');
};
exports.content = (req, res) => {
    res.render('show_content');
};
exports.theme = (req, res) => {
    res.render('theme_main');
};
exports.themeHistorical = (req, res) => {
    res.render('theme_historical_place_hashtag');
};
exports.themeMuseum = (req, res) => {
    res.render('theme_museum_hashtag');
};
exports.themePalace = (req, res) => {
    res.render('theme_palace_hashtag');
};
exports.themePark = (req, res) => {
    res.render('theme_park_hashtag');
};
exports.random = (req, res) => {
    res.render('random_recommand');
};
exports.randomKeyword = (req, res) => {
    res.render('pop_up');
};
exports.randomMap = (req, res) => {
    res.render('pop_up');
};
