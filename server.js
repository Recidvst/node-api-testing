var app = require('./app');
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
    console.log('Express server listening on port ' + port);
});
app.get('/test', function (req, res) {
    res.send('test');
    console.log('test');
});
var server = app.listen(port, function() {
console.log('Express server listening on port ' + port);
});