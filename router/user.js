const express = require('express');
const mysql = require('mysql');

var router = express.Router();

var qool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'jr',
    connectionLimit: 20
});

router.post('/add', (req, res) => {
        var obj = req.body;
        var $uname = obj.Uname;
        var $phone = obj.uphone;
        if (!$uname) {
            res.send({ code: 401, msg: "uname is null !" });
            return;
        }
        if (!$phone) {
            res.send({ code: 402, msg: "phone is null !" });
            return;
        }
        qool.query('insert into userlist set ?', [obj], (err, result) => {
            if (err) throw err;
            res.send({ code: 200, msg: 'add success' });
        });
});

module.exports = router;