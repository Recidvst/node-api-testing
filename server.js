var app = require('./app');
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(port, function() {
console.log('Express server listening on port ' + port);
});