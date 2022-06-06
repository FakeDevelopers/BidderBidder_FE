const path = require('path');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (_req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;
