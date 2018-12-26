const express = require('express');
const pool = require('../pool.js');

var router = express.Router();

router.post('/AjaxLogin', (req, res) => {
    var obj = req.body;
    var $uname = obj.Uname;
    var $uphone = obj.uphone;
    console.log(obj);
    console.log($uname);
    console.log($uphone);
    pool.query('select * from userlist where Uname=? and uphone=?', [$uname, $uphone], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send("登录成功");
            console.log(11);
        } else {
            res.send("登录失败");
            console.log(22);
        }
    });
});
router.get('/AjaxFrom', (req, res) => {
    var obj = req.query;
    var $uname = obj.Uname;
    var $uphone = obj.uphone;
    console.log(obj);
    console.log($uname);
    console.log($uphone);
    pool.query('select * from userlist where Uname=? and uphone=?', [$uname, $uphone], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            console.log(11);
            res.writeHead(200,{
                location:'http://www.baidu.com'
            });
        } else {
            res.send("登录失败");
            console.log(22);
        }
    });
});

module.exports = router;