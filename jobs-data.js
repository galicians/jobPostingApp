var mongoose = require("mongoose")
var Promise = require("bluebird")

var Job = mongoose.model('Job')

var jobs = [
		{title:'Maker', description:"A maker, goes to makers academy where builds amazing web apps"},
		{title:'coder', description:"Codeds in all the languages"},
		{title:'debugger', description:"saves you from suicide"},
		{title:'code teacher', description:"helps you to become a maker"}
];

var findJobs = function(query) {
	return Promise.cast(Job.find(query).exec());
}

exports.findJobs = findJobs;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

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