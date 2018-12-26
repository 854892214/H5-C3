//巨人影城
const express = require('express');
const bodyParse = require('body-parser');
const mysql = require('mysql');
const userRouter = require('./router/user.js');
const AjaxRouter=require('./router/Ajax.js');

var server = express();
server.listen(3000);
server.use(bodyParse.urlencoded({
    extended: false
}));
server.use(express.static('public'));
//路由挂载
server.use('/user', userRouter);
server.use('/Ajax',AjaxRouter)