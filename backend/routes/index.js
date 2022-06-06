const path = require('path');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname,'../public/index.html'))
});

module.exports = router;
