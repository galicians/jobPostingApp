var mongoose = require('mongoose')

var jobSchema = mongoose.Schema({
	title:{type:String},
	description:{type:String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function() {
	Job.find({}).exec(function(error, collection){
		if(collection.length === 0) {
			Job.create({title:'Maker', description:"A makers builds amazing web apps"})
			Job.create({title:'coder', description:"Codeds in all the languages"})
			Job.create({title:'debugger', description:"saves you from suicide"})
			Job.create({title:'code teacher', description:"helps you to become a maker"})
		}
	})
}