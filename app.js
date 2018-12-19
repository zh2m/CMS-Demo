const express = require('express');
const hero = require('./server/router/hero.js')
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
//这一句是连接上数据库
//这里的myDbs是数据库的名字，不是表的名字
var db = mongoose.connect('mongodb://localhost:27017/myDbs');
console.log(hero)
const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
app.use(bodyParser.urlencoded({ extended: false,limit:'3072kb'}));
app.use('/api', hero)
app.listen(3000, () => {
    console.log('app listening on port 3000.')
})