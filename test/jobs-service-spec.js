var express = require("express");
var expect = require("chai").expect;
var request = require('supertest');
var app = express();
var db = {
	saveJob: function(job) {
		dataSavedJob = job;
	}
};
var jobService = require("../jobs-service")(db, app)
var dataSavedJob;

describe("save jobs", function() {

	it("should validate that title is greater than 4 characters");
	it("should validate that title is less than 40 characters");
	it("shuld validate that description is greater than 4 characters");
	it("should validate that description is less than 250 characters");

	
	var newJob = {title:'Maker', description:"A maker, goes to makers academy where builds amazing web apps"};

	it("should pass the job to the database save", function(done) {
		request(app).post('/api/jobs').send(newJob).end(function(error, response) {
			expect(dataSavedJob).to.deep.equal(newJob);
			done();
		})
		
	});
	it("should return a status of 200 to the front end if the database saved");
	it("should return a job with an id");
	it("should return an error if the database failed");

});