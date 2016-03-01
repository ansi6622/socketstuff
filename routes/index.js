var express = require('express');
var router = express.Router();


router.get('test', function(req,res,next){
  res.json({text: 'test'});
})



//sends index.html and needs to be at the bottom of this file
router.get('*', function(req, res, next) {
 res.sendFile('index.html', {
   root: __dirname + '/../public/'
 });
});

module.exports = router;
