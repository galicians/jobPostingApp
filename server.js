var express = require('express');
var jobModel = require('./models/Job');
var jobsData = require('./jobs-data.js');
var bodyParser = require('body-parser');

var app = express()

// require("./jobs-service.js")(jobsData, app)

var port = process.env.PORT || 5000

app.use(bodyParser.json());



app.set('views', __dirname)
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res) {
	jobsData.findJobs().then(function(collection) {
		res.send(collection)
	})
})

app.post('/api/jobs', function(request, response) {
	jobsData.saveJob(request.body);
	response.end();
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