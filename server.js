var express = require('express');
var mongoose = require('mongoose')
var app = express();
var jobModel = require('./models/Job');


var port = process.env.PORT || 5000


app.set('views', __dirname)
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(request, response) {
	mongoose.model('Job').find({}).exec(function(error, collection) {
		response.send(collection)
	})
})



app.get('*', function(request, response) {
	response.render('index');
});

// mongoose.connect('mongodb://localhost/jobfinder');
mongoose.connect('mongodb://galicians:galicians@ds049160.mongolab.com:49160/makersjobfinder');

var con = mongoose.connection;

con.once('open', function() {
	console.log("connected to mongodb successfully!")
	jobModel.seedJobs();
})

app.listen(port);