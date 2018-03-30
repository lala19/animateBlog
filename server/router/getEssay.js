var multer = require("multer");
var express = require('express');
var router = express.Router();
var querystring = require('querystring');//字符串转对象
var mysql = require('mysql');
var createConnection = require("./../createConnection.js");
router.get('/', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    res.append("Access-Control-Allow-Credentials", "true");
    // console.log("images/userimg/" + strSrc);
    createConnection('select * from essayinfo', function (results) {
        res.json({
            results
        })
    })
});
module.exports = router;