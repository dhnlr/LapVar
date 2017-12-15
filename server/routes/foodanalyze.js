var express = require('express');
var router = express.Router();
var foodAnalyzeController = require('../controllers/foodAnalyzeController')
var photoRecognitionController = require('../controllers/photoRecognitionController')
const authFB = require('../middelware/checkLogin')

/* GET users listing. */
router.post('/', photoRecognitionController.search);

module.exports = router;