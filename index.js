var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    res.render('home.html');
});
app.get('/home', function(req, res) {
    res.render('home.html');
});
app.get('/login', function(req, res) {
    res.render('login.html');
});
app.get('/register', function(req, res) {
    res.render('register.html');
});

app.listen(9000, function() {
    console.log('Server ready on port 9000');
});
