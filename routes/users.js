var express = require('express');
var router = express.Router();

let request = require('request');
let cheerio = require('cheerio');
/* GET users listing. */
router.get('/', function(req, res, next) {
  request('http://www.jikexueyuan.com/',function(error,response,body){
     if(error && response.statusCode == 200){
       $ = cheerio.load(body);
       res.send($)
     }
  })
});

module.exports = router;
