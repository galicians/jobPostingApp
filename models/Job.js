var mongoose = require('mongoose')
var Promise = require("bluebird")

var jobSchema = mongoose.Schema({
	title:{type:String},
	description:{type:String}
});

var jobs = [
		{title:'Maker', description:"A makers builds amazing web apps"},
		{title:'coder', description:"Codeds in all the languages"},
		{title:'debugger', description:"saves you from suicide"},
		{title:'code teacher', description:"helps you to become a maker"}
];

var Job = mongoose.model('Job', jobSchema);

function findJobs(query) {
	return Promise.cast(mongoose.model('Job').find(query).exec())
}

var createJob = Promise.promisify(Job.create, Job);

exports.seedJobs = function() {
	return findJobs({}).then(function(collection) {
		if(collection.length === 0) {
			return Promise.map(jobs, function(job){
				return createJob(job);
			})
		}
	})
}