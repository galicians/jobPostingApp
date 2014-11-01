var express = require('express');
var jobModel = require('./models/Job');
var jobsData = require('./jobs-data.js');

var port = process.env.PORT || 5000

var app = express();

app.set('views', __dirname)
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(request, response) {
	jobsData.findJobs().then(function(collection) {
		response.send(collection)
	})
})

app.get('*', function(request, response) {
	response.render('index');
});

// mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://galicians:galicians@ds049160.mongolab.com:49160/makersjobfinder')
.then(function() {
	console.log("connected to mongodb successfully!")
	jobsData.seedJobs();
})


app.listen(port);