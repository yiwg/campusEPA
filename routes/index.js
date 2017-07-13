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
  res.render('index2', { title: 'Express' });
});
router.get('/iscroll', function(req, res, next) {
  logger.info("进入iscroll......")
  res.render('iscroll', { title: 'Express' });
});
router.get('/portal5', function(req, res, next) {
  logger.info("进入首页......")
  res.render('index5', { title: 'Express' });
});
router.get('/portal6', function(req, res, next) {
  logger.info("进入首页......")
  res.render('index6', { title: 'Express' });
});
router.get('/portal7', function(req, res, next) {
  logger.info("进入首页......")
  res.render('index7', { title: 'Express' });
});
module.exports = router;

