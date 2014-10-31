var express = require('express');

var app = express();

var port = process.env.PORT || 5000;


app.set('views', __dirname)
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('*', function(request, response) {
	response.render('index');
});

app.listen(port);