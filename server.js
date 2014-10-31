var express = require('express');

var app = express();

app.set('views', __dirname)
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/bower_components'));

app.get('*', function(request, response) {
	response.render('index');
});

app.listen(5000);