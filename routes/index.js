var express = require('express');
var router = express.Router();

const Mongolass=require('mongolass');
const mongolass = new Mongolass('mongodb://localhost:27017/local');  

const cronJob = require('cron').CronJob;

const Users = mongolass.model('users');

let index=0;
new cronJob('*/30 * * * * *',()=>{
    index++;
    Users
    .insertOne({name:`index${index}`,age:index})
    .exec()
    .then(()=>{
      console.log();
    })
},null,true,'Asia/Chongqing');

/* GET home page. */
router.get('/', function(req, res, next) {
  Users
  .find()
  .select({ name: 1, age: 1 })
  .sort({ age: -1 })
  .exec()
  .then((data)=>{
    console.log(data);
    res.render('index', { title: data[1].name})
  })
  .catch(console.error);
});

module.exports = router;
