var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.end("hello to express test1")
});

module.exports = router;
