var express = require('express');
var router = express.Router();
var config=require("../config")
var staticSell=0;
var log4js = require('log4js');
var logger = log4js.getLogger('normal');
logger.setLevel('DEBUG');
/* GET home page. */
router.get('/portal2', function(req, res, next) {
  logger.info("进入首页......")
  res.render('index-2', { title: 'Express' });
});
router.get('/portal2', function(req, res, next) {
  logger.info("进入首页2......")
  res.render('index-2', { title: 'Express' });
});

module.exports = router;

