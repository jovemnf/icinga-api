/* eslint-disable no-undef */
let chai = require("chai");
let expect = chai.expect;

describe("ICINGA::HOST", function() {
 
	it("Check if hosts is OK", function() {
		let Icinga = require("./src/icinga");
		let icinga = new Icinga("","","");
		expect(typeof icinga.hosts).to.equal("object");
	});
 
});

describe("ICINGA::SERVICE", function() {
    
	it("Check if services is OK", function() {
		let Icinga = require("./src/icinga");
		let icinga = new Icinga("","","");
		expect(typeof icinga.services).to.equal("object");
	});
    
	it("Check if services::get is OK", function() {
		let Icinga = require("./src/icinga");
		let icinga = new Icinga("","","");
		expect(typeof icinga.services.get()).to.equal("object");
	});
    
});