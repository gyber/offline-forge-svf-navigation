'use strict'

const express = require('express');
const path = require('path');
const config = require('config-lite')(__dirname);
const pkg = require('./package')

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('viewer', {
        "title": "default",
        "pierNumber": "default"
    })
});

app.get('/:pierNumber', function (req, res) {
    //let pierNumber = req.params.pierNumber;
    //res.send(req.params.pierNumber);
    res.render('viewer', {
        "title": req.params.pierNumber,
        "pierNumber": req.params.pierNumber
    });
});

app.listen(config.port, function () {
    console.log(`${pkg.name} listening on port ${config.port}`);
});
