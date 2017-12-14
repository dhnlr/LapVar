var express = require('express');
var router = express.Router();
var foodAnalyzeController = require('../controllers/foodAnalyzeController')
var photoRecognitionController = require('../controllers/photoRecognitionController')

/* GET users listing. */
router.post('/', photoRecognitionController.search, foodAnalyzeController.search);

module.exports = router;