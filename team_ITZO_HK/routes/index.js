const express = require('express');
const controller = require('../controller');
const router = express.Router();

//페이지 열기
router.get('/', controller.main);
router.get('/content', controller.content);

router.get('/map', controller.map);
router.get('/map/content', controller.content);

router.get('/theme', controller.theme);
router.get('/theme/historical', controller.themeHistorical);
router.get('/theme/museum', controller.themeMuseum);
router.get('/theme/palace', controller.themePalace);
router.get('/theme/park', controller.themePark);
router.get('/theme/content', controller.content);

router.get('/random', controller.random);
router.get('/random/keyword', controller.randomKeyword);
router.get('/random/map', controller.randomMap);
router.get('/random/content', controller.content);

module.exports = router;
