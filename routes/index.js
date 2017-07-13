var express = require('express');
var router = express.Router();
var config=require("../config")
var staticSell=0;
var log4js = require('log4js');
var logger = log4js.getLogger('normal');
logger.setLevel('DEBUG');
/* GET home page. */
router.get('/portal', function(req, res, next) {
  logger.debug("进入首页......")
  res.render('index', { title: 'Express' });
});

module.exports = router;

