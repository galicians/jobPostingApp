var bodyParser = require('body-parser')

module.exports = function(db, app) {
	app.use(bodyParser.json());

	app.post('/api/jobs', function(request, response) {
		db.saveJob(request.body);
		response.end();
	})
}