var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.end("hello user")
   next();
});
router.get('/youht', function(req, res, next) {
   res.end("hello youht")
   next();
});

module.exports = router;
